import React from 'react';
import './humanAnatomy.css'


function BodyMapComponent() {
    return (
        <div className="centered-ha-container">
            <img src={require('../images/humananatomy.png')} useMap="#bodymap"/>
            <map name="bodymap">
            <area shape="poly" coords="233,342,244,252,266,257,251,298,255,319,257,337,257,354,241,355" alt="Traps" href="#" id="arrow-area" />
            </map>
        </div>
    )
}

export default BodyMapComponent