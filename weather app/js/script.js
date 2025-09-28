// http://api.weatherapi.com/v1/current.json?key=a02156b9dc4e40f893954129253008&q=Madurai&aqi=no

const tempratureField = document.querySelector(".temp");
const locationField = document.querySelector(".time_location p");
const dateandTimeField = document.querySelector(".time_location span");
const conditionIcon = document.querySelector("#conditionIcon"); // <img>
const conditionField = document.querySelector(".condition p")
const searchField = document.querySelector(".search_area");
const form = document.querySelector("form");


form.addEventListener("submit", searchForLocation);



let target = 'Madurai';

const fetchResult = async (targetLocation) => {
    let url=`http://api.weatherapi.com/v1/current.json?key=a02156b9dc4e40f893954129253008&q=${targetLocation}&aqi=no`;
    const res = await fetch(url);
    const data = await res.json()
    console.log(data)

    let locationName = data.location.name;
    console.log(locationName);

    let time = data.location.localtime;
    console.log(time);

    let temprature = data.current.temp_c;
    console.log(temprature);

    let climateCondition = data.current.condition.text;
    console.log(climateCondition);

    let climateConditionIcon = data.current.condition.icon;

    updateResult(temprature, locationName, time, climateCondition, climateConditionIcon);
    
}

function updateResult(temprature, locationName, time, climateCondition, climateConditionIcon) {

    let splitDate = time.split(' ')[0];

    let splitTime = time.split(' ')[1];

    let currentDay = getDayName(new Date(splitDate).getDay());

    console.log(currentDay)    

    tempratureField.innerText = temprature;

    locationField.innerText = locationName;

    dateandTimeField.innerText = `${splitDate} ${currentDay} ${splitTime}`

    conditionField.innerText = climateCondition;

    conditionIcon.src = "https:" + climateConditionIcon;  

}

function searchForLocation(e){

    e.preventDefault();

    target = searchField.value; 

    fetchResult(target);
}

fetchResult(target);

function getDayName(number) {

     switch(number){
        case 0:
            return "sunday";

         case 1:
            return "Monday";
            
        case 2:
            return "Tuesday";
        
        case 3:
            return "Wednesday";

        case 4:
            return "Thursday";

        case 5:
            return "Friday";

        case 6:
            return "Saturday";

     }


}
