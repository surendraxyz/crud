import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAlertMessage } from "../../features/alert message/alertSlice";

function AlertComponent() {
  const dispatch = useDispatch();
  const { status, open, message } = useSelector((state) => state.alertSlice);

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      autoHideDuration={6000}
      onClose={() =>
        dispatch(
          setAlertMessage({
            status: "",
            open: false,
            message: "",
          })
        )
      }
    >
      <Alert
        onClose={() =>
          dispatch(
            setAlertMessage({
              status: "",
              open: false,
              message: "",
            })
          )
        }
        severity={status}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

export default AlertComponent;
