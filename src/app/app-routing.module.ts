import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'back-check', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'pecadetails',
    loadChildren: './pages/pecadetails/pecadetails.module#PecadetailsPageModule'
  },
  {
    path: 'tutorial',
    loadChildren: './pages/tutorial/tabs/tabs.module#TabsPageModule'
  },
  {
    path: 'entrar',
    loadChildren: './pages/auth/main/main.module#MainPageModule'
  },
  {
    path: 'autores',
    loadChildren: './pages/autores/autores.module#AutoresPageModule'
  },
  { path: 'back-check', loadChildren: './pages/back-check/back-check.module#BackCheckPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
