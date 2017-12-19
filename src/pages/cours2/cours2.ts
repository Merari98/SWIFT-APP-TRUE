import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { EventDataProvider } from '../../providers/event-data/event-data';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FIREBASE_CONFIG } from '../../app/firebase.credentials';
import { AngularFireDatabase} from 'angularfire2/database';
@Component({
  selector: 'page-cours2',
  templateUrl: 'cours2.html'
})
export class Cours2Page {
  arrData = []

  constructor(public navCtrl: NavController,public navParams: NavParams,private fdb: AngularFireDatabase) {
    this.fdb.list("/course").valueChanges().subscribe(_data =>{
      this.arrData = _data;
      console.log(this.arrData);
    })
  }
}
