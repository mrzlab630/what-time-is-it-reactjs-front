const initialState = {
    myCity:{
        name:false,
        country:false,
        countryCode:false,
        region:false,
        regionCod:false,
        time:{
            timeZone:false
        },
        cityList:[
            {
            city_name: "New York",
            continent_code: "NA",
            continent_name: "North America",
            country_iso_code: "US",
            country_name: "United States",
            geoname_id: 5128581,
            is_in_european_union: false,
            locale_code: "en",
            metro_code: "501",
            subdivision_1_iso_code: "NY",
            subdivision_1_name: "New York",
            subdivision_2_iso_code: null,
            subdivision_2_name: null,
            time_zone: "America/New_York"},
            {
                city_name: "Moscow",
                continent_code: "EU",
                continent_name: "Europe",
                country_iso_code: "RU",
                country_name: "Russia",
                geoname_id: 524901,
                is_in_european_union: false,
                locale_code: "en",
                metro_code: null,
                subdivision_1_iso_code: "MOW",
                subdivision_1_name: "Moscow",
                subdivision_2_iso_code: null,
                subdivision_2_name: null,
                time_zone: "Europe/Moscow"
            },
            {
                city_name: "London",
                continent_code: "EU",
                continent_name: "Europe",
                country_iso_code: "GB",
                country_name: "United Kingdom",
                geoname_id: 2643743,
                is_in_european_union: true,
                locale_code: "en",
                metro_code: null,
                subdivision_1_iso_code: "ENG",
                subdivision_1_name: "England",
                subdivision_2_iso_code: null,
                subdivision_2_name: null,
                time_zone: "Europe/London",
            },
            {
                city_name: "Dubai",
                continent_code: "AS",
                continent_name: "Asia",
                country_iso_code: "AE",
                country_name: "United Arab Emirates",
                geoname_id: 292223,
                is_in_european_union: false,
                locale_code: "en",
                metro_code: null,
                subdivision_1_iso_code: "DU",
                subdivision_1_name: "Dubai",
                subdivision_2_iso_code: null,
                subdivision_2_name: null,
                time_zone: "Asia/Dubai"}],
        },

};


export default initialState;