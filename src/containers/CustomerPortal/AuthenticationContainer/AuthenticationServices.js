import axios from "axios";

/* Authentication management services */
export const signinUser = (event, signinUser, setSigninUser, signinUserRef) => {
    event.preventDefault();
    axios
        .post("http://localhost:8080/api/auth/signin", signinUser)
        .then((res) => {
            console.log("response: " + JSON.stringify(res.data));
            if (res.data.token) {
                localStorage.setItem("user", JSON.stringify(res.data));
            }
        });

    setSigninUser(signinUserRef);
    window.location.reload();
}

export const registerUser = (event, registerUser, setRegisterUser, registerUserRef) => {
    event.preventDefault();
    axios
        .post("http://localhost:8080/api/auth/signup", registerUser)
        .then((res) => {
            console.log(res);
        });

    setRegisterUser(registerUserRef);
    window.location.reload();
}

/* Event management services */
export const handleSigninUsername = (event, setSigninUser) => {
    const value = event.target.value;

    setSigninUser(prevState => ({
        ...prevState,
        username: value
    }));
}

export const handleSigninPassword = (event, setSigninUser) => {
    const value = event.target.value;

    setSigninUser(prevState => ({
        ...prevState,
        password: value
    }));
}

export const handleRegisterUsername = (event, setRegisterUser) => {
    const value = event.target.value;

    setRegisterUser(prevState => ({
        ...prevState,
        username: value
    }));
}

export const handleRegisterEmail = (event, setRegisterUser) => {
    const value = event.target.value;

    setRegisterUser(prevState => ({
        ...prevState,
        email: value
    }));
}

export const handleRegisterPassword = (event, setRegisterUser) => {
    const value = event.target.value;

    setRegisterUser(prevState => ({
        ...prevState,
        password: value
    }));
}