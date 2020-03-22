import React, { Component } from 'react'
import CVData from 'novelcovid'

export default class API extends Component {
    constructor() {
        this.setState;
    }

    componentDidMount() {
        // (async () => {
        //     let data = await CVData.all();
        
        //     // Since we are using an async function, we need to return the data.
        //     return console.log(`
        //     Total Cases: ${data.cases}
        //     Total Deaths: ${data.deaths}
        //     Total Recovered: ${data.recovered}
        //     Last Updated on: ${data.updated}`);
        // })();
        fetch('https://corona.lmao.ninja/all')
        .then(res => res.json())
        .then((data) => {
            console.log(data)
        })
        .catch(console.log)
    }

}