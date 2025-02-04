import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view2',
  standalone: true,
  imports: [FormsModule], // Import FormsModule here
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.scss'],
})
export class View2Component {
  user = { name: '', email: '' }; // Object to store user data

  constructor(private http: HttpClient) {}

  addUser(): void {
    const apiUrl = 'http://localhost:8081/api/view2'; // Endpoint for adding a user
    this.http.post(apiUrl, this.user).subscribe({
      next: (response) => {
        console.log('User added successfully!', response);
        alert('User added successfully!');
      },
      error: (err) => {
        console.error('Error adding user:', err);
        alert('Failed to add user.');
      },
    });
  }
}
