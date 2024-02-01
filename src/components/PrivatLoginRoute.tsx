import { Navigate, Outlet } from "react-router-dom";
import { useSaveStore } from "../store/saveUserDataStorage";

export default function PrivatLoginRoute() {
  const { currentUser } = useSaveStore();

  return currentUser ? <Navigate to="/" /> : <Outlet />;
}
