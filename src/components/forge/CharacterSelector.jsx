import React from 'react';
import { Check } from 'lucide-react';
import { NPCAssetID } from '../../lib/generated_constants';

// Utility for clean class merging (standard in most React setups, or use template literals)
const cn = (...classes) => classes.filter(Boolean).join(" ");

const CharacterSelector = ({ selectedID, onSelect }) => {
    const basePath = import.meta.env.BASE_URL;

    return (
        <div className="space-y-3">
            <div className="flex items-center justify-between">
                <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                    Visual Avatar
                </label>
                <span className="text-[10px] text-neutral-600">
          {NPCAssetID.length} Assets Available
        </span>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {NPCAssetID.map((assetId) => {
                    const isSelected = selectedID === assetId;

                    return (
                        <button
                            key={assetId}
                            onClick={() => onSelect(assetId)}
                            className={cn(
                                "group relative aspect-square overflow-hidden rounded-lg border bg-neutral-900 transition-all duration-300",
                                isSelected
                                    ? "border-rysing-gold ring-1 ring-rysing-gold/50 shadow-[0_0_15px_rgba(255,149,0,0.2)]"
                                    : "border-white/10 hover:border-white/30 hover:bg-neutral-800"
                            )}
                        >
                            {/* Image Render */}
                            <div className="absolute inset-0 p-2 flex items-center justify-center">
                                {/* Assumes files are in public/assets/sprites/ */}
                                <img
                                    src={`${basePath}assets/sprites/${assetId}.png`}
                                    alt={assetId}
                                    className={cn(
                                        "max-h-full max-w-full object-contain transition-transform duration-500",
                                        isSelected ? "scale-110" : "group-hover:scale-105 opacity-70 group-hover:opacity-100"
                                    )}
                                    onError={(e) => {
                                        e.target.style.display = 'none'; // Hide broken images
                                    }}
                                />
                            </div>

                            {/* Selection Indicator */}
                            {isSelected && (
                                <div className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-rysing-gold text-black shadow-sm">
                                    <Check size={10} strokeWidth={3} />
                                </div>
                            )}

                            {/* Liquid Gradient Overlay (Bottom) */}
                            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent opacity-50" />
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default CharacterSelector;