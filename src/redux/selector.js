import { createSelector } from "@reduxjs/toolkit";
export const selectorFilterSearch = (state) =>
  state.filterSearch.filtter.search;
export const selectorTodo = (state) => state.todoListShow.todoList;
export const selectorFilterStatus = (state) =>
  state.filterSearch.filtter.status;
export const selectorFilterPriority = (state) =>
  state.filterSearch.filtter.priority;
export const todoRemainingSelector = createSelector(
  selectorTodo,
  selectorFilterSearch,
  selectorFilterStatus,
  selectorFilterPriority,
  (listShow, filterSearch, status, priorities) => {
    
    return listShow.filter((todo) => {
      if (status === "All") {
        return priorities.length
          ? todo.name.toLowerCase().includes(filterSearch.toLowerCase()) &&
              priorities.includes(todo.priority)
          : todo.name.toLowerCase().includes(filterSearch.toLowerCase());
      }

      return (
        todo.name.toLowerCase().includes(filterSearch.toLowerCase()) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priority) : true)
      );
    });
  }
);
