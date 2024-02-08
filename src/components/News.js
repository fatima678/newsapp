import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {

  constructor(){
    super();
    console.log("i am a constructor fron News component");
    this.state={
      articles:[],
      loading:false
    }
  }
  // it is a lifecycle method, it will run after render method
  async componentDidMount(){
  
    let url= "https://newsapi.org/v2/top-headlines?country=us&apiKey=b22077b39bad439abf1ce3758fa4d1fc"
    let data= await fetch(url);
    let parsedData= await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
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
    
      </div>
    )
  }
}

export default News
