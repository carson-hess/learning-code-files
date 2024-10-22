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
const engageMigrationRecommendations = document.getElementById("engageMigrationRecommendations");
const chorusMigrationRecommendations = document.getElementById("chorusMigrationRecommendations");
const disclaimer = document.getElementById("disclaimer");

submitBtn.onclick = function(){
    let proSeatsValue = Number(proSeats.value);
    let forecastSeatsValue = Number(forecastSeats.value);
    let engageSeatsValue = Number(engageSeats.value);
    
    //auto request SA
    if(proSeatsValue >= 100 && (forecastSeatsValue > 0 || engageSeatsValue > 0) || forecastSeatsValue >= 100 || engageSeatsValue >= 100 || (forecastSeatsValue >= 75 && engageSeatsValue >=75)){
        proRecommendations.textContent = "Request SA";
    }
    if(proSeatsValue > 0 && proSeatsValue <= 15){
        proRecommendations.textContent = "Implementation: Gong Essentials";
    }

    //check all pro 
    if(proSeatsValue > 15 && proSeatsValue < 100){
        proRecommendations.textContent = "Implementation: Gong Professional";
    }
    if(proSeatsValue >= 100 && proSeatsValue <= 250){
        proRecommendations.textContent = "Implementation: Gong Advanced";
    }
    if(proSeatsValue > 250){
        proRecommendations.textContent = "Request SA";
    }

        // check all engage and engage data migration and check for engage essentials plus
    if(engageRip.value === "Outreach" || engageRip.value === "Salesloft" && engageSeatsValue > 0 && engageSeatsValue <= 40){
        engageRecommendations.textContent = "Implementation: Engage Essentials Plus";
    }
    if(engageSeatsValue > 0 && engageSeatsValue <= 15){
        engageRecommendations.textContent = "Implementation: Engage Essentials";
    }
    if(engageSeatsValue >= 16 && engageSeatsValue < 100){
        engageRecommendations.textContent = "Implementation: Engage Professional";
    }
    if(engageMigration === "Yes"){ //don't need .value because it already has value attribute
        engageMigrationRecommendations.textContent = "Data Migration: Engage" // when submit is clicked, the value in the dropdown goes away. It's also a little small.
    }
    if(forecastSeatsValue > 0 && forecastSeatsValue <=15){
        forecastRecommendations.textContent = "Implementation: Forecast Essentials";
    } 
    
    // check Chorus Migration
    if(chorusMigration.value === "large"){
        chorusMigrationRecommendations.textContent = "Data Migration: Large";
    }
    else if(chorusMigration.value === "small"){
        chorusMigrationRecommendations.textContent = "Data Migration: Small";
    }

    //check if values are empty

    //disclaimer
    disclaimer.textContent = "This is just an estimate. Always recommend checking with a Professional Solutions Architect to verify."
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
}

// put in a price table that populates with the skus and price 
// need migrations on here too
// when not a current outreach/salesloft customer, don't populate the engage migration dropdown
// can we check values using case method?
// enter name and email
// log name and email to the console
// turn this into a form that goes somewhere / do something that creates backend data that can be analyzed
// pull the PS one pagers in so that they get hit with the corresponding one-pager
// if they haven't submitted anything --> send message