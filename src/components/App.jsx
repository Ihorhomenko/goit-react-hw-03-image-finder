import React, { Component } from 'react';
import Searchbar from './searchbar/searchbar';
// import ImageGallery from './components/imageGallery';

class App extends Component {
  state = {
    key: '25076604-b2f6a049f29fb1061528c9102'
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const searchValue = e.currentTarget.elements.search.value;
    e.currentTarget.reset()
    fetch(`https://pixabay.com/api/?q=${searchValue}&page=1&key=${this.state.key}&image_type=photo&orientation=horizontal&per_page=12`).then(res => res.json()).then(data => console.log(data))
  }
  render () {
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit}/>
        {/* <ImageGallery /> */}
      </div>

    );
  }
  
};

export default App;