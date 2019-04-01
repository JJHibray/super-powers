const mindReading = document.getElementById("mindreading")
const xRay = document.getElementById("xray")
const flight = document.getElementById("flight")
const powerArray = [mindReading, xRay, flight]

// powerArray.forEach(power => {
//     power.addEventListener("click", function() {
//         toggleClass("enabled")
//     })
// })

function toggleClass(targetElement, newClass) {
    targetElement.classList.toggle(newClass)
}



document.querySelector("#activate-flight").addEventListener("click", function() {
     toggleClass(flight, "enabled")
})

document.querySelector("#activate-mindreading").addEventListener("click", function() {
    toggleClass(mindReading, "enabled")
})

document.querySelector("#activate-xray").addEventListener("click", function() {
    toggleClass(xRay, "enabled")
})

document.querySelector("#activate-all").addEventListener("click", function() {
    powerArray.forEach(power => {
    power.classList.add("enabled")
     })
});

document.querySelector("#deactivate-all").addEventListener("click", function() {
    powerArray.forEach(power => {
    power.classList.remove("enabled")
     })
});



// powerArray.forEach(power => {
//     console.log(power)

