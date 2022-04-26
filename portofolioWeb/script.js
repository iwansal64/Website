
const tabA = document.getElementById('tabA')
const tabB = document.getElementById('tabB')
const tabC = document.getElementById('tabC')
const tabD = document.getElementById('tabD')


const content = document.getElementById('content')
const title = document.getElementById('title')
const circleIn = document.getElementById('in')
const circleOut = document.getElementById('out')
const infoContent = document.getElementById('info-content')
const infoText = document.getElementById('info-text')
const infoTitle = document.getElementById('info-title')
console.log(content.style.color)

let scrollY = 0
let maxScroll = 40

let firstTabA = Number.parseInt(window.getComputedStyle(tabA).right);
let firstTabB = Number.parseInt(window.getComputedStyle(tabB).bottom);
let firstTabC = Number.parseInt(window.getComputedStyle(tabC).left);
let firstTabD = Number.parseInt(window.getComputedStyle(tabD).top);


let nameCondition = true
let before = ""
window.addEventListener('wheel', e => {
    let contentTitle = '';

    if (e.wheelDelta > 0 && scrollY > 0) {
        scrollY -= 1
        if (scrollY >= 30) {
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
    else if (e.wheelDelta < 0 && scrollY < maxScroll) {
        scrollY += 1
        if (scrollY > 30) {
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

    if (before != contentTitle) {
        before = contentTitle
        title.innerHTML = contentTitle
        content.innerHTML = ""
        if (contentTitle == "Profile") {
            content.innerHTML = "\nProfile gw jago hehe"
            content.style.color = "red"
        }
        else if (contentTitle == "Skills") {
            content.innerHTML = "\nSkills : Python, Javascript, html, css"
            content.style.color = "aqua"
        }
        else if (contentTitle == "Achievement") {
            content.innerHTML = "\nPython : Bikin linear regresi wkwkw\nHTML, CSS, Javascript : bikin ini\n"
            content.style.color = "greenyellow"
        }
        else if (contentTitle == "Organization") {
            content.innerHTML = "\nGak tau deh :v"
            content.style.color = "purple"
        }
        if (contentTitle == "") {
            content.innerHTML = ""
            title.innerHTML = "RIDWAN PRO PLEYER"
            title.className = "myname"
            title.style.color = "black"
            nameCondition = true
        }
        else {
            title.className = "content"
            nameCondition = false
        }
    }

})

window.addEventListener('keydown', e => {
    if (e.key == "t") {
        console.log(before)
        console.log(" ")
    }
})

let popup = false
let informations = {
    "profile":"Name : Ridwan B.S\nKelas : 9\nSMP DAYA UTAMA",
    "skills":"-Python\t-C#\n-Javascript\t-Java\n-Html\n-Css\n-Dart",
    "achievement":
        "Python :\n\t-Membuat kalkulator regresi grafik\n\t-Membuat kalkulator grafik fungsi\n\t-Membuat aplikasi crop image automatis",
    "organization":"-Ngobar bareng vin"
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

    infoTitle.innerHTML = info.toString()
    infoTitle.style.backgroundColor = titleColor[info]
    infoText.innerHTML = informations[info]
    infoText.style.color = titleColor[info]
}

let timeout;

function nameClick() {
    if (nameCondition) {
        circleOut.style.transition = "1s"
        circleOut.style.backgroundColor = "#0ff"
        title.style.transition = "1s"
        title.style.color = "#0ff"
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            circleOut.style.transition = "2s"
            circleOut.style.backgroundColor = "#555"
            title.style.transition = "0.25s"
            title.style.color = "#f00"
            setTimeout(() => {
                title.style.transition = "0.5s"
                title.style.color = "#000"
            }, 250);
        }, 2000);
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
