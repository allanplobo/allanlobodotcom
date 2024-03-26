import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { TopbarComponent } from './../../core/components/topbar/topbar.component';
import { jobsFeedbacks } from './../../core/models/feedbacks';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TopbarComponent, NgOptimizedImage, RouterLink, FontAwesomeModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  feedbacks = jobsFeedbacks;
  emailIcon = faEnvelope;
  linkedInIcon = faLinkedin;
}
