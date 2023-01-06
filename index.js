
const calbuttonmat = document.querySelector(".calmat")
const calbuttonpor = document.querySelector(".calpor")
const calbuttoncien = document.querySelector(".calcien")
const calbuttongeo = document.querySelector(".calgeo")
const calbuttonhist = document.querySelector(".calhis")
const calbuttoning = document.querySelector(".caling")





const allbuttons = [calbuttonmat, calbuttonpor, calbuttoncien, calbuttongeo, calbuttonhist, calbuttoning]



calbuttonmat.addEventListener("click", function () {
    const b1matinput = document.querySelector(".B1Mat")
    const b2matinput = document.querySelector(".B2Mat")
    const b3matinput = document.querySelector(".B3Mat")
    const b4matinput = document.querySelector(".B4Mat")
    const Totalmat = document.querySelector(".matTotal")


    const calcmat = Number(b1matinput.value) + Number(b2matinput.value) + Number(b3matinput.value) + Number(b4matinput.value)
    const divmat = calcmat / 4
    console.log(divmat)

    Totalmat.innerText = divmat

    
 
    if (divmat >= 5) {
        Totalmat.style.background = 'green'
        Totalmat.style.color = 'white'
    } else {
        Totalmat.style.background = 'red'
        Totalmat.style.color = 'white'
    }

})


calbuttonpor.addEventListener("click", function () {

    const b1porinput = document.querySelector(".B1Pot")
    const b2porinput = document.querySelector(".B2Pot")
    const b3porinput = document.querySelector(".B3Pot")
    const b4porinput = document.querySelector(".B4Pot")
    const Totalpor = document.querySelector(".porTotal")


    const calpor = Number(b1porinput.value) + Number(b2porinput.value) + Number(b3porinput.value) + Number(b4porinput.value)
    const divpor = calpor / 4
    console.log(divpor)

    Totalpor.innerText = divpor


    if (divpor >= 5) {
        Totalpor.style.background = 'green'
        Totalpor.style.color = 'white'
    } else {
        Totalpor.style.background = 'red'
        Totalpor.style.color = 'white'
    }
})


calbuttoncien.addEventListener("click", function () {
    const b1cieninput = document.querySelector(".B1Cien")
    const b2cieninput = document.querySelector(".B2Cien")
    const b3cieninput = document.querySelector(".B3Cien")
    const b4cieninput = document.querySelector(".B4Cien")
    const Totalcien = document.querySelector(".cienTotal")


    const calcien = Number(b1cieninput.value) + Number(b2cieninput.value) + Number(b3cieninput.value) + Number(b4cieninput.value)
    const divcien = calcien / 4
    console.log(divcien)

    Totalcien.innerText = divcien


    if (divcien >= 5) {
        Totalcien.style.background = 'green'
        Totalcien.style.color = 'white'
    } else {
        Totalcien.style.background = 'red'
        Totalcien.style.color = 'white'
    }
})


calbuttongeo.addEventListener("click", function () {

    const b1geoinput = document.querySelector(".B1Geo")
    const b2geoinput = document.querySelector(".B2Geo")
    const b3geoinput = document.querySelector(".B3Geo")
    const b4geoinput = document.querySelector(".B4Geo")
    const Totalgeo = document.querySelector(".geoTotal")


    const calgeo = Number(b1geoinput.value) + Number(b2geoinput.value) + Number(b3geoinput.value) + Number(b4geoinput.value)
    const divgeo = calgeo / 4
    console.log(divgeo)

    Totalgeo.innerText = divgeo


    if (divgeo >= 5) {
        Totalgeo.style.background = 'green'
        Totalgeo.style.color = 'white'
    } else {
        Totalgeo.style.background = 'red'
        Totalgeo.style.color = 'white'
    }

})


calbuttonhist.addEventListener("click", function () {
    const b1hisinput = document.querySelector(".B1His")
    const b2hisinput = document.querySelector(".B2His")
    const b3hisinput = document.querySelector(".B3His")
    const b4hisinput = document.querySelector(".B4His")
    const Totalhis = document.querySelector(".hisTotal")


    const calhis = Number(b1hisinput.value) + Number(b2hisinput.value) + Number(b3hisinput.value) + Number(b4hisinput.value)
    const divhis = calhis / 4
    console.log(divhis)

    Totalhis.innerText = divhis


    if (divhis >= 5) {
        Totalhis.style.background = 'green'
        Totalhis.style.color = 'white'
    } else {
        Totalhis.style.background = 'red'
        Totalhis.style.color = 'white'
    }

})


calbuttoning.addEventListener("click", function () {
    const b1inginput = document.querySelector(".B1Ing")
    const b2inginput = document.querySelector(".B2Ing")
    const b3inginput = document.querySelector(".B3Ing")
    const b4inginput = document.querySelector(".B4Ing")
    const Totaling = document.querySelector(".ingTotal")


    const caling = Number(b1inginput.value) + Number(b2inginput.value) + Number(b3inginput.value) + Number(b4inginput.value)
    const diving = caling / 4
    console.log(diving)

    Totaling.innerText = diving



    if (diving >= 5) {
        Totaling.style.background = 'green'
        Totaling.style.color = 'white'
    } else {
        Totaling.style.background = 'red'
        Totaling.style.color = 'white'
    }




})
































