import React, { Component } from 'react';
import axios from 'axios';

class NewsSources extends Component {

    constructor() {
        super();
        this.state = { 
            data: []
         }
    }

    render() { 
        return ( 
            <select onChange={this.handleChange}>
                {this.state.data.map(
                    source => (<option key={source.id} value={source.id}>{source.name}</option>)
                )}
            </select>
         );
    }

    handleChange = (ev) => {
        this.props.onChange(ev.target.value);
    }

    componentDidMount() {
        this.loadData();
    }

    loadData = async () => {
        try {
            const response = await axios.get(`https://newsapi.org/v2/sources?language=${this.props.language}&apiKey=${this.props.apiKey}`);
            if(response.status === 200){
                this.setState({
                    data: response.data.sources
                })
            }
        } catch (error) {
            console.log('Something wrong with fetching: ' + error);
        }
    }
}
 
export default NewsSources;