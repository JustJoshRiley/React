import React from 'react';
import './POPOSList.css'
import POPOSSpace from './POPOSSpace';

function POPOSList() {
    return (
        <div className="POPOSList">
            <POPOSSpace 
            name = "50 California Street"
            address = "50 California Street"
            image = "50-california-st.jpg"
            />
            <POPOSSpace />
            <POPOSSpace />
            <POPOSSpace />
            <POPOSSpace />
        </div>
    )
}

export default POPOSList;
