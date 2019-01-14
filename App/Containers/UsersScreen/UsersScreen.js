import React from 'react'
import { View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { Bars } from 'react-native-loader'
import { PropTypes } from 'prop-types'
import FilmsActions from 'App/Stores/Films/Actions'
import FilmsFeaturedActions from 'App/Stores/FilmsFeatured/Actions'
import UserItem from '../../Components/UserItem/UserItemView'
import { Container, Content, Text, H1 } from 'native-base'
import Style from './UsersScreenStyle'

class UsersScreen extends React.Component {
  // componentDidMount() {
  //   this.props.fetchFilms()   // fetch in ..films_app\App\Sagas\StartupSaga.js
  // }

  _handleRefresh = () => this.props.fetchFilms()

  _renderFooter = (isLoading) =>
    isLoading ? (
      <View style={Style.loaderWrap}>
        <Bars size={10} color="#FDAAFF" />
      </View>
    ) : null

  _keyExtractor = (item) => `film-item-${item.idIMDB}`

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
      filmsFeatured={this.props.filmsFeatured}
      addHandler={() => this.props.addFilmFeatured(item.idIMDB)}
      removeHandler={() => this.props.removeFilmFeatured(item.idIMDB)}
    />
  )

  render() {
    const { filmListIsLoading, filmList, filmListErrorMessage, filmsFeatured } = this.props
    return (
      <Container>
        <Content style={Style.content} contentContainerStyle={Style.content}>
          <H1 style={Style.title}>List of {filmList.length} films</H1>
          {filmListErrorMessage ? (
            <Text style={Style.text}>{this.props.filmListErrorMessage}</Text>
          ) : null}
          <FlatList
            data={filmList}
            refreshing={filmListIsLoading}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
            ListFooterComponent={this._renderFooter(filmListIsLoading)}
            onRefresh={this._handleRefresh}
            onEndReachedThreshold={0.5}
          />
        </Content>
      </Container>
    )
  }
}

UsersScreen.propsTypes = {
  filmList: PropTypes.array,
  filmsFeatured: PropTypes.object,
  filmListErrorMessage: PropTypes.string,
}

const mapStateToProps = (state) => ({
  filmsFeatured: state.filmsFeatured.get('filmsFeatured').toJS(),
  filmList: state.films.get('filmList').toJS(),
  filmListErrorMessage: state.films.get('filmListErrorMessage'),
  filmListIsLoading: state.films.get('filmListIsLoading'),
})

const mapDispatchToProps = (dispatch) => ({
  fetchFilms: () => dispatch(FilmsActions.fetchFilms()),
  addFilmFeatured: (id) => dispatch(FilmsFeaturedActions.addFilmFeatured(id)),
  removeFilmFeatured: (id) => dispatch(FilmsFeaturedActions.removeFilmFeatured(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersScreen)
