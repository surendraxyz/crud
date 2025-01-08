import { Box, SwipeableDrawer } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: "30px 0px",
}));

// const DrawerContainer = styled(Box)(({ theme }) => ({
//   width: 560,
//   [theme.breakpoints.down("sm")]: { width: "100%" },
//   overflow: "auto",
//   display: "flex",
//   flexDirection: "column",
//   rowGap: theme.spacing(2),
//   "&::-webkit-scrollbar": {
//     width: "8px",
//   },
//   "&::-webkit-scrollbar-track": {
//     background: "#f1f1f1",
//   },
//   "&::-webkit-scrollbar-thumb": {
//     background: "#888",
//     borderRadius: "4px",
//   },
//   "&::-webkit-scrollbar-thumb:hover": {
//     background: "#555",
//   },
// }));

function UserDetails({ open, setOpen }) {
  // console.log(open);

  return (
    <SwipeableDrawer
      // open={open.detailsModal}
      anchor="right"
      onOpen={() => {
        return null;
      }}
      // onClose={() => setOpen({ ...open, detailsModal: false })}
    >
      <Box sx={{ width: 450 }} role="presentation">
        <Container></Container>
      </Box>
    </SwipeableDrawer>
  );
}

export default UserDetails;
