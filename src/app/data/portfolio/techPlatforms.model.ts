export interface TechPlatform {
  icon: string; // get the icon generator working
  title: string;
  description: string;
  id?: number;
  selected?: boolean;
  imageUrl?: string; // logo ?
  buttonLink?: string; // home page for the platform?
}