import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CoursPage } from '../pages/cours/cours';
import { BibliothQuePage } from '../pages/biblioth-que/biblioth-que';
import { InformationsPage } from '../pages/informations/informations';
import { ChatPage } from '../pages/chat/chat';
import { Cours2Page } from '../pages/cours2/cours2';
import { DiscussionPage } from '../pages/discussion/discussion';
import { InformationsDeLaClassePage } from '../pages/informations-de-la-classe/informations-de-la-classe';
import { PagePage } from '../pages/page/page';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {FIREBASE_CONFIG} from './firebase.credentials';
import { EventDataProvider } from '../providers/event-data/event-data';
import { HTTP } from '@ionic-native/http';
import { LoginPage } from '../pages/login/login';
import{ AngularFireAuth} from 'angularfire2/auth';
import { RegisterPage } from '../pages/register/register';
import { Tab1Page } from '../pages/tab1/tab1';
import { Tab2Page } from '../pages/tab2/tab2';
import { Tab3Page } from '../pages/tab3/tab3';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CoursPage,
    BibliothQuePage,
    InformationsPage,
    ChatPage,
    Cours2Page,
    DiscussionPage,
    InformationsDeLaClassePage,
    PagePage,
    LoginPage,
    RegisterPage,
    Tab1Page,
    Tab2Page,
    Tab3Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CoursPage,
    BibliothQuePage,
    InformationsPage,
    ChatPage,
    Cours2Page,
    DiscussionPage,
    InformationsDeLaClassePage,
    PagePage,
    LoginPage,
    RegisterPage,
    Tab1Page,
    Tab2Page,
    Tab3Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EventDataProvider,
    AngularFireAuth
  ]
})
export class AppModule {}