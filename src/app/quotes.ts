export class Quotes {
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
    public color: string
  ) {}
}
