import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  featuredItems: Card[] = [];

  constructor(private cardService: CardService) { }


  ngOnInit(): void {
    this.getFeaturedItems();
  }

  getFeaturedItems() {
    this.cardService.getAllCards().subscribe(listCards => {
      const randomCards = this.pickRandomCards(listCards.length, 3);
      this.featuredItems = randomCards.map(index => listCards[index])
    });
  }

  pickRandomCards(arraylength: number, count: number): number[] {
    const indexes: any[] = [];
    while(indexes.length < count) {
      const randIndex = Math.floor(Math.random()* arraylength);
      if(!indexes.includes(randIndex)) {
        indexes.push(randIndex);
      }
    }
    return indexes;
  }

  



    


}
