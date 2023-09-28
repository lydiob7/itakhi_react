import { BrowserRouter } from "react-router-dom";
import Router from "./components/common/Router";
import UserPreferencesContextProvider from "./context/UserPreferencesContextProvider";

function App() {
    return (
        <UserPreferencesContextProvider>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </UserPreferencesContextProvider>
    );
}

export default App;
