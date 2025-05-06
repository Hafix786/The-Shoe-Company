const hamburgerIcon = document.querySelector('.hamburger-icon')
const hamburgerMenu = document.querySelector('.hamburger-menu')
const backArrowIcon = document.querySelector('.back-arrow-icon')

hamburgerIcon.addEventListener('click', () => {
    hamburgerIcon.classList.add('hidden')
    hamburgerMenu.classList.remove('hidden')
    backArrowIcon.addEventListener('click' , () => {
        hamburgerIcon.classList.remove('hidden')
        hamburgerMenu.classList.add('hidden')    
    })

})

window.addEventListener("scroll", () => {
    const navbar = document.querySelector("header");
    const topSection = document.querySelector("#top");
  
    const topSectionBottom = topSection.getBoundingClientRect().bottom;
  
    if (topSectionBottom <= 0) {
      // Scrolled past the first section
      navbar.classList.remove("bg-transparent");
      navbar.classList.add("bg-black/40", "backdrop-blur-sm");
    } else {
      // In the first section
      navbar.classList.add("bg-transparent");
      navbar.classList.remove("bg-black/40", "backdrop-blur-sm");
    }
  });
  