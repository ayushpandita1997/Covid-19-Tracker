//Country Data//

const url = 'https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true';

export const fetchData = async () => {

    try {
        const api2Data = await fetch(url);
        const api2Dataa = await api2Data.json();
        // console.log(api2Dataa);


        const apiData = await fetch(`https://api.covid19india.org/data.json`);
        const { cases_time_series } = await apiData.json();
        // console.log(cases_time_series);




        const modifiedData = {
            // totalConfirmed: cases_time_series[419].totalconfirmed,
            // totalRecovered: cases_time_series[419].totalrecovered,
            // totalDeceased: cases_time_series[419].totaldeceased,
            // dailyConfirmed: cases_time_series[419].dailyconfirmed,
            // dailyRecovered: cases_time_series[419].dailyrecovered,
            // dailyDeceased: cases_time_series[419].dailydeceased,
            // // lastUpdatedAtApify: api2Dataa.lastUpdatedAtApify
            totalActive: api2Dataa.activeCases,
            dailyActive: api2Dataa.activeCasesNew,
            totalRecovered: api2Dataa.recovered,
            dailyRecovered: api2Dataa.recoveredNew,
            totalDeceased: api2Dataa.deaths,
            dailyDeceased: api2Dataa.deathsNew,
            totalConfirmed: api2Dataa.totalCases,
            lastUpdatedAtApify: api2Dataa.lastUpdatedAtApify,
            dailyConfirmed: cases_time_series[536].dailyconfirmed
        }




        return modifiedData;
    } catch (err) {
        console.log(`Something went wrong, ${err.message}`);
    }
}


//State Data//

export const fetchCountries = async () => {
    try {

        const api3Data = await fetch(url);
        const { regionData } = await api3Data.json();
        console.log(regionData);

        const rawData = regionData.map((a) => {
            console.log(a);
        })

    } catch (err) {
        console.log(`Something went wrong, ${err.message}`);
    }
}
fetchCountries();