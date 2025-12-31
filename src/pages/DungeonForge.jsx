import React, { useState } from 'react';
import { useDungeonStore } from '../store/useDungeonStore';
import { Copy, Check, Settings, ChevronLeft, Map, Ghost, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConceptTab from '../components/forge/ConceptTab';
import FloorsTab from '../components/forge/FloorsTab';
import BestiaryTab from '../components/forge/BestiaryTab';

const DungeonForge = () => {
    const { dungeon } = useDungeonStore();
    const [activeTab, setActiveTab] = useState('concept');
    const [copied, setCopied] = useState(false);

    // --- THE ETHEREAL TRANSFER (Copy Logic) ---
    const handleCopyJSON = async () => {
        // 1. Serialize the Dungeon State
        const jsonString = JSON.stringify(dungeon, null, 2);

        try {
            // 2. Write to System Clipboard
            await navigator.clipboard.writeText(jsonString);

            // 3. Trigger Visual Feedback
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2s
        } catch (err) {
            console.error('Failed to copy dungeon JSON:', err);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white selection:bg-rysing-gold/30 font-sans">
            {/* --- HEADER --- */}
            <header className="border-b border-white/10 bg-[#050505] sticky top-0 z-50 backdrop-blur-md bg-opacity-80">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link to="/" className="text-gray-500 hover:text-white transition-colors">
                            <ChevronLeft size={20} />
                        </Link>
                        <h1 className="text-xl font-bold tracking-tight text-white">
                            Dungeon Forge <span className="text-gray-600 font-normal">/ {dungeon.name || 'Untitled'}</span>
                        </h1>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* THE NEW COPY BUTTON */}
                        <button
                            onClick={handleCopyJSON}
                            className={`
                                flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-all border
                                ${copied
                                ? 'bg-green-500/10 border-green-500 text-green-400'
                                : 'bg-rysing-gold/10 border-rysing-gold text-rysing-gold hover:bg-rysing-gold/20'}
                            `}
                        >
                            {copied ? <Check size={16} /> : <Copy size={16} />}
                            {copied ? 'COPIED!' : 'COPY JSON'}
                        </button>
                    </div>
                </div>

                {/* --- TABS --- */}
                <div className="max-w-7xl mx-auto px-6 flex gap-8 text-sm font-medium mt-2">
                    <button
                        onClick={() => setActiveTab('concept')}
                        className={`pb-3 border-b-2 flex items-center gap-2 transition-colors ${activeTab === 'concept' ? 'border-rysing-gold text-white' : 'border-transparent text-gray-500 hover:text-gray-300'}`}
                    >
                        <Settings size={14} /> Concept
                    </button>
                    <button
                        onClick={() => setActiveTab('floors')}
                        className={`pb-3 border-b-2 flex items-center gap-2 transition-colors ${activeTab === 'floors' ? 'border-rysing-gold text-white' : 'border-transparent text-gray-500 hover:text-gray-300'}`}
                    >
                        <Layers size={14} /> Floors & Timeline
                    </button>
                    <button
                        onClick={() => setActiveTab('bestiary')}
                        className={`pb-3 border-b-2 flex items-center gap-2 transition-colors ${activeTab === 'bestiary' ? 'border-rysing-gold text-white' : 'border-transparent text-gray-500 hover:text-gray-300'}`}
                    >
                        <Ghost size={14} /> Bestiary
                    </button>
                </div>
            </header>

            {/* --- MAIN CONTENT --- */}
            <main className="max-w-7xl mx-auto px-6 py-8">
                {activeTab === 'concept' && <ConceptTab />}
                {activeTab === 'floors' && <FloorsTab />}
                {activeTab === 'bestiary' && <BestiaryTab />}
            </main>
        </div>
    );
};

export default DungeonForge;