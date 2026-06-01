import { ScrollSequenceManifest, SpriteSheetManifest } from '../shared/content/scroll-sprite-sequence';

export type PublishingPathStatus = 'Live' | 'Sequenced' | 'Scheduled';
export type PublishingPathKind = 'Writing' | 'Framework' | 'Guide';

export interface PublishingPathItem {
  id: string;
  weekLabel: string;
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
  eyebrow: 'Publishing Arc',
  headline: 'Trace the route from diagnosis to working tool, one release at a time.',
  support:
    'Each weekly release extends the same route. The story starts with diagnosis, moves through operating structure, and ends with a working guide people can use.',
  spritePath: 'assets/images/home/story-path/story_path_sprite_sheet.webp',
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
      weekLabel: 'Week 1',
      status: 'Live',
      kind: 'Writing',
      progressStart: 0,
      progressEnd: 0.112,
      title: 'Organizations Rarely Fail From a Lack of Intelligence',
      summary: 'Start with the real diagnosis: organizations break down when intelligence cannot travel through priorities, translation layers, ownership, and execution.',
      continuity: 'This is the opening index because it names the operating problem the rest of the sequence is solving.',
      slug: 'writing/2026/05/12/organizations-rarely-fail-from-a-lack-of-intelligence'
    },
    {
      id: 'week-02-loop',
      weekLabel: 'Week 2',
      status: 'Live',
      kind: 'Framework',
      progressStart: 0.112,
      progressEnd: 0.224,
      title: 'Systems Translation Loop',
      summary: 'Turn the diagnosis into a repeatable operating model that carries executive intent into workflow, systems, and validation.',
      continuity: 'The second stop gives the path structure so the signal can survive the trip.',
      slug: 'frameworks/2026/03/18/systems-translation-loop'
    },
    {
      id: 'week-03-friction',
      weekLabel: 'Week 3',
      status: 'Live',
      kind: 'Writing',
      progressStart: 0.224,
      progressEnd: 0.336,
      title: 'Why Operational Friction Hides in Translation Layers',
      summary: 'Show where the loop breaks in practice: handoffs, interface ownership, duplicated interpretation, and invisible drag.',
      continuity: 'This stop makes the hidden operating tax visible before the conversation jumps to tooling.',
      slug: 'writing/2026/04/28/why-operational-friction-hides-in-translation-layers'
    },
    {
      id: 'week-04-noise',
      weekLabel: 'Week 4',
      status: 'Live',
      kind: 'Framework',
      progressStart: 0.336,
      progressEnd: 0.448,
      title: 'Turn Down the Noise',
      summary: 'Reduce ambient reporting volume, weak escalation surfaces, and optics-heavy updates so decision-grade signal becomes easier to inspect.',
      continuity: 'The fourth stop improves the environment around the path instead of merely adding more communication.',
      slug: 'frameworks/2026/04/14/turn-down-the-noise'
    },
    {
      id: 'week-05-ownership',
      weekLabel: 'Week 5',
      status: 'Sequenced',
      kind: 'Writing',
      progressStart: 0.448,
      progressEnd: 0.58,
      title: 'Executive Follow-Through Requires Ownership Architecture',
      summary: 'Make follow-through legible by clarifying decision rights, escalation lanes, and the evidence path required to sustain execution.',
      continuity: 'This is where the path stops being conceptual and starts becoming governable.',
      slug: 'writing/2026/03/31/executive-follow-through-requires-ownership-architecture'
    },
    {
      id: 'week-06-agents',
      weekLabel: 'Week 6',
      status: 'Sequenced',
      kind: 'Writing',
      progressStart: 0.58,
      progressEnd: 0.72,
      title: 'AI Agents Are Becoming Operational Capital',
      summary: 'Move from operating clarity into economic materiality: agents that encode judgment need classification, stewardship, and lifecycle treatment.',
      continuity: 'The sixth stop shifts the path from workflow design into assets that deserve governance.',
      slug: 'writing/2026/05/25/ai-agents-are-becoming-operational-capital'
    },
    {
      id: 'week-07-grading',
      weekLabel: 'Week 7',
      status: 'Scheduled',
      kind: 'Framework',
      progressStart: 0.72,
      progressEnd: 0.86,
      title: 'Agent Asset Grading Framework',
      summary: 'Grade which agents deserve stronger controls, review depth, operating telemetry, and financial seriousness.',
      continuity: 'This stop gives leaders a practical decision model for distinguishing experiments from operating assets.',
      slug: 'frameworks/2026/05/27/agent-asset-grading-framework'
    },
    {
      id: 'week-08-tool',
      weekLabel: 'Week 8',
      status: 'Scheduled',
      kind: 'Guide',
      progressStart: 0.86,
      progressEnd: 1,
      title: 'A Compass, Not a Map',
      summary: 'Close the arc with a practical tool for moving through ambiguity without over-designing the future.',
      continuity: 'The sequence ends with a working guide that turns uncertainty into a stable direction and the next useful move.',
      slug: 'guides/a-compass-not-a-map'
    }
  ]
};
