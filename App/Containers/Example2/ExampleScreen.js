import React from 'react'
import { Platform, Text, View, Button } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import UsersActions from 'App/Stores/Example/Actions'
import Style from './ExampleScreenStyle'

/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and shows the weather userList.
 * Feel free to remove it.
 */

class ExampleScreen2 extends React.Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    let userList = this.props.userListIsLoading ? '...' : this.props.userList
    if (userList === null) {
      userList = '??'
    }

    return (
      <View style={Style.container}>
        <Text style={Style.title}>TheCodingMachine boilerpla111te</Text>
        <Button onPress={this.props.fetchUsers} title="Refresh" />
      </View>
    )
  }
}

ExampleScreen2.propsTypes = {
  userList: PropTypes.number,
  userListErrorMessage: PropTypes.string,
}

const mapStateToProps = (state) => ({
  userList: state.example.get('userList'),
  userListErrorMessage: state.example.get('userListErrorMessage'),
  userListIsLoading: state.example.get('userListIsLoading'),
})

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(UsersActions.fetchUsers()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleScreen2)
