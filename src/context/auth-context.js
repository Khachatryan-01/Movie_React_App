import React, { useEffect, useState } from "react"

const AuthContext = React.createContext({
    users: [],
    isValidName() { },
    addUser() { },
    loginUser() { },
});

const AuthProvider = ({ children }) => {

    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);
    const [activeUser, setActiveUser] = useState(JSON.parse(sessionStorage.getItem('activeUser')) || null)

    useEffect(() => {
        sessionStorage.setItem('activeUser', JSON.stringify(activeUser));
    }, [activeUser])

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users])

    const registerUser = (newUser) => {
        newUser.id = users.length + 1;

        setUsers((prevState) => [...prevState, newUser]);
        setActiveUser(newUser);
    }

    const isValidName = (newUser) => {
        let isValid = true;
        for (const user of users) {
            if (user.userName === newUser.userName) {
                isValid = false;

                break;
            }
        }

        return isValid
    }

    const loginUser = (userName, password) => {
        const user = users.find((user) => user.userName === userName && user.password === password);

        if (user) {
            setActiveUser(user);

            window.location.href = '/movies';
        }

        return user !== undefined
    }


    return (
        // <AuthContext.Consumer>
        // 	{(authCtx) => {

        // 		console.log(authCtx);
        // 		return (
        // 			<div className={style.wrapper}>
        // 				<h2>{detailItem?.title}</h2>
        // 			</div>
        // 		)
        // 	}}
        // </AuthContext.Consumer>
        
        <AuthContext.Provider value={{
            users: users,
            activeUser: activeUser,
            isValidName: isValidName,
            registerUser: registerUser,
            loginUser: loginUser,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider };
