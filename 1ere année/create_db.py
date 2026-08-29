import sqlite3
import json
import csv
con = sqlite3.connect("flash.db")

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
    
chapitres_user1 = {}
chapitres_user2 = {}

with open("Chapitre.csv", newline="", encoding="utf-8") as fichier:

    lecteur = csv.DictReader(fichier)

    for ligne in lecteur:

        cur.execute("""
            INSERT INTO Chapitre (nom_chap, id_matiere, id_utilisateur)
            VALUES (?, ?, ?)
        """, (
            ligne["nom_chap"],
            ligne["id_matiere"],
            1
        ))
        
        chapitres_user1[int(ligne["id_chap"])] = cur.lastrowid
        
with open("Chapitre.csv", newline="", encoding="utf-8") as fichier:

    lecteur = csv.DictReader(fichier)

    for ligne in lecteur :
        
        cur.execute("""
            INSERT INTO Chapitre (nom_chap, id_matiere, id_utilisateur)
            VALUES (?, ?, ?)
        """, (
            ligne["nom_chap"],
            ligne["id_matiere"],
            2
        ))
        
        chapitres_user2[int(ligne["id_chap"])] = cur.lastrowid

with open("Carte.csv", newline="", encoding="utf-8") as fichier:

    lecteur = csv.DictReader(fichier)
        
    for ligne in lecteur:
        
        reponse = ligne["reponse"]
        image = ligne["image"]

        if reponse.lower().endswith(".png"):
            image = reponse
            reponse = ""

        cur.execute("""
            INSERT INTO Carte (id_chap, question, reponse, image, interval, ease, next_review, id_utilisateur)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        """, (
            chapitres_user1[int(ligne["id_chap"])],
            ligne["question"],
            reponse,
            image,
            0,
            2.5,
            0,
            1
        ))
            
with open("Carte.csv", newline="", encoding="utf-8") as fichier:

    lecteur = csv.DictReader(fichier)
    
    for ligne in lecteur :
        reponse = ligne["reponse"]
        image = ligne["image"]

        if reponse.lower().endswith(".png"):
            image = reponse
            reponse = ""
            
        cur.execute("""
            INSERT INTO Carte (id_chap, question, reponse,image, interval, ease, next_review, id_utilisateur)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        """, (
            chapitres_user2[int(ligne["id_chap"])],
            ligne["question"],
            reponse,
            image,
            0,
            2.5,
            0,
            2
        ))
        
        
con.commit()
con.close()