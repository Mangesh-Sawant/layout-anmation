import { Component } from '@angular/core';

@Component({
  selector: 'app-card-layout',
  standalone: true,
  imports: [],
  templateUrl: './card-layout.component.html',
  styleUrl: './card-layout.component.scss'
})
export class CardLayoutComponent {
  isExpanded = false; // Control the state of the layout

  toggleCards() {
    this.isExpanded = !this.isExpanded; // Toggle the expanded state
  }
}
