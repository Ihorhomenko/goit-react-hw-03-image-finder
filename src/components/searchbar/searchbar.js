import React, {Component} from "react";
import '../../index.css'

class Searchbar extends Component {
    render () {
        return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={this.props.onSubmit}>
                <button type="submit" className="SearchForm-button">
                <span className="button-label">Search</span>
                 </button>
    
                <input
                    name="search"
                    className="SearchForm-input"
                    type="text"
                    // autocomplete="off"
                    // autofocus
                    placeholder="Search images and photos"
                    />
                </form>
    </header>
        )
    }
}

export default Searchbar;