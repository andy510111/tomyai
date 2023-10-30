import React from 'react';

function BodyMapComponent() {
    return (
        <div>
            <img src={require('../images/humananatomy.png')} useMap="#body-map" />
            <area shape="rect" coords="x1,y1,x2,y2" alt="Head" href="#" />
            <area shape="rect" coords="x1,y1,x2,y2" alt="Torso" href="#" /> 
        </div>
    )
}

export default BodyMapComponent