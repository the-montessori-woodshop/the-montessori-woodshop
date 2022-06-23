import { useCallback, useMemo } from "react";
import type { UseTableRowProps } from "react-table";
import { useBlockLayout, useTable } from "react-table";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList } from "react-window";

import styles from "./Table.css";
import { TableHead, TableHeadTH } from "./TableHead";

export type TableRowClickHandler<T extends Object> = (
  row: UseTableRowProps<T>["original"]
) => void;

export type TableProps<T extends Object> = {
  columns: any;
  data: any;
  rowHeight?: number;
  onRowClick?: TableRowClickHandler<T>;
};

export function Table<T extends Object>({
  columns,
  data,
  rowHeight = 56,
  onRowClick,
}: TableProps<T>) {
  // Use the state and functions returned from useTable to build your UI

  const handleRowClick = useCallback<(row: T) => () => void>(
    (row) => () => {
      if (onRowClick) {
        onRowClick(row);
      }
    },
    [onRowClick]
  );

  const defaultColumn = useMemo(
    () => ({
      width: 150,
    }),
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
        defaultColumn,
      },
      useBlockLayout
    );

  const RenderRow = useCallback(
    ({ index, style }) => {
      const row = rows[index];
      prepareRow(row);
      return (
        <div
          {...row.getRowProps({
            style: {
              ...style,
              background: index % 2 ? "var(--color-grey1)" : "transparent",
            },
          })}
          className="tr table-body-tr"
          onClick={handleRowClick(row.original as T)}
        >
          {row.cells.map((cell, i) => {
            const { key, ...restCellProps } = cell.getCellProps();
            return (
              <div key={key} {...restCellProps} className="td">
                <div className="table-body-td">{cell.render("Cell")}</div>
              </div>
            );
          })}
        </div>
      );
    },
    [handleRowClick, prepareRow, rows]
  );

  // Render the UI for your table
  return (
    <div
      {...getTableProps({
        style: {
          height: "100%",
          display: "flex",
          flexDirection: "column",
        },
      })}
      className="table"
    >
      <TableHead>
        {headerGroups.map((headerGroup) => {
          const { key, ...restHeaderGroupProps } =
            headerGroup.getFooterGroupProps();
          return (
            <div key={key} {...restHeaderGroupProps} className="tr">
              {headerGroup.headers.map((column) => {
                const { key: headerKey, ...restHeaderProps } =
                  column.getHeaderProps();
                return (
                  <TableHeadTH
                    key={headerKey}
                    {...restHeaderProps}
                    className="th"
                  >
                    {column.render("Header")}
                  </TableHeadTH>
                );
              })}
            </div>
          );
        })}
      </TableHead>
      <div
        {...getTableBodyProps({
          style: {
            flex: 1,
          },
        })}
      >
        <AutoSizer>
          {({ height, width }) => (
            <FixedSizeList
              height={height}
              itemCount={rows.length}
              itemSize={rowHeight}
              width={width}
            >
              {RenderRow}
            </FixedSizeList>
          )}
        </AutoSizer>
      </div>
    </div>
  );
}
