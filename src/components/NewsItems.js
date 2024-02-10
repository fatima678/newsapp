import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title, description, imageUrl, url} = this.props;
    return (
      <div className='my-3'>
        <div  className="card">
        <img src= {!imageUrl?"https://i.abcnewsfe.com/a/646bf65a-6db9-4d9e-be2f-ad4db1cd7ee6/killer-whales-trapped-nc-jt-240206_1707259991926_hpMain_16x9.jpg?w":imageUrl}  className="card-img-top" alt="..."/>
        <div  className="card-body">
            <h5  className="card-title">{title}...</h5>
            <p  className="card-text">{description}...</p>
            <a rel="noreferrer" href={url} target="_blank"  className="btn btn-sm btn-dark">Read more</a>
            
          
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItems
