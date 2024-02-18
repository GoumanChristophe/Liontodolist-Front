// Attend que le DOM soit entièrement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionne le bouton par son ID et assigne un gestionnaire d'événement de clic
    let button = document.querySelector("#button");
    button.addEventListener("click", function validation (){
        // Récupère les valeurs des entrées de l'utilisateur
        let taskValue = document.getElementById("task").value;
        let importanceValue = document.getElementById("importance").value; 
        let startDateValue = document.getElementById("start").value;
        let timeValue = document.getElementById("time").value;
        
        // Valide si tous les champs requis sont remplis
        if(taskValue == ""){
            alert("Vous n'avez pas rempli de tâche.");
        } else if(importanceValue == ""){
            alert("Veuillez sélectionner une priorité.");
        } else if(startDateValue == ""){
            alert("Veuillez sélectionner une date pour votre tâche.")
        } else if(timeValue == ""){
            alert("Veuillez saisir un horaire valide.");
        } else {
            // Si toutes les validations sont passées, appelle la fonction pour ajouter la tâche
            addlinsting();
            // Affiche en console les valeurs ajoutées (pour débogage ou confirmation)
            console.log("Tâche ajoutée : ", taskValue, importanceValue, startDateValue, timeValue);
        }
    });
        
    // Fonction pour ajouter une tâche dans le tableau HTML
    function addlinsting() { 
        // Récupère à nouveau les valeurs, bien que cela pourrait être optimisé pour éviter les doublons
        let taskValue = document.getElementById("task").value;
        let importanceValue = document.getElementById("importance").value; 
        let startDateValue = document.getElementById("start").value;
        let timeValue = document.getElementById("time").value;

        // Trouve le corps du tableau et ajoute une nouvelle ligne à la fin
        let table = document.getElementById("taskTable").getElementsByTagName('tbody')[0];
        let newRow = table.insertRow(table.rows.length);

        // Crée des cellules dans la ligne pour chaque valeur de la tâche
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);
        let cell4 = newRow.insertCell(3);
        let cell5 = newRow.insertCell(4); // Pour l'image de modification
        let cell6 = newRow.insertCell(5); // Pour l'image de suppression

        // Attribue les valeurs des champs de formulaire aux cellules
        cell1.textContent = taskValue;
        cell2.textContent = importanceValue;
        cell3.textContent = startDateValue;
        cell4.textContent = timeValue;

        // Ajoute des classes CSS aux cellules pour le style et l'identification
        cell1.classList.add("task");
        cell2.classList.add("importance");
        cell3.classList.add("start");
        cell4.classList.add("time");
        
        // Crée et ajoute l'image de modification à la cinquième cellule
        const modifImg = document.createElement('img');
        modifImg.src = "img/modifier.png"; 
        modifImg.classList.add("modif-img"); 
        cell5.appendChild(modifImg); 
        
        // Crée et ajoute l'image de suppression à la sixième cellule
        const deleteImg = document.createElement('img');
        deleteImg.src = "img/delete.png"; 
        deleteImg.classList.add("delete-img"); 
        cell6.appendChild(deleteImg);

        // Réinitialise les champs de formulaire pour permettre l'ajout de nouvelles tâches
        document.getElementById("task").value = "";
        document.getElementById("importance").value = "";
        document.getElementById("start").value = "";
        document.getElementById("time").value = "";
    }

    // Gère les clics sur l'ensemble du tableau pour la suppression de tâches
    document.getElementById("taskTable").addEventListener('click', function(event) {
        // Vérifie si l'élément cliqué est une image de suppression
        if (event.target && event.target.classList.contains("delete-img")) {
            // Trouve la ligne (<tr>) contenant l'image et la supprime
            let row = event.target.closest('tr');
            row.remove();
        }
    });
});
