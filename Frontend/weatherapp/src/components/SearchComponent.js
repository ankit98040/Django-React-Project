import React from 'react';

class SearchComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        city:"",
        country:""
    }}

    onCityChange = (e) => {
        this.setState({
            city:e.target.value
        })
    }

    onCountryChange = (e) => {
        this.setState({
            country:e.target.value
        })
    }

    

    render(){
        return(
            <div>
                <form style={{paddingLeft:"30px", paddingRight:"30px"}} >
                    <div className="input-field" >
                        <label style={{color:"white"}}>Enter City</label>
                        <input type="text" onChange={this.onCityChange}/>
                    </div>

                    <div className="input-field" >
                        <label style={{color:"white"}}>Enter Country</label>
                        <input type="text" onChange={this.onCountryChange}/>
                    </div>
                    <button onClick={() => this.props.search(this.state.city, this.state.country)} className="btn white" style={{color:"black", borderRadius:"20px", marginBottom:"20px"}}>Search</button>
                </form>
            </div>
        )
    }
}

export default SearchComponent;