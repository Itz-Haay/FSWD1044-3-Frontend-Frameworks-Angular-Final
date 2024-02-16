import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card';
import { CardService } from '../../services/card.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent implements OnInit{
  searchKeyword: string = '';
  searchResults: Card[] = [];

  constructor(private cardService: CardService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.searchKeyword = param.get('keyword') || '';
      this.searchProducts(this.searchKeyword);
    })    
  }

  searchProducts(keyword: string) {
    if (keyword.trim() !== '') {
      this.cardService.searchProducts(keyword).subscribe(result => {
        this.searchResults = result;
        console.log(this.searchResults);
      })
    }
  }

}
