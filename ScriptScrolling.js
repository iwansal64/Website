const blob1 = document.getElementsByClassName("blob1");
const stars = document.getElementById("stars");
let keluar = false;

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    blob1[0].style.top = (value * 0.5) + 'px';
    blob1[0].style.right = (value) + 'px';
    stars.style.marginLeft = (value * 1.5) + 'px';
    stars.style.marginBottom = (value * 1.5) + 'px';
})

function link() {
    if(keluar == false) {
        var link_in = document.getElementById("link_in").id = "link_out";
        keluar = true;
    }
    else if(keluar == true) {
        var link_in = document.getElementById("link_out").id = "link_in";
        keluar = false;
    }
}
