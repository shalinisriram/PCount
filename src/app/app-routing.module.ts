import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SceneService } from 'src/providers/scene.service';
import { NAVComponent } from './Layout/NAV/NAV.component';
import { FeaturesComponent } from './Views/Features/Features.component';
import { FunctionsComponent } from './Views/Functions/Functions.component';
import { HomeComponent } from './Views/Home/Home.component';
import { OverviewComponent } from './Views/Overview/Overview.component';
import { PCountDisplay28Component } from './Views/Specifications/pCountDisplay28/pCountDisplay28.component';
import { PCountSenseComponent } from './Views/Specifications/pCountSense/pCountSense.component';
import { PCountSense14DComponent } from './Views/Specifications/pCountSense14D/pCountSense14D.component';
import { pCountSense28DComponent } from './Views/Specifications/pCountSense28D/pCountSense28D​.component';


const routes: Routes = [
  {
    path: '',
    component: NAVComponent,
    children: [
      {
        path: 'overview',
        component: OverviewComponent,
        // canActivate: [AuthGuard]
      },
      {
        path: 'features',
        component: FeaturesComponent,
        // canActivate: [AuthGuard]
      },
      {
        path: 'functions',
        component: FunctionsComponent,
        // canActivate: [AuthGuard]
      },
      {
        path: 'home',
        component: HomeComponent,

        // canActivate: [AuthGuard]
      },
      {
        path: 'pcountSense',
        component: PCountSenseComponent,
        // canActivate: [AuthGuard]
      },
      {
        path: 'pcountdisplay28',
        component: PCountDisplay28Component,
        // canActivate: [AuthGuard]
      },
      {
        path: 'pcountSense14d',
        component: PCountSense14DComponent,
        // canActivate: [AuthGuard]
      },
      {
        path: 'pcountSense28d',
        component: pCountSense28DComponent,
        // canActivate: [AuthGuard]
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
