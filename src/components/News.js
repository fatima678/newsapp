import React, { Component } from 'react'
import NewsItems from './NewsItems'
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps={
    country:'in',
    pageSize:8,
    category:'general'
  }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }

  constructor(props){
    super(props);
    console.log("i am a constructor from News component");
    this.state={
      articles:[],
      loading:false,
      page:1
    }
    document.title=`${this.props.category} - NewsApp`;
  }

async UpdateNews(){
  this.props.setProgress(10);
  const url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b22077b39bad439abf1ce3758fa4d1fc&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  this.setState({loading: true});
  let data= await fetch(url);
  this.props.setProgress(30)
  let parsedData= await data.json()
  this.props.setProgress(50)
  console.log(parsedData);
  this.setState({articles: parsedData.articles,totalResuts:parsedData.totalResuts,loadinga:false})
  this.props.setProgress(100);

}


// it is a lifecycle method, it will run after render method
// This line uses the fetch() function to make an HTTP GET request to the specified URL.
// The await keyword is used to wait for the promise returned by fetch() to resolve. 
// When resolved, data will contain the response from the server.

  async componentDidMount(){
    this.UpdateNews();
  }
    handlePrevClick= async ()=>{
    this.setState({page: this.state.page - 1})
    this.UpdateNews();

  }
    handleNextClick= async ()=>{
    this.setState({page: this.state.page+ 1})
    this.UpdateNews();
  }
  
  render() {
    return (
      <div className='container my-3'>
      <h2 className='text-center'>NewsApp - Top {this.props.category} headlines</h2>
      
    
          <div className='row'>
             {/* iterate articles , map is an array method,  jb b map use krty hn tu elements ko unique key deni prti ha */}
             {this.state.articles.map((element)=>{        
              return <div className='col-md-4' key={element.url}> 
              <NewsItems  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} 
                url={element.url} author={element.author} date={element.publishedAt}/>
                {/* we use slice method to limit the character in title and in description */}
            </div>

             })
         }     
        </div>
        <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
        <button  disabled={this.state.page +1 > Math.ceil(this.state.totalResuts/this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
