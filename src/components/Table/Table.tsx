import React, { useState, useMemo } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  TablePagination,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  TextField,
  Box,
  InputAdornment
} from '@mui/material';
import { GridSearchIcon } from '@mui/x-data-grid';
import { AppDispatch, RootState } from '../../State/store';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, fetchUserDetails } from '../../State/User/actions';

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

const UserManagementTable:React.FC<{ userlist: UserData[] }> = ({ userlist }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [openDeleteConfirm, setOpenDeleteConfirm] = useState<boolean>(false);
  const [userToDelete, setUserToDelete] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const userDetails = useSelector(
    (state: RootState) => state.user.userDetails
  );

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleViewDetails = (userId: number) => {
    setSelectedUserId(userId)
    dispatch(fetchUserDetails(userId));
  };

  const handleCloseDetails = () => {
    setSelectedUserId(null);
  };

  const handleDeleteConfirmOpen = (userId: number) => {
    setUserToDelete(userId);
    setOpenDeleteConfirm(true);
  };

  const handleDeleteConfirmClose = () => {
    setOpenDeleteConfirm(false);
    setUserToDelete(null);
  };

  const handleDeleteUser = () => {
      dispatch(deleteUser(userToDelete))
      handleDeleteConfirmClose();
    
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setPage(0); 
  };

  const filteredUsers = useMemo(() => {
    return userlist.filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [userlist, searchTerm]);

  const displayedUsers = filteredUsers.slice(
    page * rowsPerPage, 
    page * rowsPerPage + rowsPerPage
  );

  const [focused, setFocused] = useState(false);

  return (
    <div style={{ width: '100%', margin: 'auto' }} className='rounded-2xl pb-5'>
      <Box sx={{ 
        display: 'flex',  
        backgroundColor: 'transparent', 
        margin:"20px 0px"
      }}>
         <TextField
        fullWidth
        variant="outlined"
        placeholder={focused ? '' : 'Search by Name or Email'}
        value={searchTerm}
        onChange={handleSearchChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <GridSearchIcon />
            </InputAdornment>
          ),
          sx: {
            backgroundColor: 'white',
            borderRadius: '20px',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(0,0,0,0.23)',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(0,0,0,0.87)',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'primary.main',
            }
          }
        }}
        sx={{
          maxWidth: 600,
          '& .MuiInputBase-root': {
            borderRadius: '40px',
          }
        }}
      />
      </Box>

      <TableContainer component={Paper} sx={{padding:"6px 10px", borderRadius:"20px"}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Mobile No</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedUsers.map((user: UserData) => (
              <TableRow key={user.id}>
                <TableCell sx={{ whiteSpace: 'nowrap' }}>{user.id}</TableCell>
                <TableCell sx={{ whiteSpace: 'nowrap' }}>{user.name}</TableCell>
                <TableCell sx={{ whiteSpace: 'nowrap' }}>{user.email}</TableCell>
                <TableCell sx={{ whiteSpace: 'nowrap' }}>{user.mobileNo}</TableCell>
                <TableCell sx={{display:"flex", gap:"5px"}}>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    size="small"
                    onClick={() => handleViewDetails(user.id)}
                    style={{ marginRight: 8 }}
                  >
                    View
                  </Button>
                  <Button 
                    variant="contained" 
                    color="error" 
                    size="small"
                    onClick={() => handleDeleteConfirmOpen(user.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={filteredUsers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>

      <Dialog 
        open={!!selectedUserId} 
        onClose={handleCloseDetails}
        maxWidth="md"
        fullWidth
      >
        {userDetails && (
          <>
            <DialogTitle>User Details</DialogTitle>
            <DialogContent>
              <p><strong>ID:</strong> {userDetails.id}</p>
              <p><strong>Name:</strong> {userDetails.name}</p>
              <p><strong>Email:</strong> {userDetails.email}</p>
              <p><strong>Mobile:</strong> {userDetails.mobileNo}</p>
              <p><strong>Location:</strong> {userDetails.city}, {userDetails.state}, {userDetails.country}</p>
              <p><strong>Reg Date:</strong> {userDetails.registrationDate}</p>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDetails} color="primary">
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={openDeleteConfirm}
        onClose={handleDeleteConfirmClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirm Delete"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this user? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteConfirmClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteUser} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserManagementTable;