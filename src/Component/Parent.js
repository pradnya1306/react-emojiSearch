import React, { Component } from 'react';
import Emoji1 from '../Emoji1.json'

class Parent extends Component {
    constructor() {
        super();
        this.state = {
            filteredEmoji: ""
        }

    }
    
    handleChange = (e) => {
        
        this.setState({
                    filteredEmoji:e.target.value
                })
    }

    render() {
        return (
            <div>
                <h1>Emoji search</h1>

                <input type="text" id='input1' placeholder='search here'  onChange={this.handleChange} />
                {Emoji1.filter((data) => {
 
                    return (
                        
                         ((data.keywords.toLowerCase().includes(this.state.filteredEmoji.toLowerCase()))||
                        (data.title.toLowerCase().includes(this.state.filteredEmoji.toLowerCase()))||
                        (data.symbol.toLowerCase().includes(this.state.filteredEmoji.toLowerCase())))
                    )
                })
                    .map((data) => {
                        return (
                            <div className="box">
                                {data.symbol}
                                {data.title}
                                
                            </div>
                        )
                    })}
            </div>
        )
    }
}

export default Parent;