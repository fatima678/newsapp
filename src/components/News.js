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
      {
      "source": {
      "id": "bbc-news",
      "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Police to pay $1.9m to black family held at gunpoint in Colorado",
      "description": "The 2020 arrest in Colorado was recorded by bystanders, which showed children handcuffed and crying.",
      "url": "https://www.bbc.co.uk/news/world-us-canada-68211285",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/53F2/production/_113809412_gettyimages-148988270.jpg",
      "publishedAt": "2024-02-06T15:37:15.9595904Z",
      "content": "A black mother and four children, who were held at gunpoint by police in Colorado, have been awarded $1.9m (£1.5m) in a settlement.\r\nBrittney Gilliam was wrongfully stopped in 2020 at a parking lot, … [+1970 chars]"
      },
      {
      "source": {
      "id": "bbc-news",
      "name": "BBC News"
      },
      "author": "BBC News",
      "title": "King Charles latest news: King Charles' cancer 'caught early' says Sunak, after treatment begins",
      "description": "The King began a \"schedule of regular treatments\" on Monday and is staying at home in London, rather than hospital.",
      "url": "https://www.bbc.co.uk/news/live/uk-68213599",
      "urlToImage": "https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.3.0/bbc_news_logo.png",
      "publishedAt": "2024-02-06T12:37:19.0077116Z",
      "content": "The King, pictured last monthImage caption: The King, pictured last month\r\nAfter bombshell royal announcements such as yesterdays news\r\nabout the Kings cancer diagnosis, theres a huge public demand f… [+926 chars]"
      },
      {
      "source": {
      "id": "bbc-news",
      "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Country music legend Toby Keith dies aged 62",
      "description": "Toby Keith, one of country music's biggest stars, dies aged 62 - he had previously revealed he had stomach cancer",
      "url": "https://www.bbc.co.uk/news/world-us-canada-68215639",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/83B3/production/_115651733_breaking-large-promo-nc.png",
      "publishedAt": "2024-02-06T10:07:19.2882867Z",
      "content": "Country music star Toby Keith has died at the age of 62, according to a statement published on his website. \r\nHe previously said he had been diagnosed with stomach cancer, a fight he called \"debilita… [+520 chars]"
      },
      {
      "source": {
      "id": "bbc-news",
      "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Ukraine-born Miss Japan winner relinquishes crown following affair",
      "description": "The controversial Ukraine-born model has resigned after a report on her relations with a married man.",
      "url": "https://www.bbc.co.uk/news/world-asia-68213223",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/A1CD/production/_132412414_a7304735.jpg",
      "publishedAt": "2024-02-06T03:37:18.2536523Z",
      "content": "The Ukraine-born winner of the Miss Japan beauty pageant has given up her crown after a tabloid report revealed her affair with a married man.\r\nKarolina Shiino, 26, was crowned Miss Japan two weeks a… [+1691 chars]"
      }
      
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
              <NewsItems  title={element.title} description={element.description} imageUrl={element.urlToImage} 
                newsUrl={element.url}/>
            </div>

             })
         }
            
             
        </div>
    
      </div>
    )
  }
}

export default News
