import React, { Component } from 'react';

class Settings extends Component {
    constructor(){
        super();
        this.state = { 
            language: ''
         }
    }

    render() { 
        return ( 
            <div className="settingsMenu">
                <div className="settingsItem">
                    <label htmlFor="langInput">Languages</label>
                    <select id="langInput" onChange={this.handleChange} value={this.props.language}>
                        <option value="en">en</option>
                        <option value="fr">fr</option>
                        <option value="it">it</option>
                        <option value="ru">ru</option>
                        <option value="de">de</option>
                        <option value="no">no</option>
                    </select>
                </div>
                <div className="settingsItem">
                    <label htmlFor="keyInput">Api Key</label>
                    <input id="keyInput" onChange={this.handleChange} type="text" value={this.props.apiKey} />
                </div>
            </div>
         );
    }

    handleChange = (ev) => {
        this.props.onChange(ev.target.value);
        this.setState({
            language: ev.target.value
        });
    }
}
 
export default Settings;