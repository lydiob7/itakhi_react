import { BrowserRouter } from "react-router-dom";
import Router from "./components/common/Router";
import UserPreferencesContextProvider from "./context/UserPreferencesContextProvider";
import GeneralContextProvider from "./context/GeneralContextProvider";
import BlogContextProvider from "./context/BlogContextProvider";

function App() {
    return (
        <UserPreferencesContextProvider>
            <GeneralContextProvider>
                <BlogContextProvider>
                    <BrowserRouter>
                        <Router />
                    </BrowserRouter>
                </BlogContextProvider>
            </GeneralContextProvider>
        </UserPreferencesContextProvider>
    );
}

export default App;
