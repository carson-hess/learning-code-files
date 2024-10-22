let proSeats = document.getElementById("proSeats");
let forecastSeats = document.getElementById("forecastSeats");
let engageSeats = document.getElementById("engageSeats");
let engageRip = document.getElementById("engageRip");
let engageMigration = document.getElementById("engageMigration");
let chorusMigration = document.getElementById("chorusMigration");

const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");
const proRecommendations = document.getElementById("proRecommendations");
const forecastRecommendations = document.getElementById("forecastRecommendations");
const engageRecommendations = document.getElementById("engageRecommendations");
const engageMigrationRecommendations = document.getElementById("engageMigrationRecommendations");
const chorusMigrationRecommendations = document.getElementById("chorusMigrationRecommendations");
const disclaimer = document.getElementById("disclaimer");

submitBtn.onclick = function(){
    let proSeatsValue = Number(proSeats.value);
    let forecastSeatsValue = Number(forecastSeats.value);
    let engageSeatsValue = Number(engageSeats.value);
    
    //disclaimer
    disclaimer.textContent = "This is just an estimate. We always recommend checking with a Professional Solutions Architect to verify."

    // change reset button color to be light red
    resetBtn.style.backgroundColor = "red";

    //auto request SA
    if(proSeatsValue >= 100 && (forecastSeatsValue > 0 || engageSeatsValue > 0) 
        || forecastSeatsValue >= 100 || engageSeatsValue >= 100 
        || (forecastSeatsValue >= 75 && engageSeatsValue >=75)
        || proSeatsValue > 250){
        proRecommendations.textContent = "Request SA";
        return;
    }

    //check all pro 
    if(proSeatsValue > 15 && proSeatsValue < 100){
        proRecommendations.innerHTML = `<a href = "ProPages.html" target = "_blank">Implementation: Gong Professional</a>`;
    }
    else if(proSeatsValue > 0 && proSeatsValue <= 15) {
        proRecommendations.innerHTML = `<a href = "ProPages.html" target = "_blank">Implementation: Gong Essentials</a>`;
    }
    else if(proSeatsValue >= 100 
        && proSeatsValue <= 250) {
        proRecommendations.innerHTML = `<a href = "ProPages.html" target = "_blank">Implementation: Gong Advanced</a>`;
    }
    
    //check engage values
    if(engageSeatsValue > 0 && engageSeatsValue <= 40
        && (engageRip.value === "Outreach" || engageRip.value === "Salesloft")
        && engageMigration.value === "Yes"){
            engageRecommendations.textContent = "Implementation: Engage Essentials Plus";
            engageMigrationRecommendations.textContent = "Engage Data Migration";
    }
    else if(engageSeatsValue > 0 && engageSeatsValue <= 40
        && (engageRip.value === "Outreach" || engageRip.value === "Salesloft")
        && (engageMigration.value === "No" || engageMigration.value === "NA")){
        engageRecommendations.textContent = "Implementation: Engage Essentials Plus";
        engageMigrationRecommendations.textContent = "";
    }
    else if(engageSeatsValue > 0 && engageSeatsValue <= 15
        && (engageRip.value !== "Outreach" && engageRip.value !== "Salesloft")){
        engageRecommendations.textContent = "Implementation: Engage Essentials";
    }
    else if(engageSeatsValue > 15 && engageSeatsValue <100
        && (engageRip.value !== "Outreach" && engageRip.value !== "Salesloft"))
    {
        engageRecommendations.textContent = "Implementation: Engage Professional";
    }

    // check Forecast values
    if(forecastSeatsValue > 0 && forecastSeatsValue <=15){
        forecastRecommendations.textContent = "Implementation: Forecast Essentials";
    } 
    else if(forecastSeatsValue > 15 && forecastSeatsValue < 100){
        forecastRecommendations.textContent = "Implementation: Forecast Professional";
    }
    
    // check Chorus Migration
    if(chorusMigration.value === "large"){
        chorusMigrationRecommendations.innerHTML = `<a href = "ProPages.html" target = "_blank">Data Migration: Large</a>`;
    }
    else if(chorusMigration.value === "small"){
        chorusMigrationRecommendations.innerHTML = `<a href = "ProPages.html" target = "_blank">Data Migration: Small</a>`;
    }
} 

resetBtn.onclick = function(){
    proRecommendations.textContent = "";
    forecastRecommendations.textContent = "";
    engageRecommendations.textContent = "";
    proSeats.value = "";
    forecastSeats.value = "";
    engageSeats.value = "";
    engageRip.value = "NA";
    engageMigration.selectedIndex = 0;
    engageMigrationRecommendations.textContent = "";
    chorusMigrationRecommendations.textContent = "";
    chorusMigration.selectedIndex = 0;
    disclaimer.textContent = "";
    resetBtn.style.backgroundColor = "white";
}

// put in a price table that populates with the skus and price 
// need migrations on here too
// when not a current outreach/salesloft customer, don't populate the engage migration dropdown
// can we check values using case method?
// enter name and email
// log name and email to the console
// turn this into a form that goes somewhere / do something that creates backend data that can be analyzed

