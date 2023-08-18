import Sidebar from "@/components/Sidebar";
import "./globals.css";
import Providers from "./Providers";
import Header from "@/components/Header";

export const metadata = {
  title: "Task App Using Next.Js",
  description: "Mange Your Tasks By Future Task App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <main className="flex h-screen overflow-hidden">
            <Sidebar />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
