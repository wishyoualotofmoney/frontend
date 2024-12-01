import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent }, // Главная страница
  { path: 'about', component: AppComponent, data: { section: 'about' } } // Маршрут для "О нашей компании"
];