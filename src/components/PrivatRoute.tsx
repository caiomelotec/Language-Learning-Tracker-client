import { Outlet, Navigate } from "react-router-dom";
import { useSaveStore } from "../store/saveUserDataStorage";

export const PrivatRoute = () => {
  const { currentUser } = useSaveStore();

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};
