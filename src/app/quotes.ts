export class Quotes {
  constructor(
    public id: number,
    public quoteTitle: string,
    public quote: string,
    public authorName: string,
    public userName: string,
    public datePosted: Date,
    public likes: number,
    public dislikes: number,
    public showDetails: boolean
  ) {}
}
