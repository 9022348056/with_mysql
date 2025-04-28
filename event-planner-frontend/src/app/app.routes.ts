import { Routes } from '@angular/router';
import { EventListComponent } from './components/event-list/event-list.component';
import { AddEventComponent } from './components/add-event/add-event.component';

export const routes: Routes = [
  { path: '', component: EventListComponent },
  { path: 'add', component: AddEventComponent }
];
