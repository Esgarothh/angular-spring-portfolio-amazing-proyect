import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css'],
  standalone: true,
  imports: [CommonModule], // No HttpClientModule here
})
export class View1Component implements OnInit  {
  users: any[] = []; // Empty array to hold backend data

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:8081/api/users').subscribe((data: any) => {
      console.log(data)
      this.users = data; // Replace with backend data
    });
  }
}
