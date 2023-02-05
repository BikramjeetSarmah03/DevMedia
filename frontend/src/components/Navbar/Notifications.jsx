import React from "react";

const Notifications = () => {
  return (
    <div className="absolute w-56 bg-green-100 border rounded drop-shadow-xl right-96 top-14">
      <div className="absolute w-4 h-4 rotate-45 bg-white border-t border-l rounded-sm right-5 -top-2"></div>

      <div className="flex flex-col w-full overflow-hidden">
        {Array(5)
          .fill("")
          .map((el, i) => (
            <div
              className="flex items-center gap-3 p-2.5 text-sm pl-4 cursor-pointer hover:bg-gray-50"
              key={i}
            >
              Profile
            </div>
          ))}
      </div>
    </div>
  );
};

export default Notifications;
