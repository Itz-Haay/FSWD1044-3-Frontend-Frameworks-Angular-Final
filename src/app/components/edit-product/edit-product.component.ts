import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card';
import { CardService } from '../../services/card.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit {

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

  onSubmit() {
    this.cardService.editCardById(this.id, this.currentCard).subscribe(edittedCard => {
      console.log(edittedCard);
      this.router.navigateByUrl("/products");
    })
  }
}
