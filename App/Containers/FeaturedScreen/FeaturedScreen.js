import React, {Fragment} from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import FilmsActions from 'App/Stores/Films/Actions'
import FilmsFeaturedActions from 'App/Stores/FilmsFeatured/Actions'
import UserItem from '../../Components/UserItem/UserItemView'
import _ from 'lodash'
import {
  Container,
  Content,
  Text,
  H1,
  Button,
  ActionSheet,
} from 'native-base'
import Style from './FeaturedScreenStyle'

const BUTTONS = ['name', 'year', 'default']
const BUTTONS_ATTR = ['title', 'year', null]

class FeaturedScreen extends React.Component {
  state = {
    sortByText: 'default',
    sortBy: null,
  }

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

  _featuredFilmsArray = (sortBy) => {
    const { filmList, filmsFeatured } = this.props
    const featured = filmList.filter((item) => filmsFeatured.hasOwnProperty(item.idIMDB))
    return _.sortBy(featured, [sortBy])
  }

  _handlerSort = (buttonIndex) => {
    this.setState({
      sortByText: BUTTONS[buttonIndex],
      sortBy: BUTTONS_ATTR[buttonIndex],
    })
    this.props.makeSortFilmBy(BUTTONS_ATTR[buttonIndex])
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.sortBy !== nextProps.sortFilmBy) {
      let sortByText = ''
      switch (nextProps.sortFilmBy) {
        case 'title':
          sortByText = 'name'
          break
        case 'year':
          sortByText = 'year'
          break
        default:
          sortByText = 'default'
          break
      }
      return {
        sortBy: nextProps.sortFilmBy,
        sortByText,
      }
    }
    return null
  }

  render() {
    const { sortByText, sortBy } = this.state
    const featuredFilmsArray = this._featuredFilmsArray(sortBy)

    return (
      <Container>
        <Content>
          <H1 style={Style.title}>Featured films</H1>
          {featuredFilmsArray.length === 0 ? (
              <Button full info onPress={() => this.props.navigation.navigate('Films')}>
                <Text style={Style.noFilmText}>
                  You have no featured films. {'\n'} Tap here and chose one.
                </Text>
              </Button>
            )
            : (
              <Fragment>
                <Button
                  onPress={() =>
                    ActionSheet.show(
                      {
                        options: BUTTONS,
                        title: 'Sort by:',
                      },
                      (buttonIndex) => this._handlerSort(buttonIndex),
                    )
                  }
                >
                  <Text>Sort by</Text>
                </Button>

                < Text > Sorted by {sortByText}</Text>
                <FlatList
                  data={featuredFilmsArray}
                  renderItem={this._renderItem}
                  keyExtractor={this._keyExtractor}
                />
              </Fragment>
            )
          }
        </Content>
      </Container>
    )
  }
}

FeaturedScreen.propsTypes = {
  filmList: PropTypes.array,
  filmsFeatured: PropTypes.object,
  filmListErrorMessage: PropTypes.string,
  fetchFilms: PropTypes.func,
  addFilmFeatured: PropTypes.func,
  removeFilmFeatured: PropTypes.func,
  makeSortFilmBy: PropTypes.func,
}

const mapStateToProps = (state) => ({
  filmsFeatured: state.filmsFeatured.get('filmsFeatured').toJS(),
  filmList: state.films.get('filmList').toJS(),
  sortFilmBy: state.filmsFeatured.get('sortFilmBy'),
})

const mapDispatchToProps = (dispatch) => ({
  fetchFilms: () => dispatch(FilmsActions.fetchFilms()),
  addFilmFeatured: (id) => dispatch(FilmsFeaturedActions.addFilmFeatured(id)),
  removeFilmFeatured: (id) => dispatch(FilmsFeaturedActions.removeFilmFeatured(id)),
  makeSortFilmBy: (key) => dispatch(FilmsFeaturedActions.makeSortFilmBy(key)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FeaturedScreen)
