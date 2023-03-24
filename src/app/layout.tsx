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
          <div className="max-w-2xl p-3 m-auto my-32">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
