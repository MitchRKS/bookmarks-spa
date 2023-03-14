import "./App.css";
import React, { useState } from "react";
import { ProvideAuthController, useAuthController } from "./AuthController";
function App() {
  return (
    <div className="App">
      <ProvideAuthController>
        <Auth />
      </ProvideAuthController>
    </div>
  );
}

function Auth() {
  const { authorized } = useAuthController();
  return authorized ? <Dashboard /> : <Signup />;
}

function Signup() {
  const { setAuthorized } = useAuthController();

  return (
    <div>
      <h1>Signup</h1>
      <button
        onClick={() => {
          setAuthorized(true);
        }}
      >
        Authorize Me!
      </button>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}
export default App;
