import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupGeneratorComponent } from './group-generator/group-generator.component';

const routes: Routes = [
  {
    path: 'groupgenerator', component: GroupGeneratorComponent
  },
  {
    path: '', component: GroupGeneratorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
