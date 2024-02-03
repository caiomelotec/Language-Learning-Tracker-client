import { Outlet, Navigate } from "react-router-dom";
import { useSaveStore } from "../store/saveUserDataStorage";

export const PrivatRoute = () => {
  const { localUser } = useSaveStore();

  return localUser ? <Outlet /> : <Navigate to="/login" />;
};
