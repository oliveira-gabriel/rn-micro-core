import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { multiply, TextLabel } from 'rn-micro-core';

export default function App() {
  const [result, setResult] = React.useState();

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result2222: {result}</Text>
      <TextLabel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
