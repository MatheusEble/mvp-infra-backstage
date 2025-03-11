import React, { SyntheticEvent, useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { SnackbarProvider } from "./SnackbarProvider";
import { Button } from "../../inputs/button/Button";
import { Snackbar } from "../../feedbacks/snackbar/Snackbar";
import { Alert } from "../../feedbacks/alert/Alert";
import { Avatar } from "../../data-display/avatar/Avatar";

import { useSnackbar } from "../../utils/useSnackbar";

import theme from "../../utils/stylesheet/theme/Theme";

const meta = {
  title: "providers/SnackbarProvider",
  component: SnackbarProvider,
  tags: ["autodocs"],
} satisfies Meta<typeof SnackbarProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <SnackbarProvider maxSnack={3}>
        <SnackbarDefault />
      </SnackbarProvider>
    )
  },
};

export const Custom: Story = {
  render: () => {
    return (
      <SnackbarProvider maxSnack={3}>
        <CustomSnackbar />
      </SnackbarProvider>
    )
  },
};

const SnackbarDefault = () => {
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar("I love snacks.");
  };

  const handleClickVariant = (variant: "default" | "error" | "success" | "warning" | "info") => () => {
    enqueueSnackbar(`Esse é a variante "success" do SnackBar`, { variant });
  };

  return (
    <div style={{ height: 500, display: "flex", flexDirection: "column", gap: 16 }}>
      <Button onClick={handleClick}>Mostrar snackbar</Button>
      <Button onClick={handleClickVariant("success")}>Mostrar success snackbar variante</Button>
      <Button onClick={handleClickVariant("error")}>Mostrar success snackbar variante</Button>
      <Button onClick={handleClickVariant("info")}>Mostrar success snackbar variante</Button>
      <Button onClick={handleClickVariant("warning")}>Mostrar success snackbar variante</Button>
    </div>
  );
};

const CustomSnackbar = () => {
  const [openSnackbarWithAlert, setOpenSnackbarWithAlert] = useState(false);
  const [openSnackbarWithAvatar, setOpenSnackbarWithAvatar] = useState(false);

  return (
    <div style={{ height: 500, display: "flex", flexDirection: "column", gap: 16 }}>
      <Button onClick={() => setOpenSnackbarWithAlert(!openSnackbarWithAlert)}>
        {"Abrir Snackbar que chama o <Alert />"}
      </Button>

      <Snackbar
        open={openSnackbarWithAlert}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbarWithAlert(false)}
      >
        <Alert
          onClose={() => setOpenSnackbarWithAlert(false)}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Isso é um Alerta de sucesso dentro de um Snackbar!
        </Alert>
      </Snackbar>

      <Button onClick={() => setOpenSnackbarWithAvatar(true)}>Snackbar feito na mão</Button>

      <Snackbar
        open={openSnackbarWithAvatar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbarWithAvatar(false)}
      >
        <div style={{ display: "flex", alignItems: "center", padding: 12, gap: 4, backgroundColor: theme.palette.successPure, borderRadius: 8 }}>
          <Avatar alt="fernando" />

          <span>
            <strong>Fernando</strong> realizou uma ação.
          </span>
        </div>
      </Snackbar>
    </div>
  );
}