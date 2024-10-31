import axios from "axios"
import { createAppSlice } from "../../app/createAppSlice"
import { IState, IUser } from "./types"
import { PayloadAction } from "@reduxjs/toolkit"

const initialState: IState = {
  user: [],
}

export const userSlice = createAppSlice({
  name: "users",
  initialState,
  reducers: create => ({
    deleteUser: create.asyncThunk(
      async (user: IUser) => {
        const response = await axios.delete(
          "http://localhost:3004/users/" + user.id,
        )
        return response.data
      },
      {
        fulfilled: (state, action: PayloadAction<IUser>) => {
          state.user = state.user.filter(user => user.id !== action.payload.id)
        },
      },
    ),
    getAllUser: create.asyncThunk(
      async () => {
        const response = await axios.get("http://localhost:3004/users")
        return response.data
      },
      {
        fulfilled: (state, action: PayloadAction<IUser[]>) => {
          state.user = action.payload
        },
      },
    ),
  }),
  selectors: {
    users: state => state.user,
  },
})

export const { getAllUser, deleteUser } = userSlice.actions
export const { users } = userSlice.selectors
