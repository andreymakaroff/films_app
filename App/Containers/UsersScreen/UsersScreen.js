import React from 'react'
import { Platform, Text, ScrollView, Button, View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { Bars } from 'react-native-loader'
import { PropTypes } from 'prop-types'
import UsersActions from 'App/Stores/Example/Actions'
import UserItem from '../../Components/UserItem/UserItemView'
import Style from './UsersScreenStyle'

class UsersScreen extends React.Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  _renderFooter = (isLoading) =>
    isLoading ? (
      <View style={Style.loaderWrap}>
        <Bars size={10} color="#FDAAFF" />
      </View>
    ) : null

  _keyExtractor = (item) => `user-item-${item.id}`

  _renderItem = ({ item }) => (
    <UserItem
      key={item.idIMDB}
      title={item.title}
      year={item.year}
      releaseDate={item.releaseDate}
      urlPoster={item.urlPoster}
      countries={item.countries}
      rating={item.rating}
      idIMDB={item.idIMDB}
      urlIMDB={item.urlIMDB}
      // handler={() => this.handleGoTo(WORKOUT_INFO_SCREEN, { id: item.id })}
    />
  )

  render() {
    const { userListIsLoading, userList } = this.props
    console.log('@@@@@@@@@@', userList)
    return (
      <View style={Style.container}>
        <ScrollView>
          <Text style={Style.title}>List of 20 users</Text>
          <View style={{ flex: 1 }}>
            <FlatList
              data={userList}
              // data={userList}
              refreshing={userListIsLoading}
              renderItem={this._renderItem}
              keyExtractor={this._keyExtractor}
              ListFooterComponent={this._renderFooter(userListIsLoading)}
              // onEndReached={this.handleLoadMore}
              // onRefresh={this.handleRefresh}
              onEndReachedThreshold={0.5}
            />
          </View>
          <Text style={Style.text}>
            The weather userList is: {JSON.stringify(this.props.navigate)}
          </Text>
          <Text style={Style.text}>{this.props.userListErrorMessage}</Text>
        </ScrollView>
      </View>
    )
  }
}

UsersScreen.propsTypes = {
  userList: PropTypes.array,
  userListErrorMessage: PropTypes.string,
}

const mapStateToProps = (state) => ({
  userList: state.example.get('userList').toJS(),
  userListErrorMessage: state.example.get('userListErrorMessage'),
  userListIsLoading: state.example.get('userListIsLoading'),
})

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(UsersActions.fetchUsers()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersScreen)
