import React, { useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { DataGrid } from "./DataGrid";
import { Box } from "../box/Box";
import { useGridApiRef } from "../../utils/useGridApiRef";
import { JSX } from "react/jsx-runtime";

const meta: Meta<typeof DataGrid> = {
    title: "layouts/DataGrid",
    component: DataGrid,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
        docs: {
            description: {
                component: "O **DataGrid** é um componente de tabela utilizado para exibir dados de maneira estruturada e interativa. Ele oferece recursos como paginação, ordenação de colunas, seleção de linhas e muito mais.",
            },
        },
    },
    argTypes: {
        rows: {
            description: "Define as linhas da tabela. Cada objeto de linha pode conter dados para cada coluna definida.",
            table: {
                type: { summary: "Array" },
            },
        },
        columns: {
            description: "Define as colunas da tabela. Cada coluna pode ter atributos como `field`, `headerName` e `width`.",
            table: {
                type: { summary: "Array" },
            },
        },
        autosizeOptions: {
            control: "object",
            description:
                "Define as opções de ajuste automático de tamanho das colunas, como largura mínima/máxima e estratégia de redimensionamento.",
            table: {
                type: { summary: "object" },
                defaultValue: { summary: "{}" },
            },
        },
        apiRef: {
            control: "object",
            description: "O objeto de ref que permite a manipulação do DataGrid. Pode ser instanciado com `useGridApiRef()",
        },
        autoHeight: {
            description: "Se ativado, o DataGrid ajusta automaticamente sua altura conforme o conteúdo.",
            control: "boolean",
        },
        autoPageSize: {
            description: "Se ativado, o DataGrid ajusta automaticamente o número de linhas exibidas por página.",
            control: "boolean",
        },
        checkboxSelection: {
            description: "Habilita a seleção das linhas por meio de checkboxes.",
            control: "boolean",
        },
        rowSelection: {
            description: "Se ativado, permite a seleção de linhas. Se desativado, as linhas não podem ser selecionadas.",
            control: "boolean",
        },
        disableColumnFilter: {
            description: "Desabilita a filtragem de dados nas colunas.",
            control: "boolean",
        },
        disableColumnMenu: {
            description: "Desabilita o menu de opções de cada coluna.",
            control: "boolean",
        },
        disableColumnSelector: {
            description: "Desabilita a opção de selecionar as colunas visíveis.",
            control: "boolean",
        },
        disableDensitySelector: {
            description: "Desabilita a opção de selecionar a densidade das linhas.",
            control: "boolean",
        },
        disableEval: {
            description: "Desabilita a execução de avaliações internas, se necessário.",
            control: "boolean",
        },
        disableMultipleRowSelection: {
            description: "Se ativado, permite selecionar apenas uma linha por vez.",
            control: "boolean",
        },
        disableColumnSorting: {
            description: "Desabilita a ordenação nas colunas.",
            control: "boolean",
        },
        disableRowSelectionOnClick: {
            description: "Desabilita a seleção de linha ao clicar nela.",
            control: "boolean",
        },
        disableVirtualization: {
            description: "Desabilita a virtualização, fazendo com que o DataGrid renderize todas as linhas, mesmo as não visíveis.",
            control: "boolean",
        },
        columnHeaderHeight: {
            description: "Define a altura do cabeçalho da coluna.",
            control: "number",
        },
        hideFooter: {
            description: "Se ativado, oculta o rodapé, incluindo a paginação.",
            control: "boolean",
        },
        hideFooterPagination: {
            description: "Se ativado, oculta a paginação no rodapé.",
            control: "boolean",
        },
        hideFooterSelectedRowCount: {
            description: "Se ativado, oculta a contagem de linhas selecionadas no rodapé.",
            control: "boolean",
        },
        ignoreDiacritics: {
            description: "Ignora os diacríticos (acentos) nas operações de pesquisa e ordenação.",
            control: "boolean",
        },
        indeterminateCheckboxAction: {
            description: "Define a ação do checkbox indeterminado (selecione ou desselecione as linhas).",
            control: "select",
            options: ["select", "deselect"],
        },
        keepNonExistentRowsSelected: {
            description: "Mantém as linhas não existentes selecionadas ao fazer mudanças.",
            control: "boolean",
        },
        loading: {
            description: "Exibe um indicador de carregamento enquanto os dados estão sendo carregados.",
            control: "boolean",
        },
        pagination: {
            description: "Habilita a paginação para exibir grandes conjuntos de dados de forma paginada.",
            control: "boolean",
        },
        rowHeight: {
            description: "Define a altura das linhas.",
            control: "number",
        },
        rowSpacingType: {
            description: `Define o tipo de espaçamento entre as linhas: "margem" ou "borda".`,
            control: "select",
            options: ["margin", "border"],
        },
        showCellVerticalBorder: {
            description: "Se ativado, exibe uma borda vertical entre as células.",
            control: "boolean",
        },
        showColumnVerticalBorder: {
            description: "Se ativado, exibe uma borda vertical entre as colunas.",
            control: "boolean",
        },
        disableColumnResize: {
            description: "Desabilita o redimensionamento das colunas.",
            control: "boolean",
        },
        autosizeOnMount: {
            description: "Ajusta automaticamente o tamanho das colunas ao montar o componente.",
            control: "boolean",
        },
        disableAutosize: {
            description: "Desabilita a funcionalidade de ajuste automático do tamanho das colunas.",
            control: "boolean",
        },
        scrollbarSize: {
            description: "Define o tamanho da barra de rolagem.",
            control: "number",
        },
        rowCount: {
            description: "Define o número total de linhas.",
            control: "number",
        },
        style: {
            description: "Estilização personalizada do componente.",
            control: "object",
        },
        density: {
            control: "select",
            options: ["standard", "compact"],
            description: "Define a densidade das linhas.",
            table: {
                type: { summary: "standard | compact" },
            },
        },
        getRowId: {
            description: "Função que retorna o identificador único de cada linha.",
            table: {
                type: { summary: "Function" },
            },
        },
        getCellClassName: {
            description: "Retorna a classe CSS personalizada para uma célula específica, permitindo estilização condicional com base nos dados.",
            table: {
                type: { summary: "Function" },
            },
        },
        getRowClassName: {
            description: "Retorna a classe CSS para uma linha específica, útil para aplicar estilos personalizados com base em condições como status ou tipo de dado.",
            table: {
                type: { summary: "Function" },
            },
        },
        getRowHeight: {
            description: "Define a altura de uma linha com base em seu conteúdo ou em regras específicas.",
            table: {
                type: { summary: "Function" },
            },
        },
        getEstimatedRowHeight: {
            description: "Retorna uma altura estimada para a linha, útil para layouts com carregamento dinâmico de conteúdo.",
            table: {
                type: { summary: "Function" },
            },
        },
        getDetailPanelContent: {
            description: "Define o conteúdo exibido quando uma linha é expandida, permitindo painéis de detalhes personalizados.",
            table: {
                type: { summary: "Function" },
            },
        },
        isRowSelectable: {
            description: "Determina se uma linha pode ser selecionada, útil para desativar a seleção de determinadas linhas.",
            table: {
                type: { summary: "Function" },
            },
        },
        isCellEditable: {
            description: "Verifica se uma célula pode ser editada com base em regras específicas",
            table: {
                type: { summary: "Function" },
            },
        },
        onCellEditStart: {
            description: "Disparado quando a edição de uma célula começa, permitindo capturar eventos iniciais de edição.",
            table: {
                type: { summary: "Function" },
            },
        },
        onCellEditStop: {
            description: "Disparado quando a edição de uma célula termina, útil para validação ou persistência dos dados.",
            table: {
                type: { summary: "Function" },
            },
        },
        onRowEditStart: {
            description: "Evento chamado quando a edição de uma linha inteira começa.",
            table: {
                type: { summary: "Function" },
            },
        },
        onRowEditStop: {
            description: "Evento chamado quando a edição de uma linha termina",
            table: {
                type: { summary: "Function" },
            },
        },
        onCellClick: {
            description: "Dispara ao clicar em uma célula, podendo ser usado para ações como seleção ou navegação.",
            table: {
                type: { summary: "Function" },
            },
        },
        onCellDoubleClick: {
            description: "Evento chamado quando uma célula é clicada duas vezes, útil para edição direta.",
            table: {
                type: { summary: "Function" },
            },
        },
        onCellKeyDown: {
            description: "Captura eventos de teclado dentro de uma célula, como pressionamento de Enter ou Escape.",
            table: {
                type: { summary: "Function" },
            },
        },
        onColumnHeaderClick: {
            description: "Disparado ao clicar no cabeçalho de uma coluna, frequentemente usado para ordenação.",
            table: {
                type: { summary: "Function" },
            },
        },
        onColumnHeaderContextMenu: {
            description: "Acionado ao abrir o menu de contexto sobre um cabeçalho de coluna.",
            table: {
                type: { summary: "Function" },
            },
        },
        onColumnHeaderDoubleClick: {
            description: "Evento disparado ao dar um duplo clique no cabeçalho de uma coluna.",
            table: {
                type: { summary: "Function" },
            },
        },
        onColumnHeaderOver: {
            description: "Acionado quando o mouse passa sobre o cabeçalho de uma coluna.",
            table: {
                type: { summary: "Function" },
            },
        },
        onColumnHeaderOut: {
            description: "Acionado quando o mouse sai do cabeçalho de uma coluna.",
            table: {
                type: { summary: "Function" },
            },
        },
        onColumnHeaderEnter: {
            description: "Evento chamado quando o cursor entra no cabeçalho da coluna.",
            table: {
                type: { summary: "Function" },
            },
        },
        onColumnHeaderLeave: {
            description: "Evento chamado quando o cursor sai do cabeçalho da coluna.",
            table: {
                type: { summary: "Function" },
            },
        },
        onColumnOrderChange: {
            description: "Disparado quando a ordem das colunas é alterada pelo usuário.",
            table: {
                type: { summary: "Function" },
            },
        },
        onDensityChange: {
            description: "Chamado quando a densidade da tabela (compacta, padrão ou espaçada) é alterada.",
            table: {
                type: { summary: "Function" },
            },
        },
        onRowClick: {
            description: "Evento acionado ao clicar em uma linha, útil para seleção ou abertura de detalhes.",
            table: {
                type: { summary: "Function" },
            },
        },
        onRowDoubleClick: {
            description: "Evento acionado ao clicar duas vezes em uma linha, podendo ser usado para edição.",
            table: {
                type: { summary: "Function" },
            },
        },
        onResize: {
            description: "Disparado quando a tabela é redimensionada.",
            table: {
                type: { summary: "Function" },
            },
        },
        onStateChange: {
            description: "Chamado quando o estado da tabela (filtros, ordenação, seleção) muda.",
            table: {
                type: { summary: "Function" },
            },
        },
        onPaginationModelChange: {
            description: "Evento acionado quando o modelo de paginação é alterado, útil para atualizações de exibição.",
            table: {
                type: { summary: "Function" },
            },
        },
        onRowCountChange: {
            description: "Chamado quando o número total de linhas exibidas muda.",
            table: {
                type: { summary: "Function" },
            },
        },
        onMenuOpen: {
            description: "Disparado quando um menu dentro da tabela é aberto.",
            table: {
                type: { summary: "Function" },
            },
        },
        onMenuClose: {
            description: "Disparado quando um menu dentro da tabela é fechado.",
            table: {
                type: { summary: "Function" },
            },
        },
        onColumnResize: {
            description: "Evento chamado ao redimensionar uma coluna.",
            table: {
                type: { summary: "Function" },
            },
        },
        onSortModelChange: {
            description: "Chamado quando o modelo de ordenação da tabela é alterado.",
            table: {
                type: { summary: "Function" },
            },
        },
        onColumnWidthChange: {
            description: "Evento disparado quando a largura de uma coluna muda.",
            table: {
                type: { summary: "Function" },
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

const rows = [
    { id: 1, name: "John", age: 25, country: "USA" },
    { id: 2, name: "Anna", age: 30, country: "Germany" },
    { id: 3, name: "James", age: 22, country: "UK" },
    { id: 4, name: "Sophia", age: 27, country: "Canada" },
    { id: 5, name: "Oliver", age: 31, country: "Australia" },
    { id: 6, name: "Liam", age: 28, country: "France" },
    { id: 7, name: "Emma", age: 26, country: "Italy" },
    { id: 8, name: "Daniel", age: 35, country: "Spain" },
    { id: 9, name: "Mia", age: 29, country: "Brazil" },
    { id: 10, name: "Lucas", age: 32, country: "Netherlands" },
    { id: 11, name: "Noah", age: 24, country: "Sweden" },
    { id: 12, name: "Isabella", age: 33, country: "Portugal" },
    { id: 13, name: "Ethan", age: 27, country: "Japan" },
    { id: 14, name: "Ava", age: 23, country: "South Korea" },
    { id: 15, name: "William", age: 36, country: "Mexico" },
    { id: 16, name: "Charlotte", age: 31, country: "India" },
    { id: 17, name: "Henry", age: 29, country: "Norway" },
    { id: 18, name: "Amelia", age: 34, country: "Denmark" },
    { id: 19, name: "Benjamin", age: 30, country: "Argentina" },
    { id: 20, name: "Emily", age: 28, country: "South Africa" },
    { id: 21, name: "David", age: 26, country: "Switzerland" },
    { id: 22, name: "Sophie", age: 32, country: "Belgium" },
    { id: 23, name: "Michael", age: 27, country: "Ireland" },
    { id: 24, name: "Elena", age: 29, country: "Russia" },
    { id: 25, name: "Thomas", age: 35, country: "Greece" },
    { id: 26, name: "Hannah", age: 30, country: "Austria" },
    { id: 27, name: "Alexander", age: 28, country: "Finland" },
    { id: 28, name: "Julia", age: 33, country: "Poland" },
    { id: 29, name: "Christopher", age: 31, country: "Hungary" },
    { id: 30, name: "Victoria", age: 25, country: "Czech Republic" },
];

const columns = [
    { field: "name", headerName: "Name", sortable: true, },
    { field: "age", headerName: "Age", sortable: true, },
    { field: "country", headerName: "Country", sortable: true, },
];

function ColumnAutosizing() {
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
            <DataGrid
                apiRef={apiRef}
                columns={columns}
                rows={rows}
            />
        </div>
    );
}

export const DataGridAutosizing = {
    render: (args: JSX.IntrinsicAttributes) => <ColumnAutosizing {...args} />,
};

export const BasicDataGrid: Story = {
    render: (args) => (
        <Box style={{ height: 300, width: "100%" }}>
            <DataGrid
                {...args}
                rows={args.rows || rows}
                columns={args.columns || columns}
            />
        </Box>
    ),
};

export const DataGridWithLoadingState: Story = {
    render: (args) => (
        <Box style={{ height: 400, width: "100%" }}>
            <DataGrid
                {...args}
                rows={args.rows || rows}
                loading={true}
                checkboxSelection
                columns={args.columns || columns}
            />
        </Box>
    ),
};