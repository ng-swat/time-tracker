import { Injectable } from '@angular/core';

@Injectable()
export class ProfileService {

  constructor() { }

  GetContainerGridSize() {
    return [
      {text: 'Basic Data + Picture', cols: 12, rows: 1, color: 'purple'},
      {text: 'Editable Data', cols: 12, rows: 2, color: '#DDBDF1'},
    ];
  }

  GetTopGridData() {
    return [
      {text: 'Picture', cols: 3, rows: 1, color: 'red'},
      {text: 'Name', cols: 3, rows: 1, color: 'blue'},
      {text: 'Comapny', cols: 3, rows: 1, color: 'green'}
    ];
  }

}
