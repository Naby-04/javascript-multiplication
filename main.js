// Pour faire la multiplication on vas utiliser une boucle imbriquée. C'est une structure qui te permet de parcourir deux séries de nombres simultanément.

// Pour se faire La boucle la plus adaptée ici est la boucle for car nous savons exactement combien de fois tu veux que l’opération se répète (9 fois pour chaque ligne et chaque colonne).
//  Elle a cette structure de base :for(initialisation; condition; incrémentation){instructions à exécuter}

// -----------------------------------------------------------

// la logique a suivre:
// initialiser d'une variable(ici 'i')
// inserer la condition pour signaler au programme le debut et la fin de la boucle (ici la condition et que 'i' doit etre inferieur ou égale à '9')
// faire en sorte que apres chaque passage de la boucle la variable("i") augmente de 1 donc on fera ('i++')

// -----------------------------------------------------------
// initialisation de la fonction
function tablemultiplication() {
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      // ici on va faire la multiplication et l'afficher
      let result = i * j;
      // pour afficher le résultat on va utiliser console.log();
      console.log(i + " * " + j + " = " + result); // Afficher le résultat
    }
  }
}

// ---------------------------------------------------

// notions à savoir !!!
// Une fonction est un bloc de code réutilisable qui exécute une tâche spécifique.
// Cela signifie que chaque fois que nous voulons afficher la table de multiplication, nous pouvons simplement appeler cette fonction.

// Une boucle for est utilisée pour répéter un bloc de code un certain nombre de fois.
