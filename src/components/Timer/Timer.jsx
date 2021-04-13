import React from 'react';
import '../Timer/Timer.module.css'

const Timer = (props)=>{
    return(
    <div className="card">
<p className="fontType">Last Updated on {new Date(props.data.lastUpdatedAtApify).toDateString()}</p>
    </div>)
};

export default Timer;