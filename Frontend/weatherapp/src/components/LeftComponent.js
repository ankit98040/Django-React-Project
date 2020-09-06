import React from 'react';

class LeftComponent extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>
                			<div class="weather-left">
				<div class="weather-left-text">
					<h4>Los Angeles, USA </h4>
					<h5>Sunday, 12th March </h5>
				</div>
				<ul class="report">
					<li><a href="index.html#">25 °C</a></li>
					<li><a href="index.html#"><span>79</span> °F</a></li>
				</ul>
			</div>

            </div>
        )
    }
}

export default Left;