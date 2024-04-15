import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./pages/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'configuration',
    loadChildren: () => import('./configuration/configuration.module').then( m => m.ConfigurationPageModule)
  },
  {
    path: 'acercade',
    loadChildren: () => import('./acercade/acercade.module').then( m => m.AcercadePageModule)
  },
  {
    path: 'noticias-especificas',
    loadChildren: () => import('./noticias-especificas/noticias-especificas.module').then( m => m.NoticiasEspecificasPageModule)
  },

  {
    path: 'formvolun',
    loadChildren: () => import('./formvolun/formvolun.module').then( m => m.FormvolunPageModule)
  },

  {
    path: 'membersview',
    loadChildren: () => import('./membersview/membersview.module').then( m => m.MembersviewPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./pages/history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./pages/services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'videos',
    loadChildren: () => import('./videos/videos.module').then( m => m.VideosPageModule)
  },
  {
    path: 'albergues',
    loadChildren: () => import('./albergues/albergues.module').then( m => m.AlberguesPageModule)
  },
  {
    path: 'alberguesMap',
    loadChildren: () => import('./albergues-map/albergues-map.module').then( m => m.AlberguesMapPageModule)
  },
  {
    path: 'medidas',
    loadChildren: () => import('./medidas/medidas.module').then( m => m.MedidasPageModule)
  },  {
    path: 'reportarsitua',
    loadChildren: () => import('./reportarsitua/reportarsitua.module').then( m => m.ReportarsituaPageModule)
  },
  {
    path: 'misituaciones',
    loadChildren: () => import('./misituaciones/misituaciones.module').then( m => m.MisituacionesPageModule)
  },
  {
    path: 'situaciones-mapa',
    loadChildren: () => import('./situaciones-mapa/situaciones-mapa.module').then( m => m.SituacionesMapaPageModule)
  },
  {
    path: 'cambiar-clave',
    loadChildren: () => import('./cambiar-clave/cambiar-clave.module').then( m => m.CambiarClavePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
