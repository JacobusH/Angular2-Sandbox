import { ModuleWithProviders } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
// import {HomeComponenet} from './home.component';
// import {PhotosComponenet} from './photos/photos.component';
import {PhotoDetailsComponent} from './photos/photo-details.component';
// import {MessagesComponenet} from './messages/messages.component';
// import {NotFoundComponenet} from './not-found.component';

export const routing:ModuleWithProviders = RouterModule.forRoot([
    // {path: '', component: HomeComponent},
    // {path: 'messages', component: MessagesComponent},
    {path: 'photos/:id', component: PhotoDetailsComponent},
    // {path: 'photos', component: PhotosComponent},
    // {path: '**', component: NotFoundComponent},

]);
