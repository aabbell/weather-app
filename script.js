const input = document.querySelector('input')
const button = document.querySelector('button')
const inputValue = input.value
const para = document.querySelector('p')
const weatherTab = document.querySelector('.weatherTab')
const cancle = document.getElementById('cancle')

// button.addEventListener('click', () => {
//     const inputValue = input.value
//     console.log(inputValue)
//     fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${inputValue}?key=HACPZMCYQHNUJJNMQGKEJFFJH` , {mode : 'cors'})
//         .then(function(response){
//             return response.json()
//         })
//         .then(function(response){
            
//             console.log(response.currentConditions.temp)
//             para.textContent = response.currentConditions.temp
//         })
//         .catch(error => console.log("error fetching the weather"))

// })

button.addEventListener('click', getWeather)

async function getWeather() {
    try{
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${inputValue}?key=HACPZMCYQHNUJJNMQGKEJFFJH` , {mode : 'cors'})
        const responseData = await response.json()
        console.log(inputValue)
        console.log((responseData.currentConditions.temp - 32) * 0.555)
        displayData(responseData)
        weatherTab.style.display = 'block'
        exitTab()
        
    }catch (error){
        console.log("Error has occured when fetchng the data")
}
}

function displayData(responseData){
    para.textContent = '' 
    const temp = Math.round((responseData.currentConditions.temp - 32) * 0.555)
    para.textContent = temp + " Cel"
}

function exitTab(){
    cancle.addEventListener('click', () => {
        weatherTab.style.display = 'none'
    })
}



