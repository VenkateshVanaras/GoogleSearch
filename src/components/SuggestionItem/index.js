// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, changeSearchInput} = props
  const {suggestion} = suggestionItem
  const arrowMarkClicked = () => {
    changeSearchInput(suggestion)
  }

  return (
    <li className="list-item">
      <p>{suggestion}</p>

      <button className="button-class" type="button" onClick={arrowMarkClicked}>
        <img
          alt="arrow"
          className="cancel-icon"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
