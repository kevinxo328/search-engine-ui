import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme";

const font = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Search Engine",
  description: "Generated by create next app",
};

type Props = Readonly<{
  children: React.ReactNode;
}>;

const RootLayout = (props: Props) => {
  return (
    <html lang="zh-TW" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {props.children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
