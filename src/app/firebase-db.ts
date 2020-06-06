export class Book {
  name: string;
  [key:string]: any;

  constructor(obj){
    Object.keys(obj).forEach(x => this[x] = obj[x]);
  }
}