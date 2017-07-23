import React from 'react'
import { connect } from 'react-redux'
// import ShowCard from './ShowCard'
// import Header from './Header'
const { string } = React.PropTypes

const Search = React.createClass({
  propTypes: {
    // shows: arrayOf(shape({
    //   title: string,
    //   description: string
    // })),
    searchTerm: string
  },
  render () {
    return (
      <div className='search'>
        <div>
          {

          }
        </div>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export const Unwrapped = Search

export default connect(mapStateToProps)(Search)
