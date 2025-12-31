import { z } from 'zod';

import {
    ActionTypes,
    SceneTypes,
    SceneIntroOutro,
    EffortTiers,
    QuestFocuses,
    RewardTypes,
    NPCAssetID
} from './generated_constants';

// --- Sub-Schemas (Config Data) ---

// Matches ActionConfigurations.swift -> CheckboxOption
const CheckboxOptionSchema = z.object({
    id: z.string(),
    text: z.string(), // LocalizableString simplified to string for MVP
});

// Matches ActionConfigurations.swift -> DialogActionChoice
const DialogChoiceSchema = z.object({
    id: z.string(),
    text: z.string(),
    value: z.string(),
    requiredClass: z.string().optional(),
    feedbackMessage: z.string().optional(),
    // scenesToTriggerOnCompletion handled at Action level in some templates,
    // but config level in others. We support both for safety.
    scenesToTriggerOnCompletion: z.array(z.string()).optional(),
});

// The Mega-Config Object (Matches ActionConfigData)
const ConfigDataSchema = z.object({
    // Text Fields
    placeholderText: z.string().optional(),
    timerLabel: z.string().optional(),
    successMessage: z.string().optional(),
    failureMessage: z.string().optional(),
    promptGoal: z.string().optional(),
    buttonLabel: z.string().optional(),

    // Logic
    duration: z.number().int().optional(), // Minutes
    minSelection: z.number().int().optional(),
    maxSelection: z.number().int().optional(),

    // Arrays
    choices: z.array(DialogChoiceSchema).optional(),
    options: z.array(CheckboxOptionSchema).optional(),

    // Dictionaries
    placeholders: z.record(z.string(), z.string()).optional(), // e.g. { "[DungeonPursuitName]": "pursuitName" }
});

// --- Core Entities ---

const RewardSchema = z.object({
    id: z.string(),
    rewardType: z.enum(RewardTypes),
    name: z.string(),
    targetAttributeKey: z.string().optional(), // e.g., 'discipline'
    itemName: z.string().optional(),
    itemQuantity: z.number().optional(),
    titleName: z.string().optional(),
});

const EnemySchema = z.object({
    id: z.string(),
    name: z.string(),
    enemyDescription: z.string(),
    deathDescription: z.string(),
});

const SceneSchema = z.object({
    id: z.string(),
    order: z.number(),
    content: z.string(),
    speaker: z.string(), // e.g., "Kael"
    sceneType: z.enum(SceneTypes),
    sceneIntroOutro: z.enum(SceneIntroOutro),
});

const ActionSchema = z.object({
    id: z.string(),
    order: z.number(),
    actionType: z.enum(ActionTypes),
    prompt: z.string(),
    effortTier: z.enum(EffortTiers).optional(),
    focus: z.enum(QuestFocuses).optional(),

    // Logic
    outputTarget: z.string().optional(), // Variable name to save input to
    scenesToTriggerOnCompletion: z.array(z.string()).optional(),
    requiredCompletions: z.number().default(1),

    // The Payload
    configData: ConfigDataSchema.optional(),

    // Rewards specific to this action
    rewards: z.array(RewardSchema).optional(),
});

const FloorSchema = z.object({
    id: z.string(),
    order: z.number(),
    name: z.string(),
    floorDescription: z.string(),
    objective: z.string(),

    // Mechanics
    enemyId: z.string(), // Must match an ID in the enemies array
    isBossFloor: z.boolean().default(false),
    cadence: z.enum(['daily', 'weekly', 'once']).optional(),
    requiredCompletions: z.number().default(1),

    // Content
    scenes: z.array(SceneSchema),
    actions: z.array(ActionSchema),
    rewards: z.array(RewardSchema).optional(),
});

// --- The Master Document ---

export const DungeonSchema = z.object({
    id: z.string(), // e.g., "forge_of_will_v1"
    templateVersion: z.string().default("1.0.0"),
    name: z.string(),
    narrative: z.string(),
    objective: z.string(),
    icon: z.string(), // SF Symbol name

    difficulty: z.number().min(0).max(5),
    themeName: z.string(), // "forge", "scriptorium"
    dungeonType: z.literal("ReclaimPursuit"),

    enemies: z.array(EnemySchema),
    floors: z.array(FloorSchema),
    rewards: z.array(RewardSchema).optional(), // Dungeon completion rewards
});

export const CharacterDefinitionSchema = z.object({
    id: z.string().uuid().describe("Unique identifier for this character instance"),
    name: z.string().min(1, "Name is required").describe("The display name (e.g., 'The Keeper')"),

    // The Iron Bridge: This restricts selection to the Enum cases we exported from Swift
    assetID: z.nativeEnum(NPCAssetID).describe("The visual avatar ID"),

    role: z.enum(["Mentor", "Antagonist", "Ally"]).describe("The character's function in the story"),

    dialogueVoice: z.enum(["Stoic", "Aggressive", "Mysterious", "Whisper"])
        .default("Stoic")
        .describe("Defines the text animation style"),

    description: z.string().optional().describe("Internal notes for the creator"),
});

export type DungeonTemplate = z.infer<typeof DungeonSchema>;
export type DungeonFloor = z.infer<typeof FloorSchema>;
export type DungeonScene = z.infer<typeof SceneSchema>;
export type DungeonAction = z.infer<typeof ActionSchema>;
export type DungeonEnemy = z.infer<typeof EnemySchema>;
export type CharacterDefinition = z.infer<typeof CharacterDefinitionSchema>;