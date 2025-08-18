import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "../components/InputField";
import React from "react";

const meta = {
  title: "Components/InputField",
  component: InputField,
  parameters: { layout: "centered" },
  args: {
    label: "Email",
    placeholder: "you@example.com",
    helperText: "We never share your email.",
    variant: "outlined",
    size: "md",
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["filled", "outlined", "ghost"],
    },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
  },
} satisfies Meta<typeof InputField>;
export default meta;

export type Story = StoryObj<typeof meta>;
export const Basic: Story = {};
export const Invalid: Story = {
  args: { invalid: true, errorMessage: "This field is required" },
};
export const Password: Story = {
  args: { label: "Password", passwordToggle: true, type: "password" },
};
export const Loading: Story = { args: { loading: true } };
