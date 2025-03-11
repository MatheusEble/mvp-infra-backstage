import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Modal } from "./Modal";
import { Button } from "../../inputs/button/Button";

const meta = {
  title: "utils/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  args: {
    open: true,
    children: <div>Precisa ser um elemento</div>
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export const Default: Story = {
  render: (args) => {
    const [showModal, setShowModal] = useState(false);

    return (
      <>
        <Button onClick={() => setShowModal(true)}>
          Abrir
        </Button>

        <Modal {...args} open={showModal}>
          <div style={{ maxWidth: "100%", width: "max-content", padding: 12, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
            <div style={{ backgroundColor: "white", padding: 8 }}>
              <Button onClick={() => setShowModal(false)}>
                Fechar
              </Button>

              <p style={{ marginTop: 0 }}>
                O termo "Modal" às vezes é usado para significar "Dialog", mas este é
                um nome impróprio. Um componente Modal descreve partes de uma UI.
                <strong>Um elemento é considerado modal se bloquear a interação com o restante do aplicativo.</strong>
              </p>

              <p>
                Todo Modal é um tipo de Dialog, mas nem todo Dialog é um Modal.
                O que diferencia é o bloqueio da interface: o modal bloqueia, enquanto o dialog pode ou não bloquear.
                Se você está usando o MUI, o componente Dialog é tecnicamente um modal,
                mas também permite configurações para comportamentos não modais.
              </p>

              <p>
                Obs: O Dialog do MUI usa o Modal internamente, por isso não precisa
                chamar o Modal e o Dialog quando você for usar o Dialog.
              </p>

              <div>
                <p>
                  Componentes Dialogs <strong>não</strong> Modais:
                </p>

                <ul>
                  <li>Menu</li>
                  <li>Popover</li>
                  <li>Tooltip</li>
                  <li>Snackbar</li>
                </ul>
              </div>
            </div>
          </div>
        </Modal>
      </>
    )
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
