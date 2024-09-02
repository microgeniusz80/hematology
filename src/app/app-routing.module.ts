import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FamilyComponent } from './family/family.component';
import { HbanaComponent } from './hbana/hbana.component';
import { MchComponent } from './mch/mch.component';
import { NohbanaComponent } from './nohbana/nohbana.component';
import { OptionsComponent } from './options/options.component';
import { IronstudyComponent } from './ironstudy/ironstudy.component';
import { IdaComponent } from './ida/ida.component';
import { MidaComponent } from './mida/mida.component';
import { MhbanaComponent } from './mhbana/mhbana.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'family', component: FamilyComponent },
  { path: 'hbana', component: HbanaComponent },
  { path: 'mch', component: MchComponent },
  { path: 'nohbana', component: NohbanaComponent },
  { path: 'options', component: OptionsComponent },
  { path: 'ironstudy', component: IronstudyComponent },
  { path: 'ida', component: IdaComponent },
  { path: 'mida', component: MidaComponent },
  { path: 'mhbana', component: MhbanaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
