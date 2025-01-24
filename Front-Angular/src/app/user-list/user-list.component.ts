import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule], // Add HttpClientModule here
})
export class UserListComponent implements OnInit {
  users: any[] = []; // Empty array to hold backend data

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:8080/api/users').subscribe((data: any) => {
      this.users = data; // Replace with backend data
    });
  }
}
