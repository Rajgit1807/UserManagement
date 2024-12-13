
import WelcomeDiv from '../WelcomDiv/WelcomeDIv'
import UserRegistrationTrend from '../LineChart/LineChart'
import UserActivityPieChart from '../PieChart/PieChart'
import UserRegionDistribution from '../BarChart/BarChart'
import MinimalFilter from '../Filter/UserFilter'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../State/store'
import { useEffect, useState} from 'react'
import { setChartData } from '../../State/Analytics/reducer'
import userData from '../Data/UserData'
import "./Analytics.css"

const Analytics = () => {
    const dispatch = useDispatch<AppDispatch>();

    const users = useSelector(
        (state: RootState) => state.analytics.filteredUsers
      );
      const allusers = useSelector(
        (state: RootState) => state.analytics.chartData
      );
      const userlist = useSelector(
        (state: RootState) => state.user.allUsers
      );
      console.log(userlist.length)
      useEffect(()=>{
        dispatch(setChartData(userlist.length==0 ? userData : userlist))
      },[dispatch])
        
      const getCount = () => {
        return users.reduce((count, user) => {
          if (user.active) {
            return count + 1;
          }
          return count;
        }, 0);
      }; 
      const [isMobile, setIsMobile] = useState(false);
    
      const updateWindowSize = () => {
        setIsMobile(window.innerWidth < 1000);
      };
    
      useEffect(() => {
        updateWindowSize();
        window.addEventListener("resize", updateWindowSize);
        return () => window.removeEventListener("resize", updateWindowSize);
      }, []);
  return (
    <div className="w-full analytics h-[calc(100vh-55px)] overflow-y-scroll rounded-2xl md:max-h-[760px] pr-3">
        <WelcomeDiv analytics={true} heading="Welcome to User Analytics  🙋‍♂️" subhead="" totalUsers={users.length} activeUsers={getCount()} deletedUsers={userData.length-allusers.length}/>
        {!isMobile && <MinimalFilter/>  }
        <div className='flex gap-10 mt-10 max-xl:flex-col'>
         <UserRegistrationTrend users={users}/>
         <UserActivityPieChart users={users}/>
        </div>
        <UserRegionDistribution users={users}/>
        </div>
  )
}

export default Analytics