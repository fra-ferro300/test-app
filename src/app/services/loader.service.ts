import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loadingFlag: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  show(): void {
  this.loadingFlag.next(true);
  }
  hide(): void {
    this.loadingFlag.next(false);
  }
  getLoadingStatus(): Observable<boolean>{
    return this.loadingFlag.asObservable();
  }

}
