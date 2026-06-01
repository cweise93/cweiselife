import { ScrollSequenceManifest, SpriteSheetManifest } from '../shared/content/scroll-sprite-sequence';

export type PublishingPathStatus = 'Recent' | 'Current' | 'Next';
export type PublishingPathKind = 'Writing' | 'Framework' | 'Guide';

export interface PublishingPathItem {
  id: string;
  sceneLabel: string;
  status: PublishingPathStatus;
  kind: PublishingPathKind;
  progressStart: number;
  progressEnd: number;
  title: string;
  summary: string;
  continuity: string;
  slug: string;
}

export interface HomePublishingPath {
  eyebrow: string;
  headline: string;
  support: string;
  spritePath: string;
  sequence: ScrollSequenceManifest;
  sprite: SpriteSheetManifest;
  items: PublishingPathItem[];
}

export const HOME_PUBLISHING_PATH: HomePublishingPath = {
  eyebrow: 'Live Operating Story',
  headline: 'A running release stream in three acts.',
  support:
    'This is not a static archive. The last few weeks expose the operating problem, the current work turns it into structure, and the next releases push that structure toward governed assets and usable tools.',
  spritePath: 'assets/images/home/story-path/story_path_sprite_sheet_morph_test.webp',
  sequence: {
    total_frames: 188,
    segments: [
      {
        image: 'b_002_01.png',
        index: 0,
        hold_start_frame: 0,
        hold_end_frame: 7,
        transition_start_frame: 8,
        transition_end_frame: 19,
        next_image: 'b_002_02.png',
        scroll_progress_start: 0,
        scroll_progress_end: 0.101604
      },
      {
        image: 'b_002_02.png',
        index: 1,
        hold_start_frame: 20,
        hold_end_frame: 27,
        transition_start_frame: 28,
        transition_end_frame: 39,
        next_image: 'b_003_01.png',
        scroll_progress_start: 0.106952,
        scroll_progress_end: 0.208556
      },
      {
        image: 'b_003_01.png',
        index: 2,
        hold_start_frame: 40,
        hold_end_frame: 47,
        transition_start_frame: 48,
        transition_end_frame: 59,
        next_image: 'b_003_02.png',
        scroll_progress_start: 0.213904,
        scroll_progress_end: 0.315508
      },
      {
        image: 'b_003_02.png',
        index: 3,
        hold_start_frame: 60,
        hold_end_frame: 67,
        transition_start_frame: 68,
        transition_end_frame: 79,
        next_image: 'b_004_01.png',
        scroll_progress_start: 0.320856,
        scroll_progress_end: 0.42246
      },
      {
        image: 'b_004_01.png',
        index: 4,
        hold_start_frame: 80,
        hold_end_frame: 87,
        transition_start_frame: 88,
        transition_end_frame: 99,
        next_image: 'b_004_02.png',
        scroll_progress_start: 0.427807,
        scroll_progress_end: 0.529412
      },
      {
        image: 'b_004_02.png',
        index: 5,
        hold_start_frame: 100,
        hold_end_frame: 107,
        transition_start_frame: 108,
        transition_end_frame: 119,
        next_image: 'b_005_01.png',
        scroll_progress_start: 0.534759,
        scroll_progress_end: 0.636364
      },
      {
        image: 'b_005_01.png',
        index: 6,
        hold_start_frame: 120,
        hold_end_frame: 127,
        transition_start_frame: 128,
        transition_end_frame: 139,
        next_image: 'b_005_02.png',
        scroll_progress_start: 0.641711,
        scroll_progress_end: 0.743316
      },
      {
        image: 'b_005_02.png',
        index: 7,
        hold_start_frame: 140,
        hold_end_frame: 147,
        transition_start_frame: 148,
        transition_end_frame: 159,
        next_image: 'b_006_01.png',
        scroll_progress_start: 0.748663,
        scroll_progress_end: 0.850267
      },
      {
        image: 'b_006_01.png',
        index: 8,
        hold_start_frame: 160,
        hold_end_frame: 167,
        transition_start_frame: 168,
        transition_end_frame: 179,
        next_image: 'b_006_02.png',
        scroll_progress_start: 0.855615,
        scroll_progress_end: 0.957219
      },
      {
        image: 'b_006_02.png',
        index: 9,
        hold_start_frame: 180,
        hold_end_frame: 187,
        transition_start_frame: null,
        transition_end_frame: null,
        next_image: null,
        scroll_progress_start: 0.962567,
        scroll_progress_end: 1
      }
    ],
    source_dir: 'story_path_animation/Images',
    target_size: {
      width: 1448,
      height: 1086
    },
    fps: 24,
    frames_per_transition: 12,
    hold_frames: 8,
    frame_pattern: 'frames/frame_%04d.png',
    prefix: 'b_',
    dominant_size_only: true,
    dropped_images: ['b_001_01.png', 'b_001_02.png', 'b_007_01.png', 'b_007_02.png']
  },
  sprite: {
    sprite_sheet: 'story_path_sprite_sheet.webp',
    frame_width: 480,
    frame_height: 360,
    frame_count: 188,
    columns: 8,
    rows: 24
  },
  items: [
    {
      id: 'week-01-signal',
      sceneLabel: 'Act I · Opening diagnosis',
      status: 'Recent',
      kind: 'Writing',
      progressStart: 0,
      progressEnd: 0.112,
      title: 'Organizations Rarely Fail From a Lack of Intelligence',
      summary: 'The opening act names the real failure mode: intelligence exists, but it dies while crossing priorities, translation layers, ownership boundaries, and execution.',
      continuity: 'This is the problem statement the rest of the stream keeps working against.',
      slug: 'writing/2026/05/12/organizations-rarely-fail-from-a-lack-of-intelligence'
    },
    {
      id: 'week-02-loop',
      sceneLabel: 'Act I · Building the route',
      status: 'Recent',
      kind: 'Framework',
      progressStart: 0.112,
      progressEnd: 0.224,
      title: 'Systems Translation Loop',
      summary: 'Once the failure is named, the next move is to give intent a route that can survive the trip from strategy into workflow, systems, and validation.',
      continuity: 'This is where diagnosis starts becoming an operating path instead of commentary.',
      slug: 'frameworks/2026/03/18/systems-translation-loop'
    },
    {
      id: 'week-03-friction',
      sceneLabel: 'Act I · Exposing the drag',
      status: 'Recent',
      kind: 'Writing',
      progressStart: 0.224,
      progressEnd: 0.336,
      title: 'Why Operational Friction Hides in Translation Layers',
      summary: 'The third beat shows where the loop breaks in practice: handoffs, interface ownership, duplicated interpretation, and invisible drag.',
      continuity: 'This is the point where the hidden operating tax becomes too visible to ignore.',
      slug: 'writing/2026/04/28/why-operational-friction-hides-in-translation-layers'
    },
    {
      id: 'week-04-noise',
      sceneLabel: 'Act II · Clearing the field',
      status: 'Current',
      kind: 'Framework',
      progressStart: 0.336,
      progressEnd: 0.448,
      title: 'Turn Down the Noise',
      summary: 'The current act starts by reducing reporting clutter, weak escalation surfaces, and optics-heavy updates so decision-grade signal can actually be seen.',
      continuity: 'Before the system can carry stronger decisions, the field around it has to get quieter.',
      slug: 'frameworks/2026/04/14/turn-down-the-noise'
    },
    {
      id: 'week-05-ownership',
      sceneLabel: 'Act II · Installing ownership',
      status: 'Current',
      kind: 'Writing',
      progressStart: 0.448,
      progressEnd: 0.58,
      title: 'Executive Follow-Through Requires Ownership Architecture',
      summary: 'Follow-through becomes legible when decision rights, escalation lanes, and evidence paths are explicit enough to sustain execution.',
      continuity: 'This is where the stream stops being conceptual and starts becoming governable.',
      slug: 'writing/2026/03/31/executive-follow-through-requires-ownership-architecture'
    },
    {
      id: 'week-06-agents',
      sceneLabel: 'Act II · Reframing the asset',
      status: 'Current',
      kind: 'Writing',
      progressStart: 0.58,
      progressEnd: 0.72,
      title: 'AI Agents Are Becoming Operational Capital',
      summary: 'The present focus pushes the path into economic materiality: agents that encode judgment need classification, stewardship, and lifecycle treatment.',
      continuity: 'This is the turn from workflow design into assets that deserve governance.',
      slug: 'writing/2026/05/25/ai-agents-are-becoming-operational-capital'
    },
    {
      id: 'week-07-grading',
      sceneLabel: 'Act III · Grading the asset',
      status: 'Next',
      kind: 'Framework',
      progressStart: 0.72,
      progressEnd: 0.86,
      title: 'Agent Asset Grading Framework',
      summary: 'The next release gives leaders a decision model for which agents deserve stronger controls, deeper review, tighter telemetry, and more financial seriousness.',
      continuity: 'This is the bridge from insight into a practical governance standard.',
      slug: 'frameworks/2026/05/27/agent-asset-grading-framework'
    },
    {
      id: 'week-08-tool',
      sceneLabel: 'Act III · Shipping the tool',
      status: 'Next',
      kind: 'Guide',
      progressStart: 0.86,
      progressEnd: 1,
      title: 'A Compass, Not a Map',
      summary: 'The closing release turns the arc into a usable guide for moving through ambiguity without over-designing the future.',
      continuity: 'This is where the stream lands in a tool people can actually use in the room.',
      slug: 'guides/a-compass-not-a-map'
    }
  ]
};
