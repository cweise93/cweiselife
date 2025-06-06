import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  submitContactForm() {
    if (!this.contact.name || !this.contact.email || !this.contact.message) {
      alert('Please fill out all fields before submitting.');
      return;
    }

    console.log('Form submitted:', this.contact);
    alert('Thanks for reaching out! We’ll get back to you shortly.');

    this.contact = {
      name: '',
      email: '',
      message: ''
    };
  }
}
