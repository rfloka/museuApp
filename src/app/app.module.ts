import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PecasdataService } from './api/pecasdata.service';
import { DatasqlService } from './sql/datasql.service';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { SqlPecaCrudService } from './sql/sql-peca-crud.service';
import { IonicStorageModule } from '@ionic/storage';;
import { Network } from '@ionic-native/network/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    PecasdataService,
    SqlPecaCrudService,
    StatusBar,
    SplashScreen,
    SQLite,
    Network,
    DatasqlService,
    AndroidPermissions,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
