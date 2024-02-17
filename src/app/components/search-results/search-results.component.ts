import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card';
import { CardService } from '../../services/card.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit{
  searchKeyword: string = '';
  searchResults: Card[] = [];

  constructor(private cardService: CardService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCards()
  }

  getCards() {
    this.cardService.getAllCards().subscribe(allCards => {
      this.searchResults = allCards
    })
  }

  search(keyword: string): void {
    this.cardService.searchProducts(keyword).subscribe(data =>{
      this.searchResults = data;
      console.log(data);
    })

  }



}
