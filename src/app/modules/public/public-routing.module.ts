import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ItemblogComponent } from './pages/itemblog/itemblog.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'inicio',
        component: InicioComponent
      },
      {
        path: 'proyectos',
        component: ProyectosComponent
      },
      {
        path: 'blog',
        component: BlogComponent
      },
      {
        path: 'blogDetails/:id',
        component: ItemblogComponent
      },
      {
        path: 'contacto',
        component: ContactoComponent
      },
      {
        path: '**',
        redirectTo: 'inicio'
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
