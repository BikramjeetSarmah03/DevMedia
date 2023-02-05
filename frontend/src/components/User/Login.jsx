import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Auth from "./Auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BackdropLoader from "../Layouts/BackdropLoader";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, loginUser } from "../../redux/actions/userAction";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, isAuthenticated, error, user } = useSelector(
    (state) => state.user
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      navigate(`/${user.username}`);
    }
  }, [dispatch, error, isAuthenticated, navigate]);

  return (
    <>
      {loading && <BackdropLoader />}
      <Auth>
        <div className="flex flex-col gap-2 p-4 pt-10 bg-white border">
          <img
            draggable="false"
            className="object-contain mx-auto h-30 w-36"
            src="https://res.cloudinary.com/bikramjeet/image/upload/v1675620098/DevMedia/Logo/download_krglnl.png"
            alt=""
          />
          <form
            onSubmit={handleLogin}
            className="flex flex-col items-center justify-center gap-3 m-3 md:m-8"
          >
            <TextField
              label="Email/Username"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              size="small"
              fullWidth
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              size="small"
              fullWidth
            />
            <button
              type="submit"
              className="w-full py-2 font-medium text-white rounded bg-primary-blue"
            >
              Log In
            </button>
            <span className="my-3 text-gray-500">OR</span>
            <Link
              to="/password/forgot"
              className="text-sm font-medium text-blue-800"
            >
              Forgot password?
            </Link>
          </form>
        </div>

        <div className="p-5 text-center bg-white border">
          <span>
            Don't have an account?{" "}
            <Link to="/register" className="text-primary-blue">
              Sign up
            </Link>
          </span>
        </div>
      </Auth>
    </>
  );
};

export default Login;
