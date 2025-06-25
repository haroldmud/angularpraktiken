import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishlistItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  item = [
    new WishItem('Learn angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Go back home')
  ]
  title = 'wishlist'
}
