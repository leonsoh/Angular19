import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetworkService } from '../../network/network.service';

// The model of the Data
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-create-rules',
  imports: [CommonModule],
  templateUrl: './create-rules.component.html',
  styleUrl: './create-rules.component.scss'
})
export class CreateRulesComponent {
  // Holds the data of Post
  posts: Post[] = [];
  // Error messages, if any
  errorMessage!: string;

  // Init with injecting NetworkService
  constructor(private networkService: NetworkService) {}

  ngOnInit() {
    // call getAllPosts from Network layer, subscribing to the posts
    this.networkService.getAllPosts().subscribe({
      //Observer next
      next: (posts) => {
        this.posts = posts;
        console.log(this.posts);
      },
      // Observer error
      error: (error) => {
        console.error('Error loading JSON:', error);
        this.errorMessage = error;
      }
    })
  }
}
