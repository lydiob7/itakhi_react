import { BrowserRouter } from "react-router-dom";
import Router from "./components/common/Router";
import UserPreferencesContextProvider from "./context/UserPreferencesContextProvider";
import GeneralContextProvider from "./context/GeneralContextProvider";
import BlogContextProvider from "./context/BlogContextProvider";
import AuthContextProvider from "./context/AuthContextProvider";

function App() {
    return (
        <UserPreferencesContextProvider>
            <GeneralContextProvider>
                <AuthContextProvider>
                    <BlogContextProvider>
                        <BrowserRouter>
                            <Router />
                        </BrowserRouter>
                    </BlogContextProvider>
                </AuthContextProvider>
            </GeneralContextProvider>
        </UserPreferencesContextProvider>
    );
}

export default App;
