import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const CounterApp: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Contador: {count}</Text>
      <Button title="Sumar 1" onPress={incrementCount} />
      <Button title="Restar 1" onPress={decrementCount} />
    </View>
  );
};

export default CounterApp;