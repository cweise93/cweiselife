import { OperatingToolItem } from '../../core/content/content.models';

export interface HomeOperatingToolSelectorMoment {
  label: string;
  title: string;
  preview: string;
  icon: string;
  operatingTool: OperatingToolItem;
  route: string[];
}

export interface HomeOperatingToolSelectorBenefit {
  icon: string;
  title: string;
  description: string;
}
