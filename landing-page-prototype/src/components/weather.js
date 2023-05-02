export function getUserLocation(){
    navigator.geolocation.getCurrentPosition(useWeatherAPI, handleError);
    
    // Success
    function useWeatherAPI(position) { 
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        
        let locationData = fetch("https://api.weather.gov/points/{latitude},{longitude}");
            locationData.then(response => response.json())
                        .then((data) => {
                            const weatherURL = data.properties.forecast;

                            console.log(weatherURL.shortForecast)});
                        
    }

    // Failure
    function handleError() { 
        if (!navigator.geolocation) {
            let error = 'Geolocation is not supported by your browser.';
        }
        else {
            let error = 'We encountered an error in retrieving your location, please re-try.'
        }
    }


}
