import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {

  constructor(){
    super();
    console.log("i am a constructor fron News component");
    this.state={
      articles:[],
      loading:false,
      page:1
    }
  }
// it is a lifecycle method, it will run after render method
// This line uses the fetch() function to make an HTTP GET request to the specified URL.
// The await keyword is used to wait for the promise returned by fetch() to resolve. 
// When resolved, data will contain the response from the server.
  async componentDidMount(){
  
    let url= "https://newsapi.org/v2/top-headlines?country=us&apiKey=b22077b39bad439abf1ce3758fa4d1fc&page=1pageSize=20";
    let data= await fetch(url);
    let parsedData= await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles,totalResuts:parsedData.totalResuts})
  }
    handlePrevClick= async ()=>{
    console.log("previous");  
    let url= `https://newsapi.org/v2/top-headlines?country=us&apiKey=b22077b39bad439abf1ce3758fa4d1fc&page=${this.state.page - 1}&pageSize=20`;
    let data= await fetch(url);
    let parsedData= await data.json()
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles:parsedData.articles
    })
    

  }
    handleNextClick= async ()=>{
    console.log("Next");
    // Math.ceil return the next intergr like 4.7 it return 5
    if(this.state.page +1 > Math.ceil(this.state.totalResuts/20)){

    }
    else{
      let url= `https://newsapi.org/v2/top-headlines?country=us&apiKey=b22077b39bad439abf1ce3758fa4d1fc&page=${this.state.page + 1}&pageSize=20`;
      let data= await fetch(url);
      let parsedData= await data.json()
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles:parsedData.articles
      })

    }
   

  }
  
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsApp - Top Headlines</h2>
          <div className='row'>
             {/* iterate articles , map is an array method,  jb b map use krty hn tu elements ko unique key deni prti ha */}
             {this.state.articles.map((element)=>{        
              return <div className='col-md-4' key={element.url}> 
              <NewsItems  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} 
                url={element.url}/>
                {/* we use slice method to limit the character in title and in description */}
            </div>

             })
         }     
        </div>
        <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
