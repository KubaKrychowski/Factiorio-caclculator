import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public loading: boolean = false;

  constructor() { }
}
