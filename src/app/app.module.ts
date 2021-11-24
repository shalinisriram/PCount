import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SceneService } from 'src/providers/scene.service';

import { TokenInterceptorService } from 'src/providers/token-interceptor.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NAVComponent } from './Layout/NAV/NAV.component';
import { SubnavComponent } from './Layout/subnav/subnav.component';
import { FeaturesComponent } from './Views/Features/Features.component';
import { FunctionsComponent } from './Views/Functions/Functions.component';
import { HomeComponent } from './Views/Home/Home.component';
import { OverviewComponent } from './Views/Overview/Overview.component';
import { PCountDisplay28Component } from './Views/Specifications/pCountDisplay28/pCountDisplay28.component';
import { PCountSenseComponent } from './Views/Specifications/pCountSense/pCountSense.component';
import { PCountSense14DComponent } from './Views/Specifications/pCountSense14D/pCountSense14D.component';
import { pCountSense28DComponent } from './Views/Specifications/pCountSense28D/pCountSense28D​.component';



@NgModule({
  declarations: [
    AppComponent,
    NAVComponent,
    SubnavComponent,
    OverviewComponent,
    FeaturesComponent,
    FunctionsComponent,
    HomeComponent,
    PCountSenseComponent,
    PCountDisplay28Component,
    PCountSense14DComponent,
    pCountSense28DComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [
SceneService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
