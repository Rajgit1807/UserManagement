import React, { useEffect, useState } from "react";
import DashboardIcon from "../../assets/Icons/DashboardIcon";
import { motion } from "framer-motion";
import { Rings } from "react-loader-spinner";
import userData from "../Data/UserData";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [loading, setLoading] = useState<boolean>(true); 
    const [email, setEmail] = useState<string>("");       
    const [success, setSuccess] = useState<string>("");  
    const [password, setPassword] = useState<string>(""); 
    const [error, setError] = useState<string>("");       
    const [showPassword, setShowPassword] = useState<boolean>(false); 
    

    const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const navigate = useNavigate();

  useEffect(() => {
    const Loading = () => {
      setTimeout(() => setLoading(false), 1500);
    };
    Loading();
  }, []);

  useEffect(() => {
    setTimeout(() => setError(""), 3000);
  }, [error]);

  const generateToken = () => {
    return Math.random().toString(36).substring(2, 15); 
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Both fields are required");
    } else {
       
      const userfound = userData.find(
        (user) => user.email === email && user.password === password
      );

      if (userfound) {
        setError("");
        console.log("Login successful for:", userfound.email);
        setSuccess("Login Successfull");

        const token = generateToken();
        localStorage.setItem("authToken", token);

        setTimeout(() => {      
          setSuccess(""); 
          navigate("/dashboard/userdashboard");
        }, 1000);
      } else {
        setError("Invalid email or password");
      }
    }
  };

  return (
    <div className="flex w-full items-center justify-center">
      <div className="rounded-3xl xl:max-w-[1600px] w-full h-[calc(100vh-30px)] flex items-center justify-center">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <Rings
              visible={true}
              height="140"
              width="140"
              color="#24a2b9"
              ariaLabel="rings-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        ) : (
          <motion.form
            className="bg-white rounded-3xl shadow-lg w-[290px] sm:w-[350px] p-6 sm:p-9"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.9 }}
            onSubmit={handleSubmit}
          >
            <div className="flex gap-1 items-center mb-4 sm:mb-6">
              <DashboardIcon size="18px" />
              <p className="font-medium text-[12px] text-gray-600">Dashboard</p>
            </div>
            <p className="text-[#5dcece] font-bold text-[30px] sm:text-[35px] mb-4 sm:mb-6">Login</p>

            <label className="flex flex-col text-[14px] mb-2 sm:mb-4">
              <span className="mb-1 font-medium text-gray-700">Email:</span>
              <input
                type="email"
                placeholder="user@gmail.com"
                className="border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#5dcece] focus:border-transparent"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="flex flex-col text-[14px] mb-2 sm:mb-4">
              <span className="mb-1 font-medium text-gray-700">Password:</span>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  className="absolute w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#5dcece] focus:border-transparent"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="z-10 absolute right-2 top-2 cursor-pointer text-gray-400"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </span>
              </div>
            </label>
            <button
              type="submit"
              className="mt-12 w-full bg-[#5dcece] text-white font-semibold py-2 rounded-lg hover:bg-[#4cb4b4] transition duration-200 max-sm:text-[14px] "
            >
              Login
            </button>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            {success && (
              <p className="text-green-500 text-sm mb-2 mt-2">{success}</p>
            )}
          </motion.form>
        )}
      </div>
    </div>
  );
};

export default Login;
