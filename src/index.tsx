import { Text } from 'react-native';

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a / b);
}

export function TextLabel(): Element {
  return <Text>MUITO BEM MUITO BOM!</Text>;
}
