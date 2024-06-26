import './globals.css'
import { Montserrat, Quicksand } from 'next/font/google'

const montserrat = Montserrat({ variable: "--font-mont" ,subsets: ['latin'] })
const quicksand = Quicksand({ variable: "--font-quick", subsets: ["latin"] });

export const metadata = {
  title: 'Quiz Application',
  description: 'A Quiz application created by  with NextJs.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-gray-700 text-slate-100`}>{children}</body>
    </html>
  )
}
