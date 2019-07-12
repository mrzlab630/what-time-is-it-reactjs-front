import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import moment from "moment";
import 'moment/locale/ru';
import tz from "moment-timezone";

import './clock.scss';



const Clock = ({locale = 'en',timeZone}) =>{

    moment.locale(locale);

    const [, setUpdateClock] = useState();

    timeZone = timeZone || moment.tz.guess(true);

    const momentTz    = moment().tz(timeZone);


    const timeShow = {
                        h:momentTz.format('HH'),
                        m:momentTz.format('mm'),
                        s:momentTz.format('ss'),
                        amPm:momentTz.format('A'),
                        z:momentTz.format('Z'),
                    };


    useEffect(() => {
        let id = setInterval(()=> { setUpdateClock(new Date()); }, 1 * 1000);
        return () => clearInterval(id);
    }, []);



    return(<div className={`Clock`}>

        <div className={`time-dotted`}>

            <span className={`time-hour`}>{timeShow.h}</span><span className='time-dotted-pulsate'>:</span>{timeShow.m}<span className='time-dotted-pulsate'>:</span>{timeShow.s}

        </div>
    </div>);
};






Clock.prototype = {
                        locale:PropTypes.strict,
                        timeZone:PropTypes.strict,
                    };

export default Clock;