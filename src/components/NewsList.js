import React, { Component } from 'react';
import NewsArticle from './NewsArticle';
import uuidv1 from 'uuid';

class NewsList extends Component {
    constructor(){
        super();
        this.state = { 
            data: [
                {title:'Lorem lipsum', url:'http://google.be', urlToImage: 'https://www.fillmurray.com/g/400/300' },
                {title:'Lorem lipsum', url:'http://google.be', urlToImage: 'https://www.fillmurray.com/g/400/300' }
            ]
         }
    }
    
    render() { 
        return ( 
            <div style={this.Styles.Newslist}>
                {this.state.data.map(
                    news => <NewsArticle content = {news} style={this.Styles.Article} key={uuidv1()}  />
                )}
            </div>
         );
    }

    /* STYLE SHEET */
    Styles = {
        Newslist: {
            display: 'Flex'
        },
        Article: {
            margin: '1em'
        }
    } 
}
 
export default NewsList;