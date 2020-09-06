import React from 'react';
import LeftComponent from './LeftComponent';
import RightComponent from './RightComponent';
import SearchComponent from './SearchComponent';


class MainPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            component: "search"
        }
    }

    callSearchForm = () => {
        this.setState({
            component:"home"
        })
    }


    render(){
       


        return(
            <div>
                <div class="w3ls-weather">
		<h1>Ankit's Weather App</h1>
		<div class="w3ls-weather-agileinfo"> 
			
			{
                this.state.component === "search" ? <div><SearchComponent search={this.callSearchForm} /></div> : <div><LeftComponent search={this.callSearchForm} /> <RightComponent /></div>
            }

			<div class="clear"></div>
		</div>  
	</div>	

            </div>
        )
    }
}

export default MainPage;