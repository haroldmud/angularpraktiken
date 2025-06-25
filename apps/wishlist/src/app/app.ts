import { Component } from '@angular/core';
import { WishItems } from '../shared/model/wishlist'

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  List = [
    new WishItems('Brand new mercedes c200'),
    new WishItems('Learn Angular', true),
    new WishItems('Finish the project')
  ]
  protected title = 'wishlist'
}
