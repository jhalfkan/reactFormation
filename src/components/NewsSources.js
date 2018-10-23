import React, { Component } from 'react';

class NewsSources extends Component {
    state = {  }
    render() { 
        return ( 
            <select>
                <option value='hacker-news'>Hacker News</option>
                <option value='le-monde'>Le monde</option>
            </select>
         );
    }
}
 
export default NewsSources;