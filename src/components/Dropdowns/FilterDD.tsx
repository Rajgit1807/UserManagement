import * as React from 'react';
import { 
  Button, 
  FormControl, 
  InputLabel, 
  OutlinedInput, 
  Select, 
  SelectChangeEvent, 
  Popover,
  Box,
  MenuItem
} from '@mui/material';

interface FilterProps {
  selectedCountries: string[];
  handleCountryChange: (event: SelectChangeEvent<string[]>) => void;
  selectedStates: string[];
  handleStateChange: (event: SelectChangeEvent<string[]>) => void;
  startDate: string;
  setStartDate: (date: string) => void;
  endDate: string;
  setEndDate: (date: string) => void;
  handleFilterApply: () => void;
  allCountries: string[];
  allStates: string[];
}

export default function FilterDD({
  allCountries,
  selectedCountries,
  handleCountryChange,
  allStates,
  selectedStates,
  handleStateChange,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  handleFilterApply,
}: FilterProps) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'filter-popover' : undefined;

  const preventClose = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <>
      <button 
          className='rounded-[8px] font-medium border border-[#dbe3cc] px-4 py-[6.8px] text-[15px] hover:bg-[#effada]'
        onClick={handleClick}
        aria-describedby={id}
      >
        Filters
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        sx={{marginTop:2}}
      >
        <Box 
          sx={{ 
            p: 2, 
            width: 270, 
            maxWidth: '90vw',
          }}
          onClick={preventClose}
          onMouseDown={preventClose}
        >
          <div className="flex flex-col gap-3">
            <FormControl fullWidth>
              <InputLabel id="country-select-label"  sx={{ fontSize: "14px" }}>Country</InputLabel>
              <Select
                labelId="country-select-label"
                multiple
                value={selectedCountries}
                onChange={handleCountryChange}
                input={<OutlinedInput label="Country" />}
                renderValue={(selected) => (selected as string[]).join(', ')}
                onClick={preventClose}
                onMouseDown={preventClose}
                sx={{ fontSize: "14px" }}
              >
                {allCountries.map((country) => (
                  <MenuItem 
                    key={country} 
                    value={country}
                    sx={{ fontSize: "14px" }}
                  >
                    {country}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="state-select-label" sx={{ fontSize: "14px" }}>State</InputLabel>
              <Select
                labelId="state-select-label"
                multiple
                value={selectedStates}
                onChange={handleStateChange}
                input={<OutlinedInput label="State" />}
                renderValue={(selected) => (selected as string[]).join(', ')}
                onClick={preventClose}
                onMouseDown={preventClose}
                sx={{ fontSize: "14px" }}
              >
                {allStates.map((state) => (
                  <MenuItem 
                    key={state} 
                    value={state}
                    sx={{ fontSize: "14px" }}
                  >
                    {state}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <div className="flex gap-2 mb-2 items-center mt-2">
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
                  className="border rounded px-2 py-1 text-[13px] w-[115px]"
                  onClick={preventClose}
                  onMouseDown={preventClose}
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
                  className="border rounded px-2 py-1 text-[13px] w-[115px]"
                  onClick={preventClose}
                  onMouseDown={preventClose}
                />
              </div>
            </div>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={(e) => {
                preventClose(e);
                handleFilterApply();
              }}
            >
              Apply Filter
            </Button>
          </div>
        </Box>
      </Popover>
      </>
  );
}
