import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const NoteItem = ({ text, onRemove }) => {
  return (
    <View style={styles.noteContainer}>
      <Text style={styles.noteText}>{text}</Text>
      <Button title="Remover" onPress={onRemove} color="#ff6b6b" />
    </View>
  );
};

const styles = StyleSheet.create({
  noteContainer: {
    padding: 10,
    backgroundColor: '#e9ecef',
    borderRadius: 5,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  noteText: {
    fontSize: 16,
    flex: 1,
    marginRight: 10,
  },
});

export default NoteItem;
