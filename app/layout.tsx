import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const fontSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700' ,'800'],
    variable: '--font-sans',
});

export const metadata: Metadata = {
    title: 'CareConnectNext',
    description: 'A fully equipped Health Care Next.js application',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={fontSans.className}>{children}</body>
        </html>
    );
}
