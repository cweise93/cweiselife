import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { techPlatforms } from '../../../data/portfolio/techPlatforms';
import { TechPlatform } from '../../../data/portfolio/techPlatforms.model';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-contact',
  imports: [
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatGridListModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  contact = {
    name: '',
    email: '',
    message: ''
  };
  phone: string | null = null;
  email: string | null = null;
  techPlatforms: TechPlatform[] = [];
  ngOnInit() {
    const phoneDigits = ['772', '971', '5116'];
    this.phone = `(${phoneDigits[0]}) ${phoneDigits[1]}-${phoneDigits[2]}`;
    const emailParts = ['cweise', '93', 'hotmail', 'com'];
    this.email = `${emailParts[0]}${emailParts[1]}@${emailParts[2]}.${emailParts[3]}`;
    this.techPlatforms = techPlatforms;
  }
  submitContactForm() {
    if (!this.contact.name || !this.contact.email || !this.contact.message) {
      alert('Please fill out all fields before submitting.');
      return;
    }
    console.info('contact', this.contact);
    fetch('https://script.google.com/macros/s/AKfycby4NR5fD28JfNHEcTzy7FZz5uUAb7LkrqCGsm00TlA7Az9jlSy_6p1YFgp0Wo3Da37gRA/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.contact)
    })
    .then(res => res.json())
    .then(res => {
      if (res.status === 'success') {
      alert('Thanks for reaching out! We’ll get back to you shortly.');
        this.contact = { name: '', email: '', message: '' };
      } else {
        alert('Something went wrong. Try again later.');
      }
    })
    .catch(err => {
      console.error(err);
      alert('There was an error submitting the form.');
    });
    this.contact = {
      name: '',
      email: '',
      message: ''
    };
  }
}
