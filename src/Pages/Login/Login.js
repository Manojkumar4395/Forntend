import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import "./Login.css";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function Login(e) {
    const payload = {email,password}
    if (email === "") {
      toast.error(" Email field is requred!", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error("plz enter valid email addres", {
        position: "top-center",
      });
    } else if (!email.includes(".com")) {
      toast.error("plz enter valid email addres", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password field is requred", {
        position: "top-center",
      });
    } else {
      if (payload) {
      axios.post('https://stgtu.karmaalab.com/auth/login',payload).then(() =>{
        toast.success("Login successfully..", {
          position: "top-center",
        })
        navigate("/users")
      }
       
      ).catch(() =>{
        toast.error("Plz check your credentials..", {
          position: "top-center",
        });
      })
    
      }
    }
  }
  toast.configure();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="">
        <ToastContainer/>
        <div className="mx-8 h-auto   ">
          <div className="  flex justify-center items-center h-[80vh]">
           
            <div className="border-2 w-full py-5 px-5 md:w-1/3 rounded-lg border-blue-600 md:ml-20">
              <div className="grid grid-cols-1 gap-y-4">
                <div className="font-bold text-lg lg:text-2xl xl:text-3xl">
                  Login
                </div>
                <div className="xl:mt-6">
                  <TextField
                    className="w-full "
                    label="Enter Email ID/ Phone Number"
                    id="outlined-size-small"
                    onChange={(e) => setEmail(e.target.value)}
                    size="small"
                  />
                </div>

                <div className="">
                  <FormControl variant="outlined" className="w-full">
                    <InputLabel
                      htmlFor="outlined-adornment-password"
                      className=""
                    >
                      <div className="mt-[-5px]">Enter Your Password</div>
                    </InputLabel>
                    <OutlinedInput
                      label="Current Password"
                      className="w-full"
                      type={values.showPassword ? "text" : "password"}
                      onChange={(e) => setPassword(e.target.value)}
                      size="small"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            type={values.showPassword ? "text" : "password"}
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            size="small"
                          >
                            {values.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      required
                    />
                  </FormControl>
                </div>
                <div className="grid justify-end"></div>
                <div className="mt-2 xl:mt-6">
                  <Button
                    onClick={Login}
                    className="w-full"
                    variant="contained"
                  >
                    Login
                  </Button>
                </div>
                <div>
                  <Link to="/">
                    <button className="border-2 hover:bg-slate-500 ease-in duration-200 hover:text-white py-2 w-full border-slate-300 rounded-lg text-sm text-slate-500">
                      Not a Member? Sign Up
                    </button>
                  </Link>
                </div>

                <div className="flex justify-center font-semibold text-xs xl:text-sm text-center">
                  <div>The&nbsp;</div>
                  <div className="text-blue-700">terms of use&nbsp;</div>
                  <div>and&nbsp;</div>
                  <div className="text-blue-700 ">our Policy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
