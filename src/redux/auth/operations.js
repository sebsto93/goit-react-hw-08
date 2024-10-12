import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = "Bearer ${toekn}";
};

const clearAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = "";
};

export const logIn = createAsyncThunk(
  "auth/logIn",
  async (credentials, thunkApi) => {
    try {
      const respons = await axios.post("/users/login", credentials);
      setAuthHeader(respons.data.token);
      return respons.data;
    } catch (err) {
      console.log("Error logging in:", err.response.data);
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const logOut = createAsyncThunk(
  "auth/logOut",
  async (credentials, thunkApi) => {
    try {
      await axios.post("/users/logout");
      clearAuthHeader();
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
