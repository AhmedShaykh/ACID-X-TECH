"use client";
import { persistor, store } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            <PersistGate
                persistor={persistor}
                loading={null}
            >
                <SessionProvider>{children}</SessionProvider>
            </PersistGate>
        </Provider>
    )
};

export default Layout;