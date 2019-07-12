import React,{useReducer,useState} from 'react';
import './ClockPage.scss';


import {initialState,reducer} from '../../../store';


import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import LinearProgress from '@material-ui/core/LinearProgress';

import WrapCityTime from '../../../components/wrap-city-time';

import {ApiServiceFretch} from '../../../utils';
import useEffectAsync from '../../../components/useEffectAsync';


const ClockPage = () =>{
    const apiDAta = new ApiServiceFretch();

    const [err,setErr] = useState(false);

    useEffectAsync(async () => {

        const getIpData = await apiDAta.getIpData(process.env.REACT_APP_GTOKEN);

        const itemData = getIpData ? JSON.parse(getIpData) : false;

        if(itemData.error){
            setErr(itemData.error.message);
            return;
        }


        if(itemData[0]){
            dispatch({ type: 'MY_CITY_NAME_AND_TIME_ZONE', payload: itemData[0]});
        }else{
            setErr(`it's impossible to identify your city`);
        }


    }, []);

    const [appState, dispatch] = useReducer(reducer, initialState);

    const {myCity:{
        name:myCityName,
        countryCode:myCityCountry,
        time:{
            timeZone:myCityTimeZone
        },
        cityList:myCityList},
        } =  appState;


    const myCityAction = async (d) =>{

        if(!d || !d.action){
            return false;
        }

        switch (d.action.toLowerCase()) {

            case 'newdatacity':

                dispatch({ type: 'MY_CITY_NAME_AND_TIME_ZONE', payload: d.data });
                return;

            case 'city':

                dispatch({ type: 'CHANGE_MY_CITY_NAME', payload: d.data });

                if(d.data.length > 2){

                    const getCityData = await apiDAta.getCityData(process.env.REACT_APP_GTOKEN,d.data.trim());
                    const getCityDataObj = JSON.parse(getCityData);

                    if(getCityDataObj.error){
                        setErr(getCityDataObj.error.message);

                    }else{

                        if(getCityDataObj.length !== 0){
                            dispatch({ type: 'ADD_MY_CITY_NAME', payload: getCityDataObj});
                        }

                    }

                }


                return;

            default:
                return false;
        }
    };

    return( <div className={`ClockPage`}>

        <Container fixed>
            <header>
                <Grid  container
                       spacing={0}
                       direction="column"
                       alignItems="center"
                       justify="center">

                    <Grid item xs={10}>
                        {
                            err ? <>&#9785; <span className={`line`}>{err}</span></> : false
                        }
                </Grid>
                </Grid>
            </header>

            <main>
            <Grid  container
                   spacing={0}
                   direction="column"
                   alignItems="center"
                   justify="center">

                <Grid item xs={12} md={5} lg={4}>

                    <WrapCityTime
                        callBack={myCityAction}
                        city={myCityName}
                        timeZone={myCityTimeZone}
                        cityList={myCityList}
                        country={myCityCountry}
                        onlyClock={myCityName ? '' : <div className={`locationSearch`}>location search..<LinearProgress className={`progress`}/></div>}/>
                </Grid>

            </Grid>
            </main>

            <footer>
                <Grid alignContent={'center'} container spacing={1}>
                    <Grid
                        item
                        xs={8} sm={9}>
                        <div className={`line`}/>
                    </Grid>
                    <Grid item xs={4} sm={3}>
                        by <a href="mailto:mrz@mrzlab630.pw" className={`mailto`}>mrZLab630</a>
                    </Grid>
                </Grid>
            </footer>
        </Container>

    </div>);
};

export default ClockPage;