import React, {useState,useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import {fetchCountries} from '../../API/API.js'
import {Bar} from 'react-chartjs-2';
import styles from '../Charts/Charts.module.css';


// const Charts = ()=>{
    
    
//     const [fetchedCountries, setFetchedCountries] = useState([]);
//     useEffect(()=>{
// const fetchingCountries = async()=>{
//     setFetchedCountries(await fetchCountries);
// }
// fetchingCountries();
//     },[setFetchedCountries]);

// return(
// <FormControl className={styles.formControl}>
//     <NativeSelect >
//         <option value="global">Global</option>
//     </NativeSelect>
// </FormControl>
// )
// };

const Charts = ()=>{
    return(
        <div>
            <p className="formControl">Created By <a href="https://github.com/ayushpandita1997?tab=repositories">AYUSH PANDITA</a></p>
        </div>
    )
}


export default Charts;