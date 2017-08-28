import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { MenuPageModule } from '../pages/menu/menu.module';
import { HomePageModule } from '../pages/home/home.module';
import { WelcomePageModule } from '../pages/welcome/welcome.module';
import { LoginPageModule } from '../pages/login/login.module';
import { SignUpPageModule } from '../pages/sign-up/sign-up.module';
import { SearchPageModule } from '../pages/search/search.module';
import { ChefPageModule } from '../pages/chef/chef.module';
import { RecipePageModule } from '../pages/recipe/recipe.module';
import { RatingComponentModule } from '../components/rating/rating.module';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    RatingComponentModule,
    MenuPageModule,
    WelcomePageModule,
    LoginPageModule,
    SignUpPageModule,
    HomePageModule,
    ChefPageModule,
    SearchPageModule,
    RecipePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
