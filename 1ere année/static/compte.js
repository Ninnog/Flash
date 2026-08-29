const nomUtilisateur = document.getElementById("nom-utilisateur");
const utilisateur = localStorage.getItem("utilisateur");

nomUtilisateur.textContent = "Statistiques de " + utilisateur;

fetch("/statistiques?utilisateur=" + utilisateur)
.then(r=>r.json())
.then(data=>{

    const stats=document.getElementById("stats");

    data.details.forEach(matiere=>{

        const bloc=document.createElement("div");
        bloc.className = "blocmatiere";

        bloc.innerHTML=`

        <button class="btnMatiere">

            ${matiere.nom}

            <span>${matiere.cartes} cartes</span>

        </button>

        <div class="contenu">

            <p>🔵 ${matiere.nouvelles} nouvelles</p>
            <p>🟡 ${matiere.apprentissage} en apprentissage</p>
            <p>🟠 ${matiere.consolidation} en consolidation</p>
            <p>🟢 ${matiere.maitrisees} maîtrisées</p>
            <p>🔴 ${matiere.revoir} à revoir aujourd'hui</p>

            <div class="barre">

                <div
                    class="progression"
                    style="width:${matiere.progression}%">
                </div>

            </div>

            <p>${matiere.progression}% maîtrisées</p>

            <h4>Chapitres</h4>

        </div>
        `;

        const contenu = bloc.querySelector(".contenu");

        matiere.chapitres.forEach(chap=>{

            const chapitre=document.createElement("details");

            chapitre.innerHTML=`

                <summary>

                    ${chap.nom}

                </summary>

                <p>${chap.cartes} cartes</p>

                <div class="barre">

                    <div
                        class="progression"
                        style="width:${chap.progression}%">
                    </div>

                </div>

                <p>🔵 ${chap.nouvelles} nouvelles</p>
                <p>🟡 ${chap.apprentissage} en apprentissage</p>
                <p>🟠 ${chap.consolidation} en consolidation</p>
                <p>🟢 ${chap.maitrisees} maîtrisées</p>
                <p>🔴 ${chap.revoir} à revoir aujourd'hui</p>

            `;

            contenu.appendChild(chapitre);

        });

        bloc.querySelector(".btnMatiere").onclick=()=>{

            contenu.style.display=
                contenu.style.display=="block"
                ?"none"
                :"block";

        }

        stats.appendChild(bloc);

    });

});