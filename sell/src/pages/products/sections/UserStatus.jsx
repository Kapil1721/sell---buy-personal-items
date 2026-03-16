
// import { useWebSocket, useWebSocketForUserStatus } from "../../../hooks/Hooks";
// import { webSocketUrl } from "../../../utils/constants";

const UserStatus = ({ status }) => {
    //   const status = useWebSocket(webSocketUrl+"?userId="+userId);

    console.log(status);
    return (
        <div>
            <p className='text-light font-medium text-sm flex items-center justify-start gap-2 '> <span className=' size-3 p-1 rounded-full bg-light'></span>User is {status ? "Online" : "Offline"}</p>
            {/* <p>{`User ${userId} is currently ${status}`}</p> */}
        </div>
    );
};

export default UserStatus;
