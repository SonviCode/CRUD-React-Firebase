import { useState } from "react";
import ConnectModal from "./Components/ConnectModal";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./utils/firebase.config";
import CreatePost from "./Components/CreatePost";

function App() {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className="app-header">
      {user && (
        <div className="user-infos">
          <span>{user?.displayName[0]}</span>
          <h4>{user?.displayName}</h4>
          <button onClick={() => handleLogout()}
          ><i className="fa-solid fa-arrow-right-from-bracket"></i></button>
      </div>)}

      {user ? <CreatePost /> : <ConnectModal />}

      <div className="post-container"></div>
    </div>
  );
}

export default App;
