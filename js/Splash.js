import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { setSearchTerm } from './actionCreators'
const { string, func, object } = React.PropTypes

const Splash = React.createClass({
  contextTypes: {
    router: object
  },
  propTypes: {
    searchTerm: string,
    dispatchSetSearchTerm: func
  },
  render () {
    return (
      <div className='site-wrapper'>
        <div className='site-wrapper-inner'>
          <div className='cover-container'>
            <div className='masthead clearfix'>
              <div className='inner'>
                <h3 className='masthead-brand'>Fantasy Football Fanatic</h3>
                <nav>
                  <ul className='nav masthead-nav'>
                    <li className='active'><a>Home</a></li>
                    <li><Link to='/search'>Search Players</Link></li>
                    <li><a>Contact</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className='inner cover'>
              <h1 className='cover-heading'>An aggregation of everything you need</h1>
              <p className='lead'>Click below...</p>
              <p className='lead'><Link className='btn btn-lg btn-default' to='/search' /></p>
            </div>
            <div className='mastfoot'>
              <div className='inner'>
                <p>Cover template for<a href='http://getbootstrap.com'>Bootstrap</a>by<a href='https://twitter.com'>@mdo</a></p>
              </div>
            </div>
          </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSetSearchTerm (searchTerm) {
      dispatch(setSearchTerm(searchTerm))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash)
