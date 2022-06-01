import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {
    
      

    constructor(){
        super();

        this.state = {
           articles : [],
           loading : false
        }
    }
    async componentDidMount(){
        let url = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=ad0623a723a04ee68c22dd3c3ce08873";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
         this.setState({articles:parsedData.articles})
    }
    render() {
        return (
            <div className='container my-3'>
                <h1>News Monkey - Top Heading</h1>
                <div className='row'>
                    {this.state.articles.map((e)=>{
                        return <div className='col-md-4 my-3' key = {e.url}>
                        <NewsItem title={e.title.slice(0,45)} description={e.description.slice(0,88)}  imageUrl={e.urlToImage} newsUrl={e.url} />
                    </div>
                    })}
                    
                    
                </div>
            </div>
        )
    }
}

export default News