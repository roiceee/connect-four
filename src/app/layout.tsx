import Footer from "@/components/footer";
import "../assets/style/globals.scss";

export const metadata = {
  title: "Connect Four",
  description: "Connect four game as a requirement for discrete math subject.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ backgroundImage: `url(/images/background.png)` }}>
        <div
          className="d-flex flex-column justify-content-between gap-1"
          style={{ minHeight: "100vh" }}
        >
          <div>{children}</div>

          <div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
