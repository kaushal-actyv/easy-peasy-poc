import { createStore } from "easy-peasy";
import model from "./model";

const store = createStore(
  model, // to keep the code clean, the model has been defined in model.js file
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
