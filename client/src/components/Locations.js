import React, { Component } from 'react';
import * as Data from "../data/orlando-food-banks.json";

// class Locations extends Component { 

//why dont we need render(){?
// client/src/index.js?  

export default function Locations() { 
 console.log(Data)
    return (
        <div className = "container">
                { Data.features.map(data => {
                    return (
                        <h4>{ data.properties.NAME }</h4>
                    )
                })}
            </div>
    )}



