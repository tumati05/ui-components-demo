import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DataTable, Column } from "../DataTable";

// Define a type for table rows
type User = {
  name: string;
  age: number;
};

describe("DataTable Component", () => {
  const columns: Column<User>[] = [
    { key: "1", title: "Name", dataIndex: "name", sortable: true },
    { key: "2", title: "Age", dataIndex: "age", sortable: true },
  ];

  const data: User[] = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
  ];

  test("renders table headers correctly", () => {
    render(<DataTable columns={columns} data={data} />);
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Age")).toBeInTheDocument();
  });

  test("renders table rows correctly", () => {
    render(<DataTable columns={columns} data={data} />);
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
  });

  test("sorts data when sortable column header is clicked", () => {
    render(<DataTable columns={columns} data={data} />);
    const ageHeader = screen.getByText("Age");

    // Click once to sort ascending
    fireEvent.click(ageHeader);
    const rowsAsc = screen.getAllByRole("row");
    expect(rowsAsc[1]).toHaveTextContent("Alice"); // Age 25 first
    expect(rowsAsc[2]).toHaveTextContent("Bob");

    // Click again to sort descending
    fireEvent.click(ageHeader);
    const rowsDesc = screen.getAllByRole("row");
    expect(rowsDesc[1]).toHaveTextContent("Bob"); // Age 30 first
    expect(rowsDesc[2]).toHaveTextContent("Alice");
  });
});
