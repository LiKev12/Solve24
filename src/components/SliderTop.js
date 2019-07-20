import React from 'react';
import { Slider } from 'react-mdl';

class SliderTop extends React.Component {

    render() {
        return (
            <div>
                <h1>Top Slider</h1>
                {/* Default slider */}
                <Slider min={0} max={100} defaultValue={0} />

                {/* Slider with initial value */}
                <Slider min={0} max={100} defaultValue={25} />
            </div>
        )
    };
}

export default SliderTop;