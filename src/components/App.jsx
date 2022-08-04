import React, { Component } from 'react';
import Searchbar from './searchbar/searchbar';
import ImageGallery from './imageGallery/imageGallery';
import Button from './button/button';
import { BallTriangle } from  'react-loader-spinner'
import Modal from './modal/modal';
import '../index.css'

class App extends Component {
  state = {
    key: '25076604-b2f6a049f29fb1061528c9102',
    searchValue: '',
    gallery: [],
    loader: false,
    largeUrl: "",
    page: 1
  }


  handleSubmit = (e) => {
    e.preventDefault()
    const searchValue = e.currentTarget.elements.search.value;
    this.setState()
    e.currentTarget.reset()
    this.setState({loader: true})
    setTimeout(() => fetch(`https://pixabay.com/api/?q=${searchValue}&page=1&key=${this.state.key}&image_type=photo&orientation=horizontal&per_page=12`).then(res => res.json()).then(data => this.setState({gallery: data.hits, loader: false})), 2000)
  }

  handleButoonClick = () => {
    console.log('click')
    const {searchValue, page} = this.state
    this.setState(prevState => ({ page: prevState.page + 1}))
    fetch(`https://pixabay.com/api/?q=${searchValue}&page=${page}&key=${this.state.key}&image_type=photo&orientation=horizontal&per_page=12`).then(res => res.json()).then(data => this.setState(prevState => ({gallery: [...prevState.gallery, ...data.hits]})))
  }

  handleModalClick = (largeUrl) => {
    this.setState({largeUrl})
  }

  render () {
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit}/>
        {this.state.loader && <BallTriangle height = "180"
                                width = "180"
                                color = '#3f51b5'
                                wrapperClass = {'loader'}
                              />}
        <ImageGallery gallery={this.state.gallery} onClick={this.handleModalClick}/>
        {this.state.largeUrl && <Modal url={this.state.largeUrl}/> }
        {this.state.gallery.length !== 0 && <Button onClick={this.handleButoonClick}/>}
      </div>

    );
  }
  
};

export default App;