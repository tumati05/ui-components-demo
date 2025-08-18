import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "../components/DataTable";
import type { Column } from "../components/DataTable"; // type-only import

type User = { id: number; name: string; email: string; age: number };

const columns: Column<User>[] = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "email", title: "Email", dataIndex: "email" },
  { key: "age", title: "Age", dataIndex: "age", sortable: true },
];

const data: User[] = [
  { id: 1, name: "Ava", email: "ava@demo.com", age: 22 },
  { id: 2, name: "Ben", email: "ben@demo.com", age: 28 },
  { id: 3, name: "Chloe", email: "chloe@demo.com", age: 25 },
];

const meta: Meta<typeof DataTable> = {
  title: "Components/DataTable",
  component: DataTable,
  parameters: { layout: "fullscreen" },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => <DataTable<User> data={data} columns={columns} />,
};

export const SortableAndSelectable: Story = {
  render: () => (
    <DataTable<User>
      data={data}
      columns={columns}
      selectable
      onRowSelect={(rows) => console.log("Selected:", rows)}
    />
  ),
};

export const Loading: Story = {
  render: () => <DataTable<User> data={[]} columns={columns} loading />,
};

export const Empty: Story = {
  render: () => <DataTable<User> data={[]} columns={columns} />,
};
