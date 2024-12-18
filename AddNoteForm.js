import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Keyboard } from 'react-native';

const AddNoteForm = ({ onAddNote }) => {
  const [note, setNote] = useState('');

  const handleAddNote = () => {
    onAddNote(note);
    setNote('');
    Keyboard.dismiss();
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Digite sua nota aqui..."
        value={note}
        onChangeText={setNote}
      />
      <Button title="Adicionar" onPress={handleAddNote} />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
});

export default AddNoteForm;
