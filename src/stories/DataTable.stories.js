import { jsx as _jsx } from "react/jsx-runtime";
import { DataTable } from "../components/DataTable";
const columns = [
    { key: "name", title: "Name", dataIndex: "name", sortable: true },
    { key: "email", title: "Email", dataIndex: "email" },
    { key: "age", title: "Age", dataIndex: "age", sortable: true },
];
const data = [
    { id: 1, name: "Ava", email: "ava@demo.com", age: 22 },
    { id: 2, name: "Ben", email: "ben@demo.com", age: 28 },
    { id: 3, name: "Chloe", email: "chloe@demo.com", age: 25 },
];
const meta = {
    title: "Components/DataTable",
    component: DataTable,
    parameters: { layout: "fullscreen" },
};
export default meta;
export const Basic = {
    render: () => _jsx(DataTable, { data: data, columns: columns }),
};
export const SortableAndSelectable = {
    render: () => (_jsx(DataTable, { data: data, columns: columns, selectable: true, onRowSelect: (rows) => console.log("Selected:", rows) })),
};
export const Loading = {
    render: () => _jsx(DataTable, { data: [], columns: columns, loading: true }),
};
export const Empty = {
    render: () => _jsx(DataTable, { data: [], columns: columns }),
};
