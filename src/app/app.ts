import { Component, signal, effect, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatChipsModule,
    MatProgressBarModule,
    MatSlideToggleModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  encapsulation: ViewEncapsulation.None
})
export class App {
  protected readonly name = signal('Pokharaj');
  protected readonly role = signal('Lead Software Engineer');
  protected readonly email = signal('pokhraj.patel0705@gmail.com');
  protected readonly phone = signal('+91 8050101967');
  protected readonly location = signal('Bangalore, India');
  protected readonly linkedin = signal('http://linkedin.com/in/pokharaj-25aa19112');
  protected readonly github = signal('https://github.com/Pokharaj');

  protected readonly skills = signal<Skill[]>([
    { name: 'Java', level: 100, category: 'Backend' },
    { name: 'Spring Boot', level: 100, category: 'Backend' },
    { name: 'Spring Batch', level: 100, category: 'Backend' },
    { name: 'Oracle Database', level: 100, category: 'Database' },
    { name: 'AWS Lambda', level: 100, category: 'Cloud' },
    { name: 'AWS Batch', level: 100, category: 'Cloud' },
    { name: 'Kubernetes', level: 100, category: 'Cloud' },
    { name: 'MongoDB', level: 100, category: 'Database' },
    { name: 'Angular', level: 100, category: 'Frontend' },
    { name: 'SQL', level: 100, category: 'Database' },
    { name: 'NoSQL', level: 100, category: 'Database' },
    { name: 'Data Structures', level: 100, category: 'Computer Science' },
    { name: 'REST APIs', level: 100, category: 'Backend' },
    { name: 'Microservices', level: 100, category: 'Architecture' }
  ]);

  protected readonly experience = signal<Experience[]>([
    {
      title: 'Lead - Software Engineering',
      company: 'Fidelity Investments',
      period: 'Sep 2022 - Present',
      description: [
        'Lead Backend Engineer specializing in Java, Spring Boot, and Oracle Database development',
        'Architected and implemented cloud-native solutions using AWS services including Lambda and Batch processing',
        'Led software development initiatives with focus on feature development, debugging, testing, and deployment processes',
        'Mentored development teams and established best practices for enterprise-level applications',
        'Implemented robust testing strategies and CI/CD pipelines for reliable software delivery'
      ],
      technologies: ['Java', 'Spring Boot', 'Oracle Database', 'AWS', 'Lambda', 'AWS Batch']
    },
    {
      title: 'Senior Engineer',
      company: 'Xylem Water Solutions',
      period: 'Apr 2020 - Sep 2022',
      description: [
        'Led backend development using Java and MongoDB for water loss management system project',
        'Performed comprehensive software development, testing, and debugging processes',
        'Collaborated with cross-functional teams to deliver high-quality software solutions',
        'Mentored junior developers and conducted code reviews to maintain code quality',
        'Utilized strong analytical and problem-solving skills for system optimization'
      ],
      technologies: ['Java', 'MongoDB', 'Spring Boot', 'Hibernate', 'Microservices', 'REST APIs']
    },
    {
      title: 'Senior Software Engineer',
      company: 'Mindtree Limited',
      period: 'Mar 2019 - Mar 2020',
      description: [
        'Developed full-stack applications using Java and Angular frameworks',
        'Implemented responsive web interfaces and backend services',
        'Worked with agile methodologies and participated in sprint planning',
        'Performed software design, development, testing, and debugging activities',
        'Collaborated with team members to deliver project milestones on time',
        'Applied strong knowledge of data structures and databases in development'
      ],
      technologies: ['Java', 'Angular', 'Spring Framework', 'Hibernate', 'JavaScript', 'HTML/CSS']
    },
    {
      title: 'Junior Software Developer',
      company: 'Chainalytics',
      period: 'Mar 2017 - Mar 2019',
      description: [
        'Developed full-stack applications using Java, C#, and web technologies',
        'Participated in software development, testing, and debugging processes',
        'Learned best practices in software design and industry standards',
        'Contributed to team documentation and knowledge sharing initiatives',
        'Applied fundamental knowledge of data structures and SQL in development'
      ],
      technologies: ['Java', 'C#', 'JavaScript', 'HTML/CSS', 'SQL Server', 'JSON']
    }
  ]);

  protected readonly education = signal<Education[]>([
    {
      degree: 'P.G. Diploma',
      institution: 'CDAC-ACTS, Bangalore',
      period: '2017',
      description: 'Graduated with 78.20% marks. Advanced diploma program in computer applications and technology.'
    },
    {
      degree: 'B.E. Computer Science',
      institution: 'CSVTU Bhilai',
      period: '2016',
      description: 'Graduated with 72.47% marks. Bachelor of Engineering in Computer Science with focus on software engineering and computer systems.'
    }
  ]);

  protected readonly projects = signal<Project[]>([
    {
      name: 'CAM Archive Logger',
      description: 'CAM Archive Logger is a lightweight utility designed to securely store logs from applications that process sensitive data, including Personally Identifiable Information (PII). It helps applications retain logs for up to 30 days in compliance with data protection regulations. Logs can be accessed anytime within this period and are automatically deleted after 30 days. The application supports up to 60,000 transactions per second (TPS), ensuring high performance and reliability.',
      technologies: ['Java', 'Spring Boot', ' AWS Lambda', 'AWS Batch', 'AWS S3', 'KMS', 'Firehose', 'SQS'],
      github: 'https://github.com/pokharaj',
      link: 'https://cam-archive-logger.com'
    },
    {
      name: 'Water Loss Management(WLM) System',
      description: 'The Water Loss Management System is focused on supporting water utilities in monitoring their infrastructure and optimizing their operations through advanced analytics. It targets the growing challenge of non-revenue water loss - treated drinking water that is lost due to leaks, theft, or other causes. It includes real-time leak detection, identification of pipe network assets at risk of failure, operational simulations, meter data analytics, and water quality monitoring. It effectively integrates advanced software and hardware to enable water utilities to reduce energy and water wastage in real-time without compromising water quality and hydraulic standards.',
      technologies: ['Java', 'Spring Boot', 'MongoDB', 'Microservices'],
      github: 'https://github.com/pokharaj',
      link: 'https://demo-water-management.com'
    }
  ]);

  protected readonly contactInfo = signal({
    email: this.email(),
    phone: this.phone(),
    location: this.location(),
    linkedin: this.linkedin(),
    github: this.github()
  });

  protected readonly theme = signal<'light' | 'dark'>(this.getInitialTheme());

  constructor() {
    effect(() => {
      const theme = this.theme();
      this.applyTheme(theme);
      localStorage.setItem('theme', theme);
    });
  }

  protected toggleTheme(): void {
    this.theme.set(this.theme() === 'light' ? 'dark' : 'light');
  }

  private getInitialTheme(): 'light' | 'dark' {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') return saved;
      // Optionally, use prefers-color-scheme
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light';
  }

  private applyTheme(theme: 'light' | 'dark') {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark-theme', theme === 'dark');
    }
  }

  // Access to window object for external links
  protected readonly window = typeof window !== 'undefined' ? window : null;

  // Scroll to specific section
  scrollToSection(sectionId: string): void {
    if (typeof document !== 'undefined') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
