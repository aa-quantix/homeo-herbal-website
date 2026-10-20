import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Treatments from './pages/Treatments';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

function App() {
    const [activePage, setActivePage] = useState('home');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activePage]);

    const renderPage = () => {
        switch (activePage) {
            case 'home':        return <Home setActivePage={setActivePage} />;
            case 'about':       return <About />;
            case 'services':    return <Services />;
            case 'treatments':  return <Treatments />;
            case 'testimonials':return <Testimonials />;
            case 'contact':     return <Contact />;
            default:            return <Home setActivePage={setActivePage} />;
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar activePage={activePage} setActivePage={setActivePage} />
            <main className="flex-grow">
                {renderPage()}
            </main>
            <Footer setActivePage={setActivePage} />
            <WhatsAppButton />
        </div>
    );
}

export default App;
