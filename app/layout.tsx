import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ProfitTrack — Know exactly what you earn on every project",
  description: "Stop guessing your project margins. ProfitTrack shows freelancers and contractors their real profit on every project — after labor, expenses, and change orders.",
  openGraph: {
    title: "ProfitTrack — Know exactly what you earn on every project",
    description: "Stop guessing your project margins. Track real profitability across all your projects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
