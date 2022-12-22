import { createSlice, nanoid } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [],
    addNewNote: {
      isLoading: false,
    },
  },
  reducers: {
    addNote: {
      reducer: (state, action) => {
        state.notes.push(action.payload);
      },
      prepare: (content, color) => {
        return {
          payload: {
            id: nanoid(4),
            content,
            color,
          },
        };
      },
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
  },
});

export const { addNote, deleteNote } = notesSlice.actions;
