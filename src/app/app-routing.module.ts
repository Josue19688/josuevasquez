import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {
    path:'public',
    loadChildren:()=>import('./modules/public/public.module').then(m=>m.PublicModule)
  },
  // {
  //   path:'inicio',
  //   loadChildren:()=>import('./pages/page.module').then(m=>m.PageModule)
  // },
  { path: '**', redirectTo: 'public', pathMatch: 'full' },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
