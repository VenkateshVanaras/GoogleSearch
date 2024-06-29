// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  changeSearchInput = title => {
    this.setState({searchInput: title})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    console.log(suggestionsList)

    return (
      <div className="google-search">
        <div>
          <img
            alt="google logo"
            className="google-image"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          />
          <div className="google-container">
            <div className="search-input-container">
              <img
                className="search-icon"
                alt="search icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              />
              <input
                onChange={this.onChangeInput}
                className="input"
                type="search"
                placeholder="Google Search"
                value={searchInput}
              />
            </div>
            <ul>
              {searchResults.map(each => (
                <SuggestionItem
                  key={each.id}
                  changeSearchInput={this.changeSearchInput}
                  suggestionItem={each}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
