import { StyleSheet, Text, View } from 'react-native'
import { TailwindProvider, styled } from 'tailwindcss-react-native';

const StyledText = styled(Text);

export default function App(props) {
  return (
    <TailwindProvider platform="web">
      <View style={styles.container}>
        <StyledText className="pb-4 font-bold">RN Text</StyledText>
      </View>
    </TailwindProvider>
  );
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
