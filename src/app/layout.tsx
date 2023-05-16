import "../assets/style/globals.scss";

import image from "../assets/images/background.png";



export const metadata = {
  title: 'Connect Four',
  description: 'Connect four game as a requirement for discrete math subject.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body style={{backgroundImage: `url(${image.src})`}}>{children}</body>
    </html>
  )
}
