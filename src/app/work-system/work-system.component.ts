import { Component, OnInit } from '@angular/core';
import { ServerLogService } from '../server-log.service';
import { element } from 'protractor';



@Component({
  selector: 'app-work-system',
  templateUrl: './work-system.component.html',
  styleUrls: ['./work-system.component.css']
  
  
})

export class WorkSystemComponent implements OnInit {

  constructor(private localStorage:ServerLogService) { }
  searchUser:any[] = [];
  getUser:any[]=[] ;
  showsearch:boolean = false;
  getFS(){
    if(localStorage.getItem('object')){
      this.getUser = JSON.parse(localStorage.getItem('object'));
      
     }
    }
      
    deleteUser(id){
      for(let i=0; i<this.getUser.length; i++){
        if(this.getUser[i].id==id){
          this.getUser.splice(i,1);
          this.localStorage.saveObjToStorage(this.getUser);
        }
      }
    }
    editUser(userid){
      this.localStorage.tempid = userid;
    }
  ngOnInit(): void {
    this.getFS();
  }
  searchusers(name:string) :void{
    this.searchUser = [];
    if(name==""){
      this.showsearch = false;
      this.searchUser = [];
    }
    else{
      this.showsearch = true;
      let filter = name.toUpperCase();
      for(let i=0;i<this.getUser.length;i++){
        let temp = this.getUser[i].name;
        if(temp.toUpperCase().indexOf(filter) > -1){
          this.searchUser.push(this.getUser[i]);
        }
      }
    }

  }

}
