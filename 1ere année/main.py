import sqlite3
from fastapi import FastAPI, UploadFile, File, Form, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from fastapi.responses import FileResponse
import os
import shutil
import time
import re

#  python -m uvicorn main:app --reload

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/")
def accueil():
    return FileResponse("static/hub.html")

@app.get("/compte")
def compte():
    return FileResponse("static/compte.html")

@app.get("/modif")
def compte():
    return FileResponse("static/modif.html")

@app.get("/ajout")
def compte():
    return FileResponse("static/ajout.html")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Carte(BaseModel):
    chapitre_id: int
    question: str
    reponse: str
    
class ChapitreAjout(BaseModel):
    matiereId: int
    nomChapitre: str
    utilisateur: str

class Note(BaseModel):
    carteId: int
    note: int

def get_conn():
    conn = sqlite3.connect("flash.db")
    conn.row_factory = sqlite3.Row
    return conn

def nettoyer_nom(nom):
    nom = nom.strip()
    nom = nom.replace(" ", "_")
    nom = re.sub(r'[\\/*?:"<>|]', "", nom)
    return nom

@app.get("/ajout-chapitre")
def ajout_chapitre():
    return FileResponse("static/ajout_chapitre.html")

@app.get("/page")
def ajout_chapitre():
    return FileResponse("static/page.html")

@app.get("/page_lien")
def page_lien():
    return FileResponse("static/annexe.html")

@app.post("/ajouter-chapitre")
async def ajouter_chapitre(data: ChapitreAjout):

    conn = sqlite3.connect("flash.db")
    cursor = conn.cursor()


    # Récupération de l'utilisateur
    cursor.execute(
        """
        SELECT id
        FROM Utilisateur
        WHERE pseudo = ?
        """,
        (data.utilisateur,)
    )

    user = cursor.fetchone()


    if user is None:

        conn.close()

        raise HTTPException(
            status_code=404,
            detail="Utilisateur introuvable"
        )


    id_utilisateur = user[0]


    # Ajout du chapitre
    cursor.execute(
        """
        INSERT INTO Chapitre
        (nom_chap, id_matiere, id_utilisateur)

        VALUES (?, ?, ?)
        """,
        (
            data.nomChapitre,
            data.matiereId,
            id_utilisateur
        )
    )


    conn.commit()

    conn.close()


    return {
        "message": "Chapitre ajouté avec succès"
    }

@app.get("/matieres")
def get_matieres():
    conn = get_conn()
    cur = conn.cursor()

    cur.execute("SELECT id_matiere, nom_matiere FROM Matiere")
    rows = cur.fetchall()

    conn.close()

    return [{"id": r[0], "nom": r[1]} for r in rows]

@app.get("/chapitres/{id_matiere}")
def get_chapitres(id_matiere: int, utilisateur: str):

    conn = get_conn()
    cur = conn.cursor()

    cur.execute("""
        SELECT id
        FROM Utilisateur
        WHERE pseudo = ?
    """, (utilisateur,))

    user = cur.fetchone()

    if user is None:
        conn.close()
        raise HTTPException(status_code=404, detail="Utilisateur introuvable")

    id_utilisateur = user["id"]
    
    cur.execute("""
        SELECT id_chap, nom_chap
        FROM Chapitre
        WHERE id_matiere = ?
          AND id_utilisateur = ?
    """, (id_matiere, id_utilisateur))

    rows = cur.fetchall()
    conn.close()

    return [{"id": r["id_chap"], "nom": r["nom_chap"]} for r in rows]

@app.get("/cartes/{chapitre_id}")
def get_cartes(chapitre_id: int,utilisateur : str = Query(...)):

    conn = get_conn()
    cur = conn.cursor()
    
    if utilisateur == "Ninnog" :
        utilisateur = 1
    else :
        utilisateur = 2
        

    cur.execute("""
        SELECT c.id_carte, c.question, c.reponse, c.image
        FROM Carte as c
        JOIN Utilisateur as u
            ON c.id_utilisateur = u.id
        WHERE c.id_chap = ?
          AND c.id_utilisateur = ?
        ORDER BY c.id_carte DESC
    """, (chapitre_id,utilisateur))
        
    rows = cur.fetchall()
    conn.close()

    return [{
            "id": row["id_carte"],
            "question": row["question"] if row["question"] else "(sans question)",
            "reponse": row["reponse"] if row["reponse"] else "",
            "image": row["image"] if row["image"] else ""
        }for row in rows]

@app.post("/ajouter-carte")
async def ajouter_carte(
    matiere_id: int = Form(...),
    chapitre_id: int = Form(...),
    question: str = Form(...),
    reponse: str | None = Form(None),
    utilisateur: str = Form(...),
    image: UploadFile | None = File(None)
):

    if (not reponse or reponse.strip() == "") and image is None:
        raise HTTPException(
            status_code=400,
            detail="Vous devez saisir une réponse ou une image."
        )

    conn = get_conn()
    cur = conn.cursor()

    cur.execute(
        "SELECT id FROM Utilisateur WHERE pseudo = ?",
        (utilisateur,)
    )

    user = cur.fetchone()

    if user is None:
        conn.close()
        raise HTTPException(status_code=404, detail="Utilisateur introuvable")

    id_utilisateur = user["id"]

    cur.execute("""
        SELECT m.nom_matiere, c.nom_chap
        FROM Chapitre c
        JOIN Matiere m ON c.id_matiere = m.id_matiere
        WHERE c.id_chap = ?
    """, (chapitre_id,))

    row = cur.fetchone()

    if row is None:
        conn.close()
        raise HTTPException(status_code=404, detail="Chapitre introuvable")

    nom_matiere = nettoyer_nom(row["nom_matiere"])
    nom_chapitre = nettoyer_nom(row["nom_chap"])

    image_path = ""

    if image is not None and image.filename != "":

        dossier = os.path.join("static", "images", nom_matiere, nom_chapitre)
        os.makedirs(dossier, exist_ok=True)

        extension = image.filename.split(".")[-1]
        filename = f"{int(time.time())}.{extension}"

        chemin_complet = os.path.join(dossier, filename)

        with open(chemin_complet, "wb") as buffer:
            shutil.copyfileobj(image.file, buffer)

        image_path = f"{nom_matiere}/{nom_chapitre}/{filename}"

    cur.execute("""
        INSERT INTO Carte (
            id_chap,
            id_utilisateur,
            question,
            reponse,
            image
        )
        VALUES (?, ?, ?, ?, ?)
    """, (
        chapitre_id,
        id_utilisateur,
        question,
        reponse if reponse else "",
        image_path
    ))

    conn.commit()
    conn.close()

    return {"status": "ok"}

@app.post("/note-carte")
def note_carte(data: Note):

    try:
        carte_id = int(data.carteId)
        note = int(data.note)
    except:
        raise HTTPException(status_code=400, detail="Invalid data")

    conn = get_conn()
    cur = conn.cursor()

    cur.execute("""
        SELECT interval, ease
        FROM Carte
        WHERE id_carte = ?
    """, (carte_id,))

    row = cur.fetchone()

    if not row:
        conn.close()
        raise HTTPException(status_code=404, detail="Card not found")

    interval, ease = row

    if note < 3:
        interval = 1
    else:
        if interval == 0:
            interval = 1
        else:
            interval = max(1, int(interval * ease))

    ease = ease + (0.1 - (5 - note) * (0.08 + (5 - note) * 0.02))
    ease = max(1.3, ease)

    next_review = int(time.time()) + interval * 86400

    cur.execute("""
        UPDATE Carte
        SET interval = ?, ease = ?, next_review = ?
        WHERE id_carte = ?
    """, (interval, ease, next_review, carte_id))

    conn.commit()
    conn.close()

    return {
        "status": "ok",
        "interval": interval,
        "ease": ease,
        "next_review": next_review
    }

@app.get("/carte/{carte_id}")
def get_carte(carte_id: int):

    conn = get_conn()
    cur = conn.cursor()

    cur.execute("""
        SELECT id_carte, question, reponse, image
        FROM Carte
        WHERE id_carte = ?
    """, (carte_id,))

    row = cur.fetchone()

    conn.close()

    if row is None:
        raise HTTPException(status_code=404)

    return {
        "id": row["id_carte"],
        "question": row["question"],
        "reponse": row["reponse"],
        "image": row["image"]
    }

@app.post("/update-carte")
async def update_carte(
    carte_id: int = Form(...),
    question: str = Form(...),
    reponse: str | None = Form(None),
    image: UploadFile | None = File(None)
):

    conn = get_conn()
    cur = conn.cursor()

    reponse = reponse or ""

    if image is not None and image.filename != "":

        cur.execute("""
            SELECT m.nom_matiere, c.nom_chap
            FROM Carte ca
            JOIN Chapitre c ON ca.id_chap = c.id_chap
            JOIN Matiere m ON c.id_matiere = m.id_matiere
            WHERE ca.id_carte = ?
        """, (carte_id,))

        row = cur.fetchone()

        if row is None:
            conn.close()
            raise HTTPException(status_code=404, detail="Carte introuvable")

        nom_matiere = nettoyer_nom(row["nom_matiere"])
        nom_chapitre = nettoyer_nom(row["nom_chap"])

        dossier = os.path.join("static","images", nom_matiere, nom_chapitre)
        os.makedirs(dossier, exist_ok=True)

        extension = image.filename.split(".")[-1]
        filename = f"{int(time.time())}.{extension}"

        chemin_complet = os.path.join(dossier, filename)

        with open(chemin_complet, "wb") as buffer:
            shutil.copyfileobj(image.file, buffer)

        image_path = f"{nom_matiere}/{nom_chapitre}/{filename}"

        cur.execute("""
            UPDATE Carte
            SET question = ?, reponse = ?, image = ?
            WHERE id_carte = ?
        """, (
            question,
            reponse,
            image_path,
            carte_id
        ))

    else:

        cur.execute("""
            UPDATE Carte
            SET question = ?, reponse = ?
            WHERE id_carte = ?
        """, (
            question,
            reponse,
            carte_id
        ))

    conn.commit()
    conn.close()

    return {"status": "ok"}

@app.post("/supprimer-carte")
def supprimer_carte(carte_id: int = Form(...)):

    conn = get_conn()
    cur = conn.cursor()

    cur.execute("""
        SELECT image
        FROM Carte
        WHERE id_carte = ?
    """, (carte_id,))

    row = cur.fetchone()

    if row is None:
        conn.close()
        raise HTTPException(status_code=404, detail="Carte introuvable")

    if row["image"]:

        chemin = os.path.join("static","images", row["image"])

        if os.path.exists(chemin):
            os.remove(chemin)

    cur.execute("""
        DELETE FROM Carte
        WHERE id_carte = ?
    """, (carte_id,))

    conn.commit()
    conn.close()

    return {"status":"ok"}

@app.get("/statistiques")
def statistiques(utilisateur: str):

    conn = get_conn()
    cur = conn.cursor()
    
    cur.execute("""
        SELECT id
        FROM Utilisateur
        WHERE pseudo = ?
    """, (utilisateur,))

    user = cur.fetchone()

    if user is None:
        conn.close()
        raise HTTPException(status_code=404, detail="Utilisateur introuvable")

    id_user = user["id"]
    maintenant = int(time.time())

    cur.execute("""
        SELECT
            m.id_matiere,
            m.nom_matiere,

            COUNT(c.id_carte) AS total,

            SUM(CASE
                WHEN c.interval = 0 THEN 1
                ELSE 0
            END) AS nouvelles,

            SUM(CASE
                WHEN c.interval >= 1
                 AND c.interval < 7 THEN 1
                ELSE 0
            END) AS apprentissage,

            SUM(CASE
                WHEN c.interval >= 7
                 AND c.interval < 30 THEN 1
                ELSE 0
            END) AS consolidation,

            SUM(CASE
                WHEN c.interval >= 30 THEN 1
                ELSE 0
            END) AS maitrisees,

            SUM(CASE
                WHEN c.next_review <= ? THEN 1
                ELSE 0
            END) AS revoir

        FROM Matiere m

        JOIN Chapitre ch
            ON m.id_matiere = ch.id_matiere

        LEFT JOIN Carte c
            ON c.id_chap = ch.id_chap
           AND c.id_utilisateur = ?

        WHERE ch.id_utilisateur = ?

        GROUP BY m.id_matiere

        ORDER BY m.nom_matiere
    """, (maintenant, id_user, id_user))

    matieres = []

    for mat in cur.fetchall():

        total = mat["total"] or 0
        nouvelles = mat["nouvelles"] or 0
        apprentissage = mat["apprentissage"] or 0
        consolidation = mat["consolidation"] or 0
        maitrisees = mat["maitrisees"] or 0
        revoir = mat["revoir"] or 0

        progression = 0

        if total > 0:
            progression = round(maitrisees / total * 100)

        cur.execute("""
            SELECT
                ch.nom_chap,

                COUNT(c.id_carte) AS total,

                SUM(CASE
                    WHEN c.interval = 0 THEN 1
                    ELSE 0
                END) AS nouvelles,

                SUM(CASE
                    WHEN c.interval >= 1
                     AND c.interval < 7 THEN 1
                    ELSE 0
                END) AS apprentissage,

                SUM(CASE
                    WHEN c.interval >= 7
                     AND c.interval < 30 THEN 1
                    ELSE 0
                END) AS consolidation,

                SUM(CASE
                    WHEN c.interval >= 30 THEN 1
                    ELSE 0
                END) AS maitrisees,

                SUM(CASE
                    WHEN c.next_review <= ? THEN 1
                    ELSE 0
                END) AS revoir

            FROM Chapitre ch

            LEFT JOIN Carte c
                ON c.id_chap = ch.id_chap
               AND c.id_utilisateur = ?

            WHERE ch.id_matiere = ?
              AND ch.id_utilisateur = ?
              
        GROUP BY ch.id_chap

        ORDER BY ch.id_chap
        """, (
            maintenant,
            id_user,
            mat["id_matiere"],
            id_user
        ))

        chapitres = []

        for chap in cur.fetchall():

            total_chap = chap["total"] or 0
            nouvelles_chap = chap["nouvelles"] or 0
            apprentissage_chap = chap["apprentissage"] or 0
            consolidation_chap = chap["consolidation"] or 0
            maitrisees_chap = chap["maitrisees"] or 0
            revoir_chap = chap["revoir"] or 0

            progression_chap = 0

            if total_chap > 0:
                progression_chap = round(maitrisees_chap / total_chap * 100)

            chapitres.append({

                "nom": chap["nom_chap"],

                "cartes": total_chap,

                "nouvelles": nouvelles_chap,

                "apprentissage": apprentissage_chap,

                "consolidation": consolidation_chap,

                "maitrisees": maitrisees_chap,

                "revoir": revoir_chap,

                "progression": progression_chap

            })

        matieres.append({

            "nom": mat["nom_matiere"],

            "cartes": total,

            "nouvelles": nouvelles,

            "apprentissage": apprentissage,

            "consolidation": consolidation,

            "maitrisees": maitrisees,

            "revoir": revoir,

            "progression": progression,

            "chapitres": chapitres

        })

    conn.close()

    return {
        "details": matieres
    }