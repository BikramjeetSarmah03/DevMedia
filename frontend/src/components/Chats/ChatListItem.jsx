import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { SOCKET_ENDPOINT } from '../../utils/constants';
import { io } from 'socket.io-client';

const ChatListItem = ({ _id, users, latestMessage }) => {

    const dispatch = useDispatch();
    const params = useParams();
    const [friend, setFriend] = useState({});

    const socket = useRef(null);
    const [isOnline, setIsOnline] = useState(false);

    const { user } = useSelector((state) => state.user);

    useEffect(() => {
        const friendDetails = users.find((u) => u._id !== user._id);
        setFriend(friendDetails)
    }, [users]);

    useEffect(() => {
        socket.current = io(SOCKET_ENDPOINT);
    }, []);

    useEffect(() => {
        socket.current.on("getUsers", users => {
            setIsOnline(users.some((u) => u.userId === friend._id));
        })
    }, [friend._id])

    return (
        <Link to={`/direct/t/${_id}/${friend._id}`} className={`${params.chatId === _id && 'bg-gray-100'} flex gap-3 items-center py-2 px-4 cursor-pointer hover:bg-gray-100`}>
            <div className="relative w-14 h-14">
                <img draggable="false" className="object-cover w-full h-full rounded-full" src={friend.avatar?.url} alt="avatar" />
                {isOnline && <div className="absolute right-0 bottom-0.5 h-3 w-3 bg-green-500 rounded-full"></div>}
            </div>
            <div className="flex flex-col items-start">
                <span className="text-sm">{friend.name}</span>
                <span className="text-sm text-gray-400 truncate w-36">{latestMessage?.content}</span>
            </div>
        </Link>
    )
}

export default ChatListItem