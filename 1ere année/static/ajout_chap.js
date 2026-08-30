let utilisateur = "";

let chemin = `${window.BACKEND_URL}` ;

document.addEventListener("DOMContentLoaded", () => {

    utilisateur = localStorage.getItem("utilisateur");

    const nomCompte = document.querySelector(".nom-compte");
    const selectMatiere = document.getElementById("matiere");
    const formulaire = document.getElementById("form-ajout-chapitre");
    const message = document.getElementById("message-ajout");

    if(utilisateur){
        nomCompte.textContent = utilisateur;
    } 
    else{
        nomCompte.textContent = "Utilisateur";
    }

    async function loadMatieres() {

        try {const res = await fetch(`${chemin}/matieres`);

            const matieres = await res.json();

            matieres.forEach(matiere => {

                const option = document.createElement("option");

                option.value = matiere.id;
                option.textContent = matiere.nom;

                selectMatiere.appendChild(option);

            });

        } catch (err) {

            console.error(err);

            message.textContent ="Erreur lors du chargement des matières.";
        }
    }

    formulaire.addEventListener("submit", async (e) => {

        e.preventDefault();

        const matiereId = selectMatiere.value;

        const nomChapitre = document.getElementById("nom-chapitre").value.trim();

        if (!utilisateur) {
            message.textContent = "Veuillez d'abord sélectionner un utilisateur.";
            return;
        }

        if (!matiereId || !nomChapitre) {
            message.textContent = "Veuillez remplir tous les champs.";
            return;
        }
        try {
            const res = await fetch(`${chemin}/ajouter-chapitre`,
                {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        matiereId: Number(matiereId),
                        nomChapitre: nomChapitre,
                        utilisateur: utilisateur
                    })

                }
            );
            const data = await res.json();

            if (!res.ok) {
                message.textContent = data.detail || "Erreur lors de l'ajout.";
                return;
            }
            message.textContent = "Chapitre ajouté avec succès !";
            document.getElementById("nom-chapitre").value = "";
            selectMatiere.value = "";

        } catch (err) {

            console.error(err);
            message.textContent = "Impossible de contacter le serveur.";
        }
    });
    loadMatieres();

});