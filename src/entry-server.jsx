import App from "./App";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppProvider } from "./context/GlobalContext";
import { Provider } from "react-redux";
import store from "./redux/store";

export function render(url, context) {
  return ReactDOMServer.renderToString(
    <Provider store={store}>
      <AppProvider>
        <StaticRouter location={url} context={context}>
          <App />
        </StaticRouter>
      </AppProvider>
    </Provider>
  );
}
