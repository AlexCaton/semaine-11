$red = document.getElementById("red");
$utilisateur = document.getElementById("utilisateur");
$bouton = document.getElementById("bouton");
$affichage = document.getElementById("affichage");
ordiNum = Math.ceil(Math.random() * 100);

function verifier() {
    if ($utilisateur.value < ordiNum) {
        $affichage.innerHTML = "vous étes inférieur au chiffre de l'ordinateur";
    }
    if ($utilisateur.value > ordiNum) {
        $affichage.innerHTML = "vous étes supérieur au chiffre de l'ordinateur";
    }
    if ($utilisateur.value == ordiNum) {
        $affichage.innerHTML = "Bravo vous avez trouvée le chiffre de l'ordinateur : " + ordiNum;
    }
    if ($utilisateur.value >= 101) {
      $red.style.color = "red";
      $red.style.fontSize = "21px";
    } else {
      $red.style.color = "black";
      $red.style.fontSize = "16px";
    }
    if ($affichage.style.color == "black") {
        $affichage.style.color = "blue";
    } else {
        $affichage.style.color = "black";
    }
};

$bouton.onclick = verifier;
