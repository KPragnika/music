import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { BackComponent } from './back/back.component';
import { HomeComponent } from './home/home.component';
import { HometwoComponent } from './hometwo/hometwo.component';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';
import { RegisterComponent } from './register/register.component';
import { UserprofileComponent } from './userprofile/userprofile.component';


const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path:"home",component:HomeComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"userprofile/:username",component:UserprofileComponent},
  {path:"artists/:id",component:ArtistComponent},
  {path:"albums/:id",component:AlbumComponent},
  {path:"register/otp",component:OtpComponent},
  //{path:"home/hometwo",component:HometwoComponent}


 // {path:"back",redirectTo:'/artists',component:BackComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
