import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CardLayoutComponent} from "./component/card-layout/card-layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'layout-animation';
}
