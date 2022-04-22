import { StyleSheet, Text, View } from 'react-native'
import DOMComponent from 'web/DOMComponent'

export default function App(props) {
  return (
    <View style={styles.container}>
      <Text className="pb-4 font-bold">RN</Text>
      <div className='font-bold'>Hi</div>
      <DOMComponent />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  link: {
    color: 'blue',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  text: {
    alignItems: 'center',
    fontSize: 24,
    marginBottom: 24,
  },
})
