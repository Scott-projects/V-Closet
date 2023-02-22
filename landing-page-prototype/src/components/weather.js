export function getUserLocation(){
    navigator.geolocation.getCurrentPosition(useWeatherAPI, handleError);
    
    // Success
    function useWeatherAPI(position) { 
        latitude = position.coordinates.latitude;
        longitude = position.coordinates.longitude;
        fetch("https://api.weather.gov/points/{latitude},{longitude}")
            .then((response) => response.json())
            .then((weatherData) => {
                //TODO: got the weather object, not sure what to do next haha
            })
    }

    // Failure
    function handleError() { 
        if (!navigator.geolocation) {
            error = 'Geolocation is not supported by your browser.';
        }
        else {
            error = 'We encountered an error in retrieving your location, please re-try.'
        }
    }
    //TODO return foo
}
