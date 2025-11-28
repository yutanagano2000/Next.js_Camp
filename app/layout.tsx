"use client"
import { CssBaseline, CssVarsProvider } from "@mui/joy";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html 
      lang="en"
      >
      <head>
      </head>
      <body
        className={`antialiased`}
      >
      <CssVarsProvider defaultMode="dark">
      <CssBaseline/>
      {children} 
      </CssVarsProvider>
      


      </body>
    </html>

  );
}
