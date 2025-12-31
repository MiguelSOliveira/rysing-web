import React from 'react';
import { useDungeonStore } from '../../store/useDungeonStore';
import { Plus, Trash2, Ghost } from 'lucide-react';
import CharacterEditor from './CharacterEditor';
import { NPCAssetID } from '../../lib/generated_constants';

const BestiaryTab = () => {
    const dungeon = useDungeonStore((state) => state.dungeon);
    const { addEnemy, updateEnemy, removeEnemy } = useDungeonStore();

    const handleAddCharacter = () => {
        const count = dungeon.enemies.length;
        const newId = `${dungeon.id}_char${count}_${Math.random().toString(36).substr(2, 4)}`;

        // We initialize with the first available asset to prevent empty states
        const defaultAsset = NPCAssetID[0] || 'char_1';

        addEnemy({
            id: newId,
            name: "New Entity",
            role: "Antagonist", // Default role
            assetID: defaultAsset,
            dialogueVoice: "Stoic",
            enemyDescription: "A formidable obstacle.",
            deathDescription: "The obstacle fades away."
        });
    };

    return (
        <div className="space-y-12 pb-20 animate-fade-in">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-white">The Cast</h2>
                    <p className="text-gray-500 text-sm mt-1">
                        Define the Mentors, Enemies, and Allies in this story.
                    </p>
                </div>
                <button
                    onClick={handleAddCharacter}
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded text-white text-sm font-bold transition-colors border border-white/5 hover:border-white/20"
                >
                    <Plus size={16} /> Add Character
                </button>
            </div>

            {/* Character List */}
            <div className="space-y-8">
                {dungeon.enemies.length === 0 && (
                    <div className="border-2 border-dashed border-white/5 rounded-xl p-12 text-center">
                        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Ghost size={32} className="text-gray-600" />
                        </div>
                        <h3 className="text-gray-300 font-bold">No Characters Defined</h3>
                        <p className="text-gray-500 text-sm mt-2">The story has no actors. Add one to begin.</p>
                    </div>
                )}

                {dungeon.enemies.map((char) => (
                    <div key={char.id} className="bg-[#141414] border border-white/10 rounded-xl overflow-hidden group hover:border-rysing-gold/30 transition-all duration-300">
                        {/* Toolbar (Delete) */}
                        <div className="bg-[#0A0A0A] px-4 py-2 border-b border-white/5 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-mono text-gray-600 uppercase">ID: {char.id}</span>
                            </div>
                            <button
                                onClick={() => removeEnemy(char.id)}
                                className="text-gray-600 hover:text-red-500 transition-colors p-1"
                                title="Delete Character"
                            >
                                <Trash2 size={14} />
                            </button>
                        </div>

                        {/* The Editor */}
                        <div className="p-6">
                            <CharacterEditor
                                character={char}
                                onChange={(updates) => updateEnemy(char.id, updates)}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestiaryTab;