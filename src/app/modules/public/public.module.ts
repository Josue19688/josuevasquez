import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { BlogComponent } from './pages/blog/blog.component';
import { NavbarComponent } from './pages/shared/navbar/navbar.component';
import { FooterComponent } from './pages/shared/footer/footer.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemblogComponent } from './pages/itemblog/itemblog.component';
import { NoSanitizePipe } from './helpers/nosanitizerpipe';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    InicioComponent,
    ProyectosComponent,
    ContactoComponent,
    BlogComponent,
    NavbarComponent,
    FooterComponent,
    ExperienciaComponent,
    ItemblogComponent,
    NoSanitizePipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
