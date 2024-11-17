const errorTextDay = document.getElementById("errortextday");
const errorTextMonth = document.getElementById("errortextmonth");
const errorTextYear = document.getElementById("errortextyear");
const errorDayColor = document.getElementById("errordaycolor");
const errorMonthColor = document.getElementById("errormonthcolor");
const errorYearColor = document.getElementById("erroryearcolor");

const submit = document.getElementById("btnsubmit");
const yearText = document.getElementById("yearstext");
const monthText = document.getElementById("monthstext");
const daysText = document.getElementById("daystext");

const now = new Date();

let currentDay = now.getDate();
let currentMonth = now.getMonth() + 1;
let currentYear = now.getFullYear();



submit.addEventListener("click", () => {
    let dayInp = document.getElementById("dayinp");
    let monthInp = document.getElementById("monthinp");
    let yearInp = document.getElementById("yearinp");

    let dayValue = dayInp.value;
    let monthValue = monthInp.value;
    let yearValue = yearInp.value;

    const dayNumber = parseInt(dayValue);
    const monthNumber = parseInt(monthValue);
    const yearNumber = parseInt(yearValue);
   
    
        let mybirthday = currentDay - dayNumber;
        let mybirthmonth = currentMonth - monthNumber;
        let mybirthyear = currentYear - yearNumber;
        
        if (mybirthday < 0) {
            mybirthday += new Date(currentYear, currentMonth - 1, 0).getDate(); 
            mybirthmonth -= 1;
        }
    
        if (mybirthmonth < 0) {
            mybirthmonth += 12;
            mybirthyear -= 1;
        }
        
        yearText.textContent = mybirthyear;
        monthText.textContent = mybirthmonth;
        daysText.textContent = mybirthday;
    
    if(dayNumber > 31 || dayNumber <= 0){
        errorTextDay.textContent = "Must be a valid day";
        daysText.textContent = "--"
        dayInp.classList.add("errorbordercolor");
        errorDayColor.classList.add("errortextcolor");
    }else{
        errorTextDay.textContent = "";
        dayInp.classList.remove("errorbordercolor");
        errorDayColor.classList.remove("errortextcolor");
    }
    if(monthNumber > 12 || monthNumber <= 0){
        errorTextMonth.textContent = "Must be a valid month";
        monthText.textContent = "--"
        monthInp.classList.add("errorbordercolor");
        errorMonthColor.classList.add("errortextcolor");
    }else{
        errorTextMonth.textContent = "";
        monthInp.classList.remove("errorbordercolor");
        errorMonthColor.classList.remove("errortextcolor");
    }
    if(yearNumber > currentYear){
        errorTextYear.textContent = "Must be in the past"
        yearText.textContent = "--"
        yearInp.classList.add("errorbordercolor");
        errorYearColor.classList.add("errortextcolor");
    }else{
        errorTextYear.textContent = "";
        yearInp.classList.remove("errorbordercolor");
        errorYearColor.classList.remove("errortextcolor");
    }

   

})