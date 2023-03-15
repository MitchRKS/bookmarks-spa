import "./App.css";
import React from "react";
import { ProvideAuthController, useAuthController } from "./AuthController";
import AllBookmarks from "./components/AllBookmarks";
import { ProvideBookmarksController } from "./BookmarksController";
import CreateBookmark from "./components/CreateBookmark";
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
    <ProvideBookmarksController>
      <AllBookmarks />;
      <CreateBookmark />
    </ProvideBookmarksController>
  );
}
export default App;
