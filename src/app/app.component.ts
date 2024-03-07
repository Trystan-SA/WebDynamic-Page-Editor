import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './Layout/layout.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [LayoutComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {}
