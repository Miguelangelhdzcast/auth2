import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';
import { MenuComponent } from './menu/menu.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { ListaComponent } from './lista/lista.component';
import { MisactividadesComponent } from './misactividades/misactividades.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ActividadesComponent,
    ListaComponent,
    MisactividadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule
    
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '382416087779-8pei5h80e60ql19vv729qertio3svggh.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(
            '1728488544208511')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
