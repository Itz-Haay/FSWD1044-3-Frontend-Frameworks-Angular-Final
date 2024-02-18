import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card';
import { CardService } from '../../services/card.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  id: number = 0;

  currentCard: Card = new Card();

  constructor(private cardService: CardService, private actRoute: ActivatedRoute, private router: Router) {}


  ngOnInit(): void {
    const routeId = this.actRoute.snapshot.paramMap.get("id") ?? "";
    this.id = parseInt(routeId);
    this.cardService.getCardById(this.id).subscribe(foundCard => {
      console.log(foundCard);
      this.currentCard = foundCard;
    });
  }

  editCard(cardId: number) {
    this.router.navigate(['/edit', cardId])
  }

}
