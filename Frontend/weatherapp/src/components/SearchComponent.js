import React from 'react';

class SearchComponent extends React.Component{
    

    render(){
        return(
            <div>
                <form>
                    <input type="text" placeholder="Enter City Name" /><br/>
                    <input type="text" placeholder="Enter City Name" /><br/>
                    <button>Search</button>
                </form>
            </div>
        )
    }
}

export default SearchComponent;