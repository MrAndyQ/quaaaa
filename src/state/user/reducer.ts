import { createSlice } from '@reduxjs/toolkit'
import { ConnectionType } from '../../connection/types'
import { updateVersion } from '../global/actions'
import { SerializedPair, SerializedToken, SlippageTolerance } from './types'

const currentTimestamp = () => new Date().getTime()

export interface UserState {
  selectedWallet?: ConnectionType
}

function pairKey(token0Address: string, token1Address: string) {
  return `${token0Address};${token1Address}`
}

export const initialState: UserState = {
  selectedWallet: undefined,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateSelectedWallet(state, { payload: { wallet } }) {
      state.selectedWallet = wallet
    },
  },
})

export const {
  updateSelectedWallet,
} = userSlice.actions
export default userSlice.reducer
