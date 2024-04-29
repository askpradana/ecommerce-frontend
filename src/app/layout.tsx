import "~/styles/globals.css";
import Navbar from "./components/navbar";

export const metadata = {
  title: "Project ecommerce",
  description: "Project ecommerce",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
