import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Auth from "./Auth";
import { Link } from "react-router-dom";
import { clearErrors, forgotPassword } from "../../redux/actions/userAction";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import BackdropLoader from "../Layouts/BackdropLoader";

const ForgotPassword = () => {
  const dispatch = useDispatch();

  const { error, message, loading } = useSelector(
    (state) => state.forgotPassword
  );

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email));
    setEmail("");
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (message) {
      toast.success(message);
    }
  }, [dispatch, error, message]);

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
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center gap-3 m-3 md:m-8"
          >
            <TextField
              label="Email"
              variant="outlined"
              size="small"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full py-2 font-medium text-white rounded bg-primary-blue"
            >
              Submit
            </button>
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

export default ForgotPassword;
