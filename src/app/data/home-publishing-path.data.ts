import { ScrollSequenceManifest, SpriteSheetManifest } from '../shared/content/scroll-sprite-sequence';

export type PublishingPathStatus = 'Published' | 'Current' | 'Planned';
export type PublishingPathKind = 'Writing' | 'Framework' | 'Guide';
export type PublishingPathAvailability = 'published' | 'planned';
export type PublishingPathActId = 'cold-open' | 'act-i' | 'act-ii' | 'act-iii';
export type PublishingPathViewMode = 'story-arc' | 'release-order';

export interface PublishingPathAct {
  id: PublishingPathActId;
  label: string;
  title: string;
  summary: string;
}

export interface PublishingPathItem {
  id: string;
  sceneLabel: string;
  status: PublishingPathStatus;
  availability: PublishingPathAvailability;
  kind: PublishingPathKind;
  actId: PublishingPathActId;
  movement: string;
  narrativeOrder: number;
  releaseOrder: number;
  progressStart: number;
  progressEnd: number;
  releaseDateLabel: string;
  title: string;
  summary: string;
  thesis: string;
  stakes: string;
  continuity: string;
  slug?: string;
}

export interface HomePublishingPath {
  eyebrow: string;
  headline: string;
  support: string;
  spine: string;
  defaultStoryId: string;
  spritePath: string;
  sequence: ScrollSequenceManifest;
  sprite: SpriteSheetManifest;
  acts: PublishingPathAct[];
  items: PublishingPathItem[];
}

export const HOME_PUBLISHING_PATH: HomePublishingPath = {
  eyebrow: 'Live Operating Story',
  headline: 'From invisible operating drag to governed intelligence.',
  support:
    'This section is the trailer for the whole operating thesis: first the hidden failure is exposed, then the route is built, then AI raises the stakes from workflow design into assets, economics, control, and durable enterprise capability.',
  spine:
    'AI agents become valuable only when they stop being clever tools and become governed operational assets: graded by maturity, secured by data policy, measured by cost and output, executed through controlled seams, and improved through expert-guided apprenticeship.',
  defaultStoryId: 'scene-consumption',
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
  acts: [
    {
      id: 'cold-open',
      label: 'Cold Open',
      title: 'Name the hidden failure',
      summary: 'Intelligence exists, but the operating path fails to carry it through translation, ownership, and execution.'
    },
    {
      id: 'act-i',
      label: 'Act I',
      title: 'Build the route',
      summary: 'Diagnosis hardens into operating design: signal gets cleaner, ownership gets sharper, and execution becomes more governable.'
    },
    {
      id: 'act-ii',
      label: 'Act II',
      title: 'Raise the stakes',
      summary: 'AI stops being a tooling story and becomes an economic one: leverage, asset treatment, and consumption discipline enter the frame.'
    },
    {
      id: 'act-iii',
      label: 'Act III',
      title: 'Govern the new asset class',
      summary: 'Security, control seams, talent systems, grading, and practical guidance turn governed intelligence into a repeatable management discipline.'
    }
  ],
  items: [
    {
      id: 'scene-intelligence',
      sceneLabel: 'Cold Open · Expose the failure',
      status: 'Published',
      availability: 'published',
      kind: 'Writing',
      actId: 'cold-open',
      movement: 'The hidden break',
      narrativeOrder: 1,
      releaseOrder: 4,
      progressStart: 0,
      progressEnd: 0.0769,
      releaseDateLabel: 'May 12, 2026',
      title: 'Organizations Rarely Fail From a Lack of Intelligence',
      summary: 'The opening move names the real enterprise failure mode: intelligence exists, but it dies while crossing priorities, translation layers, ownership boundaries, and execution.',
      thesis: 'The enterprise problem is not insight scarcity. It is a weak operating path between knowing and doing.',
      stakes: 'If the path is weak, more dashboards, more meetings, and more strategy documents only create interpretive drag.',
      continuity: 'This establishes the core wound the rest of the story has to heal.',
      slug: 'writing/2026/05/12/organizations-rarely-fail-from-a-lack-of-intelligence'
    },
    {
      id: 'scene-friction',
      sceneLabel: 'Cold Open · Reveal the drag',
      status: 'Published',
      availability: 'published',
      kind: 'Writing',
      actId: 'cold-open',
      movement: 'The hidden tax',
      narrativeOrder: 2,
      releaseOrder: 3,
      progressStart: 0.0769,
      progressEnd: 0.1538,
      releaseDateLabel: 'April 28, 2026',
      title: 'Why Operational Friction Hides in Translation Layers',
      summary: 'The second beat shows where execution quietly breaks: handoffs, interface ambiguity, duplicated interpretation, and invisible coordination tax.',
      thesis: 'Translation layers are not harmless communication space. They are operating surfaces where value is either preserved or lost.',
      stakes: 'When the drag stays hidden, leaders misdiagnose the problem as discipline, speed, or talent.',
      continuity: 'Now the audience can see the tax, not just hear the complaint.',
      slug: 'writing/2026/04/28/why-operational-friction-hides-in-translation-layers'
    },
    {
      id: 'scene-loop',
      sceneLabel: 'Act I · Build the route',
      status: 'Published',
      availability: 'published',
      kind: 'Framework',
      actId: 'act-i',
      movement: 'Intent survives the trip',
      narrativeOrder: 3,
      releaseOrder: 1,
      progressStart: 0.1538,
      progressEnd: 0.2308,
      releaseDateLabel: 'March 18, 2026',
      title: 'Systems Translation Loop',
      summary: 'Once the failure is named, the next move is to give intent a route that can survive the trip from strategy into workflow, systems, evidence, and validation.',
      thesis: 'Good execution requires a designed loop that preserves signal from business need to real-world learning.',
      stakes: 'Without a loop, the organization keeps rediscovering the same confusion at every layer.',
      continuity: 'This is the first structural answer to the hidden drag.',
      slug: 'frameworks/2026/03/18/systems-translation-loop'
    },
    {
      id: 'scene-noise',
      sceneLabel: 'Act I · Clear the field',
      status: 'Published',
      availability: 'published',
      kind: 'Framework',
      actId: 'act-i',
      movement: 'Make signal visible',
      narrativeOrder: 4,
      releaseOrder: 2,
      progressStart: 0.2308,
      progressEnd: 0.3077,
      releaseDateLabel: 'April 14, 2026',
      title: 'Turn Down the Noise',
      summary: 'The field has to get quieter before the system can carry better decisions. Reporting clutter, escalation churn, and optics-heavy update loops are stripped back.',
      thesis: 'Decision quality improves when attention stops being spent on volume that does not improve the next move.',
      stakes: 'If the signal remains buried, even a better route still delivers the wrong operating picture.',
      continuity: 'The route exists now, but it still needs a cleaner field to travel through.',
      slug: 'frameworks/2026/04/14/turn-down-the-noise'
    },
    {
      id: 'scene-ownership',
      sceneLabel: 'Act I · Install ownership',
      status: 'Published',
      availability: 'published',
      kind: 'Writing',
      actId: 'act-i',
      movement: 'Make follow-through durable',
      narrativeOrder: 5,
      releaseOrder: 5,
      progressStart: 0.3077,
      progressEnd: 0.3846,
      releaseDateLabel: 'March 31, 2026',
      title: 'Executive Follow-Through Requires Ownership Architecture',
      summary: 'Follow-through becomes legible when decision rights, escalation lanes, evidence paths, and review rhythms are explicit enough to sustain execution.',
      thesis: 'Ownership is not a slogan. It is architecture.',
      stakes: 'If ownership remains informal, strategy can sound aligned while delivery remains incoherent.',
      continuity: 'The operating path is now visible, quieter, and more accountable.',
      slug: 'writing/2026/03/31/executive-follow-through-requires-ownership-architecture'
    },
    {
      id: 'scene-capital',
      sceneLabel: 'Act II · Change the category',
      status: 'Current',
      availability: 'published',
      kind: 'Writing',
      actId: 'act-ii',
      movement: 'The midpoint turn',
      narrativeOrder: 6,
      releaseOrder: 6,
      progressStart: 0.3846,
      progressEnd: 0.4615,
      releaseDateLabel: 'May 25, 2026',
      title: 'AI Agents Are Becoming Operational Capital',
      summary: 'This is the category shift. Agents that encode judgment, process logic, and institutional knowledge stop being just tools and start becoming governed operational capital.',
      thesis: 'The next serious AI question is not whether an agent exists. It is what grade of asset it is.',
      stakes: 'Once agents matter economically, boards and operators inherit questions of useful life, stewardship, reliability, maintenance burden, and value preservation.',
      continuity: 'This is the turn from workflow design into assets that deserve governance.',
      slug: 'writing/2026/05/25/ai-agents-are-becoming-operational-capital'
    },
    {
      id: 'scene-consumption',
      sceneLabel: 'Act II · Make the economics visible',
      status: 'Current',
      availability: 'published',
      kind: 'Framework',
      actId: 'act-ii',
      movement: 'Leverage or drag',
      narrativeOrder: 7,
      releaseOrder: 7,
      progressStart: 0.4615,
      progressEnd: 0.5385,
      releaseDateLabel: 'June 1, 2026',
      title: 'AI Consumption Leverage Framework',
      summary: 'The new framework makes the economics legible: AI spend only matters strategically when consumption becomes operating leverage instead of a swelling cost line with a productivity story attached.',
      thesis: 'Token consumption, routing, seats, throughput, caching, workflow design, and governance all belong in the same operating conversation.',
      stakes: 'If firms cannot connect AI consumption to operating leverage, margin, throughput, and decision quality, the asset story collapses into invoice theater.',
      continuity: 'This is where the campaign stops talking about AI value abstractly and starts pricing the operating reality.',
      slug: 'frameworks/2026/06/01/ai-consumption-leverage-framework'
    },
    {
      id: 'scene-balance-sheet',
      sceneLabel: 'Act II · Push toward the balance sheet',
      status: 'Planned',
      availability: 'planned',
      kind: 'Writing',
      actId: 'act-ii',
      movement: 'Expose the financial edge',
      narrativeOrder: 8,
      releaseOrder: 8,
      progressStart: 0.5385,
      progressEnd: 0.6154,
      releaseDateLabel: 'Planned next',
      title: 'The AI Cost Problem Has Not Hit the Balance Sheet Yet',
      summary: 'The next economic beat pushes the argument toward finance: capable professionals using AI broadly across ambiguous work may become the biggest cost exposure, not just developers.',
      thesis: 'Token efficiency is not prompt hygiene. It is enterprise cost governance.',
      stakes: 'If leaders do not understand AI cost at operating scale, asset economics and capital planning remain disconnected from actual usage.',
      continuity: 'This expands the leverage argument into financial seriousness.'
    },
    {
      id: 'scene-security',
      sceneLabel: 'Act III · Give the data a voice',
      status: 'Planned',
      availability: 'planned',
      kind: 'Writing',
      actId: 'act-iii',
      movement: 'Control the behavior',
      narrativeOrder: 9,
      releaseOrder: 9,
      progressStart: 0.6154,
      progressEnd: 0.6923,
      releaseDateLabel: 'Planned',
      title: 'AI Security Is Not Solved Until the Data Can Tell the Agent How to Behave',
      summary: 'The security turn argues that access control is not enough. Labels, policy-aware context, ownership rules, and downstream constraints have to become behavioral control infrastructure.',
      thesis: 'An agent cannot behave responsibly around data it cannot understand.',
      stakes: 'Without policy-aware data, high-grade AI assets remain unsafe no matter how elegant the interface looks.',
      continuity: 'Once AI is economically material, behavior controls stop being optional.'
    },
    {
      id: 'scene-seam',
      sceneLabel: 'Act III · Operationalize the seam',
      status: 'Planned',
      availability: 'planned',
      kind: 'Writing',
      actId: 'act-iii',
      movement: 'Govern execution',
      narrativeOrder: 10,
      releaseOrder: 10,
      progressStart: 0.6923,
      progressEnd: 0.7692,
      releaseDateLabel: 'Planned',
      title: 'The Python Seam: Governing AI Execution Without Killing Productivity',
      summary: 'This chapter introduces the governed execution layer between local productivity and enterprise systems: where policy, telemetry, routing, and auditability actually become enforceable.',
      thesis: 'The seam is where AI strategy becomes operating discipline.',
      stakes: 'Without an execution seam, firms either over-ban AI or let local productivity leak straight into unmanaged enterprise risk.',
      continuity: 'This is where governed intelligence becomes executable instead of aspirational.'
    },
    {
      id: 'scene-apprentice',
      sceneLabel: 'Act III · Preserve human judgment',
      status: 'Planned',
      availability: 'planned',
      kind: 'Writing',
      actId: 'act-iii',
      movement: 'Humanize the asset',
      narrativeOrder: 11,
      releaseOrder: 11,
      progressStart: 0.7692,
      progressEnd: 0.8462,
      releaseDateLabel: 'Planned',
      title: 'AI Will Not Replace the Apprentice Model. It Will Expose Which Firms Still Have One.',
      summary: 'The human turn argues that AI raises the value of expert judgment instead of deleting it. The real moat becomes expert-guided training, review, correction, and reusable operating patterns.',
      thesis: 'AI does not eliminate apprenticeship. It makes apprenticeship measurable.',
      stakes: 'If firms cannot develop and preserve expert judgment, they cannot create durable high-grade agents.',
      continuity: 'Now the campaign shows how the asset class is improved over time, not just controlled.'
    },
    {
      id: 'scene-grading',
      sceneLabel: 'Act III · Grade the asset',
      status: 'Published',
      availability: 'published',
      kind: 'Framework',
      actId: 'act-iii',
      movement: 'Make the standard real',
      narrativeOrder: 12,
      releaseOrder: 12,
      progressStart: 0.8462,
      progressEnd: 0.9231,
      releaseDateLabel: 'May 27, 2026',
      title: 'Agent Asset Grading Framework',
      summary: 'The climax gives leaders a practical decision model for which agents deserve stronger controls, tighter telemetry, deeper review, and more financial seriousness.',
      thesis: 'If agents are assets, they need grading across maturity, governance, reliability, useful life, risk, and cost displacement.',
      stakes: 'Without a grading model, firms will confuse disposable assistants with governed operational capital.',
      continuity: 'This turns the campaign thesis into a usable management standard.',
      slug: 'frameworks/2026/05/27/agent-asset-grading-framework'
    },
    {
      id: 'scene-compass',
      sceneLabel: 'Act III · Land the tool',
      status: 'Published',
      availability: 'published',
      kind: 'Guide',
      actId: 'act-iii',
      movement: 'Give people something to use',
      narrativeOrder: 13,
      releaseOrder: 13,
      progressStart: 0.9231,
      progressEnd: 1,
      releaseDateLabel: 'Published guide',
      title: 'A Compass, Not a Map',
      summary: 'The closing move turns the arc into a room-usable guide for navigating ambiguity without pretending the future can be fully scripted in advance.',
      thesis: 'The best operating tools orient judgment instead of replacing it.',
      stakes: 'If the story cannot land in something leaders and teams can use live, the campaign remains elegant commentary.',
      continuity: 'This is the practical landing point: governed intelligence becomes a tool for real rooms, not just good theory.',
      slug: 'guides/a-compass-not-a-map'
    }
  ]
};
