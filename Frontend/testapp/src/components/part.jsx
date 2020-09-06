import React from 'react';

class LoadData extends React.Component {

    constructor(props){
        super(props);
        this.state  = {
            name: "ankit",
            num: 1
        }
    }

    changeName = () => {
        var name = ""
        var Num = 0
        if (this.state.num === 1){
            name="Anulekha"
            Num=2
        }else {
            name="Ankit"
            Num=1  
        }
        this.setState({
            name:name,
            num:Num
        })
    }

    render() {
        return (
            <div>
                <h2> i am from class component {this.state.name}</h2>
                <button onClick={this.changeName}>Click Me</button>
            </div>
        )
    }
}

export default LoadData;