import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const InvalidPage = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(3); 
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1); 
    }, 1000); 

    setTimeout(() => {
      navigate("/"); 
    }, 3000);

    return () => clearInterval(timer); 
  }, [navigate]); 

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <p className="text-6xl font-bold text-gray-800">404</p>
        <p className="text-2xl text-red-600 mt-4">Please Login to Access Dashboard</p>
        <p className="text-2xl text-blue-600 mt-4">
          Redirecting to Login Page in <span className="text-red-600">{countdown} seconds...</span>
        </p>
      </div>
    </div>
  );
};

export default InvalidPage;
