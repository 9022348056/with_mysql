import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventService } from '../../services/event.service';
import { Router, RouterModule } from '@angular/router';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-add-event',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
  title: string = '';
  description: string = '';
  date: string = '';

  constructor(
    private eventService: EventService,
    private router: Router,
    private toastService: ToastService
  ) {}

  addEvent() {
    const event = {
      title: this.title,
      description: this.description,
      date: this.date
    };

    this.eventService.addEvent(event).subscribe(() => {
      this.toastService.showToast('Event Added Successfully 🎉');
      this.router.navigate(['/']);
    });
  }
}
