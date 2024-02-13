import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card';
import { CardService } from '../../services/card.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  id: number = 0;

  currentCard: Card = new Card();

  constructor(private cardService: CardService, private actRoute: ActivatedRoute) {}


  ngOnInit(): void {
    const routeId = this.actRoute.snapshot.paramMap.get("id") ?? "";
    this.id = parseInt(routeId);
    this.cardService.getCardById(this.id).subscribe(foundCard => {
      console.log(foundCard);
      this.currentCard = foundCard;
    });
  }
}
