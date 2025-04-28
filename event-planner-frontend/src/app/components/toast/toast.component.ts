import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../services/toast.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {
  message: string = '';
  showToast: boolean = false;

  constructor(private toastService: ToastService) { }

  ngOnInit(): void {
    this.toastService.toastMessage$.subscribe(message => {
      this.message = message;
      this.showToast = true;
      setTimeout(() => this.showToast = false, 3000); // Hide after 3 seconds
    });
  }
}
