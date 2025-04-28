import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
  events: any[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents() {
    this.eventService.getEvents().subscribe(data => {
      this.events = data;
    });
  }

  // ✅ Updated to delete by name instead of id
  deleteEvent(name: string) {
    if (confirm(`Are you sure you want to delete "${name}"?`)) {
      this.eventService.deleteEvent(name).subscribe(() => {
        this.loadEvents();
      });
    }
  }
}
