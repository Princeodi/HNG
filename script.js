document.addEventListener("DOMContentLoaded", function () {
    
    const slackNameElement = document.querySelector('[data-testid="slackUserName"]');
    slackNameElement.textContent = "Prince Odinaka";

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const currentDayOfWeek = daysOfWeek[currentDate.getDay()];
    const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    currentDayElement.textContent = currentDayOfWeek;

    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    const currentUTCTime = Date.now();
    currentUTCTimeElement.textContent = currentUTCTime;


    const trackElement = document.querySelector('[data-testid="myTrack"]');
    trackElement.textContent = "Frontend Development";
});