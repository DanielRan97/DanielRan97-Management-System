import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServerLogService {
  tempid;
  constructor() { }


  saveObjToStorage(obj){
    localStorage.setItem('object', JSON.stringify(obj));
  } 
  getObjFromStorage(){
    return JSON.parse(localStorage.getItem('object'))
  }

  
}
