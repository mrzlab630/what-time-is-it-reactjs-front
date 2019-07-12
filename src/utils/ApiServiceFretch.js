export default class ApiServiceFretch {

    async getResurce(gToken,action = 'help',method = 'post',body = false){

        try {

            const dataToSent = body ? JSON.stringify(body) : null;

            const res = await  fetch(`https://wtisit.mrzlab630.pw:4419/api/v1/${action}`, {
                method: method,
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'gToken':gToken
                },
                body: dataToSent
            });


            if(!res.ok){

                console.log(res);
                throw new Error(`Could not fretch ${action}, received ${res.status}`)
            }
            return await res.text();



        }catch (err) {
            return {
                error:{
                    id:'ApiServiceFretch',
                    data:err.message
                }
            }
        }



    }
    getIpData(gToken){
        return this.getResurce(gToken,`getipdata`,'get');
    }

    getCityData(gToken,data){
        return this.getResurce(gToken,`getCityData`,'post',{
                                                                            action:'getcitydata',
                                                                            nocache:new Date().getTime(),
                                                                            data:{
                                                                                city:data
                                                                            }
                                                                        });
    }




//http://gd.geobytes.com/GetCityDetails

}

