
import {
  createContext,
  useContext,
  useState,
} from "react";

import toast from "react-hot-toast";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async ({ email, password }) => {
    if (!email.trim() || !password) {
      throw new Error("Please enter your email and password.");
    }

    // Frontend demo only: accepts any non-empty email/password.
    // Real credential verification will be added with the backend.
    const loggedInUser = {
      name: email.trim().split("@")[0],
      email: email.trim().toLowerCase(),
    };

    setUser(loggedInUser);
    
    // Show success toast
    toast.success("logged in successfully!");
    return loggedInUser;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
};
