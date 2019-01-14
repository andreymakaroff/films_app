import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardItem, Text, Left, Body, Button } from 'native-base'
import { View, Image, TouchableOpacity, Linking } from 'react-native'
import styles from './UserItemStyle'

class UserItemView extends React.Component {
  state = {
    featured: false,
  }

  handleTapFeatured = handler => {
    this.setState({ featured: !this.state.featured }, () => handler())
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.featured !== nextProps.filmsFeatured.hasOwnProperty(nextProps.idIMDB)) {
      return {
        featured: nextProps.filmsFeatured.hasOwnProperty(nextProps.idIMDB),
      }
    }
    return null
  }

  shouldComponentUpdate(nextProps) {
    return this.state.featured !== nextProps.filmsFeatured.hasOwnProperty(nextProps.idIMDB)
  }


  render() {
    const { disabled, featured } = this.state
    const {
      title,
      year,
      urlPoster,
      countries,
      rating,
      directors,
      genres,
      addHandler,
      removeHandler
    } = this.props

    return (
      <Card>
        <CardItem>
          <Text>{title}</Text>
        </CardItem>
        <CardItem cardBody>
          <Left>
            <Image source={{ uri: urlPoster }} style={styles.poster}/>
          </Left>
          <Body>
          <Text>
            <Text note>Year: </Text>
            {year}
          </Text>
          <Text>
            <Text note>Rating: </Text>
            {rating}
          </Text>
          <Text>
            <Text note>{`Genre${genres.length > 1 ? 's' : ''}:`} </Text>
            {genres.map((item, index) => (
              <Text key={item}>
                {index === 0 ? '' : ', '}
                {item}
              </Text>
            ))}
          </Text>

          <Text>
            <Text note>{`Countrie${countries.length > 1 ? 's' : ''}:`} </Text>
            {countries.map((item, index) => (
              <Text key={item}>
                {index === 0 ? '' : ', '}
                {item}
              </Text>
            ))}
          </Text>

          <View>
            <Text note>{`Director${directors.length > 1 ? 's' : ''}:`} </Text>
            {directors.map(({ name, id }) => (
              <TouchableOpacity
                key={name}
                onPress={() => Linking.openURL(`https://www.imdb.com/name/${id}/`)}
              >
                <Text style={styles.link}>{name}</Text>
              </TouchableOpacity>
            ))}
          </View>
          </Body>
        </CardItem>
        <CardItem>
          <Body>
          {featured ? (
            <Button danger small full
                    disabled={disabled} onPress={() => this.handleTapFeatured(removeHandler)}>
              <Text>Remove from featured</Text>
            </Button>
          ) : (
            <Button bordered success small full
                    disabled={disabled} onPress={() => this.handleTapFeatured(addHandler)}>
              <Text>Add to featured</Text>
            </Button>
          )}
          </Body>
        </CardItem>
      </Card>
    )
  }
}

UserItemView.propTypes = {
  title: PropTypes.string,
  year: PropTypes.string,
  releaseDate: PropTypes.string,
  urlPoster: PropTypes.string,
  countries: PropTypes.array,
  rating: PropTypes.string,
  directors: PropTypes.array,
  genres: PropTypes.array,
  idIMDB: PropTypes.string,
  urlIMDB: PropTypes.string,
  filmsFeatured: PropTypes.object,
  addHandler: PropTypes.func,
  removeHandler: PropTypes.func,
}


export default UserItemView
