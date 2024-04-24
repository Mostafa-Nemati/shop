import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth'
// ...

export const store = configureStore({
  reducer: {
    auth : authSlice
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export const selectPhoneVerifyToken = (state : RootState) => state.auth.phoneVerifyToken
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch