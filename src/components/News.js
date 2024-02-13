// 
import React, { useEffect , useState} from 'react'
import NewsItems from './NewsItems'
import PropTypes from 'prop-types'

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const UpdateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b22077b39bad439abf1ce3758fa4d1fc&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(50);
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    UpdateNews();
  }, []);

  const handlePrevClick = async () => {
    setPage(page - 1);
    UpdateNews();
  }

  const handleNextClick = async () => {
    setPage(page + 1);
    UpdateNews();
  }

  return (
    <div className='container my-3'>
      <h2 className='text-center'>NewsApp - Top {props.category} headlines</h2>
      <div className='row'>
        {articles.map((element) => (
          <div className='col-md-4' key={element.url}> 
            <NewsItems
              title={element.title ? element.title.slice(0, 45) : ""}
              description={element.description ? element.description.slice(0, 88) : ""}
              imageUrl={element.urlToImage}
              url={element.url}
              author={element.author}
              date={element.publishedAt}
            />
          </div>
        ))}
      </div>
      <div className='container d-flex justify-content-between'>
        <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}> &larr; Previous</button>
        <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
      </div>
    </div>
  );
}

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News;
