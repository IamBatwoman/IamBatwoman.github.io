// Pour menu déroulant

function Mythologie(Divinités) {
  if (Divinités == "rien") {
    document.getElementById("infoDivinités").classList.remove("special");
    document.getElementById("infoDivinités").textContent="";
  }
  else {
    document.getElementById("infoDivinités").classList.add("special");
    if (Divinités == "Zeus") {
    document.getElementById("infoDivinités").textContent="Il règne sur le ciel et sur le panthéon grec";
    }
    if (Divinités == "Héra") {
    document.getElementById("infoDivinités").textContent="C'est la déesse du marriage et épouse de Zeus";
    }
    if (Divinités == "Poséidon") {
    document.getElementById("infoDivinités").textContent="C'est le dieu des tremblements de terre, des tempêtes, de la mer et des océans époux D'Amphitrite ";
    }
    if (Divinités == "Déméter") {
    document.getElementById("infoDivinités").textContent="C'est la déesse de l'agriculture et des moissons"
    }
    if (Divinités == "Aphrodite") {
    document.getElementById("infoDivinités").textContent="C'est la déeese de l'amour, de la beauté et la sensualité, épouse de Héphaïstos"
    }
    if (Divinités == "Artémis") {
    document.getElementById("infoDivinités").textContent="C'est la déesse de la chasse et de la lune "
    }
    if (Divinités == "Apollon") {
    document.getElementById("infoDivinités").textContent="C'est le dieu de l'art, de la beauté, du soleil, de la médecine et des oracles. Frère jumeau d'Artémis"
    }
    if (Divinités == "Athéna") {
    document.getElementById("infoDivinités").textContent="C'est la déesse de la sagesse, de la guerre et de l'artisanat. Elle est également la protectrice d'Athènes"
    }
    if (Divinités == "Hermès") {
      document.getElementById("infoDivinités").textContent="C'est le messager des dieux et il assure la fonction de conducteur des âmes"
    }
    if (Divinités == "Dionysos") {
    document.getElementById("infoDivinités").textContent="C'est le dieu de la fureur, de la folie, du vin, de l'enthousiasme"
    }
    if (Divinités == "Hadès") {
    document.getElementById("infoDivinités").textContent="Il règne sur le monde souterrain, enlève sa nièce Perséphone et devient son époux "
    }
  }
}