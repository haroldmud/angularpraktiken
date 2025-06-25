export class WishItem {
  constructor(public wishText: string, public isComplete = false ) {
    this.wishText = wishText
    this.isComplete = isComplete
  }
}
