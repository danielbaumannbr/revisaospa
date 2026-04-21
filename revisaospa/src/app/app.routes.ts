import { Routes } from '@angular/router';
import { Angular } from './page/angular/angular';
import { Tailwind } from './page/tailwind/tailwind';

export const routes: Routes = [
    {path:'angular',component:Angular},
    {path:'tailwind',component:Tailwind}
];
