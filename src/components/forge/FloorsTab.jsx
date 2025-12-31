import React, { useState } from 'react';
import { useDungeonStore } from '../../store/useDungeonStore';
import { Plus, Trash2, MessageSquare, Zap, ChevronDown, ChevronUp, X, Settings, Play, CheckCircle2, Repeat, Smile } from 'lucide-react';
import { ActionTypes } from '../../lib/generated_constants';

// --- THE MIRROR (Mobile Preview) ---
const ActionPreview = ({ action }) => {
    const config = action.configData || {};
    const type = action.actionType;

    return (
        <div className="w-[280px] h-[540px] bg-[#050505] rounded-[36px] border-[6px] border-[#1a1a1a] relative overflow-hidden shadow-2xl shrink-0 flex flex-col select-none ring-1 ring-white/5 ml-6">
            {/* Gloss Reflection */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/5 via-transparent to-transparent pointer-events-none z-30 opacity-50"></div>

            {/* Dynamic Island */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-40"></div>

            {/* Status Bar */}
            <div className="h-10 w-full z-20 flex justify-between items-end px-6 pb-1">
                <span className="text-[10px] text-white font-medium">9:41</span>
                <div className="flex gap-1">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
            </div>

            {/* Content Container */}
            <div className="flex-1 p-5 flex flex-col relative overflow-y-auto scrollbar-hide">
                {/* Wallpaper */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-[#050505] to-black pointer-events-none"></div>

                <div className="relative z-10 space-y-6 mt-2">
                    {/* The Prompt Bubble */}
                    <div className="bg-[#1A1A1A] p-4 rounded-2xl rounded-tl-none border border-white/5 shadow-lg">
                        <p className="text-xs text-gray-200 leading-relaxed font-medium">
                            {action.prompt || "Action prompt..."}
                        </p>
                    </div>

                    {/* --- WIDGETS --- */}

                    {type === 'textInput' && (
                        <div className="relative group">
                            <textarea
                                className="w-full bg-[#0F0F0F] border border-white/10 rounded-xl p-3 text-xs text-white placeholder-gray-600 outline-none focus:border-rysing-gold/50 transition-colors resize-none"
                                placeholder={config.placeholderText || "Type here..."}
                                rows={3} readOnly
                            />
                            <div className="absolute bottom-2 right-2 w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">
                                <div className="w-3 h-3 border-t-2 border-r-2 border-white rotate-45 transform -translate-x-0.5"></div>
                            </div>
                        </div>
                    )}

                    {type === 'timedCommitment' && (
                        <div className="flex flex-col items-center justify-center py-4 space-y-3">
                            <div className="w-28 h-28 rounded-full border border-white/10 flex items-center justify-center relative bg-white/5">
                                <div className="absolute inset-0 border-2 border-rysing-gold border-t-transparent rounded-full animate-spin-slow opacity-80"></div>
                                <div className="text-center">
                                    <span className="block text-2xl font-bold text-white tracking-tighter">{config.duration || 15}:00</span>
                                </div>
                            </div>
                            <button className="flex items-center gap-2 px-6 py-2 bg-rysing-gold text-black font-bold rounded-full text-[10px] uppercase tracking-wider hover:bg-white transition-colors">
                                <Play size={10} fill="currentColor" /> Start Focus
                            </button>
                            {config.successMessage && <span className="text-[9px] text-green-500">{config.successMessage}</span>}
                        </div>
                    )}

                    {(type === 'radioButtonChoices' || type === 'checkboxButtonChoices') && (
                        <div className="space-y-2">
                            {config.options?.map((opt, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-3 bg-[#111] border border-white/5 rounded-xl active:scale-95 transition-transform">
                                    <div className={`w-4 h-4 rounded-full border ${idx === 0 ? 'border-rysing-gold bg-rysing-gold/20' : 'border-gray-600'}`}></div>
                                    <span className="text-xs text-gray-300 font-medium">{opt.text || "Option"}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    {type === 'dialogChoice' && (
                        <div className="space-y-2">
                            {config.choices?.map((choice, idx) => (
                                <button key={idx} className="w-full text-left p-3 bg-white/5 border border-white/5 rounded-xl text-xs text-rysing-gold font-bold hover:bg-white/10 transition-colors">
                                    {choice.text || "Choice"}
                                </button>
                            ))}
                        </div>
                    )}

                    {type === 'checkIn' && (
                        <div className="space-y-4 text-center">
                            <h4 className="text-white font-serif text-sm italic">{config.title || "How are you?"}</h4>
                            <div className="flex flex-wrap justify-center gap-3">
                                {(config.options || []).length === 0 && <div className="text-[9px] text-gray-600 italic">No moods</div>}
                                {config.options?.map((opt, idx) => (
                                    <div key={idx} className="flex flex-col items-center gap-1">
                                        <button className="w-8 h-8 bg-[#222] rounded-full border border-white/10 flex items-center justify-center text-sm hover:scale-110 transition-transform shadow-lg">
                                            {opt.value || '😐'}
                                        </button>
                                        <span className="text-[8px] text-gray-500 uppercase tracking-wide">{opt.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {type === 'habitTracker' && (
                        <div className="bg-[#111] border border-white/10 rounded-2xl p-4 flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-blue-900/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                                <Repeat size={18} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-white">{config.habitName || "Habit Name"}</h4>
                                <span className="text-[9px] text-gray-500 uppercase tracking-widest">Mark Complete</span>
                            </div>
                            <div className="ml-auto w-6 h-6 border-2 border-white/20 rounded-full"></div>
                        </div>
                    )}

                    {type === 'progressTracker' && (
                        <div className="space-y-3 p-4 bg-[#111] rounded-2xl border border-white/5">
                            <div className="flex justify-between items-end">
                                <span className="text-2xl font-bold text-white">0</span>
                                <span className="text-[10px] text-gray-500 uppercase">{config.units || "units"}</span>
                            </div>
                            <div className="h-1.5 w-full bg-black rounded-full overflow-hidden">
                                <div className="h-full bg-rysing-gold w-1/3"></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Home Indicator */}
            <div className="h-5 w-full flex justify-center items-center">
                <div className="w-24 h-1 bg-white/20 rounded-full"></div>
            </div>
        </div>
    );
};

// --- MODERNIZED CONFIG COMPONENTS ---

const InputField = ({ label, value, onChange, placeholder, type = "text", className = "" }) => (
    <div className={`space-y-1 ${className}`}>
        {label && <label className="text-[9px] uppercase tracking-widest text-gray-500 font-semibold">{label}</label>}
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full bg-transparent border-b border-white/10 py-1.5 text-xs text-white placeholder-gray-700 outline-none focus:border-rysing-gold transition-colors font-medium"
        />
    </div>
);

const ModernWrapper = ({ children, title }) => (
    <div className="p-4 bg-white/[0.02] rounded-xl border border-white/5">
        <div className="flex items-center gap-2 mb-4">
            <Settings size={12} className="text-rysing-gold opacity-50"/>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{title} Config</span>
        </div>
        {children}
    </div>
);

// --- SPECIFIC EDITORS ---

const OptionsConfigEditor = ({ config, onChange, isRadio }) => {
    const options = config.options || [];
    return (
        <div className="space-y-4">
            <div className="flex gap-4">
                <InputField label="Min Selection" type="number" value={config.minSelection ?? (isRadio ? 1 : 0)} onChange={(e) => onChange({ ...config, minSelection: parseInt(e.target.value) })} className="w-1/2" />
                <InputField label="Max Selection" type="number" value={config.maxSelection ?? 1} onChange={(e) => onChange({ ...config, maxSelection: parseInt(e.target.value) })} className="w-1/2" />
            </div>

            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <span className="text-[9px] uppercase tracking-widest text-gray-500 font-semibold">Options</span>
                    <button onClick={() => onChange({ ...config, options: [...options, { id: `opt_${options.length}`, text: '' }] })} className="text-[10px] text-rysing-gold hover:text-white transition-colors flex items-center gap-1"><Plus size={10}/> Add</button>
                </div>
                {options.map((opt, idx) => (
                    <div key={idx} className="flex gap-2 items-center group">
                        <input value={opt.id} onChange={(e) => {const n=[...options]; n[idx].id=e.target.value; onChange({...config, options:n})}} className="w-16 bg-transparent border-b border-white/10 py-1 text-[10px] text-gray-500 font-mono text-center focus:border-white/30 outline-none" placeholder="ID"/>
                        <input value={opt.text} onChange={(e) => {const n=[...options]; n[idx].text=e.target.value; onChange({...config, options:n})}} className="flex-1 bg-transparent border-b border-white/10 py-1 text-xs text-white focus:border-rysing-gold outline-none" placeholder="Option Label"/>
                        <button onClick={() => onChange({ ...config, options: options.filter((_, i) => i !== idx) })} className="text-gray-700 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"><X size={12}/></button>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ChoicesConfigEditor = ({ config, onChange }) => {
    const choices = config.choices || [];
    return (
        <div className="space-y-3">
            <div className="flex justify-between items-center">
                <span className="text-[9px] uppercase tracking-widest text-gray-500 font-semibold">Decisions</span>
                <button onClick={() => onChange({ ...config, choices: [...choices, { id: `c_${choices.length}`, text: '', value: '', feedbackMessage: '' }] })} className="text-[10px] text-rysing-gold hover:text-white transition-colors flex items-center gap-1"><Plus size={10}/> Add</button>
            </div>
            {choices.map((c, idx) => (
                <div key={idx} className="bg-black/40 p-3 rounded-lg border border-white/5 space-y-2 group">
                    <div className="flex gap-2">
                        <input value={c.text} onChange={(e) => {const n=[...choices]; n[idx].text=e.target.value; onChange({...config, choices:n})}} className="flex-1 bg-transparent border-b border-white/10 text-xs text-white font-medium focus:border-rysing-gold outline-none" placeholder="Button Text"/>
                        <button onClick={() => onChange({ ...config, choices: choices.filter((_, i) => i !== idx) })} className="text-gray-600 hover:text-red-500"><X size={12}/></button>
                    </div>
                    <input value={c.feedbackMessage || ''} onChange={(e) => {const n=[...choices]; n[idx].feedbackMessage=e.target.value; onChange({...config, choices:n})}} className="w-full bg-transparent border-none text-[10px] text-gray-400 italic" placeholder="Feedback Message (after clicking)"/>
                    <div className="flex gap-2 pt-1">
                        <input value={c.id} onChange={(e) => {const n=[...choices]; n[idx].id=e.target.value; onChange({...config, choices:n})}} className="w-1/3 bg-transparent border-none text-[10px] text-gray-500 font-mono" placeholder="ID"/>
                        <input value={c.value} onChange={(e) => {const n=[...choices]; n[idx].value=e.target.value; onChange({...config, choices:n})}} className="flex-1 bg-transparent border-none text-[10px] text-blue-400 font-mono text-right" placeholder="Internal Value"/>
                    </div>
                </div>
            ))}
        </div>
    )
}

const CheckInConfigEditor = ({ config, onChange }) => {
    const options = config.options || [];
    return (
        <div className="space-y-2">
            <div className="flex justify-between items-center">
                <span className="text-[9px] uppercase tracking-widest text-gray-500 font-semibold">Moods</span>
                <button onClick={() => onChange({ ...config, options: [...options, { id: `chk_${options.length}`, value: '😐', label: '' }] })} className="text-[10px] text-rysing-gold hover:text-white transition-colors flex items-center gap-1"><Plus size={10}/> Add</button>
            </div>
            {options.map((opt, idx) => (
                <div key={idx} className="flex gap-2 items-center">
                    <input
                        value={opt.value}
                        onChange={(e) => {const n=[...options]; n[idx].value=e.target.value; onChange({...config, options:n})}}
                        className="w-10 text-center bg-transparent border-b border-white/10 py-1 text-sm focus:border-white/30 outline-none"
                        placeholder="😐"
                    />
                    <input
                        value={opt.label}
                        onChange={(e) => {const n=[...options]; n[idx].label=e.target.value; onChange({...config, options:n})}}
                        className="flex-1 bg-transparent border-b border-white/10 py-1 text-xs text-white focus:border-rysing-gold outline-none"
                        placeholder="Label"
                    />
                    <button onClick={() => onChange({ ...config, options: options.filter((_, i) => i !== idx) })} className="text-gray-700 hover:text-red-500 transition-colors"><X size={12}/></button>
                </div>
            ))}
        </div>
    )
}


// --- MAIN CONFIG SWITCHER ---
const ActionConfigEditor = ({ action, onChange }) => {
    const config = action.configData || {};
    const update = (newC) => onChange(newC);

    switch (action.actionType) {
        case 'textInput':
            return <ModernWrapper title="Input"><InputField label="Placeholder" value={config.placeholderText || ''} onChange={(e) => update({ ...config, placeholderText: e.target.value })} /></ModernWrapper>;

        case 'timedCommitment':
            return <ModernWrapper title="Timer">
                <div className="flex gap-4 mb-2">
                    <InputField label="Duration (Min)" type="number" value={config.duration || ''} onChange={(e) => update({ ...config, duration: parseInt(e.target.value) })} className="w-1/2" />
                    <InputField label="Label" value={config.timerLabel || ''} onChange={(e) => update({ ...config, timerLabel: e.target.value })} className="w-1/2" />
                </div>
                <InputField label="Success Message" value={config.successMessage || ''} onChange={(e) => update({ ...config, successMessage: e.target.value })} className="text-green-400" />
            </ModernWrapper>;

        case 'radioButtonChoices':
        case 'checkboxButtonChoices':
            return <ModernWrapper title="Selection"><OptionsConfigEditor config={config} onChange={update} isRadio={action.actionType.startsWith('radio')} /></ModernWrapper>;

        case 'dialogChoice':
            return <ModernWrapper title="Dialogue"><ChoicesConfigEditor config={config} onChange={update} /></ModernWrapper>;

        case 'progressTracker':
            return <ModernWrapper title="Tracker">
                <div className="flex gap-4 mb-2">
                    <InputField label="Goal" type="number" value={config.goal || ''} onChange={(e) => update({ ...config, goal: parseInt(e.target.value) })} className="w-1/2" />
                    <InputField label="Units" value={config.units || ''} onChange={(e) => update({ ...config, units: e.target.value })} className="w-1/2" />
                </div>
                <InputField label="Prompt" value={config.inputPrompt || ''} onChange={(e) => update({ ...config, inputPrompt: e.target.value })} />
            </ModernWrapper>;

        case 'checkIn':
            return <ModernWrapper title="Check-In">
                <InputField label="Title" value={config.title || ''} onChange={(e) => update({ ...config, title: e.target.value })} className="mb-3" />
                <CheckInConfigEditor config={config} onChange={update} />
            </ModernWrapper>;

        case 'habitTracker':
            return <ModernWrapper title="Habit">
                <InputField label="Habit Name" value={config.habitName || ''} onChange={(e) => update({ ...config, habitName: e.target.value })} className="mb-2" />
                <InputField label="Icon (SF Symbol)" value={config.icon || ''} onChange={(e) => update({ ...config, icon: e.target.value })} className="font-mono text-gray-400" />
            </ModernWrapper>;

        default:
            return (
                <div className="p-3 bg-white/[0.02] border border-white/5 border-dashed rounded text-center">
                    <span className="text-[10px] text-gray-600">No editor for {action.actionType}</span>
                </div>
            );
    }
};

// --- MAIN FLOOR TAB COMPONENT ---

const FloorsTab = () => {
    const dungeon = useDungeonStore((state) => state.dungeon);
    const { addFloor, removeFloor, updateFloor, addScene, updateScene, removeScene, addAction, updateAction, removeAction } = useDungeonStore();
    const [openDropdownId, setOpenDropdownId] = useState(null);

    return (
        <div className="space-y-16 pb-32 animate-fade-in max-w-5xl mx-auto">

            {/* --- HEADER --- */}
            <div className="flex justify-between items-end border-b border-white/10 pb-6">
                <div>
                    <h2 className="text-3xl font-bold text-white tracking-tight">Timeline</h2>
                    <p className="text-gray-500 text-sm mt-1">Design the chronological flow of the experience.</p>
                </div>
                <button onClick={addFloor} className="flex items-center gap-2 bg-white text-black hover:bg-rysing-gold transition-colors px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-white/5">
                    <Plus size={16} /> New Floor
                </button>
            </div>

            <div className="space-y-12">
                {dungeon.floors.map((floor, floorIndex) => (
                    <div key={floor.id} className="relative group">

                        {/* Floor Label (Floating Left) */}
                        <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/5 to-transparent hidden md:block"></div>
                        <div className="absolute -left-[3.25rem] top-6 w-8 h-8 rounded-full bg-[#111] border border-white/20 flex items-center justify-center text-[10px] font-mono text-gray-400 z-10 hidden md:flex">
                            {floorIndex}
                        </div>

                        {/* Floor Container (NOW WITHOUT OVERFLOW-HIDDEN) */}
                        <div className="bg-[#0A0A0A] rounded-3xl border border-white/5 shadow-2xl ring-1 ring-white/[0.02]">

                            {/* Floor Header (Rounded Top Manually) */}
                            <div className="bg-gradient-to-r from-white/[0.03] to-transparent p-6 border-b border-white/5 flex justify-between items-start rounded-t-[24px]">
                                <div className="space-y-1 flex-1">
                                    <input
                                        type="text"
                                        value={floor.name}
                                        onChange={(e) => updateFloor(floor.id, { name: e.target.value })}
                                        className="bg-transparent text-2xl font-bold text-white outline-none placeholder-gray-700 w-full"
                                        placeholder="Floor Name"
                                    />
                                    <input
                                        type="text"
                                        value={floor.objective}
                                        onChange={(e) => updateFloor(floor.id, { objective: e.target.value })}
                                        className="bg-transparent text-gray-500 text-sm outline-none w-full"
                                        placeholder="Describe the objective..."
                                    />
                                </div>
                                <div className="flex items-center gap-4">
                                    <select
                                        value={floor.enemyId}
                                        onChange={(e) => updateFloor(floor.id, { enemyId: e.target.value })}
                                        className="bg-[#111] border border-white/10 rounded-lg px-3 py-1.5 text-gray-400 text-xs outline-none focus:border-rysing-gold hover:bg-white/5 transition-colors appearance-none cursor-pointer"
                                    >
                                        <option value="">No Enemy</option>
                                        {dungeon.enemies.map(e => <option key={e.id} value={e.id}>{e.name}</option>)}
                                    </select>
                                    <button onClick={() => removeFloor(floor.id)} className="text-gray-600 hover:text-red-500 transition-colors">
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>

                            {/* Timeline Stream (Rounded Bottom Manually) */}
                            <div className="p-8 bg-[#050505] relative min-h-[150px] rounded-b-[24px]">
                                {/* The Spine */}
                                <div className="absolute left-[2.25rem] top-0 bottom-0 w-px bg-white/5 border-l border-dashed border-white/10"></div>

                                <div className="space-y-8">
                                    {[...floor.scenes.map(s => ({...s, _type: 'scene'})), ...floor.actions.map(a => ({...a, _type: 'action'}))]
                                        .sort((a, b) => a.order - b.order)
                                        .map((item) => (
                                            <div key={item.id} className="relative pl-16">

                                                {/* Node Icon */}
                                                <div className={`absolute left-[1.35rem] top-0 w-7 h-7 rounded-full flex items-center justify-center border-[3px] border-[#050505] z-10 
                                                    ${item._type === 'scene' ? 'bg-blue-900/50 text-blue-400' : 'bg-rysing-gold text-black'}`}>
                                                    {item._type === 'scene' ? <MessageSquare size={12} /> : <Zap size={12} fill="currentColor" />}
                                                </div>

                                                {/* Card Content */}
                                                <div className="bg-[#111] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all group/card shadow-lg">

                                                    {/* Header Row */}
                                                    <div className="flex justify-between items-start mb-4">
                                                        <div className="flex items-center gap-3">
                                                            <span className={`text-[9px] uppercase tracking-widest font-bold px-2 py-1 rounded-md ${
                                                                item._type === 'scene' ? 'bg-blue-500/10 text-blue-400' : 'bg-rysing-gold/10 text-rysing-gold'
                                                            }`}>
                                                                {item._type === 'scene' ? item.sceneIntroOutro : 'Action'}
                                                            </span>
                                                            {item._type === 'action' && (
                                                                <select
                                                                    value={item.actionType}
                                                                    onChange={(e) => updateAction(floor.id, item.id, { actionType: e.target.value, configData: {} })}
                                                                    className="bg-transparent text-[10px] text-gray-400 uppercase tracking-wider outline-none cursor-pointer hover:text-white"
                                                                >
                                                                    {ActionTypes.map(t => <option key={t} value={t}>{t}</option>)}
                                                                </select>
                                                            )}
                                                        </div>
                                                        <button
                                                            onClick={() => item._type === 'scene' ? removeScene(floor.id, item.id) : removeAction(floor.id, item.id)}
                                                            className="text-gray-700 hover:text-red-500 opacity-0 group-hover/card:opacity-100 transition-opacity"
                                                        >
                                                            <X size={14} />
                                                        </button>
                                                    </div>

                                                    {/* Editor Body */}
                                                    {item._type === 'scene' ? (
                                                        <div className="grid grid-cols-[120px_1fr] gap-6">
                                                            <div className="space-y-1">
                                                                <label className="text-[9px] uppercase tracking-widest text-gray-600 font-semibold">Speaker</label>
                                                                <input
                                                                    value={item.speaker}
                                                                    onChange={(e) => updateScene(floor.id, item.id, { speaker: e.target.value })}
                                                                    className="w-full bg-transparent border-b border-white/10 py-1 text-xs text-blue-200 font-bold outline-none focus:border-blue-500 transition-colors"
                                                                    placeholder="Name"
                                                                />
                                                            </div>
                                                            <div className="space-y-1">
                                                                <label className="text-[9px] uppercase tracking-widest text-gray-600 font-semibold">Dialogue</label>
                                                                <textarea
                                                                    value={item.content}
                                                                    onChange={(e) => updateScene(floor.id, item.id, { content: e.target.value })}
                                                                    className="w-full bg-transparent border-b border-white/10 py-1 text-sm text-gray-300 outline-none focus:border-blue-500 transition-colors resize-none"
                                                                    rows={1}
                                                                    placeholder="..."
                                                                />
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div className="flex flex-col lg:flex-row gap-8">
                                                            {/* Left: Configuration */}
                                                            <div className="flex-1 space-y-5">
                                                                <div className="space-y-1">
                                                                    <label className="text-[9px] uppercase tracking-widest text-gray-600 font-semibold">Prompt</label>
                                                                    <textarea
                                                                        value={item.prompt}
                                                                        onChange={(e) => updateAction(floor.id, item.id, { prompt: e.target.value })}
                                                                        className="w-full bg-transparent border-b border-white/10 py-1 text-sm text-white font-medium outline-none focus:border-rysing-gold transition-colors resize-none"
                                                                        rows={2}
                                                                        placeholder="What should the user do?"
                                                                    />
                                                                </div>

                                                                <div className="flex gap-6">
                                                                    <InputField label="Output Var" value={item.outputTarget || ''} onChange={(e) => updateAction(floor.id, item.id, { outputTarget: e.target.value })} placeholder="variableName" className="flex-1" />
                                                                    <div className="space-y-1 w-1/3">
                                                                        <label className="text-[9px] uppercase tracking-widest text-gray-600 font-semibold">Effort</label>
                                                                        <select
                                                                            value={item.effortTier}
                                                                            onChange={(e) => updateAction(floor.id, item.id, { effortTier: e.target.value })}
                                                                            className="w-full bg-transparent border-b border-white/10 py-1.5 text-xs text-white outline-none cursor-pointer"
                                                                        >
                                                                            <option value="low">Low</option>
                                                                            <option value="moderate">Moderate</option>
                                                                            <option value="high">High</option>
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <ActionConfigEditor action={item} onChange={(newConfig) => updateAction(floor.id, item.id, { configData: newConfig })} />
                                                            </div>

                                                            {/* Right: The Mirror */}
                                                            <ActionPreview action={item} />
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>

                                {/* ADD BUTTONS (Floating below timeline) */}
                                <div className="mt-12 pl-16 flex gap-3 relative z-20">
                                    <div className="relative">
                                        {/* SCENE BUTTON */}
                                        <button
                                            onClick={() => setOpenDropdownId(openDropdownId === floor.id ? null : floor.id)}
                                            className="px-4 py-2 rounded-lg bg-[#111] border border-white/10 text-xs text-gray-400 font-bold hover:bg-white/5 hover:text-white transition-all flex items-center gap-2"
                                        >
                                            <MessageSquare size={14} /> Scene
                                            {openDropdownId === floor.id ? <ChevronDown size={12} className="rotate-180 transition-transform"/> : <ChevronDown size={12} className="transition-transform"/>}
                                        </button>

                                        {/* DROPDOWN MENU (Now opens UPWARDS + No Overflow Clipping) */}
                                        {openDropdownId === floor.id && (
                                            <div className="absolute bottom-full left-0 mb-2 w-40 bg-[#1A1A1A] border border-white/10 rounded-lg shadow-2xl overflow-hidden flex flex-col z-50 animate-fade-in ring-1 ring-white/10">
                                                {['intro', 'event', 'outro'].map(t => (
                                                    <button key={t} onClick={() => {addScene(floor.id, t); setOpenDropdownId(null)}} className="text-left px-4 py-3 text-[10px] uppercase tracking-wider text-gray-300 hover:bg-white/10 hover:text-white border-b border-white/5 last:border-0 flex items-center gap-2">
                                                        <div className={`w-1.5 h-1.5 rounded-full ${t === 'intro' ? 'bg-green-500' : t === 'outro' ? 'bg-red-500' : 'bg-blue-500'}`}></div>
                                                        {t}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    <button
                                        onClick={() => addAction(floor.id)}
                                        className="px-4 py-2 rounded-lg bg-[#111] border border-rysing-gold/30 text-xs text-rysing-gold font-bold hover:bg-rysing-gold hover:text-black transition-all flex items-center gap-2 shadow-[0_0_15px_-5px_rgba(255,149,0,0.3)]"
                                    >
                                        <Zap size={14} fill="currentColor" /> Action
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FloorsTab;