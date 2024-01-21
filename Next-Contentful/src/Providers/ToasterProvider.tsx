"use client";
import { Toaster } from "react-hot-toast";
import { useTheme } from "next-themes";

const ToasterProvider = () => {

    const { systemTheme, theme } = useTheme();

    const currentTheme = theme === "system" ? systemTheme : theme;

    return (
        <>
            {currentTheme === "dark" ? (
                <Toaster
                    toastOptions={{
                        style: {
                            background: "#333",
                            color: "#fff",
                        }
                    }}
                />
            ) : (
                <Toaster
                    toastOptions={{
                        style: {
                            background: "#ebf2ed",
                            color: "#475569",
                        }
                    }}
                />
            )}
        </>
    )
};

export default ToasterProvider;