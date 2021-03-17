import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { AboutComponent } from './about/about.component';
import { QualificationComponent } from './qualification/qualification.component';
import { ExperienceComponent } from './experience/experience.component';
import { HobbieComponent } from './hobbie/hobbie.component';

const routes: Routes = [
  {path : 'about' , component : AboutComponent},
  {path : 'qualification' , component : QualificationComponent},
  {path : 'experience' , component : ExperienceComponent},
  {path : 'hobbie' , component : HobbieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
