import { ClickAwayListener } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logoutUser } from "../../redux/actions/userAction";
import { profileIcon, savedIcon, settingsIcon } from "./SvgIcons";

const ProfileDetails = ({ setProfileToggle }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);

  const tabs = [
    {
      title: "Profile",
      icon: profileIcon,
      redirect: `/${user.username}`,
    },
    {
      title: "Saved",
      icon: savedIcon,
      redirect: `/${user.username}`,
    },
    {
      title: "Settings",
      icon: settingsIcon,
      redirect: "/accounts/edit",
    },
    // {
    //   title: "Switch Account",
    //   icon: switchAccountIcon,
    //   redirect: "/",
    // },
  ];

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
    toast.success("Logout Successfully");
  };

  return (
    <ClickAwayListener onClickAway={() => setProfileToggle(false)}>
      <div className="absolute right-0 w-56 bg-white border rounded drop-shadow top-14 md:right-72 md:top-14">
        <div className="absolute w-4 h-4 rotate-45 bg-white border-t border-l rounded-sm right-5 -top-2"></div>

        <div className="flex flex-col w-full overflow-hidden">
          {tabs.map((el, i) => (
            <Link
              to={el.redirect}
              className="flex items-center gap-3 p-2.5 text-sm pl-4 cursor-pointer hover:bg-gray-50"
              key={i}
            >
              {el.icon}
              {el.title}
            </Link>
          ))}
          <button
            onClick={handleLogout}
            className="flex rounded-b border-t-2 items-center gap-3 p-2.5 text-sm pl-4 cursor-pointer hover:bg-gray-50"
          >
            Logout
          </button>
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default ProfileDetails;
