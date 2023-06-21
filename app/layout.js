import "./globals.css";

export const metadata = {
  title: "QR Code Generator",
  description: "Web app to generate QR codes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col justify-center align-middle pt-2">
        <h1 className=" text-3xl font-bold mx-auto">QR Generator</h1>
        {children}
      </body>
    </html>
  );
}
