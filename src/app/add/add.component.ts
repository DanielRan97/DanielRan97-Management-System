import { Component, OnInit } from '@angular/core';
import { ServerLogService } from '../server-log.service';




@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private localStorage:ServerLogService) {}

  userArr:any[]=[];
  txtFill1:string;
  numOfadd:number = 0;

  addUser(name1,country1,salary1,email1){
   
    if(name1 != "" && country1 != "" &&salary1 != "" &&email1 != "" ){
      this.userArr.push({id:Math.random(),name:name1,country:country1,salary:salary1,email:email1});
      this.localStorage.saveObjToStorage(this.userArr);
      console.log(this.userArr);
      this.txtFill1 = " נוסף בהצלחה";
      document.getElementById(`txtFill1`).style.color="green";
      this.numOfadd++;
    }
    else{
        this.txtFill1 = " !אנא השלם את הטופס "
        document.getElementById(`txtFill1`).style.color="red"
    }
   
    
  }




  ngOnInit(): void {
    if(JSON.parse(localStorage.getItem('object'))){
      this.userArr =  JSON.parse(localStorage.getItem('object'))
    }
    
  }

}
