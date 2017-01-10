import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {MessagesComponent} from './messages.component';
import {MessagesService} from './messages.service';
import {ImagesService} from './images.service';
import {FavoriteComponent} from './favorite.component';
import {LikeComponent} from './like.component';
import {VoterComponent} from './voter.component';
import {SummaryPipe} from './summary.pipe';
import {ZippyComponent} from './zippy.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ContactFormComponent} from './contact-form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, MessagesComponent, FavoriteComponent, LikeComponent, VoterComponent, SummaryPipe, ZippyComponent, ContactFormComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MessagesService,  ImagesService]
})

export class AppModule { }
