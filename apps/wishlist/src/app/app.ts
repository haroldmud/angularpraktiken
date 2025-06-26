import { Component } from '@angular/core';
import { WishItems } from '../shared/model/wishlist'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[CommonModule, FormsModule],
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

  newWish = ''
  maxlength = 30
  charChounter = 0

  toggleItem(item: WishItems) {
    item.isFulfilled = !item.isFulfilled
  }

  addNewWish() {
    this.List.push(new WishItems(this.newWish))
    this.newWish = ''
  }

  onNewWishChange(value: string) {
    console.log('content change to:', value)
    this.charChounter = value.length
  }
}
