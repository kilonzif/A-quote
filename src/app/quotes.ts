export class Quotes {
  map(arg0: (chosen: any) => any): any {
    throw new Error('Method not implemented.');
  }
  find(arg0: (selected: any) => boolean): any {
    throw new Error('Method not implemented.');
  }
  indexOf(upvotedQuote: any): number {
    throw new Error('Method not implemented.');
  }
  constructor(
    public id: number,
    public quoteTitle: string,
    public quoteText: string,
    public authorName: string,
    public userName: string,
    public datePosted: Date,
    public likes: number,
    public dislikes: number,
    public showDetails: boolean,
    public color: string,
    public isFavorite: boolean
  ) {}
}
