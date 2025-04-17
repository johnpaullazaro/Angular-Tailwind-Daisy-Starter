import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./commonui/navbar/navbar.component"; 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  template: ` 
    <navbar /> 
    <main> 
    <router-outlet></router-outlet> 
    </main>
  `,
  styles: [],
})
export class AppComponent {
  title = 'myapp';
}
