import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card';
import { CardService } from '../../services/card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {

  newCard: Card = new Card();

  constructor(private cardService: CardService, private router: Router) { }

  ngOnInit(): void {
    this.cardService.getAllCards().subscribe(cards => {
      const highestId = Math.max(...cards.map(card => card.id));
      this.newCard.id = highestId + 1;
    });
  }

  onSubmit() {
    this.cardService.createNewCard(this.newCard).subscribe(response => {
      console.log(response);
      this.router.navigateByUrl("/products")
    })
  }

}
