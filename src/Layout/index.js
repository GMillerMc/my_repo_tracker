import React from 'react';
import { default as Header } from './Header/index';
import { default as Footer } from './Footer';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
        <>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
        </>
    )
}
