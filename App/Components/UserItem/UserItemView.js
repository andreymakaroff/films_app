import React from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  CardItem,
  Text,
  Left,
  Body,
  Right,
  Button,
} from 'native-base'
import { View, Image, TouchableOpacity, Linking } from 'react-native'
import styles from './UserItemStyle'

const UserItemView = ({
                        title,
                        year,
                        releaseDate,
                        urlPoster,
                        countries,
                        rating,
                        directors,
                        genres,
                        idIMDB,
                        urlIMDB,
                      }) => (
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
          <Text note>{`Genre${genres.length > 1 ? 's' : ''}:`} </Text>
          {genres.map((item, index)=> (
              <Text key={item}>{index === 0 ? '': ', '}{item}</Text>
          ))}
        </Text>

        <Text>
          <Text note>{`Countrie${countries.length > 1 ? 's' : ''}:`} </Text>
          {countries.map((item, index)=> (
            <Text key={item}>{index === 0 ? '': ', '}{item}</Text>
          ))}
        </Text>

        <View>
          <Text note>{`Director${directors.length > 1 ? 's' : ''}:`} </Text>
          {directors.map(({name, id})=> (
            <TouchableOpacity key={name}
              onPress={() => Linking.openURL(`https://www.imdb.com/name/${id}/`)}>
              <Text style={styles.link}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Body>
    </CardItem>
    <CardItem>
      <Left>
        <Button
          bordered
          success
          small
          full
        >
          <Text>Add to featured</Text>
        </Button>
        <Button
          danger
          small
          full
        >
          <Text>Remove from featured</Text>
        </Button>
      </Left>
      <Body>
      <Text>rating: {rating}</Text>
      </Body>
    </CardItem>
  </Card>
)

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
}

UserItemView.defaultProps = {
  name: {
    first: 'Bob',
    last: 'Marley',
  },
}

export default UserItemView
