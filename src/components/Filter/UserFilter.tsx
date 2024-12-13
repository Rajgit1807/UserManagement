import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../State/store";
import { filterUsers } from "../../State/Analytics/reducer";
import { REGIONS } from "../Data/regions";
import FilterDD from "../Dropdowns/FilterDD";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const allCountries = Object.keys(REGIONS);
const allStates = Object.values(REGIONS).flat();

function getStyles(name: string, selectedValues: string[], theme: Theme) {
  return {
    fontWeight: selectedValues.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

const MinimalFilter: React.FC = () => {
  const theme = useTheme();
  const [selectedCountries, setSelectedCountries] = React.useState<string[]>(
    []
  );
  const [selectedStates, setSelectedStates] = React.useState<string[]>([]);
  const [startDate, setStartDate] = React.useState<string>("");
  const [endDate, setEndDate] = React.useState<string>("");

  const handleCountryChange = (
    event: SelectChangeEvent<typeof selectedCountries>
  ) => {
    const {
      target: { value },
    } = event;
    setSelectedCountries(typeof value === "string" ? value.split(",") : value);
  };

  const handleStateChange = (
    event: SelectChangeEvent<typeof selectedStates>
  ) => {
    const {
      target: { value },
    } = event;
    setSelectedStates(typeof value === "string" ? value.split(",") : value);
  };

  const dispatch = useDispatch<AppDispatch>();

  const handleFilterApply = () => {
    dispatch(
      filterUsers({
        countries: selectedCountries,
        states: selectedStates,
        startDate: startDate,
        endDate: endDate,
      })
    );
  };

  // Media query hook to check screen size
  const isSmallScreen = window.innerWidth < 1000;

  return (
    <div
      className={`${
        isSmallScreen
          ? ""
          : " w-full lg:w-fit px-4 py-1 flex items-center bg-white rounded-2xl mt-10"
      }`}
    >
      {!isSmallScreen && (
        <>
          <div className="flex items-center">
            <FormControl sx={{ m: 1, width: 90 }}>
              <InputLabel id="country-select-label" sx={{ fontSize: "12px" }}>
                Country
              </InputLabel>
              <Select
                labelId="country-select-label"
                id="country-select"
                multiple
                value={selectedCountries}
                onChange={handleCountryChange}
                input={<OutlinedInput label="Country" />}
                MenuProps={MenuProps}
                sx={{ fontSize: "12px" }}
              >
                {allCountries.map((country) => (
                  <MenuItem
                    key={country}
                    value={country}
                    style={getStyles(country, selectedCountries, theme)}
                    sx={{ fontSize: "12px" }}
                  >
                    {country}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1, width: 90 }}>
              <InputLabel id="state-select-label" sx={{ fontSize: "12px" }}>
                State
              </InputLabel>
              <Select
                labelId="state-select-label"
                id="state-select"
                multiple
                value={selectedStates}
                onChange={handleStateChange}
                input={<OutlinedInput label="State" />}
                MenuProps={MenuProps}
                sx={{ fontSize: "12px" }}
              >
                {allStates.map((state) => (
                  <MenuItem
                    key={state}
                    value={state}
                    style={getStyles(state, selectedStates, theme)}
                    sx={{ fontSize: "12px" }}
                  >
                    {state}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div className="flex gap-2 mb-1 items-center">
            <div>
              <label
                htmlFor="start-date"
                className="block text-[12px] font-medium"
              >
                Start Date:
              </label>
              <input
                type="date"
                id="start-date"
                value={startDate || ""}
                onChange={(e) => setStartDate(e.target.value)}
                className="border rounded px-2 py-1 text-[13px] w-[120px]"
              />
            </div>
            <div>
              <label
                htmlFor="end-date"
                className="block text-[12px] font-medium"
              >
                End Date:
              </label>
              <input
                type="date"
                id="end-date"
                value={endDate || ""}
                onChange={(e) => setEndDate(e.target.value)}
                className="border rounded px-2 py-1 text-[13px] w-[120px]"
              />
            </div>
          </div>

          <Button
            variant="contained"
            color="primary"
            sx={{ m: 2, fontSize: "13px" }}
            onClick={handleFilterApply}
          >
            Apply Filter
          </Button>
        </>
      )}

      {isSmallScreen && (
        <FilterDD
          selectedCountries={selectedCountries}
          handleCountryChange={handleCountryChange}
          selectedStates={selectedStates}
          handleStateChange={handleStateChange}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          handleFilterApply={handleFilterApply}
          allCountries={allCountries}
          allStates={allStates}
        />
      )}
    </div>
  );
};

export default MinimalFilter;
