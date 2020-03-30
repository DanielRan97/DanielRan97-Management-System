import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private activeRouter:ActivatedRoute, private router:Router) { }
  checkLog;
  texlog:string;
  



  logIn(name,pass){
    this.checkLog =  name == "admin" && pass=="1234";
    this.checkLog ? this.router.navigate([`work/`],) : this.texlog="שם מישתמש או סיסמא שגויים!"
    
  } 



  ngOnInit(): void {
  }

}
