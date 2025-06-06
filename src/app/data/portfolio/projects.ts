export interface Project {
  icon: string;
  title: string;
  description: string;
  id?: number;
  imageUrl?: string;
  buttonLink?: string;
}
export const projects: Project[] = [
      {
        icon: 'menu_book',
        title: 'AIA: AI Application in AEC',
        imageUrl: 'assets/imgs/projects-book-cover.png',
        description: 'Authoring a pioneering book exploring how artificial intelligence is reshaping the architecture, engineering, and construction industries, offering practical insights and future strategies.'
      },
      {
        icon: 'self_improvement',
        title: 'Habit Formation for Life Fulfillment',
        imageUrl: 'assets/imgs/projects-app.png',
        description: 'Developing a transformational program that guides individuals to define meaningful life goals through reflective questioning and build habits that drive sustainable personal growth.'
      },
      {
        icon: 'smart_toy',
        title: 'Copilot Agent for Corporate Intelligence',
        imageUrl: 'assets/imgs/projects-copilot.png',
        description: 'Creating a secure, agnostic Copilot Agent that connects employees to their corporate data assets — even when no formal data lake exists — unlocking actionable intelligence from disparate sources.'
      }
    ];