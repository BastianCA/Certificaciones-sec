import { Metadata } from "next";
import Layout from "../../layout/layout";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Certificaciones SEC",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function MainLayout({ children }: MainLayoutProps) {
  return <Layout>{children}</Layout>;
}
