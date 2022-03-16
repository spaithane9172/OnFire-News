import React, { Component } from "react";
import NewsItem from "../NewsItem";
import Loading from "./Loading";
import PropTypes from 'prop-types'


export default class News extends Component {
  static defaultProps={
    country:'in',
    category:"general",
    pageSize:12
  }
  static propTypes={
    country:PropTypes.string,
    category:PropTypes.string,
    pageSize:PropTypes.number,
  }
  
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      page:1,
      loader: false,
      tresult:this.tresult
    };
  }
  async update(){
    this.setState({loader:true});
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=85967f37713f44c18381204922365bb9&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    let data=await fetch(url);
    let pdata=await data.json();
    this.setState(this.articles=pdata);
    this.setState({loader:false});
    let tr=pdata.totalResults;
    this.setState({tresult:tr,loader:false});
    document.title=`${this.props.category.charAt(0).toUpperCase()+this.props.category.slice(1)} - OnFire News`;
  }
  async componentDidMount(){
    this.update();
   }
   nextBtn=async ()=>{
    await this.setState({
      page:this.state.page+1,
    });
    this.update();
  }
   previousBtn=async ()=>{
    await this.setState({
      page:this.state.page-1,
    });
    this.update();
  }

  render() {
    return (
      <div className="container mt-3">
        <h3 className="mb-5" style={{ textAlign: "center" }}>
          On-Fire News
        </h3>
        <div className="row mb-3">
          <div className="col-6">
            <button disabled={this.state.page<=1} onClick={this.previousBtn} className="float-start btn btn-dark">&larr; Previous</button>
          </div>
          <div className="col-6">
            <button disabled={this.state.page>=Math.ceil(this.state.tresult/12)} onClick={this.nextBtn}  className="float-end btn btn-dark">Next &rarr;</button>
          </div>
        </div>
        {this.state.loader && <Loading/>}
        {!this.state.loader && <div className="row">
          {this.state.articles &&
            this.state.articles.map((element) => {
              return (
                <div className="col-4 mb-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imgurl={element.urlToImage}
                    newsurl={element.url}
                    pdate={element.publishedAt.slice(0,10)}
                  />
                </div> 
              );
            })}
        </div>}
        <div className="row mb-3">
          <div className="col-6">
            <button disabled={this.state.page<=1} onClick={this.previousBtn} className="float-start btn btn-dark">&larr; Previous</button>
          </div>
          <div className="col-6">
            <button disabled={this.state.page>=Math.ceil(this.state.tresult/12)} onClick={this.nextBtn}  className="float-end btn btn-dark">Next &rarr;</button>
          </div>
        </div>
      </div>
    );
  }
}
