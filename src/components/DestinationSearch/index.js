// Write your code here
import './index.css'
import {Component} from 'react'
import DestinationItem from '../DestinationItem/index'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value.toLowerCase()})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const filteredList = destinationsList.filter(eachUser =>
      eachUser.name.includes(searchInput),
    )

    return (
      <div className="bg-container">
        <div className="search-container">
          <h1 className="heading">Destination Search</h1>
          <input
            type="search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
          <ul className="country-container">
            {filteredList.map(eachUser => (
              <DestinationItem
                userDetails={eachUser}
                key={eachUser.id}
                usersList={destinationsList}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
