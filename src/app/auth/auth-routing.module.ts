import { NgModule } from '@angular/core';
import{ Routes, RouterModule} from '@angular/router';
import{ ActividadesComponent} from './pages/actividades/actividades.component';
import{ InformacionComponent} from './pages/informacion/informacion.component';
import{ DonacionesComponent} from './pages/donaciones/donaciones.component';
import{ DifusionComponent} from './pages/difusion/difusion.component';
import{ TestimonialesComponent} from './pages/testimoniales/testimoniales.component';


const routes: Routes=[
{
  path: '',
  children:[
    {path: 'actividades', component: ActividadesComponent},
    {path: 'informacion', component: InformacionComponent},
    {path: 'donaciones', component: DonacionesComponent},
    {path: 'difusion', component: DifusionComponent},
    {path: 'testimoniales', component: TestimonialesComponent},
    {path: '**', redirectTo: 'informacion'}
  ]
}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AuthRoutingModule { }
