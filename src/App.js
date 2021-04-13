import React, { Component } from 'react';
import {hot} from "react-hot-loader";
import Cards from "./components/Cards/Cards";
import Charts from "./components/Charts/Charts";
import Timer from "./components/Timer/Timer"
import styles from './App.module.css'; 
import {fetchData} from './API/API'
import Search from "./components/Search Box/Search"


    class App extends React.Component{
       
        state = {
            data:{},
         }
       

        async componentDidMount(){
            const data = await fetchData();
           this.setState({data:data});
        }
        render(){
    return (<div className={styles.container}>
   <Search />
   <Timer data={this.state.data}/>
   <Cards data={this.state.data}/>
   <Charts />
    </div>)
}
}




export default hot(module) (App);