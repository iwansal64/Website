const randomize = (min, max) => {
    return Math.floor(Math.random() * (max - min) ) + min
}

const tabA = document.getElementById('tabA')
const tabB = document.getElementById('tabB')
const tabC = document.getElementById('tabC')
const tabD = document.getElementById('tabD')

const decorations = document.querySelectorAll('.decor')
let size = 0
let posX = 0
let posY = 0
decorations.forEach(element => {
    size = randomize(25, 150)
    posX = randomize(50, 1300)
    posY = randomize(150, 600)

    rgba = [randomize(0, 255), randomize(0, 255), randomize(0, 255), Math.random()]
    element.style.height = size.toString()+"px"
    element.style.width = size.toString()+"px"
    element.style.left = posX.toString()+"px"
    element.style.top = posY.toString()+"px"
    element.style.backgroundColor = `rgba(${rgba[0].toString()}, ${rgba[1].toString()}, ${rgba[2].toString()}, ${rgba[3]})`
});

const content = document.getElementById('content')
const title = document.getElementById('title')
const circleIn = document.getElementById('in')
const circleOut = document.getElementById('out')
const circleDecor = document.getElementById('circle-decor')
const circleHiding = document.getElementById('circle-hiding')
const infoContent = document.getElementById('info-content')
const infoText = document.getElementById('info-text')
const infoTitle = document.getElementById('info-title')
const back = document.getElementById('back')
const next = document.getElementById('next')


let scrollY = 0
let maxScroll = 40

let firstTabA = Number.parseInt(window.getComputedStyle(tabA).right);
let firstTabB = Number.parseInt(window.getComputedStyle(tabB).bottom);
let firstTabC = Number.parseInt(window.getComputedStyle(tabC).left);
let firstTabD = Number.parseInt(window.getComputedStyle(tabD).top);
let LinearGrad = window.getComputedStyle(document.body).backgroundImage;
let linearGradSplit = LinearGrad.split("(")
let firstLinearGrad = linearGradSplit[0]
let lastLinearGrad = linearGradSplit[1].split(',')[1]+"("+linearGradSplit[2]+"("+linearGradSplit[3]+"("+linearGradSplit[4]+"("+linearGradSplit[5]
console.log(lastLinearGrad)

let nameCondition = true
let before = ""
let degree = 0

function wheeling(e, code=0) {
    let contentTitle = '';

    if (code == 0) {
        if (e.wheelDelta > 0 && scrollY > 0) {
            degree += 1
            scrollY -= 1
            if (scrollY > 40) {
                contentTitle = "Contact me"
            }
            else if (scrollY >= 30) {
                let value = scrollY - 30
                tabD.style.top = (firstTabD + value * (-(firstTabD) / 10)).toString() + "px"
                contentTitle = 'Organization'
            }
            else if (scrollY >= 20) {
                let value = scrollY - 20
                tabC.style.left = (firstTabC + value * (-(firstTabC) / 10)).toString() + "px"
                contentTitle = 'Achievement'
            }
            else if (scrollY >= 10) {
                let value = scrollY - 10
                tabB.style.bottom = (firstTabB + value * (-(firstTabB) / 10)).toString() + "px"
                contentTitle = 'Skills'
            }
            else {
                let value = scrollY
                tabA.style.right = (firstTabA + value * (-(firstTabA) / 10)).toString() + "px"
                contentTitle = 'Profile'
            }
        }
        else if (e.wheelDelta < 0) {
            degree -= 1
            scrollY += 1
            if (scrollY > 40) {
                contentTitle = "Contact me"
                scrollY = 41
            }
            else if (scrollY > 30) {
                let value = scrollY - 30
                tabD.style.top = (firstTabD + value * (-(firstTabD) / 10)).toString() + "px"
                contentTitle = 'Organization'
            }
            else if (scrollY > 20) {
                let value = scrollY - 20
                tabC.style.left = (firstTabC + value * (-(firstTabC) / 10)).toString() + "px"
                contentTitle = 'Achievement'
            }
            else if (scrollY > 10) {
                let value = scrollY - 10
                tabB.style.bottom = (firstTabB + value * (-(firstTabB) / 10)).toString() + "px"
                contentTitle = 'Skills'
            }
            else {
                let value = scrollY
                tabA.style.right = (firstTabA + value * (-(firstTabA) / 10)).toString() + "px"
                contentTitle = 'Profile'
            }
        }
    }
    else if (code == 1) {
        if (scrollY == 0) {
            scrollY -= 1
        }
        else if(scrollY <= -1) {
            return
        }
        else {
            scrollY -= scrollY % 10 != 0? scrollY % 10 : 10
        }
        degree += 10
        if (scrollY >= 40) {
            contentTitle = "Contact me"
        }
        else if (scrollY >= 30 && scrollY < 40) {
            let value = scrollY - 30
            tabD.style.transition = "1s";
            tabD.style.top = (firstTabD + value * (-(firstTabD) / 10)).toString() + "px"
            contentTitle = 'Organization'
        }
        else if (scrollY >= 20 && scrollY < 30) {
            let value = scrollY - 20
            tabC.style.transition = "1s"
            tabC.style.left = (firstTabC + value * (-(firstTabC) / 10)).toString() + "px"
            contentTitle = 'Achievement'
        }
        else if (scrollY >= 10 && scrollY < 20) {
            let value = scrollY - 10
            tabB.style.transition = "1s"
            tabB.style.bottom = (firstTabB + value * (-(firstTabB) / 10)).toString() + "px"
            contentTitle = 'Skills'
        }
        else if (scrollY < 10 && scrollY >= 0){
            let value = scrollY
            tabA.style.transition = "1s"
            tabA.style.right = (firstTabA + value * (-(firstTabA) / 10)).toString() + "px"
            contentTitle = 'Profile'
        }

    }
    else if (code == 2) {
        if (scrollY >= maxScroll) {
            scrollY += 1
        }
        else if(scrollY >= maxScroll + 1) {
            return
        }
        else {
            scrollY += (10 - scrollY % 10)
        }
        degree -= 10
        console.log(scrollY)
        if (scrollY > 40) {
            contentTitle = "Contact me"
        }
        else if (scrollY > 30 && scrollY <= 40) {
            let value = scrollY - 30
            tabD.style.transition = "1s"
            tabD.style.top = (firstTabD + value * (-(firstTabD) / 10)).toString() + "px"
            contentTitle = 'Organization'
        }
        else if (scrollY > 20 && scrollY <= 30) {
            let value = scrollY - 20
            tabC.style.transition = "1s"
            tabC.style.left = (firstTabC + value * (-(firstTabC) / 10)).toString() + "px"
            contentTitle = 'Achievement'
        }
        else if (scrollY > 10 && scrollY <= 20) {
            let value = scrollY - 10
            tabB.style.transition = "1s"
            tabB.style.bottom = (firstTabB + value * (-(firstTabB) / 10)).toString() + "px"
            contentTitle = 'Skills'
        }
        else if (scrollY <= 10){
            let value = scrollY
            tabA.style.transition = "1s"
            tabA.style.right = (firstTabA + value * (-(firstTabA) / 10)).toString() + "px"
            contentTitle = 'Profile'
        }
    }

    document.body.style.backgroundImage = `linear-gradient(${(degree + 135).toString()}deg, `+lastLinearGrad

    if (before != contentTitle) {
        before = contentTitle
        title.innerHTML = contentTitle
        content.innerHTML = ""
        if (contentTitle == "Profile") {
            content.innerHTML = "\nRidwan B.S\nKelas 9"
            content.style.color = "red"
        }
        else if (contentTitle == "Skills") {
            content.innerHTML = "\nSkills : Python, Javascript, html, css"
            content.style.color = "aqua"
        }
        else if (contentTitle == "Achievement") {
            content.innerHTML = "\nPython : Bikin linear regresi\nHTML, CSS, Javascript : bikin ini\nC# : membuat game"
            content.style.color = "#0c8"
        }
        else if (contentTitle == "Organization") {
            content.innerHTML = "\nCuman dikit hehe :v"
            content.style.color = "#f5c"
        }
        if (contentTitle == "") {
            content.innerHTML = ""
            title.innerHTML = "Ridwan"
            title.className = "myname"
            title.style.color = "black"
            infoText.onclick = null
            nameCondition = true
        }
        else if (contentTitle == "Contact me") {
            title.classList.add("contact-me")
            title.onclick = x => {onClick("contact-me")}
            title.style.cursor = "pointer"
        }
        else {
            title.className = "content"
            title.classList.remove("Contact-Me")
            title.style.cursor = "default"
            infoText.onclick = null    
            nameCondition = false
        }
    }
}
window.addEventListener('wheel', e => {wheeling(e, 0)})

// ===============   TEST  ================
window.addEventListener('keydown', e => {
    if (e.key == "t") {
        console.log("Test")
    }
})
// -----------------------------------------

let popup = false
let informations = {
    "profile":"Name : Ridwan B.S\nKelas : 9\nSMP DAYA UTAMA",
    "skills":"-Python\t-C#\n-Javascript\t-Java\n-Html\n-Css\n-Dart",
    "achievement":
        "Python :\n\t-Membuat kalkulator regresi grafik\n\t-Membuat kalkulator grafik fungsi\n\t-Membuat aplikasi crop image automatis",
    "organization":"-pernah nyoba ikut ngoding bareng orang luar negeri (projek mod hollow knight) cuman gak terlalu guna hehe\n-ikut organisasi di projek bellshade cuman gak tau caranya kontribusi wkwk"
}
let titleColor = {
    "profile":"#d00",
    "skills":"#0dd",
    "achievement":"#af0",
    "organization":"#c0f"
}

function onClick(info) {
    infoContent.classList.replace("popdown", "popup")
    popup = true

    if (info == "contact-me") {
        infoTitle.innerHTML = "Mail Me!"
        infoTitle.classList.add("contact-me-title")
        infoTitle.style.cursor = "pointer"
        infoTitle.onclick = x => {
            console.log("HEI")
            window.location.href = "mailto:iwansal64@gmail.com?subject=Saran/Masukan"
        }
        return
    }
    
    infoTitle.classList.remove("contact-me-title")
    infoTitle.innerHTML = info.toString()
    infoTitle.style.backgroundColor = titleColor[info]
    infoText.innerHTML = informations[info]
    infoText.style.color = titleColor[info]
}

let timeout;

// Animation Gilak
function nameClick() {
    if (nameCondition) {
        circleOut.style.transition = "1s"
        circleOut.style.backgroundColor = "#0ff"

        circleHiding.style.transitionDelay = "0.1s"
        circleHiding.style.transitionDuration = "0.9s"
        circleHiding.style.backgroundColor = "#0dd"
        circleHiding.style.transitionProperty = "background-color"

        circleIn.style.transition = "1s"
        circleIn.style.backgroundColor = "#0bb"

        title.style.transition = "1s"
        title.style.color = "#0ff"

        back.style.backgroundColor = "#0aa"
        back.style.borderColor = "#2cc"

        next.style.backgroundColor = "#0aa"
        next.style.borderColor = "#2cc"

        circleDecor.style.transition = "2s"
        circleDecor.style.width = "800px"
        circleDecor.style.height = "800px"
        circleDecor.style.opacity = "1"
        
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            circleOut.style.transition = "0.25s"
            circleOut.style.backgroundColor = "#a00"
            
            circleHiding.style.transitionDelay = "0.25s"
            circleHiding.style.transitionDuration = "0.15s"
            circleHiding.style.backgroundColor = "#b00"
            circleHiding.style.transitionProperty = "background-color"
            
            circleIn.style.backgroundColor = "#c00"
            circleIn.style.transitionDelay = "0.4s"
            circleIn.style.transitionDuration = "0.15s"
            circleIn.style.transitionProperty = "background-color"

            title.style.transition = "0.25s"
            title.style.color = "#f00"

            back.style.transition = "0.25s"
            back.style.backgroundColor = "#525252"
            back.style.borderColor = "#676767"
            
            next.style.transition = "1s"
            next.style.backgroundColor = "#525252"
            next.style.borderColor = "#676767"
            
            circleDecor.style.opacity = ".0"
            circleDecor.style.transition = "0.2s"
            circleDecor.style.width = "700px"
            circleDecor.style.height = "700px"
            
            setTimeout(() => {
                title.style.transition = "0.5s"
                title.style.color = "#000"
                
                circleOut.style.transition = "0.5s"
                circleOut.style.backgroundColor = "#555"
                
                
            }, 200);
            
            setTimeout(() => {
                circleIn.style.transitionDuration = "0.15s"
                circleIn.style.backgroundColor = "#ccc"
                
                circleHiding.style.transitionDuration = "0.15s"
                circleHiding.style.backgroundColor = "#333"
                
                title.style.transition = "0.1s"
                title.style.backgroundColor = "#800"
                title.style.color = "#990"
                
                setTimeout(() => {
                    title.style.backgroundColor = "#666"
                    title.style.transition = "0.25s"
                    title.style.color = "#000"
                    title.style.rotate = "0deg"
                }, 250);
                
            }, 480);

        }, 1600);
    }
}

infoContent.addEventListener('click', e => {
    if (popup) {
        infoContent.classList.replace("popup", "popdown")
        infoTitle.innerHTML = ""
        infoText.innerHTML = ""
        popup = false
    }
})

// Decoration Cuy
setInterval(() => {
    decorations.forEach(element => {
        let elementStyle = window.getComputedStyle(element)
        let elementTop = Number.parseInt(elementStyle.top)
        let elementLeft = Number.parseInt(elementStyle.left)
        let maxBound = [800, 600]
        let min = -50
        let max = 50
        
        if (elementLeft >= maxBound[0] - Math.abs(min)) {
            movementX = randomize(min, max - (elementLeft - maxBound[0]))
        }
        else if (elementLeft <= max) {
            movementX = randomize(min + elementLeft, max)
        }
        else {
            movementX = randomize(min, max)
        }

        if (elementStyle.top >= maxBound[1] - Math.abs(min)) {
            movementY = randomize(min, max - (elementTop - maxBound[1]))
        }
        else if (elementStyle.top <= max) {
            movementY = randomize(min + elementTop, max)
        }
        else {
            movementY = randomize(min, max)
        }
        element.style.transition = "1s"
        element.style.left = (elementLeft+movementX).toString()+"px"
        element.style.pos = (elementTop+movementY).toString()+"px"

    });
}, 1500);
