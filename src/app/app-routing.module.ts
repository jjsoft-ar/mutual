import { NoticiaComponent } from './pages/noticia/noticia.component';
import { NovedadesComponent } from './pages/novedades/novedades.component';
import { ComerciosComponent } from './pages/comercios/comercios.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { MutualComponent } from './pages/mutual/mutual.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'about', component: MutualComponent},
  { path: 'servicios', component: ServiciosComponent },
  { path: 'comercios', component: ComerciosComponent },
  { path: 'novedades', component: NovedadesComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'noticia', component: NoticiaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
