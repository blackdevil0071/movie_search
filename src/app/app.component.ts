// app.component.ts
import { Component } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  searchQuery = '';
  movies: any[] = [];
  selectedMovie: any = null;

  constructor(private movieService: MovieService) {}

  searchMovies() {
    this.movieService.searchMovies(this.searchQuery).subscribe((result) => {
      this.movies = result;
      this.selectedMovie = null;
    });
  }

  showMovieDetails(movie: any) {
    this.selectedMovie = movie;
  }
}
