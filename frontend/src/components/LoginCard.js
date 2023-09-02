import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { InputAdornment, IconButton, TextField, Box } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const LoginCard = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
    });
    const { email, password } = inputValue;
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    const handleError = (err) => toast.error(err, { position: "bottom-left" });

    const handleSuccess = (msg) =>
        toast.success(msg, { position: "bottom-left" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "http://localhost:4000/login",
                {
                    ...inputValue,
                },
                { withCredentials: true }
            );
            console.log(data);
            const { success, message } = data;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate("/");
                }, 1000);
            } else {
                handleError(message);
            }
        } catch (error) {
            console.log(error);
        }
        setInputValue({
            ...inputValue,
            email: "",
            password: "",
        });
    };
    return (
        <>
            <Container
                component="main"
                maxWidth="xs"
                className="p-16 bg-gray-50 rounded-3xl"
            >
                <Box
                    component="form"
                    sx={{ display: "flex", flexDirection: "column" }}
                    onSubmit={handleSubmit}
                >
                    <Typography className="text-center text-2xl font-extrabold font-sans">
                        Welcome to SustainaBee
                    </Typography>
                    <Typography className="text-center text-lg font-thin font-sans">
                        Login to start your sustainablity journey!
                    </Typography>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={handleOnChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        label="Password"
                        name="password"
                        autoComplete="current-password"
                        type={showPassword ? "text" : "password"}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? (
                                            <VisibilityOff />
                                        ) : (
                                            <Visibility />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        onChange={handleOnChange}
                    />
                    <Button
                        className="bg-yellow-400 text-gray-50 font-sans"
                        color="primary"
                        type="submit"
                    >
                        Login Now
                    </Button>
                    <Typography className="text-center font-thin font-sans">
                        Don't have an account?{" "}
                        <Link
                            to="/signup"
                            className="text-yellow-600 underline font-medium"
                        >
                            SIGN UP
                        </Link>
                    </Typography>
                </Box>
            </Container>
        </>
    );
};

export default LoginCard;

{
    /* <div className="form_container">
                <h2>Login Account</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Enter your email"
                            onChange={handleOnChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            placeholder="Enter your password"
                            onChange={handleOnChange}
                        />
                    </div>
                    <button type="submit">Submit</button>
                    <span>
                        Already have an account?{" "}
                        <Link to={"/signup"}>Signup</Link>
                    </span>
                </form>
                <ToastContainer />
            </div> */
}
