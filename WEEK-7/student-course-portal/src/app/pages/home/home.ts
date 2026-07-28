import {
  Component,
  OnInit
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment';

interface Course {
  id: string;
  name: string;
  duration: string;
  fee: number;
  description: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  courses: Course[] = [];

  enrolledCourses: Course[] = [];

  totalCourses = 0;

  studentName = 'Surya';

  completedCourses = 0;

  progress = 0;

  recentActivities = [
    {
      icon: '📚',
      title: 'Welcome to Student Course Portal',
      message: 'Start exploring available courses.',
      time: 'Just now'
    }
  ];

  constructor(
    private courseService: CourseService,
    private enrollmentService:
      EnrollmentService
  ) {}

  ngOnInit(): void {

    this.loadCourses();

    this.listenForEnrollment();

  }

  loadCourses(): void {

    this.courseService
      .getCourses()
      .subscribe({

        next: (
          data: Course[]
        ) => {

          this.courses = data;

          this.totalCourses =
            data.length;

          this.updateEnrolledCourses();

        },

        error: (
          error
        ) => {

          console.error(
            'Error loading courses:',
            error
          );

        }

      });

  }

 listenForEnrollment(): void {

  this.enrollmentService
    .enrolledCourses$
    .subscribe(
      (enrolledIds: string[]) => {

        console.log(
          'Dashboard received IDs:',
          enrolledIds
        );

        this.enrolledCourses =
          this.courses.filter(
            course =>
              enrolledIds.includes(
                String(course.id)
              )
          );

        console.log(
          'Dashboard enrolled courses:',
          this.enrolledCourses
        );

        this.calculateProgress();

      }
    );

}

  updateEnrolledCourses(): void {

    const enrolledIds =
      this.enrollmentService
        .getEnrolledCourseIds();

    this.enrolledCourses =
      this.courses.filter(
        course =>
          enrolledIds.includes(
            String(course.id)
          )
      );

    this.calculateProgress();

  }

  calculateProgress(): void {

    if (
      this.enrolledCourses.length === 0
    ) {

      this.progress = 0;

    } else {

      this.progress =
        Math.round(
          (
            this.completedCourses /
            this.enrolledCourses.length
          ) * 100
        );

    }

  }

  get enrolledCount(): number {

    return (
      this.enrolledCourses.length
    );

  }

  get availableCourses(): number {

    return (
      this.totalCourses -
      this.enrolledCount
    );

  }

}