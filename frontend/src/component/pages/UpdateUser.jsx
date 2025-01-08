import {
  Box,
  Button,
  Grid2,
  IconButton,
  InputLabel,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
}));

const BoxContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  maxWidth: "90%",
  background: "#fff",
  borderRadius: "5px",
}));

const Header = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "14px 24px",
  borderBottom: "1px solid #dfdfdf",
}));

const Footer = styled(Box)(({ theme }) => ({
  borderTop: "1px solid #dfdfdf",
  padding: "14px 24px",
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 600,
  display: "flex",
  alignItems: "center",
}));

const Form = styled(Box)(({ theme }) => ({}));

const Label = styled(InputLabel)(({ theme }) => ({
  fontSize: "13px",
  color: "#000",
  marginBottom: "8px",
}));

const BodyContainer = styled(Box)(({ theme }) => ({ padding: "24px" }));

const InputComponent = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-input": {
    padding: "8px 10px",
  },
  "& .MuiInputBase-input::placeholder": {
    fontSize: "14px",
  },
}));

const TextFieldComponent = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-input": {
    fontSize: "14px",
  },
  "& .MuiInputBase-input::placeholder": {
    fontSize: "14px",
    color: "#000",
  },
}));

function UpdateUser({ open, setOpen }) {
  const [inpuData, setInputData] = useState({
    userName: "",
    age: "",
    className: "",
    email: "",
    address: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputData({
      ...inpuData,
      [name]: value,
    });
  };
  return (
    <Modal
      open={open.updateModal}
      onClose={() => setOpen({ ...open, updateModal: false })}
      closeAfterTransition
    >
      <Container>
        <BoxContainer>
          <Header>
            <Title>Update User</Title>
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Header>
          <Form component="form">
            <BodyContainer>
              <Grid2 container spacing={2}>
                <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                  <Label>Name</Label>
                  <InputComponent
                    type="text"
                    placeholder="Enter User Name..."
                    fullWidth
                    required
                    name="userName"
                    onChange={handleChange}
                  />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                  <Label>Age</Label>
                  <InputComponent
                    type="number"
                    placeholder="Enter age..."
                    fullWidth
                    required
                    name="age"
                    onChange={handleChange}
                  />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                  <Label>Class Name</Label>
                  <InputComponent
                    type="text"
                    placeholder="Enter Class Name..."
                    fullWidth
                    required
                    name="className"
                    onChange={handleChange}
                  />
                </Grid2>

                <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                  <Label>Email</Label>
                  <InputComponent
                    type="email"
                    placeholder="Enter Email..."
                    fullWidth
                    required
                    name="email"
                    onChange={handleChange}
                  />
                </Grid2>

                <Grid2 size={{ xs: 12 }}>
                  <Label>Address</Label>
                  <TextFieldComponent
                    multiline
                    rows={3}
                    fullWidth
                    placeholder="Enter Address..."
                    required
                    name="address"
                    onChange={handleChange}
                  />
                </Grid2>
              </Grid2>
            </BodyContainer>

            <Footer>
              <Stack direction="row" justifyContent="end" gap={2}>
                <Button variant="outlined" type="reset" color="error">
                  Reset
                </Button>
                <Button variant="contained" type="submit" color="success">
                  Submit
                </Button>
              </Stack>
            </Footer>
          </Form>
        </BoxContainer>
      </Container>
    </Modal>
  );
}

export default UpdateUser;
