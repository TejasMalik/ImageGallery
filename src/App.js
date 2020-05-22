import React, { Component } from "react"

import ImageSearch from "./components/ImageSearch"
import ImageList from "./components/ImageList"

const API_KEY = "16669520-2f371b890e8177ac2103a980b"
let searching = ""

class App extends Component {



  state = {
    images: [],
    error: null,
    pageNumber: 1,
    nextimages: [],
    height: window.innerHeight,
  }




  handleGetRequest = async (event) => {

    event.preventDefault()

    this.setState({
      images: [],
      pageNumber: 1
    })

    let searchItem = event.target.elements.searchValue.value
    searching = searchItem
    let url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchItem}&image_type=photo&page=${this.state.pageNumber}`

    let request = await fetch(url)
    let response = await request.json()

    if (!searchItem) {
      this.setState({
        error: "Field should not be blank."
      })
    } else {
      this.setState({
        images: response.hits,
        error: null,
      })
    }


  }


  handleScroll = () => {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      console.log("Bottom")
      this.setState({
        pageNumber: this.state.pageNumber + 1
      })
      this.infiniteScroll()
      this.setState(prevState => ({
        images: [...prevState.images, ...prevState.nextimages],
      }))
      this.setState({
        nextimages: []
      })
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  infiniteScroll = async () => {

    let url = `https://pixabay.com/api/?key=${API_KEY}&q=${searching}&image_type=photo&page=${this.state.pageNumber}`



    let request = await fetch(url)
    let response = await request.json()

    this.setState({
      nextimages: response.hits
    })

  }




  render() {
    return (
      <div onScroll={this.handleScroll}>
        
        <ImageSearch handleGetRequest={this.handleGetRequest}></ImageSearch>
        {
          this.state.error !== null ? <div style={{ color: "white", textAlign: "center", border: "solid 1px white" }}>{this.state.error}</div> : <ImageList images={this.state.images}></ImageList> 
        }
      </div>
    );
  }
}

export default App;

