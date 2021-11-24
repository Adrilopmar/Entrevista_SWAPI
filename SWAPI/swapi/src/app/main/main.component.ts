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
this.userLogged=this.loginSvc.userLogged
  }
registerUser(nick:string, pass:string){
  this.loginSvc.registerUser(nick,pass)
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
