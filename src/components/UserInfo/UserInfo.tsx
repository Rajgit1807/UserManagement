import { useEffect, useState } from "react";
import userData from "../Data/UserData";
import WelcomeDiv from "../WelcomDiv/WelcomeDIv";
import UserManagementTable from "../Table/Table";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../State/store";
import { setAllUsers } from "../../State/User/actions";
import "./UserInfo.css"

const UserInfo = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    
    const users = useSelector(
        (state: RootState) => state.user.allUsers
    );

    useEffect(() => {
        if (isInitialLoad) {
            dispatch(setAllUsers(userData));
            setIsInitialLoad(false);
        }
    }, [dispatch, isInitialLoad]);

    return (
    <div className="w-full user-info h-[calc(100vh-55px)] overflow-y-scroll rounded-2xl md:max-h-[760px] pr-3">
        <WelcomeDiv analytics={false} heading="Welcome to User Dashboard 🙋‍♂️" subhead="Total Users" totalUsers={users.length}  activeUsers={null} 
      deletedUsers={null}/>
        <UserManagementTable userlist={users}/>
    </div>
  );
};

export default UserInfo;
