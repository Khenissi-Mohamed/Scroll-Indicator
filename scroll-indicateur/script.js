const scrollIndicator = document.querySelector(".scroll-indicator")
const content = document.querySelector(".content")

const observer = new IntersectionObserver(handleIntersect).observe(content)

function handleIntersect(entries){
    const elem = entries[0]
    if(elem.isIntersecting) {
        window.addEventListener("scroll", indicatorAnimation)
    } else if(!elem.isIntersecting) {
        window.removeEventListener("scroll", indicatorAnimation)
    }
}

function indicatorAnimation() {

    if(window.scrollY > content.offsetTop) {
        // je calcule son pourcentage et tofixed c'est pour fixer à 2 chiffres apres la virgule
        // si ce que je scroll en Y est superieur à ma div content 
        // content.scrollHeight = la hauteur de mon contenu
        const percentage = ((window.scrollY - content.offsetTop) / content.scrollHeight * 100).toFixed(2);
        scrollIndicator.style.transform = `scaleX(${percentage / 100})`
    } else {
        // si je ne suit plus dans mon contenu je le reset
        scrollIndicator.style.transform = `scaleX(0)`
    }
}
