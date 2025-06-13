import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  private blogData = [
    {
      slug: 'first-blog-post',
      title: 'My First Blog Post',
      author: 'Anna S Weise',
      date: new Date('2025-06-09'),
      bannerImageUrl: 'assets/imgs/actionable analytics.png',
      impactedSoftware: ['Angular', 'Supabase'],
      sourceCodeUrl: '/assets/downloads/blog-code.zip',
      artifactsZipUrl: '/assets/downloads/blog-artifacts.zip',
      githubUrl: 'https://github.com/example/blog',
      content: `<h2>Overview</h2><p>This is a sample blog post.</p>`,
      votes: 123
    }
  ];

  private serviceData = [
    {
      slug: 'ai-strategy',
      title: 'AI Strategy Design',
      author: 'Charles Weise',
      date: new Date('2025-06-01'),
      bannerImageUrl: 'assets/imgs/service-ai.jpg',
      impactedSoftware: ['LangChain', 'Azure OpenAI'],
      sourceCodeUrl: '/assets/downloads/ai-strategy-code.zip',
      artifactsZipUrl: '/assets/downloads/ai-strategy-artifacts.zip',
      githubUrl: 'https://github.com/example/ai-strategy',
      content: `<p>This service helps you design and deploy AI copilots...</p>`,
      votes: 88
    }
  ];

  getDetails(type: string, slug: string, year?: string, month?: string, day?: string): any {
    const source = type === 'blog' ? this.blogData : type === 'service' ? this.serviceData : [];
    console.info('source', source)
    return source.find(item => {
      const date = new Date(item.date);
      const matchesDate =
        (!year || date.getFullYear().toString() === year) &&
        (!month || (date.getMonth() + 1).toString().padStart(2, '0') === month) &&
        (!day || date.getDate().toString().padStart(2, '0') === day);
      return item.slug === slug && matchesDate;
    }
  );  
  }
  constructor() { }
}
