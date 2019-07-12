

const geolocation = async (callbackAction) =>{
    const geolocation = await navigator.geolocation;

    if (!geolocation) {
        callbackAction({error:'geolocation - Not Supported'});
        return false;
    }

    geolocation.getCurrentPosition((position)=>{
        callbackAction(
            {
                lat:position.coords.latitude,
                lng:position.coords.longitude,
                error:false
            }
            );

    }, () => {
        callbackAction({error:'geolocation - Not Supported'});
    });



};


export default geolocation;