import Providers from "@/redux/Provider";
import "./globals.css";
import StyledComponentsRegistry from "./lib/registry";

export const metadata = {
  title: "OA SHABBAT '24",
  description: "OA SHABBAT '24",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
