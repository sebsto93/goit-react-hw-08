import React, { useEffect } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import SearchBox from "./components/SearchBox";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchContacts,
  addContact,
  deleteContact,
} from "./redux/contactsSlice";
import { selectFilteredContacts } from "./redux/selectors";
import { setFilter } from "./redux/filterSlice";
import styles from "./App.module.css";
import { Route, Routes } from "react-router-dom";

import SharedLayout from "./components/SharedLayout";
import { lazy } from "react";
import { RestrictedRoute } from "./components/RestrictedRoute";
import { PrivateRoute } from "./components/PrivateRoute";

const HomePage = lazy(() => import("./pages/HomePage/Home"));
const ContactPage = lazy(() => import("./pages/ContactPage/Contact"));
const LoginPage = lazy(() => import("./pages/LoginPage/Login"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/Register"));

function App() {
  return (
    <SharedLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectPath="/login" Component={<ContactPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectPath="/contacts"
              Component={<LoginPage />}
            />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectPath="/contacts"
              Component={<RegisterPage />}
            />
          }
        />
      </Routes>
    </SharedLayout>
  );
}

export default App;
