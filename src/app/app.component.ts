import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InformationsPage } from '../pages/informations/informations';
import { InformationsDeLaClassePage } from '../pages/informations-de-la-classe/informations-de-la-classe';
import { CoursPage } from '../pages/cours/cours';
import { Cours2Page } from '../pages/cours2/cours2';
import { BibliothQuePage } from '../pages/biblioth-que/biblioth-que';
import { ChatPage } from '../pages/chat/chat';
import { RegisterPage } from '../pages/register/register';


import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LoginPage);
  } goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  } goToInformations(params){
    if (!params) params = {};
    this.navCtrl.setRoot(InformationsPage);
  } goToInformationsDeLaClasse(params){
    if (!params) params = {};
    this.navCtrl.setRoot(InformationsDeLaClassePage);
  } goToCours(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CoursPage);
  } goToCours2(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Cours2Page);
  } goToBibliothQue(params){
    if (!params) params = {};
    this.navCtrl.setRoot(BibliothQuePage);
  } goToChat(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ChatPage);
  } goToRegister(params){
  if (!params) params = {};
  this.navCtrl.setRoot(ChatPage);
  } 
}
