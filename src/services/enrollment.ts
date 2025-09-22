import { type EnrollmentData } from './payfast';

export interface Course {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  image?: string;
  isActive: boolean;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateEnrollmentRequest {
  userId: string;
  courseId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
}

export interface EnrollmentResponse {
  success: boolean;
  enrollment?: EnrollmentData;
  error?: string;
}

export class EnrollmentService {
  private enrollments: Map<string, EnrollmentData> = new Map();
  private courses: Map<string, Course> = new Map();
  private users: Map<string, User> = new Map();

  constructor() {
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // AI Certification Courses
    const sampleCourses: Course[] = [
      // AI Essentials
      {
        id: 'ai-essentials-1',
        name: 'AI+ Everyone™',
        description: 'An introductory course that provides a comprehensive overview of AI concepts, applications, and implications for everyone.',
        price: 2999.00,
        currency: 'ZAR',
        duration: '4 weeks',
        level: 'beginner',
        category: 'AI Essentials',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=250&fit=crop&crop=center',
        isActive: true,
      },
      {
        id: 'ai-essentials-2',
        name: 'AI+ Executive™',
        description: 'Designed for executives to understand AI strategy, implementation, and business impact.',
        price: 4999.00,
        currency: 'ZAR',
        duration: '6 weeks',
        level: 'intermediate',
        category: 'AI Essentials',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center',
        isActive: true,
      },
      {
        id: 'ai-essentials-3',
        name: 'AI+ Prompt Engineer Level 1™',
        description: 'Learn the fundamentals of prompt engineering and how to effectively interact with AI models.',
        price: 3999.00,
        currency: 'ZAR',
        duration: '5 weeks',
        level: 'beginner',
        category: 'AI Essentials',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324b6cee?w=400&h=250&fit=crop&crop=center',
        isActive: true,
      },

      // AI Business
      {
        id: 'ai-business-1',
        name: 'AI+ Project Manager™',
        description: 'Learn to manage AI projects effectively, from planning to deployment and maintenance.',
        price: 5999.00,
        currency: 'ZAR',
        duration: '8 weeks',
        level: 'intermediate',
        category: 'AI Business',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop&crop=center',
        isActive: true,
      },
      {
        id: 'ai-business-2',
        name: 'AI+ Sales™',
        description: 'Leverage AI to enhance sales strategies, customer insights, and revenue growth.',
        price: 5499.00,
        currency: 'ZAR',
        duration: '6 weeks',
        level: 'intermediate',
        category: 'AI Business',
        image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&h=250&fit=crop&crop=center',
        isActive: true,
      },
      {
        id: 'ai-business-3',
        name: 'AI+ Marketing™',
        description: 'Transform marketing strategies with AI-powered analytics, personalization, and automation.',
        price: 5499.00,
        currency: 'ZAR',
        duration: '6 weeks',
        level: 'intermediate',
        category: 'AI Business',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop&crop=center',
        isActive: true,
      },

      // AI Security
      {
        id: 'ai-security-1',
        name: 'AI+ Security Level 1™',
        description: 'Fundamentals of AI security, including threat modeling and secure AI system design.',
        price: 6999.00,
        currency: 'ZAR',
        duration: '8 weeks',
        level: 'advanced',
        category: 'AI Security',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop&crop=center',
        isActive: true,
      },
      {
        id: 'ai-security-2',
        name: 'AI+ Ethical Hacker™',
        description: 'Learn to identify and mitigate security vulnerabilities in AI systems through ethical hacking.',
        price: 7499.00,
        currency: 'ZAR',
        duration: '10 weeks',
        level: 'advanced',
        category: 'AI Security',
        image: 'https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?w=400&h=250&fit=crop&crop=center',
        isActive: true,
      },

      // AI Cloud
      {
        id: 'ai-cloud-1',
        name: 'AI+ Cloud™',
        description: 'Master cloud-based AI services and infrastructure for scalable AI solutions.',
        price: 6499.00,
        currency: 'ZAR',
        duration: '8 weeks',
        level: 'intermediate',
        category: 'AI Cloud',
        image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=400&h=250&fit=crop&crop=center',
        isActive: true,
      },
      {
        id: 'ai-cloud-2',
        name: 'AI+ Architect™',
        description: 'Design and implement enterprise-grade AI solutions with a focus on scalability and reliability.',
        price: 7999.00,
        currency: 'ZAR',
        duration: '12 weeks',
        level: 'advanced',
        category: 'AI Cloud',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop&crop=center',
        isActive: true,
      },

      // AI Development
      {
        id: 'ai-dev-1',
        name: 'AI+ Developer™',
        description: 'Comprehensive training in AI development, from machine learning to deployment.',
        price: 6999.00,
        currency: 'ZAR',
        duration: '10 weeks',
        level: 'intermediate',
        category: 'AI Development',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop&crop=center',
        isActive: true,
      },
      {
        id: 'ai-dev-2',
        name: 'AI+ Engineer™',
        description: 'Advanced engineering principles for building production-grade AI systems.',
        price: 8499.00,
        currency: 'ZAR',
        duration: '12 weeks',
        level: 'advanced',
        category: 'AI Development',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop&crop=center',
        isActive: true,
      },
      {
        id: 'ai-dev-3',
        name: 'AI+ Prompt Engineer Level 2™',
        description: 'Advanced techniques in prompt engineering for complex AI interactions.',
        price: 5999.00,
        currency: 'ZAR',
        duration: '8 weeks',
        level: 'intermediate',
        category: 'AI Development',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324b6cee?w=400&h=250&fit=crop&crop=center',
        isActive: true,
      },

      // AI Specialization
      {
        id: 'ai-spec-1',
        name: 'AI+ Healthcare™',
        description: 'Applications of AI in healthcare, from diagnostics to personalized medicine.',
        price: 7499.00,
        currency: 'ZAR',
        duration: '10 weeks',
        level: 'advanced',
        category: 'AI Specialization',
        image: 'https://images.unsplash.com/photo-1505751172876-fa1863c5959d?w=400&h=250&fit=crop&crop=center',
        isActive: true,
      },
      {
        id: 'ai-spec-2',
        name: 'AI+ Government™',
        description: 'Implementing AI solutions in government services and public sector applications.',
        price: 6999.00,
        currency: 'ZAR',
        duration: '8 weeks',
        level: 'advanced',
        category: 'AI Specialization',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop&crop=center',
        isActive: true,
      },
      {
        id: 'ai-spec-3',
        name: 'AI+ Policy Maker™',
        description: 'Understanding AI policy, regulation, and governance for effective decision-making.',
        price: 5999.00,
        currency: 'ZAR',
        duration: '8 weeks',
        level: 'intermediate',
        category: 'AI Specialization',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center',
        isActive: true,
      },

      // AI Data & Robotics
      {
        id: 'ai-data-1',
        name: 'AI+ Data™',
        description: 'Master data management, analysis, and visualization for AI applications.',
        price: 6499.00,
        currency: 'ZAR',
        duration: '10 weeks',
        level: 'intermediate',
        category: 'AI Data & Robotics',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center',
        isActive: true,
      },
      {
        id: 'ai-data-2',
        name: 'AI+ Quantum™',
        description: 'Explore the intersection of quantum computing and artificial intelligence.',
        price: 8999.00,
        currency: 'ZAR',
        duration: '12 weeks',
        level: 'advanced',
        category: 'AI Data & Robotics',
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop&crop=center',
        isActive: true,
      },
      {
        id: 'ai-data-3',
        name: 'AI+ Robotics™',
        description: 'Integrate AI with robotics for intelligent automation and autonomous systems.',
        price: 7999.00,
        currency: 'ZAR',
        duration: '12 weeks',
        level: 'advanced',
        category: 'AI Data & Robotics',
        image: 'https://images.unsplash.com/photo-1534723452862-4c8743d9a3aa?w=400&h=250&fit=crop&crop=center',
        isActive: true,
      },

      // AI Learning & Education
      {
        id: 'ai-edu-1',
        name: 'AI+ Learning & Development™',
        description: 'Enhance learning and development programs with AI-powered tools and methodologies.',
        price: 5499.00,
        currency: 'ZAR',
        duration: '8 weeks',
        level: 'intermediate',
        category: 'AI Learning & Education',
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=250&fit=crop&crop=center',
        isActive: true,
      },
      {
        id: 'ai-edu-2',
        name: 'AI+ Educator™',
        description: 'Empower educators with AI tools and techniques for enhanced teaching and learning experiences.',
        price: 4999.00,
        currency: 'ZAR',
        duration: '6 weeks',
        level: 'intermediate',
        category: 'AI Learning & Education',
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0a?w=400&h=250&fit=crop&crop=center',
        isActive: true,
      },

      // AI Design & Creative
      {
        id: 'ai-design-1',
        name: 'AI+ Design™',
        description: 'Leverage AI in design processes for enhanced creativity and efficiency.',
        price: 5999.00,
        currency: 'ZAR',
        duration: '8 weeks',
        level: 'intermediate',
        category: 'AI Design & Creative',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop&crop=center',
        isActive: true,
      },
      {
        id: 'ai-design-2',
        name: 'AI+ UX Designer™',
        description: 'Create intuitive user experiences with AI-powered design tools and methodologies.',
        price: 6499.00,
        currency: 'ZAR',
        duration: '8 weeks',
        level: 'intermediate',
        category: 'AI Design & Creative',
        image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=400&h=250&fit=crop&crop=center',
        isActive: true,
      },

      // Blockchain & Bitcoin
      {
        id: 'blockchain-1',
        name: 'Bitcoin+ Everyone™',
        description: 'Introduction to Bitcoin and blockchain technology for beginners.',
        price: 3999.00,
        currency: 'ZAR',
        duration: '4 weeks',
        level: 'beginner',
        category: 'Blockchain & Bitcoin',
        image: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?w=400&h=250&fit=crop&crop=center',
        isActive: true,
      },
      {
        id: 'blockchain-2',
        name: 'Blockchain+ Executive™',
        description: 'Strategic insights into blockchain technology for business leaders and executives.',
        price: 6999.00,
        currency: 'ZAR',
        duration: '6 weeks',
        level: 'intermediate',
        category: 'Blockchain & Bitcoin',
        image: 'https://images.unsplash.com/photo-1622549037543-49cf07a1a9d9?w=400&h=250&fit=crop&crop=center',
        isActive: true,
      },
      {
        id: 'blockchain-3',
        name: 'Bitcoin+ Executive™',
        description: 'Advanced understanding of Bitcoin for business and investment decision-making.',
        price: 7499.00,
        currency: 'ZAR',
        duration: '6 weeks',
        level: 'intermediate',
        category: 'Blockchain & Bitcoin',
        image: 'https://images.unsplash.com/photo-1639765215259-a3e24975e41e?w=400&h=250&fit=crop&crop=center',
        isActive: true,
      }
    ];

    // Sample users
    const sampleUsers: User[] = [
      {
        id: 'user-1',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '+27123456789',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'user-2',
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@example.com',
        phone: '+27987654321',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ];

    // Initialize maps
    sampleCourses.forEach(course => this.courses.set(course.id, course));
    sampleUsers.forEach(user => this.users.set(user.id, user));
  }

  /**
   * Get all available courses
   */
  getCourses(): Course[] {
    return Array.from(this.courses.values()).filter(course => course.isActive);
  }

  /**
   * Get course by ID
   */
  getCourseById(courseId: string): Course | undefined {
    return this.courses.get(courseId);
  }

  /**
   * Get user by ID
   */
  getUserById(userId: string): User | undefined {
    return this.users.get(userId);
  }

  /**
   * Create a new enrollment
   */
  createEnrollment(request: CreateEnrollmentRequest): EnrollmentResponse {
    try {
      const course = this.courses.get(request.courseId);
      if (!course) {
        return {
          success: false,
          error: 'Course not found'
        };
      }

      const user = this.users.get(request.userId);
      if (!user) {
        return {
          success: false,
          error: 'User not found'
        };
      }

      // Check if user is already enrolled in this course
      const existingEnrollment = Array.from(this.enrollments.values())
        .find(enrollment => 
          enrollment.userId === request.userId && 
          enrollment.courseId === request.courseId &&
          enrollment.paymentStatus === 'completed'
        );

      if (existingEnrollment) {
        return {
          success: false,
          error: 'User is already enrolled in this course'
        };
      }

      const enrollment: EnrollmentData = {
        id: `enrollment-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        userId: request.userId,
        courseId: request.courseId,
        courseName: course.name,
        amount: course.price,
        currency: course.currency,
        firstName: request.firstName,
        lastName: request.lastName,
        email: request.email,
        phone: request.phone,
        paymentStatus: 'pending',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      this.enrollments.set(enrollment.id, enrollment);

      return {
        success: true,
        enrollment
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to create enrollment'
      };
    }
  }

  /**
   * Get enrollment by ID
   */
  getEnrollmentById(enrollmentId: string): EnrollmentData | undefined {
    return this.enrollments.get(enrollmentId);
  }

  /**
   * Get user enrollments
   */
  getUserEnrollments(userId: string): EnrollmentData[] {
    return Array.from(this.enrollments.values())
      .filter(enrollment => enrollment.userId === userId)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  /**
   * Update enrollment payment status
   */
  updateEnrollmentPaymentStatus(
    enrollmentId: string, 
    paymentStatus: 'pending' | 'completed' | 'failed' | 'cancelled',
    paymentId?: string
  ): boolean {
    const enrollment = this.enrollments.get(enrollmentId);
    if (!enrollment) {
      return false;
    }

    enrollment.paymentStatus = paymentStatus;
    enrollment.updatedAt = new Date();
    
    // Store additional payment info if available
    if (paymentId) {
      (enrollment as any).paymentId = paymentId;
    }

    this.enrollments.set(enrollmentId, enrollment);
    return true;
  }

  /**
   * Get enrollment statistics
   */
  getEnrollmentStats() {
    const totalEnrollments = this.enrollments.size;
    const completedEnrollments = Array.from(this.enrollments.values())
      .filter(e => e.paymentStatus === 'completed').length;
    const pendingEnrollments = Array.from(this.enrollments.values())
      .filter(e => e.paymentStatus === 'pending').length;
    const failedEnrollments = Array.from(this.enrollments.values())
      .filter(e => e.paymentStatus === 'failed').length;

    return {
      total: totalEnrollments,
      completed: completedEnrollments,
      pending: pendingEnrollments,
      failed: failedEnrollments,
      completionRate: totalEnrollments > 0 ? (completedEnrollments / totalEnrollments) * 100 : 0
    };
  }

  /**
   * Search courses by name or category
   */
  searchCourses(query: string): Course[] {
    const searchTerm = query.toLowerCase();
    return Array.from(this.courses.values())
      .filter(course => 
        course.isActive && (
          course.name.toLowerCase().includes(searchTerm) ||
          course.description.toLowerCase().includes(searchTerm) ||
          course.category.toLowerCase().includes(searchTerm)
        )
      );
  }

  /**
   * Get courses by category
   */
  getCoursesByCategory(category: string): Course[] {
    return Array.from(this.courses.values())
      .filter(course => course.isActive && course.category === category);
  }

  /**
   * Get courses by level
   */
  getCoursesByLevel(level: 'beginner' | 'intermediate' | 'advanced'): Course[] {
    return Array.from(this.courses.values())
      .filter(course => course.isActive && course.level === level);
  }
}

export const enrollmentService = new EnrollmentService();
