import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async ({ name, email, password }, thunkApi) => {
    try {
      const response = await axios.post(
        "https://connections-api.goit.global/users/signup",
        {
          name,
          email,
          password,
        }
      );
      return response.data;
    } catch (err) {
      console.error(
        "Error during registration:",
        err.response ? err.response.data : err.message
      );
      return thunkApi.rejectWithValue(
        err.response ? err.response.data : err.message
      );
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/logIn",
  async (credentials, thunkApi) => {
    try {
      const response = await axios.post("/users/login", credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (err) {
      console.log("Error logging in:", err.response.data);
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logOut", async (_, thunkApi) => {
  try {
    await axios.post("/users/logout");
    clearAuthHeader();
  } catch (err) {
    return thunkApi.rejectWithValue(err.message);
  }
});
