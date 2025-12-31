import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Engine from './pages/Engine';
import Manifesto from './pages/Manifesto';
import Roadmap from './pages/Roadmap';
import Presskit from './pages/Presskit';
import DungeonForge from './pages/DungeonForge'; // <--- Import this

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

function App() {
    return (
        <Layout>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/engine" element={<Engine />} />
                <Route path="/manifesto" element={<Manifesto />} />
                <Route path="/roadmap" element={<Roadmap />} />
                <Route path="/presskit" element={<Presskit />} />
                <Route path="/forge" element={<DungeonForge />} /> {/* <--- Add this Route */}
            </Routes>
        </Layout>
    );
}

export default App;