import React from 'react';
import { NoteContext } from './NoteContext'

const NoteState = (props) => {
  const state = {
    name:"harsika",
    class:"10th",
  }
  return (
    <NoteContext.Provider value = {state}>
        {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;
//we can use it any where we want by using UseContext hook as: useContext(NoteState).