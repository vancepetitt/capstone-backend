// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from 'axios';

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SelectedDataDisplayPage from "./pages/SelectedDataDisplayPage/SelectedDataDisplayPage";
import TestDataInputPage from "./pages/TestDataInputPage/TestDataInputPage";
import EnvironmentExplorerPage from "./pages/EnvironmentExplorerPage/EnvironmentExplorerPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import React, { useState, useEffect} from "react";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/datadisplay"
          element={
            <PrivateRoute>
              <SelectedDataDisplayPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/envexplorer"
          element={
            <PrivateRoute>
              <EnvironmentExplorerPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/input"
          element={
            <PrivateRoute>
              <TestDataInputPage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
