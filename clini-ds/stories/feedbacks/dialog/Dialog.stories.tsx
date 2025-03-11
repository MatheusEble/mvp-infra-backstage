import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Dialog } from "./Dialog";
import { DialogTitle } from "../dialog-title/DialogTitle";
import { DialogContent } from "../dialog-content/DialogContent";
import { DialogContentText } from "../dialog-content-text/DialogContentText";
import { DialogActions } from "../dialog-actions/DialogActions";
import { Button } from "../../inputs/button/Button";
import { IconButton } from "../../inputs/icon-button/IconButton";
import { Icon } from "../../data-display/icon/Icon";
import { FormControl } from "../../inputs/form-control/FormControl";
import { InputLabel } from "../../inputs/input-label/InputLabel";
import { Select } from "../../inputs/select/Select";
import { MenuItem } from "../../navigations/menu-item/MenuItem";
import { FormControlLabel } from "../../inputs/form-control-label/FormControlLabel";
import { Switch } from "../../inputs/switch/Switch";
import { TextField } from "../../inputs/text-field/TextField";

import { SelectChangeEvent } from "@mui/material";

import { useTheme } from "../../utils/useTheme";
import { useMediaQuery } from "../../utils/useMediaQuery";

const meta = {
  title: "feedbacks/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    open: true,
    children: "Conteúdo do Dialog"
  }
} satisfies Meta<typeof Dialog>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <>
        <Button variant="outlined" onClick={handleClickOpen}>
          Abrir Dialog
        </Button>

        <Dialog
          open={open}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>
            Use Google"s location service?
          </DialogTitle>

          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={(theme) => ({
              position: "absolute",
              right: 8,
              top: 8,
              color: theme.palette.grey[500],
            })}
          >
            <Icon>
              close
            </Icon>
          </IconButton>

          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Let Google help apps determine location. This means sending anonymous
              location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose}>
              Cancelar
            </Button>

            <Button variant="contained" onClick={handleClose}>
              Criar
            </Button>
          </DialogActions>
        </Dialog >
      </>
    )
  }
};

export const BackButton: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <>
        <Button variant="outlined" onClick={handleClickOpen}>
          Abrir Dialog
        </Button>

        <Dialog
          open={open}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>
            Use Google"s location service?
          </DialogTitle>

          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={(theme) => ({
              position: "absolute",
              right: 8,
              top: 8,
              color: theme.palette.grey[500],
            })}
          >
            <Icon>
              close
            </Icon>
          </IconButton>

          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Let Google help apps determine location. This means sending anonymous
              location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>

          <DialogActions>
            <Button
              style={{ marginRight: "auto" }}
              onClick={handleClose}
            >
              Voltar
            </Button>

            <Button onClick={handleClose}>
              Cancelar
            </Button>

            <Button variant="contained" onClick={handleClose}>
              Criar
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
  }
};

export const FullModal: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <>
        <Button variant="outlined" onClick={handleClickOpen}>
          Abrir Full Modal
        </Button>

        <Dialog
          open={open}
          fullScreen
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>
            Use Google"s location service?
          </DialogTitle>

          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={(theme) => ({
              position: "absolute",
              right: 8,
              top: 8,
              color: theme.palette.grey[500],
            })}
          >
            <Icon>
              close
            </Icon>
          </IconButton>

          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Let Google help apps determine location. This means sending anonymous
              location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>

          <DialogActions>
            <Button
              style={{ marginRight: "auto" }}
              onClick={handleClose}
            >
              Voltar
            </Button>

            <Button onClick={handleClose}>
              Cancelar
            </Button>

            <Button variant="contained" onClick={handleClose}>
              Criar
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
  }
};

export const Sizes: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [fullWidth, setFullWidth] = useState(true);
    const [maxWidth, setMaxWidth] = useState<"" | "xs" | "sm" | "md" | "lg" | "xl">("sm");

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const handleMaxWidthChange = (event: SelectChangeEvent<unknown>) => {
      setMaxWidth(event.target.value as "" | "xs" | "sm" | "md" | "lg" | "xl");
    };

    const handleFullWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setFullWidth(event.target.checked);
    };

    return (
      <React.Fragment>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open max-width dialog
        </Button>
        <Dialog
          fullWidth={fullWidth}
          maxWidth={maxWidth || "sm"}
          open={open}
          onClose={handleClose}
        >
          <DialogTitle>Opções de tamanho</DialogTitle>

          <DialogContent style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <DialogContentText>
              Você pode definir minha largura máxima e se deve adaptar ou não.
            </DialogContentText>

            <FormControl variant="standard" sx={{ mt: 2, width: 120 }}>
              <InputLabel htmlFor="max-width">maxWidth</InputLabel>
              <Select
                autoFocus
                value={maxWidth}
                onChange={handleMaxWidthChange}
                label="maxWidth"
                inputProps={{
                  name: "max-width",
                  id: "max-width",
                }}
              >
                <MenuItem value="xs">xs</MenuItem>
                <MenuItem value="sm">sm</MenuItem>
                <MenuItem value="md">md</MenuItem>
                <MenuItem value="lg">lg</MenuItem>
                <MenuItem value="xl">xl</MenuItem>
              </Select>
            </FormControl>

            <FormControlLabel
              sx={{ mt: 1 }}
              control={<Switch checked={fullWidth} onChange={handleFullWidthChange} />}
              label="Full width"
            />

          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
};

export const Form: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open form dialog
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: "form",
            onSubmit: (event: HTMLFormElement) => {
              event.preventDefault();

              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;

              alert(email);

              handleClose();
            },
          }}
        >
          <DialogTitle>
            Inscrever-se
          </DialogTitle>

          <DialogContent>
            <DialogContentText>
              Para se inscrever neste site, por favor insira seu endereço de email aqui. Nós
              enviaremos atualizações ocasionalmente.
            </DialogContentText>

            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            />
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button variant="contained" type="submit">Inscrever-se</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
};

export const Responsive: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    const theme = useTheme();

    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <>
        <Button variant="outlined" onClick={handleClickOpen}>
          Abrir Dialog responsivo
        </Button>

        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            Usar o serviço de localização do Google?
          </DialogTitle>

          <DialogContent>
            <DialogContentText>
              Deixe o Google ajudar os aplicativos a determinar a localização.
              Isso significa enviar dados de localização anônimos para o Google,
              mesmo quando nenhum aplicativo está em execução.
            </DialogContentText>
          </DialogContent>

          <DialogActions>
            <Button
              autoFocus
              onClick={handleClose}
            >
              Discordar
            </Button>

            <Button
              variant="contained"
              onClick={handleClose}
              autoFocus
            >
              Concordar
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
};

export default meta;

type Story = StoryObj<typeof meta>;
