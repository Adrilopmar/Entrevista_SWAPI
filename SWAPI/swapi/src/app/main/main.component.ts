import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private loginSvc:LoginService) { }

  ngOnInit(): void {
  }
  newUser:boolean=false
  userLogged:boolean= false
logIn(user:any,pass:any){
  this.loginSvc.logIn(user,pass)
  if(this.loginSvc.error>0){
    document.getElementById('userLogin')?.classList.add('is-invalid')
  }
 
    
  
this.userLogged=this.loginSvc.userLogged
  }
registerUser(nick:string, pass:string){
  this.loginSvc.registerUser(nick,pass)
  if(this.loginSvc.error>0){
    document.getElementById('newNick')?.classList.add('is-invalid')
  }
  
}
register(){
  if(this.newUser){
    this.newUser=false
  }
  else{
    this.newUser = true
  }
}

}
