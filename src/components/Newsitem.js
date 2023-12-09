import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    const {title,desc,imgurl,newsurl,author,date,source} = this.props
    return ( 
        <div className="card my-3" style={{width: "18rem"}}>
        <img src={imgurl} className="card-img-top" alt="kuch toh h "/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
      {source}
    
  </span>
          <p className="card-text">{desc}...</p>
          <p className="card-text"> <small className='text-muted'> By {author} on {date}</small></p>
          <a href={newsurl} target='_blank'  rel="noreferrer" className="btn btn-dark">Read more</a>
        </div>
      </div>
    )
  }
}

export default Newsitem