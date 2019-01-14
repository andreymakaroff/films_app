import React from 'react'
import { View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { Bars } from 'react-native-loader'
import { PropTypes } from 'prop-types'
import UsersActions from 'App/Stores/Example/Actions'
import UserItem from '../../Components/UserItem/UserItemView'
import {
  Container,
  Content,
  ListItem,
  Text,
  Left, H1,
  Body,
  Right,
  Button,
} from 'native-base'
import Style from './UsersScreenStyle'

class UsersScreen extends React.Component {
  // componentDidMount() {
  //   this.props.fetchFilms()   // fetch in ..films_app\App\Sagas\StartupSaga.js
  // }

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
      urlPoster={item.urlPoster}
      countries={item.countries}
      rating={item.rating}
      idIMDB={item.idIMDB}
      directors={item.directors}
      genres={item.genres}
      urlIMDB={item.urlIMDB}
      // handler={() => this.handleGoTo(WORKOUT_INFO_SCREEN, { id: item.id })}
    />
  )

  render() {
    const { filmListIsLoading, filmList } = this.props

    return (
      <Container>
        <Content>
          <H1>List of 20 films</H1>
          <Text style={Style.text}>{this.props.filmListErrorMessage}</Text>
            <FlatList
              data={filmList}
              // data={filmList}
              refreshing={filmListIsLoading}
              renderItem={this._renderItem}
              keyExtractor={this._keyExtractor}
              ListFooterComponent={this._renderFooter(filmListIsLoading)}
              // onEndReached={this.handleLoadMore}
              // onRefresh={this.handleRefresh}
              onEndReachedThreshold={0.5}
            />
        </Content>
      </Container>
    )
  }
}

UsersScreen.propsTypes = {
  filmList: PropTypes.array,
  filmListErrorMessage: PropTypes.string,
}

const mapStateToProps = (state) => ({
  filmList: state.example.get('filmList').toJS(),
  filmListErrorMessage: state.example.get('filmListErrorMessage'),
  filmListIsLoading: state.example.get('filmListIsLoading'),
})

const mapDispatchToProps = (dispatch) => ({
  fetchFilms: () => dispatch(UsersActions.fetchFilms()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersScreen)
