import { useEffect,useState } from "react";
import DashboardIcon from "../../assets/Icons/DashboardIcon";
import { menuData } from "../Data/menuData";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import MinimalFilter from "../Filter/UserFilter";
import ViewsDD from "../Dropdowns/ViewsDD";

const Sidebar = () => {
  const [selectedIndex, setSelIndex] = useState(() => {
    const savedIndex = localStorage.getItem("selectedIndex");
    return savedIndex !== null ? parseInt(savedIndex, 10) : 0;
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    localStorage.setItem("selectedIndex", selectedIndex.toString());
  }, [selectedIndex]);

  const updateWindowSize = () => {
    setIsMobile(window.innerWidth < 1000);
  };

  useEffect(() => {
    updateWindowSize();
    window.addEventListener("resize", updateWindowSize);
    return () => window.removeEventListener("resize", updateWindowSize);
  }, []);

  
  
  return (
    <div
      className={`${
        isMobile ? " relative flex justify-between items-center max-sm:px-3 max-sm:py-3 py-5 px-6" : "py-6"
      } h-[calc(100vh-55px)] max-h-[760px] sidebar rounded-2xl bg-white px-3`}
    >
      <div
        className={`flex items-center gap-2 ${
          !isMobile && "w-[170px]"
        } justify-center`}
      >
        <DashboardIcon size="25px" />
        <p className="lg:text-[18px] font-medium">DashBoard</p>
      </div>
      <div className={`${isMobile ? "" : "w-full mt-8 py-2 flex flex-col gap-2"}`}>
        {isMobile ? (
          <div className="flex items-center max-sm:gap-2 gap-4">
            <ViewsDD selectedIndex={selectedIndex} setSelIndex={setSelIndex}/> 
                   
            <MinimalFilter/>
          </div>
        ) : (
          <>
            <div className="ps-2 mb-1 font-semibold text-[#2aa5ab] text-[15px]">
              <p>Views</p>
            </div>
            {menuData.map((item, index) => (
              <Link key={index} to={item.to} replace={true}>
                <div
                  className={`cursor-pointer flex items-center gap-3 w-full rounded-2xl ps-2 ${
                    selectedIndex === index ? "bg-black" : "bg-none"
                  }`}
                  onClick={() => setSelIndex(index)}
                >
                  <div className="flex justify-center items-center w-[35px] rounded-2xl">
                    <item.icon
                      fill={selectedIndex === index ? "#FFFFFF" : "#8ab3c0"}
                    />
                  </div>
                  <p
                    className={`text-[16px] pb-[1.5px] ${
                      selectedIndex === index
                        ? "font-medium text-white"
                        : "text-[#8ab3c0]"
                    }`}
                  >
                    {item.name}
                  </p>
                </div>
              </Link>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
