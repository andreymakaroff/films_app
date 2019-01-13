import React, { Component } from 'react'
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation'
import NavigationService from 'App/Services/NavigationService'
import { View } from 'react-native'
import styles from './RootScreenStyle'
import ExampleScreen from 'App/Containers/UsersScreen/UsersScreen'
import ExampleScreen2 from 'App/Containers/Example2/ExampleScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import { connect } from 'react-redux'
import StartupActions from 'App/Stores/Startup/Actions'

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const BottomTabNavigator = createMaterialTopTabNavigator(
  {
    Users: ExampleScreen,
    'Donut Chart': ExampleScreen2,
    Featured: ExampleScreen2,
  },
  {
    tabBarOptions: {
      activeTintColor: '#9dc4a9',
      inactiveTintColor: '#bbbbc4',
      upperCaseLabel: false,
      scrollEnabled: true,
      pressColor: '#9dc4a9',
      labelStyle: {
        fontSize: 14,
        fontFamily: 'Lato',
      },
      allowFontScaling: false,
      indicatorStyle: {
        backgroundColor: '#9dc4a9',
        height: 3,
      },
      style: {
        backgroundColor: '#fbfcfa',
        borderBottomWidth: 1,
        borderBottomColor: '#dbdbdb',
      },
    },
  }
)

const AppNav = createStackNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    SplashScreen: SplashScreen,
    // The main application screen is our "ExampleScreen". Feel free to replace it with your
    // own screen and remove the example.
    userNav: BottomTabNavigator,
  },
  {
    // By default the application will show the splash screen
    initialRouteName: 'SplashScreen',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode: 'none',
  }
)

class RootScreen extends Component {
  componentDidMount() {
    // Run the startup saga when the application is starting
    this.props.startup()
  }

  render() {
    return (
      <View style={styles.container}>
        <AppNav
          // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          }}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootScreen)
