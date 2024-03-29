import { Footer } from "@/components/global/Footer/Footer";
import { Navigation } from "@/components/global/Navigation/Navigation";
import { Banner } from "@/components/Home/Banner";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />

        <main className="min-h-screen w-full">
          <Banner />
          <div className="max-w-6xl p-3 m-auto mt-14">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
