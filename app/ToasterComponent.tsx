import React from "react";
import { Toaster } from "react-hot-toast";

const ToasterComponent = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        className:
          "bg-background text-foreground border border-border rounded-xl shadow-lg px-4 py-3 flex items-center space-x-2",
        duration: 4000,
        success: {
          className: "bg-green-500 text-white border-green-600 shadow-md",
          iconTheme: {
            primary: "white",
            secondary: "green",
          },
        },
        error: {
          className: "bg-red-500 text-white border-red-600 shadow-md",
          iconTheme: {
            primary: "white",
            secondary: "red",
          },
        },
      }}
    />
  );
};

export default ToasterComponent;
