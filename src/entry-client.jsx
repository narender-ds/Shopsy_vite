import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AppProvider } from "./context/GlobalContext";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import store from "./redux/store";

ReactDOM.hydrateRoot(
  document.getElementById("root"),
  <Provider store={store}>
    <AppProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <ToastContainer autoClose={800} limit={2} />
    </AppProvider>
  </Provider>
);
