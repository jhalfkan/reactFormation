import React, { Component } from 'react';

class NewsSources extends Component {
    state = {  }
    render() { 
        return ( 
            <select onChange={this.handleChange}>
                <option value='hacker-news'>Hacker News</option>
                <option value='le-monde'>Le monde</option>
            </select>
         );
    }

    handleChange = (ev) => {
        console.log('Changement de source');
    }
}
 
export default NewsSources;