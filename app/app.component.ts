import {Component} from '@angular/core';
import {SummaryPipe} from './summary.pipe'


@Component({
    selector: 'my-app',
    template: `
      <favorite [isFavorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
      <like [likeCount]="likes.likeCount" [isLiked]="likes.isLiked"></like>
      <div>
        {{post.body | summary:100}}
      </div>
      <zippy title="Zipyyyyyyy">
      Yes this is zipppedpepd 
      </zippy>
      <voter [voteCount]="votes.voteCount"></voter>
      <messages></messages>
      <zippy title="Title of Zippy 1">
        Content of Zippy 1
      </zippy>
      <zippy title="Title of Zippy 2">
        Content of Zippy 2
      </zippy>
     <br/>
     
    `
})
export class AppComponent { 
  likes = {
    likeCount: 109,
    isLiked: false
  }

  votes = {
    voteCount: 99
  }

  post = {
    title: "Title",
    isFavorite: true,
    body: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget lorem nec urna convallis finibus. Cras eget nulla odio. Duis porttitor nulla sit amet augue lacinia, eget convallis dui convallis. In ac nisi leo. Donec vitae odio nunc. Curabitur tempor, arcu ut placerat laoreet, mi leo dictum justo, sed consequat tortor mi convallis magna. Suspendisse sed suscipit ante, at faucibus felis. Donec vulputate lorem sed quam dignissim sollicitudin vitae ut metus. Nunc sagittis rutrum ultrices. Curabitur sit amet mollis eros. Sed dapibus metus et purus vehicula posuere. Proin efficitur sit amet felis iaculis auctor. Duis fringilla sem eget sem molestie consectetur.
    `
  }

  onFavoriteChange($event)
  {
    console.log($event);
  }

}