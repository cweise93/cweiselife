export interface Attachment {
    title: string;
    refUrl: string;
}
export interface BlogCategory {
    title: string;
    selected: boolean;
}
export interface ContentDetails {
    slug: string;
    title: string;
    author: string;
    date: string | Date; // ← fixed type declaration
    bannerImageUrl?: string;
    bannerImageUrlZoom?: string;
    impactedSoftware?: string[];
    sourceCodeUrl?: string;
    artifactsZipUrl?: string;
    githubUrl?: string;
    contentType?: string;

    attachmentUrls?: Attachment[];
    content: string;
    id: number;
    votes?: number;
//    categories?: BlogCategory[];
}