import { useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useBrowserFocus = (onFocus) => {
    useEffect(() => {
        const handleWindowFocus = () => {
            onFocus();
        };

        window.addEventListener('focus', handleWindowFocus);

        return () => {
            window.removeEventListener('focus', handleWindowFocus);
        };
    }, [onFocus]);
};
export const useQueryData = () => {
    const [queryParams, setQueryParams] = useState({})
    const [URLSearchParams, SetURLSearchParams] = useSearchParams();

    // const searchParams = {}
    // URLSearchParams?.forEach((value, key, parent) => {
    //     if (searchParams[key]) {
    //         searchParams[key] = value
    //     } else {
    //         searchParams[key] = value
    //     }
    // });
    useEffect(() => {
        const searchParams = {}
        URLSearchParams?.forEach((value, key, parent) => {
            if (searchParams[key]) {
                searchParams[key] = value
            } else {
                searchParams[key] = value
            }
        });
        setQueryParams(searchParams)
    }, []);
    return queryParams
};


export function createValidator(schema) {
    return function validate(formData) {
        const errors = {};

        Object.keys(schema).forEach((key) => {
            const error = schema[key](formData[key]);
            if (error) {
                errors[key] = error;
            }
        });

        return errors;
    };
}

export function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}

// hooks/useWebSocket.js
// export const useWebSocket = (url) => {
//     const [messages, setMessages] = useState([]);
//     const ws = useRef(null);

//     useEffect(() => {
//         ws.current = new WebSocket(url);

//         ws.current.onopen = () => {
//             console.log('WebSocket connected');
//         };

//         ws.current.onmessage = (event) => {
//             const message = JSON.parse(event.data);
//             setMessages((prev) => [...prev, message]);
//         };

//         ws.current.onclose = () => {
//             console.log('WebSocket disconnected');
//         };

//         ws.current.onerror = (error) => {
//             console.error('WebSocket error:', error);
//         };

//         return () => {
//             ws.current.close();
//         };
//     }, [url]);

//     const sendMessage = useCallback((message) => {
//         if (ws.current && ws.current.readyState === WebSocket.OPEN) {
//             ws.current.send(JSON.stringify(message));
//         }
//     }, []);

//     return [messages, sendMessage];
// };

// hooks/us

// export const useWebSocketForUserStatus = (url, userId) => {
//   const [status, setStatus] = useState('offline');
//   const ws = useRef(null);

//   useEffect(() => {
//     ws.current = new WebSocket(url);

//     // ws.current.onopen = () => {
//     //   console.log('WebSocket connected');
//     //   updateStatus('online');
//     // };

//     ws.current.onmessage = (event) => {
//       const message = JSON.parse(event.data);
//       console.log(message,"jjgh");
//     };

//     ws.current.onclose = () => {
//       console.log('WebSocket disconnected');
//       updateStatus('offline');
//     };

//     ws.current.onerror = (error) => {
//       console.error('WebSocket error:', error);
//     };

//     return () => {
//       updateStatus('offline');
//       ws.current.close();
//     };
//   }, [url]);

//   const updateStatus = useCallback((newStatus) => {
//     if (ws.current && ws.current.readyState === WebSocket.OPEN) {
//       ws.current.send(JSON.stringify({ userId, status: newStatus }));
//       setStatus(newStatus);
//     }
//   }, [userId]);

//   useEffect(() => {
//     const handleOnline = () => updateStatus('online');
//     const handleOffline = () => updateStatus('offline');

//     window.addEventListener('online', handleOnline);
//     window.addEventListener('offline', handleOffline);

//     return () => {
//       window.removeEventListener('online', handleOnline);
//       window.removeEventListener('offline', handleOffline);
//     };
//   }, [updateStatus]);

//   return status;
// };




