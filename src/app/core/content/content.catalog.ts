import aboutContentJson from '../../../assets/content/about.json';
import frameworksContentJson from '../../../assets/content/frameworks.json';
import guidesContentJson from '../../../assets/content/guides.json';
import siteContentJson from '../../../assets/content/site.json';
import writingContentJson from '../../../assets/content/writing.json';
import {
  mapAboutFile,
  isPublicContent,
  mapFrameworkFile,
  mapGuideFile,
  mapSiteFile,
  mapWritingFile
} from './content.mappers';

export const aboutContent = mapAboutFile(aboutContentJson);
export const siteContent = mapSiteFile(siteContentJson);
export const writingContent = mapWritingFile(writingContentJson);
export const frameworksContent = mapFrameworkFile(frameworksContentJson);
export const guidesContent = mapGuideFile(guidesContentJson);

export const publishedWritingItems = writingContent.items.filter((item) => isPublicContent(item.status));
export const publishedFrameworkItems = frameworksContent.items.filter((item) => isPublicContent(item.status));
export const publishedGuideItems = guidesContent.items.filter((item) => isPublicContent(item.status));
