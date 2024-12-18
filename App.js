import React, { useState } from 'react';
import {  StyleSheet, View, Text, Button, Modal, BackHandler, TouchableOpacity } from 'react-native';
import NotesList from './components/NotesList';
import AddNoteForm from './components/AddNoteForm';

export default function App() {
  const [notes, setNotes] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addNote = (note) => {
    if (note.trim()) {
      setNotes((prevNotes) => [...prevNotes, note]);
    }
  };

  const removeNote = (index) => {
    const updatedNotes = notes.slice(); 
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  const removeAll = () => {
    setIsModalVisible(false);
    setTimeout(() => {
    setNotes([]);
    }, 100);
  };
  
  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Gerenciador de Notas</Text>
      <AddNoteForm onAddNote={addNote} />
      <NotesList notes={notes} onRemoveNote={removeNote} />
      <View style={styles.footer}>
        <Button title="Remover Tudo" onPress={showModal} color="#dc3545" />
      </View>
      <Modal
        visible={isModalVisible}
        transparent
        animationType="fade"
        onRequestClose={hideModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Tem certeza de que deseja remover tudo?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.button} onPress={removeAll}>
                <Text style={styles.buttonText}>Sim</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={hideModal}>
                <Text style={styles.buttonText}>Não</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  footer: {
    marginTop: 20,
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#dee2e6',
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    backgroundColor: '#198754',
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#dc3545',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});