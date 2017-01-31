"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var messages_component_1 = require("./messages.component");
var messages_service_1 = require("./messages.service");
var images_service_1 = require("./images.service");
var favorite_component_1 = require("./favorite.component");
var like_component_1 = require("./like.component");
var voter_component_1 = require("./voter.component");
var summary_pipe_1 = require("./summary.pipe");
var zippy_component_1 = require("./zippy.component");
var forms_1 = require("@angular/forms");
var contact_form_component_1 = require("./contact-form.component");
var subscription_form_component_1 = require("./subscription-form.component");
var http_1 = require("@angular/http");
var github_user_page_component_1 = require("./github-user-page.component");
var router_1 = require("@angular/router");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule, http_1.JsonpModule, router_1.RouterModule],
        declarations: [app_component_1.AppComponent, messages_component_1.MessagesComponent, favorite_component_1.FavoriteComponent, like_component_1.LikeComponent, voter_component_1.VoterComponent, summary_pipe_1.SummaryPipe, zippy_component_1.ZippyComponent, contact_form_component_1.ContactFormComponent, subscription_form_component_1.SignUpFormComponent, github_user_page_component_1.GithubUserPageComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [messages_service_1.MessagesService, images_service_1.ImagesService]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map