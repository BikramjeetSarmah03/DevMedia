const Auth = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex flex-col w-full gap-3 md:w-2/5">{children}</div>
    </div>
  );
};

export default Auth;
