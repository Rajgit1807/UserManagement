import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { parseISO, format, startOfMonth, subMonths } from 'date-fns';

interface User {
  id: number;
  name: string;
  registrationDate: string;
}

interface ProcessedData {
  month: string;
  registrations: number;
}

interface UserData {
    id: number;
    name: string;
    email: string;
    password: string;
    mobileNo: string;
    state: string;
    city: string;
    country: string;
    active: boolean;
    registrationDate: string;
}


const UserRegistrationTrend: React.FC<{ users: UserData[] }> = ({ users }) => {


const processData = (data: User[]): ProcessedData[] => {
    const registrationCounts: Record<string, number> = {};
  
    data.forEach((user) => {
      const date = parseISO(user.registrationDate);
      const monthYear = format(startOfMonth(date), 'yyyy-MM');
  
      registrationCounts[monthYear] = (registrationCounts[monthYear] || 0) + 1;
    });
  
    const months = subMonths(new Date(), 6);
  
    return Object.entries(registrationCounts)
      .sort(([a], [b]) => new Date(a).getTime() - new Date(b).getTime()) 
      .map(([monthYear, count]) => ({ month: monthYear, registrations: count }))
      .filter((data) => new Date(data.month) >= months); 
  };
  const registrationData: ProcessedData[] = processData(users);

  return (
    <div className={`w-full max-sm:h-[380px] h-[400px] bg-white rounded-2xl pt-5`}>
        {users.length!=0? <>
            <h2 className="max-sm:text-[19px] text-xl font-bold max-sm:mb-2 mb-4 text-center">User Registration Trend</h2>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart
          data={registrationData}
          margin={{ top: 5, right: 45, left: 5, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            tickFormatter={(tick) => format(new Date(tick), 'MMM yyyy')}
          />
          <YAxis />
          <Tooltip
            formatter={(value) => [value, 'Registrations']}
            labelFormatter={(label) => format(new Date(label), 'MMMM yyyy')}
          />
          <Legend verticalAlign="top" height={36} />
          <Line
            type="monotone"
            dataKey="registrations"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
            name="Total Registrations"
          />
        </LineChart>
      </ResponsiveContainer></>:<div className='flex items-center justify-center pb-5 w-full h-full'>
        <p className='text-red-900 text-[18px] text-center'>No Users Registered In Last <span className='text-blue-950'>6 months</span></p>
        </div>}
      
    </div>
  );
};

export default UserRegistrationTrend;
