import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { followUser } from "../../../redux/actions/userAction";

const UserListItem = ({ _id, username, avatar }) => {
  const dispatch = useDispatch();

  const [follow, setFollow] = useState(false);

  const handleFollow = () => {
    setFollow(!follow);
    dispatch(followUser(_id));
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <Link to={`/${username}`}>
          <img
            draggable="false"
            className="object-cover rounded-full w-9 h-9"
            src={avatar.url}
            alt="avatar"
          />
        </Link>
        <div className="flex flex-col gap-0.5">
          <Link
            to={`/${username}`}
            className="text-sm font-semibold text-black hover:underline"
          >
            {username}
          </Link>
          <span className="text-xs text-gray-400">New to DevMedia</span>
        </div>
      </div>
      <button
        onClick={handleFollow}
        className={`${
          follow ? "text-red-500" : "text-blue-500"
        } text-xs font-medium`}
      >
        {follow ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};

export default UserListItem;
