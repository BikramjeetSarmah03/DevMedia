const Message = ({ ownMsg, avatar, content }) => {
  return ownMsg ? (
    content === "❤️" ? (
      <span className="self-end text-4xl">{content}</span>
    ) : (
      <span className="self-end max-w-xs px-4 py-3 text-sm text-white bg-violet-600 rounded-3xl">
        {content}
      </span>
    )
  ) : content === "❤️" ? (
    <div className="flex items-end max-w-xs gap-2">
      <img
        draggable="false"
        className="object-cover rounded-full w-7 h-7"
        src={avatar?.url}
        alt="avatar"
      />
      <span className="items-end text-4xl">{content}</span>
    </div>
  ) : (
    <div className="flex items-end max-w-xs gap-2">
      <img
        draggable="false"
        className="object-cover rounded-full w-7 h-7"
        src={avatar?.url}
        alt="avatar"
      />
      <span className="max-w-xs px-4 py-3 overflow-hidden text-sm bg-gray-200 rounded-3xl">
        {content}
      </span>
    </div>
  );
};

export default Message;
