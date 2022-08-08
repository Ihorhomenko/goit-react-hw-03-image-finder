import React, { Component } from 'react';
import Searchbar from './searchbar/searchbar';
import ImageGallery from './imageGallery/imageGallery';
import Button from './button/button';
import { BallTriangle } from  'react-loader-spinner'
import Modal from './modal/modal';
import ApiImages from 'services/services';
import '../index.css'

class App extends Component {
  state = {
    searchValue: '',
    largeUrl: '',
    gallery: [],
    loader: false,
    page: 1
  }

  
handleSubmit = (e) => {
    e.preventDefault()
    const searchValue = e.currentTarget.elements.search.value;
    this.setState({searchValue})
    e.currentTarget.reset()
    this.setState({gallery: [], loader: true})
    ApiImages.fetchImages(searchValue, this.state.page).then(data => this.setState({gallery: data.hits})).finally(() => this.setState({loader: false}))
    this.setState(prevState => ({ page: prevState.page + 1}))
  }

handleButoonClick = () => {
    const {searchValue, page} = this.state
    ApiImages.fetchImages(searchValue, page).then(data => this.setState(prevState => ({gallery: [...prevState.gallery, ...data.hits]})))
    this.setState(prevState => ({ page: prevState.page + 1}))
  }

handleModalClick = (largeUrl) => {
    this.setState({largeUrl})
}

hundeCloseModal = () => {
  this.setState({largeUrl: ""})
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
        {this.state.largeUrl && <Modal url={this.state.largeUrl} onClose={this.hundeCloseModal}/> }
        {this.state.gallery.length !== 0 && <Button onClick={this.handleButoonClick}/>}
      </div>

    );
  }
  
};

export default App;