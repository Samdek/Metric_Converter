const inputEl = document.getElementById('input-el')
const convertBtn = document.getElementById('convert-btn')
const length = document.getElementById('length-convert')
const volume = document.getElementById('volume-convert')
const mass = document.getElementById('mass-convert')
const meterToFeet = 3.281
const feetToMeter = 1 / meterToFeet
const literToGal = 0.264
const galToLiter = 1 / literToGal
const kiloToPound = 2.204
const poundToKilo = 1 / kiloToPound


function converter(convert){
    convert *= Number(inputEl.value)
    return convert.toFixed(3)
}


function logOut(){
    length.textContent = `${inputEl.value} meters = ${converter(meterToFeet)} feet | ${inputEl.value} feet = ${converter(feetToMeter)} meters`

    volume.textContent = `${inputEl.value} liters = ${converter(literToGal)} gallons | ${inputEl.value} gallons = ${converter(galToLiter)} liters`

    mass.textContent = `${inputEl.value} kilos = ${converter(kiloToPound)} pounds | ${inputEl.value} pounds = ${converter(poundToKilo)} kilos`
}

convertBtn.addEventListener('click', function(){
    logOut()
})
