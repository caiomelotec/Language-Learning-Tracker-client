import { Navigate, Outlet } from "react-router-dom";
import { useSaveStore } from "../store/saveUserDataStorage";

export default function PrivatLoginRoute() {
  const { localUser } = useSaveStore();

  return localUser ? <Navigate to="/" /> : <Outlet />;
}
