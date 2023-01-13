import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CommonState {
  appLoading: boolean;
  isMobile: boolean;
  selectedGame: any;
  gameModalVisibility: boolean;
  mobileGameModalVisibility: boolean;
}

const initialState: CommonState = {
  appLoading: true,
  isMobile: false,
  selectedGame: {},
  gameModalVisibility: false,
  mobileGameModalVisibility: false,
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    startLoadingApp(state) {
      state.appLoading = true;
    },
    stopLoadingApp(state) {
      state.appLoading = false;
    },
    setIsMobile(state, action: PayloadAction<any>) {
      state.isMobile = action.payload;
    },
    setSelectedGame(state, action: PayloadAction<any>) {
      state.selectedGame = action.payload;
    },
    setGameModalVisibility(state, action: PayloadAction<boolean>) {
      state.gameModalVisibility = action.payload;
    },
    setMobileGameModal(state, action: PayloadAction<boolean>) {
      state.mobileGameModalVisibility = action.payload;
    },
  },
});

export const {
  actions: { startLoadingApp, stopLoadingApp, setIsMobile, setMobileGameModal, setSelectedGame, setGameModalVisibility },
} = commonSlice;

export default commonSlice.reducer;
