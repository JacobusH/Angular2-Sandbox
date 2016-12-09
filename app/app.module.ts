import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {MessagesComponent} from './messages.component';
import {MessagesService} from './messages.service';
import {ImagesService} from './images.service';
import {FavoriteComponent} from './favorite.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, MessagesComponent, FavoriteComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MessagesService,  ImagesService]
})

export class AppModule { }
