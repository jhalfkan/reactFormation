import React, { Component } from 'react';
import NewsArticle from './NewsArticle';
import uuidv1 from 'uuid';
import axios from 'axios';

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

    componentDidMount() {
        this.loadData();
    }

    loadData = async () => {
        try {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?sources=${this.props.source}&apiKey=${this.props.apiKey}`);
            console.log(response);
            if(response.status === 200){
                this.setState({
                    data: response.data.articles
                })
            }
        } catch (error) {
            console.log('Something wrong with fetching: ' + error);
        }
    }

    /* STYLE SHEET */
    Styles = {
        Newslist: {
            display: 'Flex',
            flexWrap: 'wrap'
        },
        Article: {
            margin: '1em',
            maxWidth: '40%'
        }
    } 
}
 
export default NewsList;