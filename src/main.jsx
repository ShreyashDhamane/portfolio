import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./app";
import "/public/assets/css/fonts.scss";
import "/public/assets/css/globals.scss";
import "/public/assets/css/utils.scss";
import { store } from "./store/configureStore";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
