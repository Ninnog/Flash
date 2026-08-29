let cartes = [];
let index = 0;
let carte = null;

let chapitreActuel = null;
let matiereActuelle = null;

let pageActuelle = "matieres";
let backBtn;

let utilisateur = "";
let popupUtilisateur;
let nomCompte;

let chemin = `${window.BACKEND_URL}` ;

function initUtilisateur() {

    // On récupère l'utilisateur déjà enregistré
    const utilisateurEnregistre = localStorage.getItem("utilisateur");

    if (utilisateurEnregistre) {

        // Un utilisateur a déjà été choisi
        utilisateur = utilisateurEnregistre;

        // On affiche son nom
        nomCompte.textContent = utilisateur;

        // Le popup reste fermé
        popupUtilisateur.classList.remove("open");

    } else {

        // Premier lancement : on affiche le popup
        popupUtilisateur.classList.add("open");

    }

}

function afficherCarte() {

    if (!carte) return;

    const question = document.getElementById("carte-question");
    const reponse = document.getElementById("carte-reponse");

    question.textContent = carte.question;

    reponse.innerHTML = "";

    if (carte.reponse && carte.reponse.trim() !== "") {
        const texte = document.createElement("div");
        texte.style.marginBottom = "15px";
        texte.innerHTML = carte.reponse.replaceAll("\n", "<br>");
        reponse.appendChild(texte);
    }

    if (carte.image && carte.image.trim() !== "") {
        const img = document.createElement("img");
        img.src = `/static/images/${carte.image}`;
        img.style.maxWidth = "100%";
        img.style.borderRadius = "10px";
        img.style.marginTop = "10px";
        reponse.appendChild(img);
    }

    reponse.style.display = "none";

    document.getElementById("evaluation").style.display = "none";
}

async function loadCartes(chapitreId) {

    chapitreActuel = chapitreId;

    document.getElementById("page-matieres").style.display = "none";
    document.getElementById("page-chapitres").style.display = "none";
    document.getElementById("page-cartes").style.display = "block";

    pageActuelle = "cartes";
    backBtn.style.display = "block";

    try {
        const res = await fetch(
    `${chemin}/cartes/${chapitreId}?utilisateur=${encodeURIComponent(utilisateur)}`
);
        cartes = await res.json();

        if (!cartes.length) {
            alert("Aucune carte.");
            return;
        }

        cartes.sort(() => Math.random() - 0.5);

        index = 0;
        carte = cartes[index];

        afficherCarte();

    } catch (err) {
        console.error(err);
    }
}

function nextCarte() {
    index++;

    if (index >= cartes.length) {
        index = 0;
        cartes.sort(() => Math.random() - 0.5);
    }

    carte = cartes[index];
    afficherCarte();
}

async function loadMatieres() {

    document.getElementById("page-matieres").style.display = "block";
    document.getElementById("page-chapitres").style.display = "none";
    document.getElementById("page-cartes").style.display = "none";

    pageActuelle = "matieres";
    backBtn.style.display = "none";

    const res = await fetch(`${chemin}/matieres`);
    const matieres = await res.json();

    const container = document.getElementById("liste-matieres");
    container.innerHTML = "";

    matieres.forEach(m => {
        const div = document.createElement("div");
        div.className = "matiere";
        div.textContent = m.nom;
        div.onclick = () => loadChapitres(m.id);
        container.appendChild(div);
    });
}

async function loadChapitres(matiereId) {

    matiereActuelle = matiereId;

    document.getElementById("page-matieres").style.display = "none";
    document.getElementById("page-chapitres").style.display = "block";
    document.getElementById("page-cartes").style.display = "none";

    pageActuelle = "chapitres";
    backBtn.style.display = "block";

    const res = await fetch(
    `${chemin}/chapitres/${matiereId}?utilisateur=${encodeURIComponent(utilisateur)}`
);
    const chapitres = await res.json();

    const container = document.getElementById("liste-chapitres");
    container.innerHTML = "";

    chapitres.forEach(c => {
        const div = document.createElement("div");
        div.className = "chapitre";
        div.textContent = c.nom;
        div.onclick = () => loadCartes(c.id);
        container.appendChild(div);
    });
}

function retour() {
    if (pageActuelle === "cartes") loadChapitres(matiereActuelle);
    else if (pageActuelle === "chapitres") loadMatieres();
}

document.addEventListener("DOMContentLoaded", () => {

    popupUtilisateur = document.getElementById("popup-utilisateur");
    nomCompte = document.querySelector(".nom-compte");

    backBtn = document.getElementById("back-btn");
    backBtn.addEventListener("click", retour);

    document.getElementById("flashcard").addEventListener("click", () => {
        document.getElementById("carte-reponse").style.display = "block";
        document.getElementById("evaluation").style.display = "flex";
    });

    document.getElementById("evaluation").addEventListener("click", async (e) => {

        if (!e.target.classList.contains("eval-btn")) return;

        const note = Number(e.target.dataset.value);

        try {
            await fetch(`${chemin}/note-carte`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    carteId: carte.id,
                    note
                })
            });
        } catch (err) {
            console.error(err);
        }

        nextCarte();
    });

    document.querySelectorAll(".choix-user").forEach(btn => {

    btn.addEventListener("click", () => {

        utilisateur = btn.dataset.user;

        localStorage.setItem("utilisateur", utilisateur);

        nomCompte.textContent = utilisateur;

        popupUtilisateur.classList.remove("open");

        loadMatieres();
    });

});

    document.getElementById("profil-btn").addEventListener("click", () => {
        window.location.href = "compte.html";
    });
    initUtilisateur();

    if (utilisateur) {
        loadMatieres();
    }
});