import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import reducers from './reducers'
import {Provider} from 'react-redux'
import { createStore } from 'redux'


const store =createStore(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)



ReactDOM.render(
	<Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
      </Provider>,
    document.getElementById("root")
);

serviceWorker.unregister();