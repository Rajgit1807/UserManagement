import  { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { Rings } from "react-loader-spinner";
import "./Layout.css"
const Layout = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = () => {
      const authToken = localStorage.getItem("authToken");
      if (!authToken) {
        navigate("/invalid"); 
      }else{
        setLoading(false)
      }
    };

    isAuthenticated(); 
  }, []); 

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen w-full">
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
        <div className="flex gap-10 w-full items-center justify-center">
          <div className="xl:max-w-[1600px] main-container w-full h-screen max-sm:ps-4 max-sm:pe-4 ps-10 pe-10 lg:pe-8 py-7 flex max-sm:gap-5 gap-9">
            <Sidebar />
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
