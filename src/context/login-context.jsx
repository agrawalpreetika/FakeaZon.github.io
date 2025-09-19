// import { createContext, useContext, useState, useEffect } from "react";

// const LoginContext = createContext();

// export const LoginProvider = ({ children }) => {
//     const [login, setLogin] = useState(() => {
//         // Load login from localStorage on app start
//         const savedLogin = localStorage.getItem("login");
//         return savedLogin
//             ? JSON.parse(savedLogin)
//             : {
//                 email: "",
//                 password: "",
//                 token: ""
//             };
//     });

//     // Save login to localStorage whenever it changes
//     useEffect(() => {
//         localStorage.setItem("login", JSON.stringify(login));
//     }, [login]);

//     const updateLogin = (newData) => {
//         setLogin((prev) => ({ ...prev, ...newData }));
//     };

//     const clearLogin = () => {
//         setLogin({ email: "", password: "", token: "" });
//         localStorage.removeItem("login");
//     };

//     return (
//         <LoginContext.Provider value={{ login, updateLogin, clearLogin }}>
//             {children}
//         </LoginContext.Provider>
//     );
// };



// export const useLogin = () => useContext(LoginContext);


import { createContext, useContext, useState, useEffect } from "react";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [login, setLogin] = useState(() => {
        const savedLogin = localStorage.getItem("login");
        return savedLogin
            ? JSON.parse(savedLogin)
            : {
                email: "",
                password: "",
                token: "",
                name: "",
                avatar: ""
            };
    });

    useEffect(() => {
        localStorage.setItem("login", JSON.stringify(login));
    }, [login]);

    const updateLogin = (newData) => {
        setLogin((prev) => ({ ...prev, ...newData }));
    };

    const clearLogin = () => {
        setLogin({ email: "", password: "", token: "", name: "", avatar: "" });
        localStorage.removeItem("login");
    };

    return (
        <LoginContext.Provider value={{ login, updateLogin, clearLogin }}>
            {children}
        </LoginContext.Provider>
    );
};

export const useLogin = () => useContext(LoginContext);

