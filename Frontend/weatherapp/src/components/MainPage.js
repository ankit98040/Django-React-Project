import React from 'react';
import LeftComponent from './LeftComponent';
import RightComponent from './RightComponent';
import SearchComponent from './SearchComponent';


class MainPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            component: "search",
            city:"",
            country:""
        }
    }

    callSearchForm = (city, country) => {
        this.setState({
            component:"home",
            city:city,
            country:country
        })
    }


    render(){
       


        return(
            <div>
                <div class="w3ls-weather">
		<h1>Ankit's Weather App</h1>
		<div class="w3ls-weather-agileinfo"> 
			
			{
                this.state.component === "search" ? <div><SearchComponent search={this.callSearchForm} /></div> : <div><LeftComponent search={this.callSearchForm} city={this.state.city} country={this.state.country} /> <RightComponent /></div>
            }

			<div class="clear"></div>
		</div>  
	</div>	

            </div>
        )
    }
}

export default MainPage;