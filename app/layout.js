import "./globals.css";

export const metadata = {
  title: "QR Code Generator",
  description: "Web app to generate QR codes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" h-screen flex flex-col justify-start align-middle pt-5">
        <h1 className=" text-3xl font-bold mx-auto">QR Generator</h1>
        {children}
      </body>
    </html>
  );
}
