import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  articles=[
      {
      "source": {
      "id": "bbc-news",
      "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Rio de Janeiro: Dengue spike prompts health emergency ahead of Carnival",
      "description": "The city is seeing a huge rise in the cases of dengue fever just days before its colourful Carnival.",
      "url": "https://www.bbc.co.uk/news/world-latin-america-68215360",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1639C/production/_132563019_18b8cceb45679c50df886cd3486b2aad01efbd430_0_5000_32281000x646.jpg",
      "publishedAt": "2024-02-06T18:52:20.3671814Z",
      "content": "The authorities in the Brazilian city of Rio de Janeiro have declared a health emergency as they try to contain the spread of dengue fever. \r\nThe incidents of the mosquito-borne disease quadrupled in… [+2090 chars]"
      },
      {
      "source": {
      "id": "bbc-news",
      "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Michigan school shooter's mother guilty of involuntary manslaughter",
      "description": "Jennifer Crumbley, 45, is the first US parent ever convicted over a mass shooting by their child.",
      "url": "https://www.bbc.co.uk/news/world-us-canada-68223118",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/83B3/production/_115651733_breaking-large-promo-nc.png",
      "publishedAt": "2024-02-06T18:52:18.1626424Z",
      "content": "A jury has found a Michigan mother guilty of involuntary manslaughter for failing to stop her son from carrying out a deadly school shooting.\r\nJennifer Crumbley, 45, is the first US parent convicted … [+861 chars]"
      },
      {
      "source": {
      "id": "bbc-news",
      "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Prince William can show his own version of royalty",
      "description": "The King's illness will make the Prince of Wales's role as heir even more important.",
      "url": "https://www.bbc.co.uk/news/uk-68219415",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/D261/production/_132575835_gettyimages-1670086570.jpg",
      "publishedAt": "2024-02-06T18:52:15.632023Z",
      "content": "Prince William is at a crossroads. He hasn't spoken publicly yet about the King's cancer diagnosis, but he must have been thinking long and hard about it since his father gave him the news.\r\nFor anyo… [+3525 chars]"
      },
      {
      "source": {
      "id": "bbc-news",
      "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Tucker Carlson: Russian state media revels in Moscow visit",
      "description": "The ex-Fox News host is in Moscow, as speculation grows that he may interview Vladimir Putin.",
      "url": "https://www.bbc.co.uk/news/world-europe-68221347",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/54FD/production/_132575712_gettyimages-1534161001.jpg",
      "publishedAt": "2024-02-06T17:52:11.1783348Z",
      "content": "Former Fox News host Tucker Carlson's visit to Moscow has received near-constant coverage in Russia's state media, amid speculation that he may interview President Vladimir Putin.\r\nSocial media has a… [+4140 chars]"
      },
      {
      "source": {
      "id": "bbc-news",
      "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Storm-battered California told to brace for more rain",
      "description": "A powerful storm that battered the state over the weekend is expected to bring more rain on Tuesday.",
      "url": "https://www.bbc.co.uk/news/world-us-canada-68206819",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/D83D/production/_132575355_gettyimages-1989095800.jpg",
      "publishedAt": "2024-02-06T16:52:19.1626906Z",
      "content": "Media caption, Watch: LA fire department rescue man from surging river\r\nThe record rain pounding California since Sunday has begun to ease, but officials have warned that mudslides and flooding remai… [+3896 chars]"
      },
      {
      "source": {
      "id": "bbc-news",
      "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Donald Trump has no presidential immunity from election fraud charges, court rules - live updates",
      "description": "The former president will not be granted immunity and won't be shielded from criminal prosecution on election fraud.",
      "url": "https://www.bbc.co.uk/news/live/world-us-canada-68023315",
      "urlToImage": "https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.3.0/bbc_news_logo.png",
      "publishedAt": "2024-02-06T16:22:19.1943145Z",
      "content": "US Special Counsel Jack Smith has charged Donald Trump with conspiring to overturn Joe Biden's victory in the 2020 election and committing fraud to stay in office.\r\nThe trial in that case was initial… [+986 chars]"
      },
      
      
      
      
  ]
  constructor(){
    super();
    console.log("i am a constructor fron News component");
    this.state={
      articles:this.articles, // access article variable by this.article
      loading:false
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
              <NewsItems  title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} 
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
