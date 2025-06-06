import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgClass } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

export interface Milestone {
  years: string;
  title: string;
  blurb: string;
  org: string;
  location: string;
  icon: string;
  id?: number;
}
@Component({
  selector: 'app-experience',
  imports: [
    MatIconModule,
    NgClass,
    MatDialogModule
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ExperienceComponent {
  public yearsSince2004 = new Date().getFullYear() - 2004;

  milestones: Milestone[] = [
    {
      years: '2019 – Present',
      title: 'Principal, Director-Level Progression',
      blurb: 'Advanced through multiple leadership roles at Bowman Consulting, driving enterprise software modernization, scalable cloud platforms, and strategic business systems across engineering and infrastructure domains.',
      org: 'Bowman Consulting',
      location: 'Reston, VA (Remote)',
      icon: 'leaderboard'
    },
    {
      years: '2024 – Present',
      title: 'Principal, Director of Application Development',
      blurb: 'Directs revenue facing application development to reduce costs, increase quality, and generate profits.',
      org: 'Bowman Consulting',
      location: 'Reston, VA (Remote)',
      icon: 'leaderboard'
    },
    {
      years: '2022 – 2024',
      title: 'Principal, Director of Business Systems',
      blurb: 'Directs business systems strategy, program management, and enterprise architecture across a national footprint.',
      org: 'Bowman Consulting',
      location: 'Reston, VA (Remote)',
      icon: 'leaderboard'
    },
    {
      years: '2020 – 2022',
      title: 'Application Development Manager',
      blurb: 'Led software development initiatives, overseeing architecture, data analytics, and cross-team technology delivery.',
      org: 'Bowman Consulting',
      location: 'Port St. Lucie, FL (Remote)',
      icon: 'developer_mode'
    },
    {
      years: '2019 – 2020',
      title: 'Business Solutions Consultant',
      blurb: 'Architected technology solutions and provided consulting services in business analytics and system design.',
      org: 'Bowman Consulting',
      location: 'Port St. Lucie, FL',
      icon: 'settings'
    },
    {
      years: '2018 – 2019',
      title: 'Commercial Realtor',
      blurb: 'Identified high-value, stalled projects post-2009 crash; built data-driven business cases to reengage national builders.',
      org: 'KW Commercial',
      location: 'Vero Beach, FL',
      icon: 'domain'
    },
    {
      years: '2013 – 2018',
      title: 'Technology Consultant / Owner',
      blurb: 'Founded W3, LLC; delivered custom web-app solutions for SMBs using Angular, Drupal 8, and PHP.',
      org: 'W3, LLC',
      location: 'Vero Beach, FL',
      icon: 'business_center'
    },
    {
      years: '2004 – 2013',
      title: 'Managerial Progression Across Real Estate & Operations',
      blurb: 'Held progressive leadership roles at Canadian Pacific, spanning real estate strategy, operations, GIS adoption, and tax administration. Delivered millions in new revenue, streamlined asset management, and drove national-scale process innovation.',
      org: 'Canadian Pacific Railway',
      location: 'Minneapolis, MN',
      icon: 'domain'
    },
    {
      years: '2011 – 2013',
      title: 'Manager, Real Estate Support US',
      blurb: 'Managed a national team overseeing railroad properties; championed enterprise GIS adoption across the organization.',
      org: 'Canadian Pacific Railway',
      location: 'Minneapolis, MN',
      icon: 'map'
    },
    {
      years: '2008 – 2010',
      title: 'MBA, Data Analytics & Supply Chain Optimization',
      blurb: 'Master of Business Administration with focus on data analytics and business strategy.',
      org: 'University of Minnesota, Carlson School of Management',
      location: 'Minneapolis, MN',
      icon: 'school'
    },
    {
      years: '2007 – 2011',
      title: 'Area Manager, U.S. Marketing – Real Estate',
      blurb: 'Led 150+ real estate transactions; developed strategies securing $2.5M+ net revenue and $200K+ in ongoing leases.',
      org: 'Canadian Pacific Railway',
      location: 'Minneapolis, MN',
      icon: 'trending_up'
    },
    {
      years: '2006 – 2008',
      title: 'BA, Engineering & Diverse Business Practices',
      blurb: 'Bachelor of Arts with emphases in engineering principles and diverse business practices.',
      org: 'Metropolitan State University',
      location: 'St. Paul, MN',
      icon: 'school'
    },
    {
      years: '2007',
      title: 'Real Estate Tax Administrator',
      blurb: 'Managed non-operating property taxes and assessments, overseeing $1.7M annual cash flow across a seven-state region.',
      org: 'Canadian Pacific Railway',
      location: 'Minneapolis, MN',
      icon: 'account_balance'
    },
    {
      years: '2004 – 2007',
      title: 'Area Manager, Support',
      blurb: 'Researched title records and renegotiated land transactions, driving a 567% annual revenue increase across seven states.',
      org: 'Canadian Pacific Railway',
      location: 'Minneapolis, MN',
      icon: 'work'
    },
    {
      years: '1996 – 1998',
      title: 'Associate of Arts, Mechanical Engineering',
      blurb: 'Associate degree focused on foundational mechanical engineering and technical problem-solving.',
      org: 'Century College',
      location: 'White Bear Lake, MN',
      icon: 'engineering'
    },
    {
      years: '1984 – 1986',
      title: 'Novice Game Designer',
      blurb: 'Wrote first computer programs using Tandy 1000 in lieu of Atari Game Console.',
      org: 'Homegrown Curiosity',
      location: 'Roxton, TX',
      icon: 'engineering'
    }
  ];
  constructor() {
    // Safely assign an index ID to each milestone
    this.milestones.forEach((milestone, idx) => {
      milestone.id = idx;
    });
  }
  }

