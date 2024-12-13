import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserData {   
  id: number;
  name: string;
  email: string;
  password: string;
  mobileNo: string;
  state: string;
  city: string;
  country: string;
  active: boolean;
  registrationDate: string;
}

interface UserState {
  allUsers: UserData[];
  userDetails: UserData | null | undefined; 
  loading: boolean;
  error: string | null
}

const initialState: UserState = {
  allUsers: [],
  userDetails:null, 
  loading: false,
  error:null
};

const AllUserSlice = createSlice({
  name: 'allUsers',
  initialState,
  reducers: {
    setAllUsersRequest(state) {
      state.loading = true;
      state.error = null
    },
    setAllUsersSuccess(state, action: PayloadAction<UserData[]>) {
      state.allUsers = action.payload;
      state.loading = false;
      state.error = null
    },
    setAllUsersFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload
    },

    fetchUserDetailsRequest(state) {
      state.loading = true;
      state.error = null
    },
    fetchUserDetailsSuccess(state, action: PayloadAction<number | null>) {
      state.userDetails = state.allUsers.find(user =>  user.id == action.payload);   
      state.error = null;
      state.loading = false;

    },
    fetchUserDetailsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload
    },

    deleteUserRequest(state) {
      state.loading = true;
      state.error = null
    },
    deleteUserSuccess(state, action: PayloadAction<number | null>) {
      state.allUsers = state.allUsers.filter((user) => user.id !== action.payload);
      state.loading = false;
      state.error = null
    },
    deleteUserFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload
    },
  },
});

export const {
 setAllUsersFailure,
 setAllUsersRequest,
 setAllUsersSuccess,
  fetchUserDetailsRequest,
  fetchUserDetailsSuccess,
  fetchUserDetailsFailure,
  deleteUserRequest,
  deleteUserSuccess,
  deleteUserFailure,
} = AllUserSlice.actions;

export default AllUserSlice.reducer;
