import {initialState} from "../index";


const reducer = (state = initialState, action) => {

    switch (action.type) {

        case 'MY_CITY_NAME_AND_TIME_ZONE':
            return !action.payload ? false : {
                ...state,
                myCity:{
                    ...state.myCity,
                    name:action.payload.city_name,
                    country:action.payload.country_name,
                    countryCode:action.payload.country_iso_code,
                    region:action.payload.subdivision_1_name,
                    regionCod:action.payload.subdivision_1_iso_code,
                    time: {
                        ...state.myCity.time,
                        timeZone: action.payload.time_zone
                    }

                },

            };

        case 'ADD_MY_CITY_NAME':

            return !action.payload || action.payload.length === 0
                                    ?
                                        false
                                    :   {
                                                ...state,
                                                myCity:{
                                                    ...state.myCity,
                                                    cityList:action.payload,

                                                }
                                        };

        case 'CHANGE_MY_CITY_NAME':
            return {
                ...state,
                myCity:{
                    ...state.myCity,
                    name:action.payload,
                    country:false,
                    countryCode:false,
                    region:false,
                    regionCod:false,
                    time:{
                        timeZone:false,
                        dayOrNight:false
                    },
                },

            };

        default:
            return state;

    }


};

export default reducer;