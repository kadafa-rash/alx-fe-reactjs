import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByTestId("todo-input");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("toggles a todo's completed state", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");

    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: line-through");

    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: none");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");
    const deleteButton = todoItem.nextSibling;

    fireEvent.click(deleteButton);

    expect(todoItem).not.toBeInTheDocument();
  });
});
