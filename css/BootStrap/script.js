window.addEventListener("scroll", function () {
    const scrollPos = window.pageYOffset; // how far the user scrolled
    const navLogo = document.getElementById("navLogo");
    const heroLogo = document.getElementById("heroLogo");
  
    // Threshold for toggling effect
    if (scrollPos > 100) {
      // Hide/shrink the navbar GUCCI
      navLogo.classList.add("shrink");
  
      // Show large hero GUCCI
      heroLogo.classList.remove("hidden");
      heroLogo.classList.add("show");
    } else {
      // Show navbar GUCCI
      navLogo.classList.remove("shrink");
  
      // Hide the large hero GUCCI
      heroLogo.classList.add("hidden");
      heroLogo.classList.remove("show");
    }
  });
  