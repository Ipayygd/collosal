import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const font = Noto_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Collosal",
  description: "Slicing design project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${font.className} antialiased text-white bg-[#0b0b22]`}>
        {children}
        <div className="min-h-screen w-full px-5 flex items-center justify-center lg:hidden">
          <h1 className="text-2xl font-bold text-center">
            Sorry, this site is available on larger devices, like desktop
            screens.
          </h1>
        </div>
      </body>
    </html>
  );
}
