import React from 'react';

const Weather = (props) => {
    
        return (
            <div className='result'>
                { props.city && 
                <div>
                <p> Your Location : {props.city}, {props.country}</p>
                <p> Temperature : {Math.round(props.temp - 273.15)}°c</p> 
                </div>
                }

            <p>{ props.error }</p>
            </div>
        )


}


export default Weather;