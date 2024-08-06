import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FeedBackFormComponent } from './feed-back-form/feed-back-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    SideBarComponent,
    ContactFormComponent,
    FeedBackFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-project';
}
