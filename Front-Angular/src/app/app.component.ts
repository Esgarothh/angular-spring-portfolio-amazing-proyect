import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
// Import your MenuComponent if it’s also standalone
import { MenuComponent } from './herramientas/menu/menu.component';

@Component({
  standalone: true,
  selector: 'app-root',
  // Here is where you import the Angular modules you need for THIS component’s template
  imports: [
    CommonModule,
    RouterOutlet,
    MenuComponent
  ],
  // The template is basically what used to be in app.component.html
  template: `
    <app-menu></app-menu>
    <main class="main-content">
      <div class="content-card">
        <h1>Aplicacion Angular</h1>
        <router-outlet></router-outlet>
      </div>
    </main>
  `,
  styleUrls: ['./app.component.scss'] // optional
})
export class AppComponent {}