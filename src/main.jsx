import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import {
	StateProvider,
	initialState,
	reducer,
} from "./components/Globe-jsx/state";

ReactDOM.createRoot(document.getElementById("root")).render(
	<StateProvider initialState={initialState} reducer={reducer}>
		<Router>
			<App />
		</Router>
	</StateProvider>
);
