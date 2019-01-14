import React from 'react'
import { Platform, Text, View, Button } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import UsersActions from 'App/Stores/Example/Actions'
import Style from './ExampleScreenStyle'

/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and shows the weather filmList.
 * Feel free to remove it.
 */

class ExampleScreen2 extends React.Component {
  componentDidMount() {
    this.props.fetchFilms()
  }

  render() {
    let filmList = this.props.filmListIsLoading ? '...' : this.props.filmList
    if (filmList === null) {
      filmList = '??'
    }

    return (
      <View style={Style.container}>
        <Text style={Style.title}>TheCodingMachine boilerpla111te</Text>
        <Button onPress={this.props.fetchFilms} title="Refresh" />
      </View>
    )
  }
}

ExampleScreen2.propsTypes = {
  filmList: PropTypes.number,
  filmListErrorMessage: PropTypes.string,
}

const mapStateToProps = (state) => ({
  filmList: state.example.get('filmList'),
  filmListErrorMessage: state.example.get('filmListErrorMessage'),
  filmListIsLoading: state.example.get('filmListIsLoading'),
})

const mapDispatchToProps = (dispatch) => ({
  fetchFilms: () => dispatch(UsersActions.fetchFilms()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleScreen2)
