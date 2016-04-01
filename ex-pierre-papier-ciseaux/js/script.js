// exercice pierre papier ciseaux
$bouton = document.getElementById("bouton");
$armeOrdi = document.getElementById('armeOrdi');
$gagner = document.getElementById('gagner');
$defait = document.getElementById('defait');
$pourcentage = document.getElementById('pourcentage');
var armeOrdi = '';
var compGa = 0;
var compDef = 0;
var compTour = 0;

function choixOrdi() {
  compTour += 1;
  var armeUtilisateur = document.getElementById('armeUtilisateur').value;
  ordiNum = Math.ceil(Math.random() * 3);

  if (ordiNum === 1) {
    armeOrdi = 'pierre';
  }
  if (ordiNum === 2) {
    armeOrdi = 'papier';
  }
  if (ordiNum === 3) {
    armeOrdi ='ciseaux';
  }
  $armeOrdi.innerHTML = armeOrdi;

  if (armeUtilisateur == "pierre" && armeOrdi == "ciseaux" || armeUtilisateur == "ciseaux" && armeOrdi == "papier" || armeUtilisateur == "papier" && armeOrdi == "pierre") {
      compGa += 1;
  }
  $gagner.innerHTML = compGa;
  if (armeUtilisateur == "ciseaux" && armeOrdi == "pierre" || armeUtilisateur == "papier" && armeOrdi == "ciseaux" || armeUtilisateur == "pierre" && armeOrdi == "papier") {
      compDef += 1;
  }
  $defait.innerHTML = compDef;
  if (armeUtilisateur === armeOrdi) {
      compTour -= 1;
      alert('Manche null veuillez rejouer !');
  }
  $pourcentage.innerHTML = Math.ceil(compGa * 100 / compTour) + " " + "%";
};

$bouton.onclick = choixOrdi;
