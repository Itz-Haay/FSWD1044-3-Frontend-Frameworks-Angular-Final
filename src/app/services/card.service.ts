import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {


  datasource: string = "http://localhost:3000/cards/"

  constructor(private http: HttpClient) { }

  getAllCards(url?: string): Observable<Card[]>{
    return this.http.get<Card[]>(url || this.datasource);
  }

  getCardById(id: number): Observable<Card> {
    return this.http.get<Card>(this.datasource + id);
  }

  createNewCard(newCard: Card): Observable<Card> {
    if (typeof newCard.id !== 'string') {
      newCard.id = newCard.id.toString();
    }
    return this.http.post<Card>(this.datasource, newCard);
  }

  editCardById(id: number, editCard: Card): Observable<Card> {
    return this.http.put<Card>(this.datasource + id, editCard);
  }

  deleteCardById(id: number): Observable<Card>{
    return this.http.delete<any>(this.datasource + id);
  }

  searchProducts(keyword: string): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.datasource}?q=${keyword}`);
  }

}
