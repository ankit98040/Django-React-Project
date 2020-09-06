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
					<h4>{this.props.city}, {this.props.country} </h4>
					<h5>Sunday, 12th March </h5>
				</div>
				<ul class="report">
					<li><a href="index.html#">25 °C</a></li>
					<li><a onClick={this.props.search}><img src="https://img.icons8.com/pastel-glyph/2x/search.png" width="30" alt="search" /></a></li>
				</ul>
			</div>

            </div>
        )
    }
}

export default LeftComponent;