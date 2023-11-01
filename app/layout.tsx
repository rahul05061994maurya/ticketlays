import ClientLayout from "./ClientLayout";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ticketlay",
  description: "Welcome to Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
