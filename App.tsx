
import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Sortable, { SortableGridRenderItem } from 'react-native-sortables';

const DATA = Array.from({ length: 15 }, (_, index) => `Item ${index + 1}`);

const FIXED_ITEMS = [DATA[0], DATA[7], DATA[14]];


export  function App() {
 const renderItem = useCallback<SortableGridRenderItem<string>>(({ item }) => {
    const isFixed = FIXED_ITEMS.includes(item);
    return (
      <Sortable.Handle mode={isFixed ? 'fixed-order' : 'draggable'}>
        <View
          style={[
            styles.card,
            { backgroundColor: isFixed ? '#9aaeac' : '#36877F' }
          ]}>
          <Text style={styles.text}>{item}</Text>
        </View>
      </Sortable.Handle>
    );
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <Sortable.Grid
        columnGap={10}
        customHandle
        columns={3}
        data={DATA}
        renderItem={renderItem}
        rowGap={10}
      />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 10,
    height: 100,
    justifyContent: 'center',
    margin: 5,
    width: 100,
  },
  container: {
    flex: 1,
    padding: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});