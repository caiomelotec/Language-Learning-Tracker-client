import { useRef, useState } from "react";
import DeleteAccountModal from "../components/DeleteAccountModal";
import { useSaveStore } from "../store/saveUserDataStorage";

export const Profile = () => {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [img, setImg] = useState<File | null>(null);
  const { currentUser } = useSaveStore();

  console.log(img);
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
