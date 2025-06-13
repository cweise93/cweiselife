export interface Attachment {
    title: string;
    refUrl: string;
}
export interface BlogCategory {
    title: string;
    selected: boolean;
}
export interface BlogDetails {
    title: string;
    publishYear: number;
    publishMonth: number;
    publishDate: number;
    bannerImageUrl?: string;
    attachmentUrls?: Attachment[];
    content: string;
    id: number;
//    categories?: BlogCategory[];
}