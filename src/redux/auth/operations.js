import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://task-menager-api.goit.global/";

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
