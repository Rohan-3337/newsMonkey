import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types';

export class News extends Component {
  static defaultProps = {
    country:"in",
    pagesize:9,
    category:"general"
  }
  static propTypes = {
    country: PropTypes.string,
    pagesize:PropTypes.number,
    category:PropTypes.string,
  }
  constructor(){
    super()
    console.log("constructor")
    this.state = {
      article:this.article,
      loading:false,
      page:1,
      totalarticle:""
    }
  }
    async componentDidMount() { 
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3eb0372fe9a140e18a95c412c4524f12&page=1&pagesize=${this.props.pagesize}`;
      this.setState({loading:true})
      const data = await fetch(url)
      const result = await data.json();
      console.log(result)
      this.setState({
        article:result.articles,
        totalarticle:result.totalResults,
        loading:false,

      })
      
  
     }
      handleprevclick = async()=>{
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3eb0372fe9a140e18a95c412c4524f12&page=${this.state.page -1}&pagesize=${this.props.pagesize}`;
        this.setState ({loading:true})
        const data = await fetch(url)
        const result = await data.json();
        console.log(result)
        this.setState({
          article:result.articles,
          page:this.state.page - 1,
          loading:false,

      })
      console.log(this.state.page)

        console.log("click")
        
     }
     handlenextclick = async()=>{
      console.log("click next")
      if(this.state.page + 1 > Math.ceil(this.state.totalarticle/this.props.pagesize) ){
        
      }else{
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3eb0372fe9a140e18a95c412c4524f12&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
        this.setState({loading:true})
        const data = await fetch(url)
        const result = await data.json();
        console.log(result)
        console.log(this.state.page,Math.ceil(this.state.totalarticle/this.props.pagesize))
        this.setState({
          article:result.articles,
          page:this.state.page + 1,
          loading:false
      })
    }
   }
  render() {
    return (
      <>
      <div className='container my-3'>

      
      <h2 className='text-center'> newsmonkey {this.props.category} - top Headlines {this.state.totalarticle} article</h2>
      {this.state.loading && <Spinner/>}
      <div className="row">
      {!this.state.loading&&this.state.article?.map((item)=>{
        const {title,description,urlToImage,url,author,publishedAt,source} = item
        
        return (<div className="col-md-4">
          <Newsitem title={!title?"":title.slice(0,this.props.pagesize)} desc={!description?"No Description":description.slice(0,85)} source={source.name} key={source.id} author={!author?"unknown":author} date={new Date(publishedAt).toGMTString()} imgurl={!urlToImage?"https://st4.depositphotos.com/14953852/22772/v/1600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg":urlToImage} newsurl={url}/>
        </div>)

        })}
        
       
      </div>
      <div className="container d-flex justify-content-between">
        <button className="btn btn-dark" disabled={this.state.page -1 <1} onClick={this.handleprevclick}>&larr; previous</button>
        <button className="btn btn-dark" disabled={this.state.page + 1 > Math.ceil(this.state.totalarticle/this.props.pagesize)} onClick={this.handlenextclick}>Next &rarr;</button>

      </div>
      </div>
      </>
    )
  }
}

export default News