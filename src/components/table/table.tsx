import React from 'react';
import MuiTable from '@mui/material/Table';
import MuiTableBody from '@mui/material/TableBody';
import MuiTableCell, { TableCellProps } from '@mui/material/TableCell';
import MuiTableContainer from '@mui/material/TableContainer';
import MuiTableHead from '@mui/material/TableHead';
import MuiTableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import LinearProgress from '@mui/material/LinearProgress';

export type TableColumn<T> = {
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
  formatter?: (value: any, row: T, rowIndex: number) => React.ReactNode;
} & Pick<TableCellProps, 'align' | 'width'>;

export type TableColumns<T> = TableColumn<T>[];

export type TableProps<T> = {
  columns: TableColumns<T>;
  rows: T[];
  sortBy?: keyof T;
  sortDir?: 'asc' | 'desc';
  onSort?: (dataIndex: keyof T, dir: 'asc' | 'desc') => void;
  isLoading?: boolean;
};

const Table = <T extends object>({
  columns,
  rows,
  sortBy,
  sortDir,
  onSort,
  isLoading,
}: TableProps<T>) => {
  const renderColumnContent = (
    column: TableColumn<T>,
    row: T,
    rowIndex: number,
  ): React.ReactNode => {
    if (column.formatter) {
      return column.formatter(
        column.dataIndex ? row?.[column.dataIndex] : null,
        row,
        rowIndex,
      );
    }
    if (column.dataIndex) {
      return (row?.[column.dataIndex] || null) as React.ReactNode;
    }
    return null;
  };

  const onClickSortLabel = (dataIndex: keyof T) => {
    if (onSort) {
      if (dataIndex === sortBy) {
        return onSort(dataIndex, sortDir === 'asc' ? 'desc' : 'asc');
      }
      return onSort(dataIndex, sortDir || 'asc');
    }
  };

  return (
    <MuiTableContainer component={Paper}>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
          <MuiTableHead>
            <MuiTableRow>
              {columns.map((column, index) => (
                <MuiTableCell
                  key={`column-key${index}`}
                  align={column.align}
                  width={column.width}
                  sortDirection={column.sortable && sortDir ? sortDir : false}>
                  {column.sortable ? (
                    <TableSortLabel
                      active={column.dataIndex === sortBy}
                      direction={sortDir}
                      onClick={() => onClickSortLabel(column.dataIndex)}>
                      {column.title}
                    </TableSortLabel>
                  ) : (
                    column.title
                  )}
                </MuiTableCell>
              ))}
            </MuiTableRow>
          </MuiTableHead>
          <MuiTableBody>
            {rows.map((row, rowIndex) => (
              <MuiTableRow
                key={`row-key-${rowIndex}`}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                {columns.map((column, columnIndex) => (
                  <MuiTableCell
                    key={`row-key-${rowIndex}-column-${columnIndex}`}
                    align={column.align}
                    width={column.width}>
                    {renderColumnContent(column, row, rowIndex)}
                  </MuiTableCell>
                ))}
              </MuiTableRow>
            ))}
          </MuiTableBody>
        </MuiTable>
      )}
    </MuiTableContainer>
  );
};

export default Table;
