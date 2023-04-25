$(init);

function init() {
    
    //initialisation
    $(accueil);
    $(galerie);
    $(astuce);
    $(propos);

    $("#accueil").show();
    $("#galerie").hide();
    $("#Astuce").hide();
    $("#propos").hide();

    //bouton de menu
    $("#btnAccueil").click(btnAccueil);
    $("#btnGalerie").click(btnGalerie);
    $("#btnAstuce").click(btnAstuce);
    $("#btnPropos").click(btnPropos);

} //fin init

////////////////////////////////////
/*Javascript pour les boutons menu*/
////////////////////////////////////

function btnAccueil() {
    $("#accueil").show();
    $("#galerie").hide();
    $("#astuce").hide();
    $("#propos").hide();
} //fin btnAccueil

function btnGalerie() {
    $("#accueil").hide();
    $("#galerie").show();
    $("#astuce").hide();
    $("#propos").hide();
} //fin btnGalerie

function btnAstuce() {
    $("#accueil").hide();
    $("#galerie").hide();
    $("#astuce").show();
    $("#propos").hide();
} //fin btnAstuce

function btnPropos() {
    $("#accueil").hide();
    $("#galerie").hide();
    $("#astuce").hide();
    $("#propos").show();
} //fin btnPropos

///////////////////////////
/*Chargement des contenus*/
///////////////////////////

function accueil() {
    $("#accueil").load("templates/accueil.txt");
} //fin accueil

function galerie() {
    $("#galerie").load("templates/galerie.txt");
} //fin galerie

function astuce() {
    $("#astuce").load("templates/astuce.txt");
} //fin astuce

function propos() {
    $("#propos").load("templates/propos.txt");
} //fin propos
