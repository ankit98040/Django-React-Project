import React from 'react';

class RightComponent extends React.Component{


    render(){
        return(
            <div>
                <div class="weather-right">
				<ul>
					<li>
						<figure class="icons">
							<canvas id="partly-cloudy-day" width="60" height="60"></canvas>
						</figure>
						<h3>25 °C</h3>
						<div class="clear"></div>
					</li>
					<li>
						<figure class="icons">
							<canvas id="clear-day" width="40" height="40"></canvas>
						</figure>
						<div class="weather-text">
							<h4>WED</h4>
							<h5>27 °C</h5>
						</div>
						<div class="clear"></div>
					</li>
					<li>
						<figure class="icons">
							<canvas id="snow" width="40" height="40"></canvas>
						</figure>
						<div class="weather-text">
							<h4>THR</h4>
							<h5>13 °C</h5>
						</div>
						<div class="clear"></div>
					</li>
					<li>
						<figure class="icons">
							<canvas id="partly-cloudy-night" width="40" height="40"></canvas>
						</figure>
						<div class="weather-text">
							<h4>FRI</h4>
							<h5>18 °C</h5>
						</div>
						<div class="clear"></div>
					</li>
				</ul>
				
			</div>
            </div>
        )
    }
}

export default RightComponent;