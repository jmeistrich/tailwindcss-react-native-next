import { StyleSheet, Text, View } from 'react-native'
import { RNComponent } from "rn/RNComponent";
import DOMComponent from 'web/DOMComponent'

export default function App(props) {
  return (
    <View style={styles.container}>
      <Text className="pb-4 font-bold">RN Text</Text>
      <div className='font-bold'>div</div>
      <DOMComponent />
      <RNComponent className="font-bold" />
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
