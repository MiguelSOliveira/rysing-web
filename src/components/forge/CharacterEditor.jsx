import React from 'react';
import {MessageSquare, Shield, User} from 'lucide-react';
import CharacterSelector from './CharacterSelector';

const CharacterEditor = ({ character, onChange }) => {
    const basePath = import.meta.env.BASE_URL;

    return (
        <div className="flex flex-col gap-6">

            {/* Header / Preview Section */}
            <div className="flex items-start gap-4 p-4 bg-black/40 rounded-lg border border-white/5">
                <div className="shrink-0">
                    {character.assetID ? (
                        <div className="w-16 h-16 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                            <img
                                src={`${basePath}assets/sprites/${character.assetID}.png`}
                                className="h-full w-full object-contain p-1 relative z-0"
                                alt="Preview"
                            />
                        </div>
                    ) : (
                        <div className="w-16 h-16 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 border-dashed text-neutral-600">
                            <User size={24} />
                        </div>
                    )}
                </div>

                <div className="flex-1 space-y-3">
                    {/* Name Input */}
                    <div>
                        <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1 block">
                            Character Name
                        </label>
                        <input
                            type="text"
                            value={character.name || ''}
                            onChange={(e) => onChange({ name: e.target.value })}
                            placeholder="e.g. The Keeper of Lost Time"
                            className="w-full bg-transparent border-b border-white/10 py-1 text-lg font-bold text-white placeholder-neutral-700 focus:border-rysing-gold focus:outline-none transition-colors"
                        />
                    </div>

                    <div className="flex gap-4">
                        {/* Role Selector */}
                        <div className="flex-1">
                            <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1 flex items-center gap-1">
                                <Shield size={10} /> Role
                            </label>
                            <select
                                value={character.role || 'Antagonist'}
                                onChange={(e) => onChange({ role: e.target.value })}
                                className="w-full bg-neutral-900 border border-white/10 rounded px-2 py-1.5 text-xs text-white focus:border-rysing-gold focus:outline-none"
                            >
                                <option value="Antagonist">Antagonist (Enemy)</option>
                                <option value="Mentor">Mentor (Guide)</option>
                                <option value="Ally">Ally (Companion)</option>
                            </select>
                        </div>

                        {/* Voice Selector */}
                        <div className="flex-1">
                            <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1 flex items-center gap-1">
                                <MessageSquare size={10} /> Voice
                            </label>
                            <select
                                value={character.dialogueVoice || 'Stoic'}
                                onChange={(e) => onChange({ dialogueVoice: e.target.value })}
                                className="w-full bg-neutral-900 border border-white/10 rounded px-2 py-1.5 text-xs text-white focus:border-rysing-gold focus:outline-none"
                            >
                                <option value="Stoic">Stoic (Calm)</option>
                                <option value="Aggressive">Aggressive (Fast)</option>
                                <option value="Mysterious">Mysterious (Slow)</option>
                                <option value="Whisper">Whisper (Fading)</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left: The Visual Selector */}
                <div>
                    <CharacterSelector
                        selectedID={character.assetID}
                        onSelect={(id) => onChange({ assetID: id })}
                    />
                </div>

                {/* Right: The Narrative Details */}
                <div className="space-y-4">
                    <div>
                        <label className="block text-[10px] font-mono text-gray-500 uppercase mb-1">Description (Alive)</label>
                        <textarea
                            value={character.enemyDescription || ''}
                            onChange={(e) => onChange({ enemyDescription: e.target.value })}
                            className="w-full bg-black/30 border border-white/10 rounded px-3 py-2 text-gray-300 text-xs outline-none focus:border-rysing-gold/50 resize-none"
                            rows={4}
                            placeholder="What does this entity represent? (e.g. 'The fear of starting')"
                        />
                    </div>

                    <div>
                        <label className="block text-[10px] font-mono text-gray-500 uppercase mb-1">Death/Defeat Description</label>
                        <textarea
                            value={character.deathDescription || ''}
                            onChange={(e) => onChange({ deathDescription: e.target.value })}
                            className="w-full bg-black/30 border border-white/10 rounded px-3 py-2 text-gray-400 text-xs outline-none focus:border-rysing-gold/50 resize-none italic"
                            rows={3}
                            placeholder="What happens when they are overcome? (e.g. 'The fog lifts...')"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharacterEditor;