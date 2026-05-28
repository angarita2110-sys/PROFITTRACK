import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ProfitTrack — Know your real project margins",
  description: "Stop guessing. ProfitTrack shows freelancers and contractors their real profit on every project — after labor, expenses, and change orders.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
