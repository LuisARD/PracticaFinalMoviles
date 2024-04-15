import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'menu',
        loadChildren: () => import('../menu/menu.module').then(m => m.MenuPageModule)
      },
      {
        path: 'config',
        loadChildren: () => import('../configuration/configuration.module').then(m => m.ConfigurationPageModule)
      },
      {
        path: 'members',
        loadChildren: () => import('../membersview/membersview.module').then(m => m.MembersviewPageModule)
      },
      {
        path: 'history',
        loadChildren: () => import('src/app/pages/history/history.module').then(m => m.HistoryPageModule)
      },
      {
        path: 'services',
        loadChildren: () => import('src/app/pages/services/services.module').then(m => m.ServicesPageModule)
      },
      {
        path: 'news',
        loadChildren: () => import('src/app/pages/news/news.module').then(m => m.NewsPageModule)
      },
      {
        path: 'acercade',
        loadChildren: () => import('../acercade/acercade.module').then(m => m.AcercadePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
