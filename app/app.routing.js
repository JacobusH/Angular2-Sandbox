"use strict";
var router_1 = require("@angular/router");
// import {HomeComponenet} from './home.component';
// import {PhotosComponenet} from './photos/photos.component';
var photo_details_component_1 = require("./photos/photo-details.component");
// import {MessagesComponenet} from './messages/messages.component';
// import {NotFoundComponenet} from './not-found.component';
exports.routing = router_1.RouterModule.forRoot([
    // {path: '', component: HomeComponent},
    // {path: 'messages', component: MessagesComponent},
    { path: 'photos/:id', component: photo_details_component_1.PhotoDetailsComponent },
]);
//# sourceMappingURL=app.routing.js.map