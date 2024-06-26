import { Inter } from "next/font/google";
import Head from 'next/head'; // Adicionado para manipular as tags head
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  themeColor: '#000023'
}

export const metadata = {
  title: "Perfect Visions",
  icons: {
    icon: '/logo.png'
  },
  openGraph: {
    title: "Perfect Visions",
    images: [{
      url: 'https://perfectvisions.website/logo.png',
      width: 120,
      height: 120,

    }],
    url: "https://perfectvisions.website/",
    type: "website",
    description: "Olá viajante, aqui está o site oficial da Perfect Visions! Venha descobrir todos os nossos projetos e ficar maravilhado com cada um deles!"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <Head>
        <script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
