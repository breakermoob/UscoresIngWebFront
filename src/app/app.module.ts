import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

/* Componentes */
import { AppComponent } from './app.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { CrearComponent } from './Components/crear/crear.component';
import { VisualizarComponent } from './Components/visualizar/visualizar.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { PerfilComponent } from './Components/perfil/perfil.component';
import { VisualizarEventosComponent } from './Components/visualizar-eventos/visualizar-eventos.component';
import { TorneoComponent } from './Components/torneo/torneo.component';
import { EventoComponent } from './Components/evento/evento.component';

/* Servicios */
import { RegistroService } from './Servicios/registro/registro.service';
import { TorneoService } from './Servicios/crear/torneo/torneo.service';
import { EventoService } from './Servicios/crear/evento/evento.service';
import { MisTorneosService } from './Servicios/misTorneos/mis-torneos.service';
import { FavoritosService } from './Servicios/favoritos/favoritos.service';
import { EventoPerfilComponent } from './Components/evento-perfil/evento-perfil.component';




const appRoutes: Routes = [
  { path:'', component: InicioComponent },
  { path:'Perfil', component: PerfilComponent },
  { path:'Crear', component: CrearComponent },
  { path:'Torneo', component: TorneoComponent },
  { path:'Visualizar', component: VisualizarComponent },
  { path:'VisualizarEventos', component: VisualizarEventosComponent },
  { path:'Eventos', component: EventoPerfilComponent},
  { path:'Registro', component: RegistroComponent },
  { path:'crearEventos', component: EventoComponent }

  /**{ path: '**', component: PageNotFoundComponent }*/
];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CrearComponent,
    VisualizarComponent,
    RegistroComponent,
    PerfilComponent,
    VisualizarEventosComponent,
    TorneoComponent,
    EventoComponent,
    EventoPerfilComponent
  ],
  imports: [
    MaterializeModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [RegistroService,TorneoService,EventoService,MisTorneosService,FavoritosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
