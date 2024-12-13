import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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

// Interface for Chart Data
interface ChartDataEntry {
  state: string;
  [country: string]: number | string;
}

interface RegionCounts {
  [country: string]: {
    [state: string]: number;
  };
}

interface CountryColors {
  [country: string]: string;
}


const UserRegionDistribution: React.FC<{ users: UserData[] }> = ({ users }) => {
  const regionCounts: RegionCounts = users.reduce((acc: RegionCounts, user: UserData) => {
    if (!acc[user.country]) {
      acc[user.country] = {};
    }
    acc[user.country][user.state] = (acc[user.country][user.state] || 0) + 1;
    return acc;
  }, {});

  const chartData: ChartDataEntry[] = Object.keys(regionCounts).reduce((result: ChartDataEntry[], country: string) => {
    const countryStates = regionCounts[country];
    Object.keys(countryStates).forEach(state => {
      let existingEntry = result.find(entry => entry.state === state);
      if (!existingEntry) {
        existingEntry = { state };
        result.push(existingEntry);
      }
      existingEntry[country] = countryStates[state];
    });
    return result;
  }, []);

  const countryColors: CountryColors = {
    USA: '#8884d8',
    Canada: '#82ca9d',
    Japan: '#ffc658',
    India:'#914406',
    Italy:'#61083b'
  };

  return (
    <div className="w-full bg-white rounded-2xl mt-10 pt-5 overflow-x-auto h-[470px]">

        {!(users.length==0)? <> <h2 className="text-xl font-bold mb-4 text-center">User Distribution by Country and State</h2>
       <div className="min-w-[1000px]"> 
         <ResponsiveContainer width="100%" height={400}>
           <BarChart
             data={chartData}
             margin={{
               top: 20,
               right: 30,
               left: 20,
               bottom: 25
             }}
           >
             <CartesianGrid strokeDasharray="3 3" />
             <XAxis
               dataKey="state"
               angle={-35}
               interval={0}
               tick={{ dy: 30 }}
             />
             <YAxis label={{ value: 'Number of Users', angle: -90, position: 'insideLeft' }} />
             <Tooltip />
             <Legend 
               verticalAlign="bottom"
               wrapperStyle={{
                 paddingTop: '50px',
               }}
             />
             {Object.keys(regionCounts).map((country) => (
               <Bar
                 key={country}
                 dataKey={country}
                 stackId="a"
                 fill={countryColors[country]}
               />
             ))}
           </BarChart>
         </ResponsiveContainer>
       </div></> : <div className='flex items-center justify-center w-full h-full pb-5'>
        <p className='text-red-900 text-[18px]'>No Data To Show <span className='text-blue-950'>User Distribution</span></p>
        </div>}
      
     </div>
  );
};

export default UserRegionDistribution;
