import sqlite3
import json
import csv
con = sqlite3.connect("flash2.db")

cur = con.cursor()
cur.execute("DROP TABLE IF EXISTS Matiere;")
cur.execute("DROP TABLE IF EXISTS Chapitre;")
cur.execute("DROP TABLE IF EXISTS Carte;")
cur.execute("DROP TABLE IF EXISTS Utilisateur;")

cur.execute("""
CREATE TABLE Matiere (
    id_matiere INTEGER PRIMARY KEY AUTOINCREMENT,
    nom_matiere TEXT
)
""")

cur.execute("""
CREATE TABLE Chapitre (
    id_chap INTEGER PRIMARY KEY AUTOINCREMENT,
    nom_chap TEXT,
    id_matiere INTEGER,
    id_utilisateur INTEGER
)
""")

cur.execute("""
CREATE TABLE Carte (
    id_carte INTEGER PRIMARY KEY AUTOINCREMENT,
    id_chap INTEGER,
    id_utilisateur INTEGER,
    question TEXT,
    reponse TEXT,
    image TEXT,
    interval INTEGER DEFAULT 0,
    ease REAL DEFAULT 2.5,
    next_review INTEGER DEFAULT 0
)
""")

cur.execute('''
CREATE TABLE Utilisateur (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    pseudo VARCHAR(20) NOT NULL UNIQUE
);
''')

with open("Utilisateur.csv", newline = "", encoding = "utf-8") as fichier :
    
    lecteur = csv.DictReader(fichier)
    
    for ligne in lecteur :
        cur.execute("""
            INSERT INTO Utilisateur (id, pseudo)
            VALUES (?, ?)
        """, (
            ligne["id"],
            ligne["pseudo"]))
        
with open("Matiere.csv", newline="", encoding="utf-8") as fichier:

    lecteur = csv.DictReader(fichier)

    for ligne in lecteur :

        cur.execute("""
            INSERT INTO Matiere (id_matiere, nom_matiere)
            VALUES (?, ?)
        """, (
            ligne["id_matiere"],
            ligne["nom_matiere"]
        ))
    
con.commit()
con.close()