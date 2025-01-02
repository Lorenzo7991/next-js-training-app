import React, { ReactNode } from 'react';
import Navbar from '../components/Navbar';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <main className='font-work-sans'>
            <Navbar />
            {children}
        </main>
    );
}