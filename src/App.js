import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header'; 
import Gifs from './components/gifs/Gifs';
import axios from 'axios';

class App extends Component {
  state={
    gifs: [],   
    displaySearchResultTag: false, 
    resultFor: "",
    alert: null
  }

  // fetch some users initially
  async componentDidMount(){
    this.setState({displaySearchResultTag: false, resultFor: ""});
    const res = await axios.get(`https://api.giphy.com/v1/gifs/trending?&api_key=S9vhQ0DK5QKKsheiEkKmJuSp9vMuxhCc`);
    this.setState({gifs: res.data.data});
  }

  findGif = async text => {
    if(text!==""){
      this.setState({displaySearchResultTag: true, resultFor: text});
      const res = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${text}&api_key=S9vhQ0DK5QKKsheiEkKmJuSp9vMuxhCc`);
      this.setState({gifs: res.data.data});
    } else {
      this.componentDidMount();
    }
  }

  render(){
    return (
      <div className="App">
        <Header searchGIF={this.findGif} />

    {this.state.displaySearchResultTag? <h2 className='container'>Your Search Results: {this.state.resultFor}</h2>: null}
        <Gifs gifs={this.state.gifs} searchGIF={this.findGif}/>
      </div>
    );
  }
}

export default App;
