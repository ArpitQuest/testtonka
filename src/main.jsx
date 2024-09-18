import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./store/store";
import HttpsRedirect from "react-https-redirect";
import { Provider } from "react-redux";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <HttpsRedirect>
        <TonConnectUIProvider manifestUrl="https://tonka-telegram.netlify.app/assets/tonconnect-manifest.json">
          <App />
        </TonConnectUIProvider>
      </HttpsRedirect>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
