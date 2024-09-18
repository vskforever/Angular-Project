import { Component, OnInit } from '@angular/core';
import { MyService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'HTTP Service Example';
  posts: any[] = [];
  errorMessage: string = '';

  constructor(private myService: MyService) {}

  ngOnInit() {
    // Fetch data when the component loads
    this.myService.getData().subscribe(
      (data) => {
        this.posts = data;
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }
}
sortPosts() {
  this.posts.sort((a, b) => a.title.localeCompare(b.title));
}
