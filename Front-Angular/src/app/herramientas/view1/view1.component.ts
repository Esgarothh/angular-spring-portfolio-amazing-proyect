import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';

// Angular Material imports (for cards, buttons)
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

// The DragDropModule for cdkDropList, cdkDrag, etc.
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-view1',
  standalone: true,
  // Import all modules needed by this component template
  imports: [
    CommonModule,
    DragDropModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss']
})
export class View1Component implements OnInit {
  users: any[] = [];


  constructor(private http: HttpClient) {}

  ngOnInit(): void {
     this.http.get('http://localhost:8081/api/users').subscribe((data: any) => {
       this.users = data;
     });
  }

  // Handle the drag-and-drop reordering
  drop(event: CdkDragDrop<any[]>): void {
    moveItemInArray(this.users, event.previousIndex, event.currentIndex);
  }
}
