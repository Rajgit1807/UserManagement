import { AppDispatch } from "../store";
import {
  deleteUserFailure,
  deleteUserRequest,
  deleteUserSuccess,
  fetchUserDetailsFailure,
  fetchUserDetailsRequest,
  fetchUserDetailsSuccess,
  setAllUsersFailure,
  setAllUsersRequest,
  setAllUsersSuccess,
} from "./reducer";

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

type AppError = {
  message: string;
  code?: number;
};

export const setAllUsers =
  (data: UserData[]) => async (dispatch: AppDispatch) => {
    dispatch(setAllUsersRequest());
    try {
      dispatch(setAllUsersSuccess(data));
    } catch (error: any) {
      const appError: AppError = {
        message: error.message || "Failed to set users",
        code: error.code,
      };
      dispatch(setAllUsersFailure(appError.message));
    }
  };

export const fetchUserDetails =
  (userId: number) => async (dispatch: AppDispatch) => {
    dispatch(fetchUserDetailsRequest());
    try {
      dispatch(fetchUserDetailsSuccess(userId));
    } catch (error: any) {
      const appError: AppError = {
        message: error.message || "Failed to fetch user details",
        code: error.code,
      };
      dispatch(fetchUserDetailsFailure(appError.message));
    }
  };

export const deleteUser = (userId: number | null) => async (dispatch: AppDispatch) => {
  dispatch(deleteUserRequest());
  try {
    dispatch(deleteUserSuccess(userId));
  } catch (error: any) {
    const appError: AppError = {
      message: error.message || "Failed to delete user",
      code: error.code,
    };
    dispatch(deleteUserFailure(appError.message));
  }
};
