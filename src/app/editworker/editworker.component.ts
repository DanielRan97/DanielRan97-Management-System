import { Component, OnInit } from '@angular/core';
import { ServerLogService } from '../server-log.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-editworker',
  templateUrl: './editworker.component.html',
  styleUrls: ['./editworker.component.css']
})
export class EditworkerComponent implements OnInit {
  userArr:any[] = [];
  textFill:any;
  constructor(private localStorage:ServerLogService,private activeRouter:ActivatedRoute, private router:Router) { }
  ngOnInit(): void {
    if(JSON.parse(localStorage.getItem('object'))){
      this.userArr =  JSON.parse(localStorage.getItem('object'))
    }
  }
  editUser(name:string, country:string, salary, email:string){
   
        if(name != "" && country != "" &&salary != "" &&email != "" ){
          for(let i=0;i<this.userArr.length;i++){
            if(this.userArr[i].id==this.localStorage.tempid){
              this.userArr[i].name = name;
              this.userArr[i].country = country;
              this.userArr[i].salary = salary;
              this.userArr[i].email = email;
              this.localStorage.saveObjToStorage(this.userArr);
              this.router.navigate([`work/`],);
              
              
        }
      }
    }
    else{
      this.textFill = "!אנא מלא את כל הפריטים"
      document.getElementById(`textFill1`).style.color="red";
  }
  }
}
