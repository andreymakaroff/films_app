import React from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  CardItem,
  Image,
  Icon,
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
} from 'native-base'
import styles from './UserItemStyle'

const UserItemView = ({
                        title,
                        year,
                        releaseDate,
                        urlPoster,
                        countries,
                        rating,
                        idIMDB,
                        urlIMDB,
                      }) => (
  <Card>
    <CardItem header>
      <Text>NativeBase</Text>
      <ListItem thumbnail>
        <Left>
          <Thumbnail square source={{ uri: urlPoster }}/>
        </Left>
        <Body>
        <Text>{title}</Text>
        <Text note>{year}</Text>
        <Text note numberOfLines={1}>
          Its time to build a difference . .
        </Text>
        </Body>
        <Right>
          <Button transparent>
            <Text>View</Text>
          </Button>
        </Right>
      </ListItem>
    </CardItem>
  </Card>


)

UserItemView.propTypes = {
  name: PropTypes.object,
  gender: PropTypes.string,
}

UserItemView.defaultProps = {
  name: {
    first: 'Bob',
    last: 'Marley',
  },
}

export default UserItemView
