export interface ServiceType {
  label: string;
  selected: boolean;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  category: ServiceType;
  imageUrl: string;
  list_items: string[];
  id?: number;
}