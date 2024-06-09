import {Component} from 'react'
import UserProfile from './components/UserProfile'
import './App.css'

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer'
  },
  {
    uniqueNo: 2,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer'
  },
  {
    uniqueNo: 3,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer'
  },
  {
    uniqueNo: 4,
    imageUrl:
    'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Devon Lane',
    role: 'Software Developer'
  }

]

class App extends Component {
  state = {searchInput: "", userDetailsList: initialUserDetailsList}

  onChangeSearchInput = (Event) => {
    this.setState({
      searchInput: Event.target.value
    })
  }

  onDeleteUser = (uniqueNo) => {
    const {userDetailsList} = this.state
    const filteredUserData = userDetailsList.filter(
      each => each.uniqueNo !== uniqueNo
    )
    this.setState({userDetailsList: filteredUserData})
  }
  render() {
    const {searchInput, userDetailsList} = this.state
    const searchResults = userDetailsList.filter(each =>
      each.name.includes(searchInput)
    )
    return (
      <div className='list-container'>
        <h1 className='title'>Users List</h1>
        <input type='search' className='search-input' onChange={this.onChangeSearchInput} value={searchInput}/>
        <ul>
          {searchResults.map((each) =>(
            <UserProfile onDeleteUser={this.onDeleteUser} userDetails={each} key={each.uniqueNo} />
          ))}
        </ul>
      </div>
    )
  }
}

export default App