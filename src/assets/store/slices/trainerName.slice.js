import { createSlice } from "@reduxjs/toolkit";

const nameTrainerSlice = createSlice({
    name: 'name<<<trainer',
    initialState: '',
    reducers: {
        setNameTrainer: (state, action) => action.payload 
    }
})

export const { setNameTrainer } = nameTrainerSlice.actions
export default nameTrainerSlice.reducer

