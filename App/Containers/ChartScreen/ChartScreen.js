import React from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import UsersActions from 'App/Stores/Example/Actions'
import PieChart from 'react-native-pie-chart'
import { View } from 'react-native'
import {
  Container,
  Content,
  ListItem,
  Text,
  Left,
  Body,
  Right,Title,Subtitle,
  Button,
} from 'native-base'
import Style from './ChartScreenStyle'

const SLICE_COLOR = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D']

class ChartScreen extends React.Component {
  modifyInfo = () => {
    const { filmList } = this.props
    const yearArray = filmList.map(({ year }) => `${Math.floor(year / 10) * 10}`)
    const result = {}
    yearArray.forEach(function(i) {
      result[i] = (result[i] || 0) + 1
    })
    return result
  }

  render() {
    const chartInfo = this.modifyInfo()
    return (
      <Container>
        <Body style={Style.container}>
          <Title>
            Top 20 films by decade
          </Title>
          <Subtitle>Subtitle</Subtitle>
          <PieChart
          chart_wh={250}
          series={Object.values(chartInfo)}
          sliceColor={SLICE_COLOR}
          doughnut={true}
          coverRadius={0.45}
          coverFill={'#FFF'}
        />
        </Body>
        <Content>
          {
            Object.keys(chartInfo).map((i, index) => (
              <ListItem icon key={i}>
                <Left>
                  <Button style={{ backgroundColor: SLICE_COLOR[index] }}/>
                </Left>
                <Body>
                <Text>{i}</Text>
                </Body>
                <Right>
                  <Text>{chartInfo[i]}</Text>
                </Right>
              </ListItem>
            ))
          }
        </Content>
      </Container>
    )
  }
}

ChartScreen.propsTypes = {
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
  mapDispatchToProps,
)(ChartScreen)
