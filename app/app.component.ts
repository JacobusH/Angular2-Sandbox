import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
      <favorite [isFavorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
      <messages></messages>
    `
})
export class AppComponent { 

  post = {
    title: "Title",
    isFavorite: true
  }

  onFavoriteChange($event)
  {
    console.log($event);
  }

}