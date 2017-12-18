import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { EventDataProvider } from '../../providers/event-data/event-data';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FIREBASE_CONFIG } from '../../app/firebase.credentials';
declare var firebase
@Component({
  selector: 'page-cours2',
  templateUrl: 'cours2.html'
})
export class Cours2Page {
  someTextUrl;

  constructor() {
  }
  getSomeText() {
    firebase.storage().ref().child('/Doc').getDownloadURL()
      .then(response => this.someTextUrl = response)
      .catch(error => console.log('error', error))
  }

}
