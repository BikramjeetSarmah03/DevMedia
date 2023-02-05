import PostsContainer from "./PostsContainer";
import Sidebar from "./Sidebar/Sidebar";
import MetaData from "../Layouts/MetaData";

const Home = () => {
  return (
    <>
      <MetaData title="Dev Media" />

      <div className="flex h-full mx-auto md:w-4/5 lg:w-4/6 mt-14">
        <PostsContainer />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
