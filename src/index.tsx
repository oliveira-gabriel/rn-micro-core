import React from 'react';
import { Text } from 'react-native';

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a / b);
}

export function TextLabel() {
  return <Text>{'MUITO BEM MUITO BOM!'}</Text>;
}
