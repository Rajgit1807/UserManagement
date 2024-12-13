import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

interface UserState {
  chartData:UserData[];
  filteredUsers: UserData[];
}

const initialState: UserState = {
  chartData:[],
  filteredUsers: [],
};

const AnalyticsSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setChartData(state, action: PayloadAction<UserData[]>) {
      state.chartData = action.payload;
      state.filteredUsers= action.payload;
    },
    filterUsers(
      state,
      action: PayloadAction<{ countries: string[]; states: string[],startDate:string ,endDate:string }>
    ) {
      const { countries, states,startDate,endDate } = action.payload;
      if (!(countries.length === 0 && states.length === 0 && (startDate === "" || endDate === ""))) {
        state.filteredUsers = state.chartData.filter(user => {
            const isCountryMatch = countries.includes(user.country);
            const isStateMatch = states.includes(user.state);
            
            const userDate = new Date(user.registrationDate);
            const start = new Date(startDate);
            const end = new Date(endDate);
            
            const isDateMatch = userDate >= start && userDate <= end;
    
            return isCountryMatch || isStateMatch || isDateMatch;
        });
    }else{
      state.filteredUsers=state.chartData
    }},
   
  },
});

export const { setChartData, filterUsers } = AnalyticsSlice.actions;

export default AnalyticsSlice.reducer;
