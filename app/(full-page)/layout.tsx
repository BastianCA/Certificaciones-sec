import { Metadata } from "next";
import React from "react";
import AppConfig from "../../layout/AppConfig";

interface FullPageLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Certificaciones SEC",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function FullPageLayout({ children }: FullPageLayoutProps) {
  return (
    <React.Fragment>
      {children}
      <AppConfig minimal />
    </React.Fragment>
  );
}
