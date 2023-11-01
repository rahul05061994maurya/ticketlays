"use client";

import "../styles/globals.css";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";
import { Layout } from "../components/layout/layout";

const ClientLayout = function ({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider defaultTheme="system" attribute="class">
      <NextUIProvider>
        <Layout>{children}</Layout>
      </NextUIProvider>
    </NextThemesProvider>
  );
};

export default ClientLayout;
