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
    PagePage
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
    PagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EventDataProvider,
  ]
})
export class AppModule {}