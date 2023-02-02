import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IFrameViewComponent } from './i-frame-view/i-frame-view.component';

const routes: Routes = [
  { path: ':id', component: IFrameViewComponent },
  { path: '', component: IFrameViewComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
