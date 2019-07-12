import React,{useState} from 'react';
import TextField from "@material-ui/core/TextField";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import PropTypes from 'prop-types';
import Clock from '../clock';

import './wrap-city-time.scss';

import moment from "moment";
import tz from "moment-timezone";
import 'moment/locale/ru';




const WrapCityTime = ({locale = 'en',callBack,onlyClock,city,country,timeZone,cityList=[],date}) =>{

    moment.locale(locale);

    timeZone = timeZone || moment.tz.guess(true);

    const momentTz    = moment().tz(timeZone);

    const myDayAndTime = {
                            day:{
                                dw:momentTz.format('ddd'),
                                d:momentTz.format('DD'),
                                mw:momentTz.format('MMM'),
                                y:momentTz.format('YYYY')
                            },
                            time:{
                                h:momentTz.format('HH'),
                                m:momentTz.format('mm'),
                                s:momentTz.format('ss'),
                                amPm:momentTz.format('A'),
                                z:momentTz.format('Z'),
                            }
                        };


    const showDate  = date || myDayAndTime.day;


    const [cityHint,setCityHint]    =    useState([]);


    const selectFiltrCityName = (value) =>{


        callBack({action:'newdatacity',data:value});

        setCityHint([]);

    };

const findCity = (e) =>{

    const enterData = e.target.value.toLowerCase();

    callBack({action:'city',data:enterData || ' '});

    const filter = cityList.filter(itm => {
        return itm.city_name.toLowerCase().includes(enterData.trim());
    });



    const addFiltrRender = filter.map( (itm,idx) =>(
               <li key={`addFiltrRender-${idx}`} onClick={() => selectFiltrCityName(itm)}>{itm.city_name} {itm.country_iso_code}</li>
                    ));

    setCityHint(addFiltrRender);
};


    return(<div className={`WrapSityTime`}>
        <Container>
            <Grid  container
                   spacing={0}
                   direction="column">

                <Grid item xs={12}>
        <div className={`city-hint`}>
            <ul>
            {
                cityHint
            }
            </ul>
        </div>
                </Grid>

                {
            onlyClock ?
                <Grid item xs={11} sm={7} md={10}>
                    {
                        onlyClock
                    }
                </Grid>
                :
                <Grid container spacing={1}>
                 <Grid item xs={10} sm={7} md={9}>
                    <TextField
                        id="my-city"
                        className={`city`}
                        value={city || 'city name'}
                        onChange={findCity}
                        onFocus={(event) => event.target.select()}
                    />
                 </Grid>
                <Grid item xs={2} sm={5} md={3}>
                    <Typography component={`div`} className={`country`}>
                    {
                        country
                    }
                    </Typography>
                </Grid>
                </Grid>
        }

                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Clock timeZone={timeZone}/>
                    </Grid>
                    <Grid item xs={11} sm={8} md={10}>
                        <Typography component={`div`} className={`date`}>
                            {showDate.dw} {showDate.d} {showDate.mw} {showDate.y}
                        </Typography>
                    </Grid>
                </Grid>


            </Grid>
        </Container>
    </div>);
};

WrapCityTime.prototype = {
                                locale:PropTypes.strict,
                                callBack:PropTypes.object,
                                onlyClock:PropTypes.oneOfType([
                                    PropTypes.string,
                                    PropTypes.bool,
                                    PropTypes.element
                                ]),
                                city:PropTypes.strict,
                                country:PropTypes.strict,
                                cityList:PropTypes.array,
                                date:PropTypes.object,
                                timeZone:PropTypes.strict,
                            };


export default WrapCityTime;