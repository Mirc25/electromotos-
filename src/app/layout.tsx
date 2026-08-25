import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Electromotos | Motos nuevas y usadas',
  description: 'Ecommerce moderno para motos Corven, Keller, Voge y más.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
