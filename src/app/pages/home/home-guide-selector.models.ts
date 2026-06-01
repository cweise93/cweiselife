import { GuideItem } from '../../core/content/content.models';

export interface HomeGuideSelectorMoment {
  prompt: string;
  guide: GuideItem;
  route: string[];
}

export interface HomeGuideSelectorBenefit {
  icon: string;
  title: string;
  description: string;
}
