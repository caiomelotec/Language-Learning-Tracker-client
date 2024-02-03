import { useRef, useState, useEffect } from "react";
import DeleteAccountModal from "../components/DeleteAccountModal";
import { useSaveStore } from "../store/saveUserDataStorage";
import {
  StorageError,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";

export const Profile = () => {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [img, setImg] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const { currentUser } = useSaveStore();
  const [imgError, setImgError] = useState(false);
  const [formData, setFormData] = useState({});

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
        setProgress(Math.round(progress));
      },
      (err: StorageError) => {
        if (err) setImgError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, profileImg: downloadURL });
        });
      }
    );
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-white text-center my-7">
        Profile
      </h1>
      <form action="" className="flex flex-col gap-5">
        <input
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
          onChange={(e) => setImg(e.target ? e.target.files![0] : null)}
        />
        <img
          className="w-24 h-24 self-center cursor-pointer rounded-full object-cover"
          src={currentUser?.profileImg}
          alt="profile"
          onClick={() => fileRef.current?.click()}
        />
        {/*Handle Img progress state */}
        {/* {imgError && (
          <span className="text-red-600 text-lg text-center">
            Error uploading img
          </span>
        )} */}
        {progress > 0 && progress < 100 && (
          <span className="text-white text-center text-lg">
            Uploading: {progress} %
          </span>
        )}
        {progress === 100 && !imgError ? (
          <span className="text-lg text-center text-green-500">
            File uploaded sucessfully!
          </span>
        ) : (
          imgError && (
            <span className="text-red-600 text-lg text-center">
              Error uploading img(file size must be less than 2MB)
            </span>
          )
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
        />
        <input
          defaultValue={currentUser?.email}
          type="text"
          placeholder="Email Address"
          id="email"
          autoComplete="off"
          className="bg-slate-300 p-3 rounded-lg placeholder:text-slate-600
          bg-gradient-to-r from-slate-400 to-gray-300 w-full"
        />{" "}
        <input
          type="password"
          placeholder="Password"
          id="password"
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
