import React from 'react';
import { useDungeonStore } from '../../store/useDungeonStore';

const ConceptTab = () => {
    const dungeon = useDungeonStore((state) => state.dungeon);
    const updateMeta = useDungeonStore((state) => state.updateMeta);

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Handle number conversion for difficulty
        const val = name === 'difficulty' ? parseInt(value) : value;
        updateMeta({ [name]: val });
    };

    return (
        <div className="space-y-8 animate-fade-in">
            <div>
                <h2 className="text-2xl font-bold text-white mb-6">Dungeon Concept</h2>
                <div className="grid gap-6 bg-[#141414] p-6 rounded-xl border border-white/5">

                    {/* Basic Info */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-mono text-gray-500 mb-2 uppercase">Dungeon ID (Unique)</label>
                            <input
                                type="text" name="id" value={dungeon.id} onChange={handleChange}
                                className="w-full bg-black border border-white/10 rounded px-4 py-2 text-white focus:border-rysing-gold outline-none font-mono text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-mono text-gray-500 mb-2 uppercase">Display Name</label>
                            <input
                                type="text" name="name" value={dungeon.name} onChange={handleChange}
                                className="w-full bg-black border border-white/10 rounded px-4 py-2 text-white focus:border-rysing-gold outline-none"
                            />
                        </div>
                    </div>

                    {/* Narrative */}
                    <div>
                        <label className="block text-xs font-mono text-gray-500 mb-2 uppercase">Narrative Description</label>
                        <textarea
                            name="narrative" value={dungeon.narrative} onChange={handleChange} rows={3}
                            className="w-full bg-black border border-white/10 rounded px-4 py-2 text-white focus:border-rysing-gold outline-none text-sm"
                        />
                    </div>

                    {/* Objective */}
                    <div>
                        <label className="block text-xs font-mono text-gray-500 mb-2 uppercase">Player Objective</label>
                        <textarea
                            name="objective" value={dungeon.objective} onChange={handleChange} rows={2}
                            className="w-full bg-black border border-white/10 rounded px-4 py-2 text-white focus:border-rysing-gold outline-none text-sm"
                        />
                    </div>

                    {/* Configs */}
                    <div className="grid md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-xs font-mono text-gray-500 mb-2 uppercase">Difficulty (0-5)</label>
                            <input
                                type="number" name="difficulty" min="0" max="5" value={dungeon.difficulty} onChange={handleChange}
                                className="w-full bg-black border border-white/10 rounded px-4 py-2 text-white focus:border-rysing-gold outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-mono text-gray-500 mb-2 uppercase">Icon (SF Symbol)</label>
                            <input
                                type="text" name="icon" value={dungeon.icon} onChange={handleChange}
                                className="w-full bg-black border border-white/10 rounded px-4 py-2 text-white focus:border-rysing-gold outline-none font-mono text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-mono text-gray-500 mb-2 uppercase">Theme</label>
                            <select
                                name="themeName" value={dungeon.themeName} onChange={handleChange}
                                className="w-full bg-black border border-white/10 rounded px-4 py-2 text-white focus:border-rysing-gold outline-none text-sm"
                            >
                                <option value="forge">Forge</option>
                                <option value="scriptorium">Scriptorium</option>
                                <option value="void">Void</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConceptTab;