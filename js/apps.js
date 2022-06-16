        //Je crée mon module 'jeux'
        const jeux = {
            //Je déclare une méthode 'init'
            init: function () {
                // Je crée une constante 'buttons' puis je séléctionne tout les 'button' avec un querySelectorAll 
                const buttons = document.querySelectorAll("button");
                //Création d'une boucle for  
                // variable 'i' est égale a 0 , tant que i est infèrieur à tout mes buttons j'avance de 1 sur mon tableau
                for (let i = 0; i < buttons.length; i++) {
                    // J'ajoute l'écouteur d'événement "click" sur chaque button et je décris ce que je fais avec dans 'function'
                    buttons[i].addEventListener("click", function () {
                        //Joueur est égal a la case qu'il aura coché, innerHTML affiche la chaine de caractère choisi dans buttons[i]
                        const joueur = buttons[i].innerHTML;
                        // j'affiche le choix du joueur dans la console quand il clique sur un boutton
                        console.log(joueur);
                        //Robot est égal a une case choisi aléatoirement entre l'index 0 et 2 dans le tableau, grace a Math.floor(Ma), innerHTML affiche la chaine de caractère choisi dans buttons[i]
                        const robot = buttons[Math.floor(Math.random()* buttons.length)].innerHTML;
                        // j'affiche le choix du robot dans la console quand il clique sur un boutton
                        console.log(robot);




                    });



                }
            },



        }
        // ICI On pose un écouteur d'événements qui éxécute la méthode 'init' du module 'jeux' une fois la page chargé
        document.addEventListener('DOMContentLoaded', jeux.init);

