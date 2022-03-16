import React, { Component } from 'react'
import ImgNaN from './img/imgnan.JPG'
export default class NewsItem extends Component {
     
  render() {
      let {title,description,imgurl,newsurl,pdate}=this.props;
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={imgurl===null?ImgNaN:imgurl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">Date : {pdate}</small></p>
                <a href={newsurl} className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div> 
    );
  }
}
