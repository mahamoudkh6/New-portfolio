let darkMode = false;

function changeDarkMode() {
  if (darkMode) {
    darkMode = false;
    document.documentElement.style.setProperty("--text-color", "black");
    document.documentElement.style.setProperty("--background-color", "#efe7e5");
    document.getElementById("dark-light-mode").innerHTML = "Dark mode";
  } else {
    darkMode = true;
    document.documentElement.style.setProperty("--text-color", "white");
    document.documentElement.style.setProperty("--background-color", "black");
    document.getElementById("dark-light-mode").innerHTML = "Light mode";
  }
}


// Récupérer la première navbar
const firstNavbar = document.getElementById('firstNavbar');

// Ajouter un écouteur d'événement de défilement
window.addEventListener('scroll', function() {
    // Si le défilement vertical est supérieur à 100px (ajustez la valeur selon vos besoins)
    if (window.scrollY > 100) {
        firstNavbar.style.display = 'none'; // Faire disparaitre la première navbar
    } else {
        firstNavbar.style.display = 'block'; // Afficher la première navbar
    }
});
