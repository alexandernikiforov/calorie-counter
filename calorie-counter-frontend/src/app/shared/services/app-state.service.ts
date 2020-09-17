import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export enum AppEvent {
  Toggle
}

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  private _event$ = new Subject<AppEvent>();

  constructor() {
  }

  send(event: AppEvent): void {
    this._event$.next(event);
  }

  getEvents(): Observable<AppEvent> {
    return this._event$;
  }

}
