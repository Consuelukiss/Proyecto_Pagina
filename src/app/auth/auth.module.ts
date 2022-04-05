import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActividadesComponent } from './pages/actividades/actividades.component';
import { InformacionComponent } from './pages/informacion/informacion.component';
import { AuthRoutingModule } from './auth-routing.module';
import { DonacionesComponent } from './pages/donaciones/donaciones.component';
import { TestimonialesComponent } from './pages/testimoniales/testimoniales.component';
import { DifusionComponent } from './pages/difusion/difusion.component';


@NgModule({
  declarations: [
    ActividadesComponent,
    InformacionComponent,
    DonacionesComponent,
    TestimonialesComponent,
    DifusionComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
