import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    cars: ["Model S","Modle 3", "Model X", "Model Y"]
}
const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {},

})
export const selectCars = (state) => state.car.cars

export default carSlice.reducer