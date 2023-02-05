import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  clearErrors,
  getSuggestedUsers,
} from "../../../redux/actions/userAction";
import { FOLLOW_USER_RESET } from "../../../redux/constants/userConstants";
import SkeletonUserItem from "../../Layouts/SkeletonUserItem";
import UserListItem from "./UserListItem";

const Sidebar = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  const { error, users, loading } = useSelector((state) => state.allUsers);
  const {
    error: followError,
    success,
    message,
  } = useSelector((state) => state.followUser);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(getSuggestedUsers());
  }, [dispatch, error]);

  useEffect(() => {
    if (followError) {
      toast.error(followError);
      dispatch(clearErrors());
    }
    if (success) {
      toast.success(message);
      // dispatch({ type: POST_FOLLOWING_RESET });
      // dispatch(getPostsOfFollowing());
      dispatch({ type: FOLLOW_USER_RESET });
    }
  }, [success, followError]);

  return (
    <div className="fixed flex-col flex-auto hidden w-3/12 h-full pr-8 m-8 mt-12 lg:right-32 xl:right-56 lg:flex -z-1">
      <div className="flex flex-col p-2 ml-10">
        {/* <!-- self profile card --> */}
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-auto space-x-4">
            <Link to={`/${user.username}`}>
              <img
                draggable="false"
                className="object-cover rounded-full w-14 h-14"
                src={user.avatar.url}
                alt={user.name}
              />
            </Link>
            <div className="flex flex-col">
              <Link
                to={`/${user.username}`}
                className="text-sm font-semibold text-black"
              >
                {user.username}
              </Link>
              <span className="text-sm text-gray-400">{user.name}</span>
            </div>
          </div>
          <span className="text-xs font-semibold text-blue-500 cursor-pointer">
            Switch
          </span>
        </div>

        {/* <!-- suggestions --> */}
        <div className="flex items-center justify-between mt-5">
          <p className="text-sm font-semibold text-gray-500">
            Suggestions For You
          </p>
          <span className="text-xs font-semibold text-black cursor-pointer">
            See All
          </span>
        </div>

        {/* <!-- suggested profile lists --> */}
        <div className="flex flex-col flex-auto mt-3 space-y-3.5">
          {loading
            ? Array(5)
                .fill("")
                .map((el, i) => <SkeletonUserItem key={i} />)
            : users?.map((user) => <UserListItem {...user} key={user._id} />)}
        </div>

        {/* <!-- sidebar footer container--> */}
        <div className="flex flex-col mt-8 space-y-6 text-xs text-gray-400">
          <span>
            &copy; {new Date().getFullYear()} DevMedia: Made by Bikramjeet
            Sarmah
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
