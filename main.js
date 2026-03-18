// js test

const catGirlImage = document.getElementById("catGirlImage")
const clickMeText = document.getElementById("clickMeText")

catGirlImage.addEventListener('click', function(event) {
    console.log("works")
    clickMeText.textContent = 'ybeisa chort'
});