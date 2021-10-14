import Axios from "axios";

import { action, thunk } from "easy-peasy";

export default {
  // Store
  distributorInfo: {},
  vendorInfo: {},
  todos: [],
  // Thunks
  fetchTodos: thunk(async (actions) => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    const todos = await res.json();

    actions.setTodos(todos);
  }),
  fetchVendor: thunk(async (actions) => {
    const res = await Axios.post(
      "http://localhost:3005/v1/vendor/list", // actyv-nivea-service
      {},
      config
    );
    const vendors = res.data;

    actions.setVendorInfo(vendors);
  }),
  // Actions
  setDistributorInfo: action((state, payload) => {
    state.distributorInfo = { ...payload };
  }),
  setVendorInfo: action((state, payload) => {
    state.vendorInfo = { ...payload };
  }),
  setDistributorList: action((state, payload) => {
    state.distributorList = payload;
  }),
  setTodos: action((state, todos) => {
    state.todos = todos;
  }),
};

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMGExOGQxMjUyMGJmYmY5NTFkYjEyMyIsIm9yZ2FuaXphdGlvbiI6IjVmYTI4MDRkNDBiOTcyNGU1YTY5YWMxYyIsInJvbGUiOnsicmVnaW9uIjoiQWxsIHJlZ2lvbnMiLCJzdGF0dXMiOiJBY3RpdmUiLCJwZXJtaXNzaW9ucyI6W3sicmVzb3VyY2UiOiIiLCJhY3Rpb24iOiIiLCJfaWQiOiI2MDYyYzIwYTRhZjZlNDkxZjY1MjBkMzciLCJuYW1lIjoiRUhSIGFjY2VzcyJ9LHsicmVzb3VyY2UiOiIiLCJhY3Rpb24iOiIiLCJfaWQiOiI2MDYyYzM3YjZhZmQ0NzkzNjczMmRhMDUiLCJuYW1lIjoiRG9jdW1lbnRzIGFjY2VzcyJ9LHsicmVzb3VyY2UiOiIiLCJhY3Rpb24iOiIiLCJfaWQiOiI2MGNiMzc0NzNkNjE4YjllMDZmY2U4NzkiLCJuYW1lIjoiQ29tcGxldGVkIGFwcGxpY2F0aW9uIGFjY2VzcyJ9LHsicmVzb3VyY2UiOiIiLCJhY3Rpb24iOiIiLCJfaWQiOiI2MGYyZjk5ZWY2NjJhNzE2ZGRhNDI4MTQiLCJuYW1lIjoiUmVqZWN0ZWQgYXBwbGljYXRpb24gYWNjZXNzIn0seyJyZXNvdXJjZSI6IiIsImFjdGlvbiI6IiIsIl9pZCI6IjYwY2IzNzJhM2Q2MThiOWUwNmZjZTg3OCIsIm5hbWUiOiJBcHBsaWNhdGlvbiBjb3JyZWN0aW9uIGFjY2VzcyJ9LHsicmVzb3VyY2UiOiIiLCJhY3Rpb24iOiIiLCJfaWQiOiI2MTBhMTVjNTI1MjBiZmJmOTUxZGIxMjIiLCJuYW1lIjoiVmVuZG9yIG9uYm9hcmRpbmcgYWNjZXNzIn1dLCJuYW1lIjoiRmluYW5jZSBUZWFtIiwic2hvcnROYW1lIjoiRmluYW5jZSBUZWFtIiwicm9sZUlkIjoiMjA4YWQzNmMtN2M5OS00OTlkLWI4OTktZTE4YmUxYzlkYjVjIiwiY3JlYXRlZEF0IjoiMjAyMS0wOC0wNFQwNDozMToyOC40MTJaIiwidXBkYXRlZEF0IjoiMjAyMS0wOC0wNFQwNDozMToyOC40MTJaIn0sImlhdCI6MTYzMjU1MTU0MX0.wzuZFkTaw_I3LK3lHPsHaVl9iyOMuhj1S0Deon7f3ds";

const config = {
  headers: { Authorization: `Bearer ${token}` },
};

export const fetchVendorList = async () => {
  const response = await Axios.post(
    "http://localhost:3005/v1/vendor/list",
    {},
    config
  );

  return response.data;
};
