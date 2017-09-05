import HomePage from '../components/HomePage'
import React from 'react'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  console.log("state=", state)
  return {isLoggedIn: state.updateUserInfo.isLoggedIn}
}

 class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log("this.props=",this.props )
    return (
      <HomePage isLoggedIn={this.props.isLoggedIn} navigation={this.props.navigation}/>
    )
  }
}

export default connect(mapStateToProps)(Home);
