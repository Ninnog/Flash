const matiereSelect = document.getElementById("nom_mat");
const chapitreSelect = document.getElementById("nom_chap");

const imageInput = document.getElementById("image");
const supprimerImage = document.getElementById("supprimer-image");

const form = document.getElementById("formulaire");

let chemin = `${window.BACKEND_URL}` ;

supprimerImage.style.display = "none";

imageInput.addEventListener("change", () => {

    if (imageInput.files.length > 0) {
        supprimerImage.style.display = "inline-block";
    } else {
        supprimerImage.style.display = "none";
    }

});

supprimerImage.addEventListener("click", () => {

    imageInput.value = "";
    supprimerImage.style.display = "none";

});

matiereSelect.addEventListener("change", async () => {

    const matiereId = matiereSelect.value;

    if (!matiereId) {
        chapitreSelect.innerHTML =
            '<option value="">-- Choisir un chapitre --</option>';
        return;
    }

    try {

        const utilisateur = localStorage.getItem("utilisateur");

        const response = await fetch(
            `${chemin}/chapitres/${matiereId}?utilisateur=${encodeURIComponent(utilisateur)}`
        );

        const chapitres = await response.json();

        chapitreSelect.innerHTML =
            '<option value="">-- Choisir un chapitre --</option>';

        chapitres.forEach(chapitre => {

            const option = document.createElement("option");
            option.value = chapitre.id;
            option.textContent = chapitre.nom;

            chapitreSelect.appendChild(option);

        });

    } catch (e) {

        console.error(e);

    }

});

form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const formData = new FormData();

    formData.append("matiere_id", matiereSelect.value);
    formData.append("chapitre_id", chapitreSelect.value);
    formData.append("question", document.getElementById("question").value);
    formData.append("reponse", document.getElementById("reponse").value);
    formData.append("utilisateur",localStorage.getItem("utilisateur"));

    if (imageInput.files.length > 0) {
        formData.append("image", imageInput.files[0]);
    }

    try {

        const response = await fetch(
            `${chemin}/ajouter-carte`,
            {
                method: "POST",
                body: formData
            }
        );

        const resultat = await response.json();

        if (response.ok) {

            alert("Carte ajoutée avec succès !");

        } else {

            alert(resultat.detail);

        }

    } catch (e) {

        console.error(e);
        alert("Impossible de contacter le serveur.");

    }

});