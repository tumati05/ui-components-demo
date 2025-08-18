import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import React from "react";
import { InputField } from "../../components/InputField";

describe("InputField", () => {
  it("renders label and helper text", () => {
    render(<InputField label="Name" helperText="Helper text here" />);
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByText("Helper text here")).toBeInTheDocument();
  });

  it("shows error message when invalid", () => {
    render(<InputField invalid errorMessage="Required field" label="Email" />);
    expect(screen.getByText("Required field")).toBeInTheDocument();
    expect(screen.getByRole("alert")).toHaveTextContent("Required field");
  });

  it("allows typing in the input", () => {
    const handleChange = vi.fn();
    render(<InputField label="Username" value="" onChange={handleChange} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "tejasri" } });
    expect(handleChange).toHaveBeenCalled();
  });

  it("clears value when clear button is clicked", () => {
    const Wrapper = () => {
      const [val, setVal] = React.useState("abc");
      return (
        <InputField
          label="Search"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          clearable
        />
      );
    };
    render(<Wrapper />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveValue("abc");
    const clearButton = screen.getByRole("button", { name: /clear/i });
    fireEvent.click(clearButton);
    expect(input).toHaveValue("");
  });
});
