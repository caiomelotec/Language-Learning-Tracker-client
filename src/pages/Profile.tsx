import { useRef, useState, useEffect } from "react";
import DeleteAccountModal from "../components/DeleteAccountModal";

import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import axios from "axios";
import { useFetchUserStore } from "../store/userStore";

type FormData = {
  username?: string;
  email?: string;
  password?: string;
  profileImg?: string | undefined;
};

export const Profile = () => {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [img, setImg] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [imgError, setImgError] = useState("");
  const [formData, setFormData] = useState<FormData>({});
  const [userSuccess, setUserSuccess] = useState("");
  const [imgSuccess, setImgSuccess] = useState("");
  const { currentUser } = useFetchUserStore();

  useEffect(() => {
    if (img) {
      handleFileUpload(img);
    }
  }, [img]);

  const handleFileUpload = async (img: File): Promise<void> => {
    const storage = getStorage(app);

    const fileName = Date.now() + img.name;
    const storageRef = ref(storage, fileName.split(" ").join(""));
    const uploadTask = uploadBytesResumable(storageRef, img);

    uploadTask.on(
      "state_changed",

      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        setProgress(() => Math.round(progress));

        setImgSuccess("Image uploaded successfully!");
        setImgError("");
      },
      (err) => {
        if (err instanceof Error) {
          setImgError("Error uploading img(file size must be less than 2MB)");
          setImgSuccess("");
        }
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, profileImg: downloadURL });
        });
      }
    );
  };

  const updateUser = async () => {
    try {
      await axios.put("http://localhost:8080/api/user/updateuser", formData, {
        withCredentials: true,
      });
      setUserSuccess("User updated successfully!");
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-white text-center my-7">
        Profile
      </h1>
      <form action="" className="flex flex-col gap-5" onSubmit={updateUser}>
        <input
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
          onChange={(e) => setImg(e.target ? e.target.files![0] : null)}
        />
        <img
          className="w-24 h-24 self-center cursor-pointer rounded-full object-cover"
          src={formData?.profileImg || currentUser?.profileImg}
          alt="profile"
          onClick={() => fileRef.current?.click()}
        />
        {/*Handle Img progress state */}
        {progress > 0 && progress < 100 && (
          <p className="text-white text-center text-lg">
            Uploading: {progress} %
          </p>
        )}
        {imgSuccess && (
          <p className="text-lg text-center text-green-500">{imgSuccess}</p>
        )}
        {imgError && (
          <p className="text-red-600 text-lg text-center">{imgError}</p>
        )}
        {/*  */}
        {userSuccess && (
          <p className="text-green-500 text-lg text-center">{userSuccess}</p>
        )}
        {/*  */}
        <input
          type="text"
          placeholder="Username"
          id="username"
          autoComplete="off"
          defaultValue={currentUser?.username}
          className="bg-slate-300 p-3 rounded-lg placeholder:text-slate-600
          bg-gradient-to-r from-slate-400 to-gray-300 w-full"
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />
        <input
          defaultValue={currentUser?.email}
          type="text"
          placeholder="Email Address"
          id="email"
          autoComplete="off"
          className="bg-slate-300 p-3 rounded-lg placeholder:text-slate-600
          bg-gradient-to-r from-slate-400 to-gray-300 w-full"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />{" "}
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          autoComplete="off"
          className="bg-slate-300 p-3 rounded-lg placeholder:text-slate-600
        bg-gradient-to-r from-slate-400 to-gray-300 w-full"
        />
        <button className=" bg-gradient-to-r from-slate-700 to-gray-400 text-white p-3 rounded-lg uppercase hover:bg-gradient-to-r hover:from-gray-400 hover:to-slate-700 duration-200 disabled:opacity-80 w-fit">
          UPDATE
        </button>
        <div>
          <DeleteAccountModal />
        </div>
      </form>
    </div>
  );
};
