// import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
// import { deepStrictEqual } from 'assert';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // db={
  //   1000:{'acno':1000,'username':'neer','password':1000}
  // }

  registerForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
    uid:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })

  constructor(private fb:FormBuilder,private ds:DataService) { }

  ngOnInit(): void {                          
  }

  register(){
    var uname=this.registerForm.value.uname
    var pswd=this.registerForm.value.pswd
    var uid=this.registerForm.value.uid 

    if(this.registerForm.valid){                                     
      this.ds.register(uname,uid,pswd) 
      .subscribe((result:any)=>{    
        if(result){
          alert(result.message)    
        }
    
        
      },
      result=>{
        alert(result.error.message)   
        
      }
      )
  
  
    }
    else{
      alert("invalid form")
    }
    }
        
    }



