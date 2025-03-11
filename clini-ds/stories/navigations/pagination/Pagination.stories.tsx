import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Pagination, PaginationProps } from "./Pagination";
import { PaginationItem } from "../pagination-item/PaginationItem";
import { Typography } from "../../data-display/typography/Typography";
import { Icon } from "../../data-display/icon/Icon";
import { Stack } from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
import { action } from "@storybook/addon-actions";

export default {
  title: "navigations/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    count: 10,
    color: "primary",
    onClick: action("clicked"),
  },
} as Meta<PaginationProps>;

const ArrowBackIcon = () => <Icon>arrow_back</Icon>;
const ArrowForwardIcon = () => <Icon>arrow_forward</Icon>;

export const BasicPagination: StoryFn<PaginationProps> = (args) => (
  <Pagination {...args} />
);

export const Buttons: StoryFn<PaginationProps> = (args) => (
  <Pagination showFirstButton showLastButton {...args} />
);

export const Small: StoryFn<PaginationProps> = (args) => (
  <Pagination size="small" {...args} />
);

export const Large: StoryFn<PaginationProps> = (args) => (
  <Pagination size="large" {...args} />
);


export const Outlined: StoryFn<PaginationProps> = (args) => (
  <Pagination variant="outlined" {...args} />
);

export const Rounded: StoryFn<PaginationProps> = (args) => (
  <Pagination shape="rounded" {...args} />
);

export const Ranges: StoryFn<PaginationProps> = (args) => (
  <Pagination count={11} defaultPage={6} {...args} />
);

export const Controled: StoryFn<PaginationProps> = (args) => {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return (
    <Stack spacing={2} style={{ textAlign: "center" }}>
      <Typography>Page: {page}</Typography>
      <Pagination color="primary" page={page} onChange={handleChange} {...args} />
    </Stack>
  );
};

export const CustomIcons: StoryFn<PaginationProps> = (args) => (
  <Stack spacing={2}>
    <Pagination
      color="primary"
      count={10}
      renderItem={(item) => (
        <PaginationItem
          slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
          {...item}
        />
      )}
      {...args}
    />
  </Stack>
);

export const Table: StoryFn<PaginationProps> = () => {
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <TablePagination
      component="div"
      color="primary"
      count={100}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
};
