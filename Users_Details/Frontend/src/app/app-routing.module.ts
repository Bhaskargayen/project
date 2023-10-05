import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistationComponent } from './registation/registation.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "",redirectTo:"/",pathMatch:"full"
  },
  {path: "home", component:HomeComponent},
  {path: "login", component:LoginComponent},
  {path: "registation", component:RegistationComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
