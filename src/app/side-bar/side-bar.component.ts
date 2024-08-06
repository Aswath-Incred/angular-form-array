import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule,NgFor],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent {
  sideList: Array<string> = [
    'Dashboard',
    'Personal Details',
    'Terms and Conditions',
    'Exit',
  ];
}
