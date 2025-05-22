import React, { useState } from 'react';
import { db } from '../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { TextField, Button, Box } from '@mui/material';

export const TodoEdit = ({ todo, onCancel, onSave }) => {
  const [editedText, setEditedText] = useState(todo.text);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!editedText.trim()) return;

    try {
      const todoRef = doc(db, 'todos', todo.id);
      await updateDoc(todoRef, { text: editedText });
      onSave();
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2, flex: 1 }}>
      <TextField
        fullWidth
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
        autoFocus
      />
      <Button type="submit" variant="contained" color="primary" sx={{ minWidth: 100 }}>
        Save
      </Button>
      <Button onClick={onCancel} variant="outlined" sx={{ minWidth: 100 }}>
        Cancel
      </Button>
    </Box>
  );
};

