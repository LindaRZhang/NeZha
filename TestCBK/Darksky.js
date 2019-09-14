//async function = and then use keyword:await to store result in variable call response
let lat, lon;
if ('geolocation' in navigator){//getting location
    console.log("Location Availble");
    navigator.geolocation.getCurrentPosition(async position =>{
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        document.getElementById("latitude").textContent = lat;
        document.getElementById("longtitude").textContent = lon;
        //const api_url=`weather/${lat},${lon}`;
        const api_url = `/weather`;
        const response = await fetch(api_url); 
        const json = await response.json();
        console.log(json);
    }
                                             });
}
else{
    console.log("Location not availble ahhh");
}





