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
  listFilter = "all"

  //The reason why we're using the getter here is to make sure the update of our list of wish is happens real time(automatically), that's basically how we handle changes of state in angular
  //It's not treated like a function but rather like an array in this case, I mean you can see the array type down there
  get visibleItems(): WishItems[] {
    const value = this.listFilter
    if(value === "unfulfilled") {
      return this.List.filter(item => !item.isFulfilled)
    } else if(value === "fulfilled") {
      return this.List.filter(item => item.isFulfilled)
    } else {
      return this.List
    }
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
