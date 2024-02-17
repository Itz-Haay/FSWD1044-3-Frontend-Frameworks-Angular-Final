import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card';
import { CardService } from '../../services/card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  cardList: Card[] = [];

  constructor(private cardService: CardService, private router: Router) { }

  ngOnInit(): void {
    this.getCards();
  }

  getCards() {
    this.cardService.getAllCards().subscribe(allCards => {
      this.cardList = allCards
    })
  }

  addCard() {
    this.router.navigate(['/add'])
  }
  
  viewCard(cardId: number) {
    this.router.navigate(['/products', cardId])
  }

  editCard(cardId: number) {
    this.router.navigate(['/edit', cardId])
  }

  deleteCard(cardId: number) {
    this.cardService.deleteCardById(cardId).subscribe(() => {
    this.getCards()
  });
  }

}
