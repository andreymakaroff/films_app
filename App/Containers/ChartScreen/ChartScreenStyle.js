import { StyleSheet } from 'react-native'
import Fonts from '../../Theme/Fonts'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    ...Fonts.style.h2,
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 10,
  },
})
