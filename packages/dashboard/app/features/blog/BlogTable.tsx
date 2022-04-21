import type { GET_PostsApiResponse, Post } from "@woodshop/api";
import type { FC} from "react";
import { useCallback, useMemo } from "react";
import type { Column } from "react-table";
import type { TableRowClickHandler } from "~/components/Table";
import { Table } from "~/components/Table";
import { Chip } from "~/components/Chip";
import { ChipText } from "~/components/ChipText";
import { useNavigate } from "remix";

export const BlogTable: FC<{ data: GET_PostsApiResponse }> = ({ data }) => {
  const navigate = useNavigate();
  const columns = useMemo<ReadonlyArray<Column<Post>>>(
    () => [
      {
        Header: "Title",
        accessor: "title",
        Cell: ({ value }) => {
          return <div style={{ fontWeight: 700 }}>{value}</div>;
        },
      },
      {
        Header: "Published",
        accessor: "published",
        Cell: ({ value }) => {
          return (
            <Chip cxVariant={value ? "published" : "draft"}>
              <ChipText>{value ? "published" : "draft"}</ChipText>
            </Chip>
          );
        },
      },
    ],
    []
  );

  const onClick = useCallback<TableRowClickHandler<Post>>(
    (row) => {
      navigate(`/blog/editor/${row.id}`);
    },
    [navigate]
  );

  return (
    <Table<Post>
      columns={columns}
      data={data}
      rowHeight={100}
      onRowClick={onClick}
    />
  );
};
