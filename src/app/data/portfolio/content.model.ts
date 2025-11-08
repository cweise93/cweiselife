export interface Attachment {
    title: string;
    refUrl: string;
}
export interface ImpactedSoftware {
    title: string;
    selected: boolean;
}
export interface ResumeContactItem {
    icon: string;
    label: string;
    value: string;
    href?: string;
}
export interface ResumeExperienceItem {
    period: string;
    role: string;
    organization: string;
    summaryPoints: string[];
}
export interface ResumeEducationItem {
    period: string;
    degree: string;
    institution: string;
    focus?: string;
}
export interface ResumeTechStack {
    title: string;
    items: string[];
}
export interface ResumeDetails {
    headerTitle: string;
    heroTags: string[];
    summary: string;
    contacts: ResumeContactItem[];
    skills: string[];
    experiences: ResumeExperienceItem[];
    education: ResumeEducationItem[];
    techStacks: ResumeTechStack[];
    pdfUrl: string;
}
export interface Content {
    id: number;
    contentType: string;
    selected?: boolean;
    slug: string;
    title: string;
    author: string;
    date: string | Date; // ← fixed type declaration
    description?: string;
    content: string;
    icon?: string;
    list_items?: string[];
    // restructure list_item to be more meaningful and consider providing type
    // does the type get listed in teh same table and then split here 
    
    bannerImageUrl?: string;
    bannerImageUrlZoom?: string;

    sourceCodeUrl?: string;
    artifactsZipUrl?: string;
    attachmentUrls?: Attachment[];
    githubUrl?: string;

    impactedSoftware?: string[];
    votes?: number;
    resumeDetails?: ResumeDetails;
}
