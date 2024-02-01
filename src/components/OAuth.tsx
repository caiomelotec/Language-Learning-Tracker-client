import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import axios from "axios";
import { useSaveStore } from "../store/saveUserDataStorage";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const OAuth = () => {
  const { save } = useSaveStore();
  const navigate = useNavigate();

  const handleGoogleAuth = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const res = await axios.post("http://localhost:8080/api/auth/google", {
        username: result.user.displayName,
        email: result.user.email,
        photo: result.user.photoURL,
      });

      save(res.data.userInfo);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <button
        onClick={handleGoogleAuth}
        type="button"
        className=" bg-gradient-to-r from-sky-800 to-gray-400 text-white p-3 rounded-lg uppercase hover:bg-gradient-to-r hover:from-gray-400 hover:to-sky-800 duration-200 disabled:opacity-80 w-fit font-semibold flex items-center gap-3"
      >
        <FaGoogle />
        CONTINUE WITH GOOGLE
      </button>
    </>
  );
};
