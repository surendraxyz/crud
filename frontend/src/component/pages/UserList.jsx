import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Grid2,
  IconButton,
  MenuItem,
  Paper,
  Select,
  Skeleton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";
import UserDetails from "./UserDetails";
import { useDispatch, useSelector } from "react-redux";
import { userGet } from "../../features/user/userSlice";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: "30px 0px",
}));

const InnerContainer = styled(Box)(({ theme }) => ({
  width: "90%",
  margin: "auto",
}));

const Header = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  margin: "30px 0px",
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  fontWeight: 600,
}));

const SideIconButton = styled(Button)(({ theme }) => ({
  minWidth: "20px",
  borderRadius: "4px",
  padding: "5px 5px",
  background: "#f4f5f9",
  color: "#000",
}));

const TablemainContainer = styled(TableContainer)(({ theme }) => ({
  height: "70vh",
  overflowY: "auto",
}));

const TableCellHead = styled(TableCell)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 600,
  padding: "12px 16px",
  background: "#f4f5f9",
}));

const BoxContainer = styled(Paper)(({ theme }) => ({}));

const InputComponent = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-input": {
    padding: "7px 14px",
  },
}));

const SelectComponent = styled(Select)(({ theme }) => ({
  background: "#fff",
  "& .MuiOutlinedInput-input": {
    padding: "7px 14px",
  },
}));

const TableHeadRow = styled(TableRow)(({ theme }) => ({
  position: "sticky",
  top: 0,
  zIndex: 1000,
}));

const DataNotFound = styled(TableCell)(({ theme }) => ({
  height: "61.4vh",
  fontSize: "22px",
  fontWeight: 600,
}));

function UserList() {
  const runFunction = useRef(false);
  const dispatch = useDispatch();
  const [open, setOpen] = useState({
    isId: "",
    createModal: false,
    updateModal: false,
    detailsModal: false,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const { usersData } = useSelector((state) => state.userSlice);

  const filterData = usersData?.users?.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (!runFunction.current) {
      setTimeout(() => {
        setLoading(false);
        dispatch(userGet());
      }, 1000);
      runFunction.current = true;
    }
  }, [dispatch]);

  return (
    <>
      <CreateUser open={open} setOpen={setOpen} />
      <UpdateUser open={open} setOpen={setOpen} />
      <UserDetails open={open} setOpen={setOpen} />
      <Container>
        <InnerContainer>
          <Header>
            <Title>User List</Title>
            <SideIconButton
              variant="contained"
              onClick={() => setOpen({ ...open, createModal: true })}
            >
              <AddIcon sx={{ fontSize: "20px" }} />
            </SideIconButton>
          </Header>
          <BoxContainer elevation="2">
            <Box sx={{ padding: "25px" }}>
              <Grid2 container spacing={2}>
                <Grid2 size={{ xs: 12, sm: 12, md: 9, lg: 9 }}>
                  <InputComponent
                    type="text"
                    placeholder="Search..."
                    fullWidth
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, md: 3, lg: 3 }}>
                  <SelectComponent fullWidth defaultValue={"none"}>
                    <MenuItem value="none">Select Category</MenuItem>
                    <MenuItem value="10">Bca</MenuItem>
                    <MenuItem value="20">Mca</MenuItem>
                    <MenuItem value="30">Mba</MenuItem>
                  </SelectComponent>
                </Grid2>
              </Grid2>
            </Box>
            <TablemainContainer>
              <Table>
                <TableHead>
                  <TableHeadRow>
                    <TableCellHead sx={{ width: "3%" }} align="center">
                      #
                    </TableCellHead>
                    <TableCellHead sx={{ width: "15%" }}>Name</TableCellHead>
                    <TableCellHead sx={{ width: "8%" }} align="center">
                      Age
                    </TableCellHead>
                    <TableCellHead sx={{ width: "8%" }}>Class</TableCellHead>
                    <TableCellHead sx={{ width: "15%" }}>Email</TableCellHead>
                    <TableCellHead sx={{ width: "18%" }}>Address</TableCellHead>
                    <TableCellHead sx={{ width: "8%" }} align="center">
                      Action
                    </TableCellHead>
                  </TableHeadRow>
                </TableHead>
                <TableBody>
                  {loading ? (
                    Array.from({ length: 10 }).map((_, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <Skeleton variant="text" width={50} />
                        </TableCell>
                        <TableCell>
                          <Skeleton variant="text" width={200} />
                        </TableCell>
                        <TableCell>
                          <Skeleton
                            variant="text"
                            width={50}
                            sx={{ margin: "auto" }}
                          />
                        </TableCell>
                        <TableCell>
                          <Skeleton variant="text" width={150} />
                        </TableCell>
                        <TableCell>
                          <Skeleton variant="text" width={200} />
                        </TableCell>
                        <TableCell>
                          <Skeleton variant="text" width={300} />
                        </TableCell>
                        <TableCell>
                          <Skeleton
                            variant="circle"
                            width={20}
                            height={20}
                            sx={{ margin: "auto" }}
                          />
                        </TableCell>
                      </TableRow>
                    ))
                  ) : filterData?.length > 0 ? (
                    filterData?.map((data, index) => (
                      <TableRow key={index}>
                        <TableCell align="center">{index + 1}</TableCell>
                        <TableCell sx={{ textTransform: "capitalize" }}>
                          {data.name}
                        </TableCell>
                        <TableCell align="center">{data.age}</TableCell>
                        <TableCell sx={{ textTransform: "capitalize" }}>
                          {data.className}
                        </TableCell>
                        <TableCell>{data.email}</TableCell>
                        <TableCell sx={{ textTransform: "capitalize" }}>
                          {data.address}
                        </TableCell>
                        <TableCell>
                          <Stack
                            direction="row"
                            gap={1}
                            justifyContent="center"
                          >
                            <Tooltip title="View">
                              <IconButton
                                color="primary"
                                onClick={() =>
                                  setOpen({
                                    ...open,
                                    isId: index,
                                    detailsModal: true,
                                  })
                                }
                              >
                                <VisibilityIcon sx={{ fontSize: "16px" }} />
                              </IconButton>
                            </Tooltip>

                            <Tooltip title="Edit">
                              <IconButton
                                color="success"
                                onClick={() =>
                                  setOpen({
                                    ...open,
                                    isId: index,
                                    updateModal: true,
                                  })
                                }
                              >
                                <EditIcon sx={{ fontSize: "16px" }} />
                              </IconButton>
                            </Tooltip>

                            <Tooltip title="Delete">
                              <IconButton color="error">
                                <DeleteOutlineIcon sx={{ fontSize: "16px" }} />
                              </IconButton>
                            </Tooltip>
                          </Stack>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <DataNotFound colSpan={7} align="center">
                        No User Data Found...
                      </DataNotFound>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TablemainContainer>
          </BoxContainer>
        </InnerContainer>
      </Container>
    </>
  );
}

export default UserList;
