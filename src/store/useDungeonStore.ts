import {create} from 'zustand';
import {produce} from 'immer';
import {DungeonAction, DungeonEnemy, DungeonFloor, DungeonScene, DungeonTemplate} from '../lib/dungeonSchema';

interface DungeonStore {
    dungeon: DungeonTemplate;

    // Meta
    updateMeta: (updates: Partial<DungeonTemplate>) => void;

    // Enemies
    addEnemy: (enemy: DungeonEnemy) => void;
    updateEnemy: (id: string, updates: Partial<DungeonEnemy>) => void;
    removeEnemy: (id: string) => void;

    // Floors
    addFloor: () => void;
    updateFloor: (floorId: string, updates: Partial<DungeonFloor>) => void;
    removeFloor: (floorId: string) => void;
    reorderFloors: (dragIndex: number, hoverIndex: number) => void;

    // Content (Scenes/Actions)
    addScene: (floorId: string, type: 'intro' | 'outro' | 'event') => void;
    updateScene: (floorId: string, sceneId: string, updates: Partial<DungeonScene>) => void;
    removeScene: (floorId: string, sceneId: string) => void;

    addAction: (floorId: string) => void;
    updateAction: (floorId: string, actionId: string, updates: Partial<DungeonAction>) => void;
    removeAction: (floorId: string, actionId: string) => void;

    // Export
    getJSON: () => string;
}

const INITIAL_DUNGEON: DungeonTemplate = {
    id: "new_dungeon_v1",
    templateVersion: "1.0.0",
    name: "New Dungeon",
    narrative: "",
    objective: "",
    icon: "shield.fill",
    difficulty: 1,
    themeName: "forge",
    dungeonType: "ReclaimPursuit",
    enemies: [],
    floors: []
};

// Helper to calculate the next strictly incremental order
const getNextOrder = (floor: any) => {
    const allItems = [...floor.scenes, ...floor.actions];
    if (allItems.length === 0) return 0;
    const maxOrder = allItems.reduce((max, item) => Math.max(max, item.order), -1);
    return maxOrder + 1;
};

export const useDungeonStore = create<DungeonStore>((set, get) => ({
    dungeon: INITIAL_DUNGEON,

    updateMeta: (updates) => set(produce((state) => {
        Object.assign(state.dungeon, updates);
    })),

    // --- Enemy Logic ---
    addEnemy: (enemy) => set(produce((state) => {
        state.dungeon.enemies.push(enemy);
    })),

    updateEnemy: (id, updates) => set(produce((state) => {
        const enemy = state.dungeon.enemies.find((e: any) => e.id === id);
        if (enemy) Object.assign(enemy, updates);
    })),

    removeEnemy: (id) => set(produce((state) => {
        state.dungeon.enemies = state.dungeon.enemies.filter((e: any) => e.id !== id);
    })),

    // --- Floor Logic ---
    addFloor: () => set(produce((state) => {
        const order = state.dungeon.floors.length;
        const id = `${state.dungeon.id}_f${order}`;

        state.dungeon.floors.push({
            id,
            order,
            name: "New Floor",
            floorDescription: "",
            objective: "",
            enemyId: "",
            isBossFloor: false,
            scenes: [],
            actions: [],
            rewards: []
        });
    })),

    updateFloor: (floorId, updates) => set(produce((state) => {
        const floor = state.dungeon.floors.find((f: any) => f.id === floorId);
        if (floor) Object.assign(floor, updates);
    })),

    removeFloor: (floorId) => set(produce((state) => {
        state.dungeon.floors = state.dungeon.floors.filter((f: any) => f.id !== floorId);
    })),

    reorderFloors: (dragIndex, hoverIndex) => set(produce((state) => {
        const floors = state.dungeon.floors;
        const [removed] = floors.splice(dragIndex, 1);
        floors.splice(hoverIndex, 0, removed);
        floors.forEach((f: any, index: number) => { f.order = index; });
    })),

    // --- Scene Logic ---
    addScene: (floorId, type) => set(produce((state) => {
        const floor = state.dungeon.floors.find((f: any) => f.id === floorId);
        if (floor) {
            const id = `${floorId}_s${floor.scenes.length}_${type}`;
            // FIX: Calculate order based on global timeline max
            const nextOrder = getNextOrder(floor);

            floor.scenes.push({
                id,
                order: nextOrder,
                content: "",
                speaker: "Narrator",
                sceneType: "Dialogue",
                sceneIntroOutro: type
            });
        }
    })),

    updateScene: (floorId, sceneId, updates) => set(produce((state) => {
        const floor = state.dungeon.floors.find((f: any) => f.id === floorId);
        const scene = floor?.scenes.find((s: any) => s.id === sceneId);
        if (scene) Object.assign(scene, updates);
    })),

    removeScene: (floorId, sceneId) => set(produce((state) => {
        const floor = state.dungeon.floors.find((f: any) => f.id === floorId);
        if(floor) floor.scenes = floor.scenes.filter((s:any) => s.id !== sceneId);
    })),

    // --- Action Logic ---
    addAction: (floorId) => set(produce((state) => {
        const floor = state.dungeon.floors.find((f: any) => f.id === floorId);
        if (floor) {
            const id = `${floorId}_a${floor.actions.length}`;
            // FIX: Calculate order based on global timeline max
            const nextOrder = getNextOrder(floor);

            floor.actions.push({
                id,
                order: nextOrder,
                actionType: 'textInput',
                prompt: "",
                effortTier: "moderate",
                focus: "mind",
                configData: {}
            });
        }
    })),

    updateAction: (floorId, actionId, updates) => set(produce((state) => {
        const floor = state.dungeon.floors.find((f: any) => f.id === floorId);
        const action = floor?.actions.find((a: any) => a.id === actionId);
        if (action) Object.assign(action, updates);
    })),

    removeAction: (floorId, actionId) => set(produce((state) => {
        const floor = state.dungeon.floors.find((f: any) => f.id === floorId);
        if(floor) floor.actions = floor.actions.filter((a:any) => a.id !== actionId);
    })),

    getJSON: () => {
        return JSON.stringify(get().dungeon, null, 4);
    }
}));