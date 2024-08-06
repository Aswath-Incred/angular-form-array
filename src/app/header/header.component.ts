import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  title:string = 'Angular Project';
  navList: Array<string> = ['Home', 'About Us', 'Contact Us'];
}
