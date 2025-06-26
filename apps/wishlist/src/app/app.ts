import { Component } from '@angular/core';
import { WishItems } from '../shared/model/wishlist'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  List: WishItems[] = [
    new WishItems('Brand new mercedes c200'),
    new WishItems('Learn Angular', true),
    new WishItems('Finish the project')
  ]

  protected title = 'wishlist'

  toggleItem(item: WishItems) {
    item.isFulfilled = !item.isFulfilled
    console.log(`${item.wishText}: ${item.isFulfilled}`)
  }

  addNewWish(value: string) {
    this.List.push(new WishItems(value))
  }
}
