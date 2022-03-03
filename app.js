 const API_KEY= `a98f319a09b9008222bbc55be0dcb827`;

const searchTemperature = () => {
     const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
    
} 

const displayTemperature = temperature => {
    console.log(temperature)
}