import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';

const app_routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
]

export const app_routing = RouterModule.forRoot (app_routes);
