let searchLocationInput=document.getElementById("searchLocation")
let t=document.getElementById("t")



if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(pos){
        let lat=pos.coords.latitude;
        let long=pos.coords.longitude;
        weather(`${lat},${long}`)
    })
}
async function weather(query){
    let response=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=20cfad0fb0914280994181010241110&q=${query}&days=3`)
    let data= await response.json()
    display(data)
    displayTomm(data)
    displayThird(data)

}
weather('cairo')

function display(data){
    lettoday=data.current.last_updated
    let date=new Date()
    let nameDay=date.toLocaleString('en-us',{weekday:'long'})
    let day=date.getDate()
    let month=date.toLocaleString('en-us',{month:'long'})
    let temp=data.current.temp_c+`C`
    let cityName=data.location.name

        firstDay.innerHTML=nameDay
        firstDate.innerHTML=`${day} ${month}`
        temperature.innerHTML=temp
        city.innerHTML=cityName
}

function displayTomm({forecast}){
secondDay.innerHTML=new Date(forecast.forecastday[1].date).toLocaleString('en-us',{weekday:'long'})
highdegree.innerHTML=forecast.forecastday[1].day.maxtemp_c+`C`
smalldegree.innerHTML=forecast.forecastday[1].day.mintemp_c+`C`
statuss.innerHTML=forecast.forecastday[1].day.condition.text
img.setAttribute('src',forecast.forecastday[1].day.condition.icon)

}
function displayThird({forecast}){
    thirdDay.innerHTML=new Date(forecast.forecastday[2].date).toLocaleString('en-us',{weekday:'long'})
    highdegree3.innerHTML=forecast.forecastday[2].day.maxtemp_c+`C`
    smalldegree3.innerHTML=forecast.forecastday[2].day.mintemp_c+`C`
    status2.innerHTML=forecast.forecastday[2].day.condition.text
    img2.setAttribute('src',forecast.forecastday[2].day.condition.icon)
   
    
}

searchLocationInput.addEventListener('input',function(e){
weather(e.target.value)
console.log(e.target.value);

})

