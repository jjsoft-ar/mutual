import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MutualComponent } from './pages/mutual/mutual.component';
import { PageTitleComponent } from './shared/page-title/page-title.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ComerciosComponent } from './pages/comercios/comercios.component';
import { NovedadesComponent } from './pages/novedades/novedades.component';
import { NoticiaComponent } from './pages/noticia/noticia.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MutualComponent,
    PageTitleComponent,
    ContactoComponent,
    ServiciosComponent,
    InicioComponent,
    ComerciosComponent,
    NovedadesComponent,
    NoticiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
