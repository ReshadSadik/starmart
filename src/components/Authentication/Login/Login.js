import React from 'react';
import { BsGoogle } from 'react-icons/bs';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
  const { googleSignIn, user } = useAuth();

  const handleGoogleSignIn = (e) => {
    googleSignIn();
    e.preventDefault();
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <button
        onClick={handleGoogleSignIn}
        className="rounded flex items-center  text-2xl  border-blue-500 border-2  mt-5"
      >
        <div className="p-2">
          <BsGoogle />
        </div>

        <h2 className=" p-2 bg-blue-500 text-white font-bold ">
          sign in with google
        </h2>
      </button>
    </div>
  );
};

export default Login;
