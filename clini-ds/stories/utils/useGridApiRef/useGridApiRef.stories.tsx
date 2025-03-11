import React, { useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { DataGrid } from "../../layouts/data-grid/DataGrid";
import { useGridApiRef } from ".";
import { Alert } from "../../feedbacks/alert/Alert";
import theme from "../../utils/stylesheet/theme/Theme";

const meta: Meta = {
    title: "utils/useGridApiRef",
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: {},
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

const columns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Nome" },
];

const rows = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
];

export const Example: Story = {
    render: () => {
        const apiRef = useGridApiRef();

        useEffect(() => {
            if (apiRef.current) {
                apiRef.current.autosizeColumns({
                    includeHeaders: true,
                    includeOutliers: false,
                    outliersFactor: 1.5,
                    expand: true,
                });
            }
        }, [apiRef]);

        return (
            <div>
                <Alert severity="info">
                    <span>
                        O hook useGridApiRef cria e retorna a referência da API do DataGrid.
                        Isso permite que você interaja diretamente com a tabela após a renderização (como autosizing de colunas, manipulação de dados ou mesmo chamadas de ações específicas).
                    </span>

                    <h3>🎯 Métodos Úteis da API</h3>
                    <table style={{ borderCollapse: "collapse", width: "100%" }}>
                        <thead>
                            <tr>
                                <th style={{ border: `1px solid ${theme.palette.supportPure}`, padding: "8px", textAlign: "left" }}>Método</th>
                                <th style={{ border: `1px solid ${theme.palette.supportPure}`, padding: "8px", textAlign: "left" }}>Descrição</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ border: `1px solid ${theme.palette.supportPure}`, padding: "8px" }}>apiRef.current.selectRow(id, isSelected)</td>
                                <td style={{ border: `1px solid ${theme.palette.supportPure}`, padding: "8px" }}>Seleciona/desseleciona uma linha pelo ID.</td>
                            </tr>
                            <tr>
                                <td style={{ border: `1px solid ${theme.palette.supportPure}`, padding: "8px" }}>apiRef.current.setPage(pageIndex)</td>
                                <td style={{ border: `1px solid ${theme.palette.supportPure}`, padding: "8px" }}>Define a página ativa do DataGrid.</td>
                            </tr>
                            <tr>
                                <td style={{ border: `1px solid ${theme.palette.supportPure}`, padding: "8px" }}>apiRef.current.autosizeColumns()</td>
                                <td style={{ border: `1px solid ${theme.palette.supportPure}`, padding: "8px" }}>Ajusta automaticamente a largura das colunas.</td>
                            </tr>
                            <tr>
                                <td style={{ border: `1px solid ${theme.palette.supportPure}`, padding: "8px" }}>apiRef.current.getRow(id)</td>
                                <td style={{ border: `1px solid ${theme.palette.supportPure}`, padding: "8px" }}>Retorna os dados de uma linha específica.</td>
                            </tr>
                            <tr>
                                <td style={{ border: `1px solid ${theme.palette.supportPure}`, padding: "8px" }}>apiRef.current.scrollToIndexes({"{ rowIndex }"})</td>
                                <td style={{ border: `1px solid ${theme.palette.supportPure}`, padding: "8px" }}>Faz scroll até uma linha específica.</td>
                            </tr>
                        </tbody>
                    </table>
                </Alert>
                <DataGrid apiRef={apiRef} columns={columns} rows={rows} />
            </div>

        );
    }
};
