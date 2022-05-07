import { useEffect, useState } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native'
import { TailwindProvider, styled } from 'tailwindcss-react-native';

const StyledView = styled(Animated.View);
const StyledText = styled(Animated.Text);

export default function App(props) {
  return (
    <TailwindProvider platform="web" preview>
      <View style={styles.container}>
        <StyledView
          className="p-4 mt-4 bg-gray-800 rounded-lg"
          style={{ width: 100, backgroundColor: 'blue' }}
        >
          <StyledText className="font-bold text-white">
            React Native component
          </StyledText>
        </StyledView>
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
