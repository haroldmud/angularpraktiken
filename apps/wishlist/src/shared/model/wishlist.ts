export class WishItems {
  constructor(public wishText: string, public isFulfilled = false ) {
    this.wishText = wishText
    this.isFulfilled = isFulfilled
  }
}