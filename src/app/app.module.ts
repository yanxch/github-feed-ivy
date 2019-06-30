import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared.module';
import { CardComponent } from './components/card/card.component';
import { CardHeaderComponent, CardHeaderTitleComponent, CardHeaderSubTitleComponent } from './components/card/card-header.component';
import { GithubSearchFormComponent } from './components/github-search-form/github-search-form.component';
import { GithubSearchResultComponent } from './components/github-search-result/github-search-result.component';
import { CommitsComponent } from './components/commits/commits.component';
import { FailureComponent } from './components/failure/failure.component';
import { CommitsContainer } from './container/commits.container';
import {CommitsView} from './business/commis/commits-view';
import {CenteredDirective} from './components/centered/centered.directive';
import {RouteParamsDirective} from './components/router/route-params.directive';
import {LoadingComponent} from './components/loading/loading.component';
import {RouteComponent} from './components/router/route.component';
import {HttpClientModule} from '@angular/common/http';
import {AvatarContainer} from './container/avatar.container';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardHeaderComponent,
    CardHeaderTitleComponent,
    CardHeaderSubTitleComponent,
    GithubSearchFormComponent,
    GithubSearchResultComponent,
    CommitsComponent,
    FailureComponent,
    LoadingComponent,
    RouteComponent,
    //
    // Directive
    CenteredDirective,
    RouteParamsDirective,
    //
    // Container
    CommitsContainer,
    AvatarContainer,
    //
    // Views
    CommitsView
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*

Compile to Ivy at least on time:
Had to run: node_modules/.bin/ngc -p tsconfig.app.json
before I was able to serve the app via ng serve --aot

The error was "Pipes could not be found with Ivy enabled "

*/