import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'final-project';
  searchKeyword: string = '';

  constructor(private router: Router) { }

  searchProducts() {
    if(this.searchKeyword.trim() !== '') {
      this.router.navigate(['/search-results', this.searchKeyword]);
    }
  }
}
