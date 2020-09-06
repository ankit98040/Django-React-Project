import React from 'react';
import LeftComponent from './LeftComponent';
import RightComponent from './RightComponent';

class MainPage extends React.Component{

    callSearchForm = () => {
        alert("you are calling search form");
    }


    render(){
        return(
            <div>
                <div class="w3ls-weather">
		<h1>Ankit's Weather App</h1>
		<div class="w3ls-weather-agileinfo"> 
			
			<LeftComponent search={this.callSearchForm} />
            <RightComponent />

			<div class="clear"></div>
		</div>  
	</div>	

            </div>
        )
    }
}

export default MainPage;