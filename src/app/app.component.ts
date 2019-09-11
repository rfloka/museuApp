import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DatasqlService } from './sql/datasql.service';
import { NetworkService, ConnectionStatus } from './services/network.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private dbprovider: DatasqlService,
    private networkService: NetworkService
  ) {
    this.initializeApp();
    this.hideSplashScreen();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.dbprovider.createDB().then(() => {
        console.log('Base de dados criada');
      }).catch(e => console.error('Erro na criação da base de dados no app.component.ts' + e));
      this.networkService.onNetworkChange().subscribe((status: ConnectionStatus) => {

      });
    });
  }
  hideSplashScreen() {
    if (this.splashScreen) {
      setTimeout(() => {
        this.splashScreen.hide();
      }, 100);
     }
  }
}
