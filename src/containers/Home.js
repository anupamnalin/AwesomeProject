import HomePage from '../components/HomePage'
import React from 'react'
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
})

 class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HomePage isLoggedIn={this.props.isLoggedIn} navigation={this.props.navigation}/>
    )
  }
}

export default connect(mapStateToProps)(Home);
