import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor() { }

  users:any=[
    {username:'admin', password:'admin'},
    {username:'bulbasaur', password: 'ivy'}
]
currentUser:any=[]
userLogged:boolean= false
newNick:any=[]
error:number=0

logIn(nick:string, pass:string){
  this.currentUser= this.users.filter((data:any)=> nick == data.username)
  if(this.currentUser.length>0){
  if(nick == this.currentUser[0].username && pass == this.currentUser[0].password){
    this.userLogged = true
  }
}
  else{
    this.userLogged = false
    this.error++
  }
  }
registerUser(nick:string,pass:string){
  this.error
  this.newNick =  this.users.filter((data:any)=> nick == data.username)
  if(this.newNick.length!==1){
    this.users.push({username:nick,password:pass})
  }
  else{
    this.error ++
  }
  console.log(this.users)
  

}

}