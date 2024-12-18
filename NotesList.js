import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import NoteItem from './NoteItem';

const NotesList = ({ notes, onRemoveNote }) => {
  return (
    <View style={styles.listContainer}>
      {notes.length === 0 ? (
        <Text style={styles.emptyText}>Nenhuma nota adicionada</Text>
      ) : (
        <ScrollView>
          {notes.map((note, index) => (
            <NoteItem
              key={index}
              text={note}
              onRemove={() => onRemoveNote(index)}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    marginTop: 10,
  },
  emptyText: {
    textAlign: 'center',
    color: '#6c757d',
    fontSize: 16,
    marginTop: 20,
  },
});

export default NotesList;
