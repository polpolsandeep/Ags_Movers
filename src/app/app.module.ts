import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadComponent } from './tophead/tophead.component';
import { MenuComponent } from './menu/menu.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MidComponent } from './mid/mid.component';
import { DomesticComponent } from './domestic/domestic.component';
import { ClientSatisfactionComponent } from './client-satisfaction/client-satisfaction.component';
import { WeMoveComponent } from './we-move/we-move.component';
import { WorldNetworkComponent } from './world-network/world-network.component';
import { FooterComponent } from './footer/footer.component';
import { Demo01Component } from './demo-01/demo-01.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { Demo02Component } from './demo-02/demo-02.component';
import { Demo03Component } from './demo-03/demo-03.component';
import { MainComponentComponent } from './main-component/main-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TopheadComponent,
    MenuComponent,
    CarouselComponent,
    MidComponent,
    DomesticComponent,
    ClientSatisfactionComponent,
    WeMoveComponent,
    WorldNetworkComponent,
    FooterComponent,
    Demo01Component,
    Demo02Component,
    Demo03Component,
    MainComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
