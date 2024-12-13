import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#00C49F", "#9a0021"];

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
const UserActivityPieChart: React.FC<{ users: UserData[] }> = ({ users }) => {
  const activeUsersCount = users.filter((user) => user.active).length;
  const inactiveUsersCount = users.length - activeUsersCount;

  const data = [
    { name: "Active Users", value: activeUsersCount },
    { name: "Inactive Users", value: inactiveUsersCount },
  ];

  return (
    <div className={`w-full max-sm:h-[380px] h-[400px] bg-white relative rounded-2xl`}>
      {users.length != 0 ? (
        <>
          {" "}
          <h2 className="max-sm:text-[19px] text-center text-xl font-bold max-sm:mb-3 mb-4 mt-5">
            User Activity Distribution
          </h2>
          <ResponsiveContainer width="100%" height="100%" className="pb-20">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {data.map((_entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </>
      ) : (
        <div className="flex items-center justify-center  w-full h-full">
          <p className="text-red-900 text-[18px] text-center">
            No Data To Show{" "}
            <span className="text-blue-950">Active Vs Inactive User Chart</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default UserActivityPieChart;
