import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable, from, of, forkJoin } from 'rxjs';
import { switchMap, finalize } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

const STORAGE_REQ_KEY = 'storedreq';


@Injectable({
  providedIn: 'root'
})
export class OfflineManagerService {

  constructor() { }
}
