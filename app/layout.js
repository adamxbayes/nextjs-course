import MainHeader from "@/app/components/main-header/main-header";
import MainHeaderBackground from "@/app/components/main-header/main-header-background";
import "./globals.css";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeaderBackground/>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
