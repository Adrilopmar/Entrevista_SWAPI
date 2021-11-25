import { DOCUMENT } from '@angular/common';
import { Component, HostListener, OnInit, Inject} from '@angular/core';
import { RequestService } from '../services/request.service';


@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document:Document,
    private requestSVC:RequestService ) { }

  ngOnInit( ): void {
    this.getStarShips()
  } 
  showButton:boolean=false
  starships:any=[]
  allStarships:any=[]
  p:number=1

  getStarShips(){
    if(this.p<5){
      this.requestSVC.getStarships(this.p).subscribe((data:any)=>{this.starships = data.results;this.p++;
        this.allStarships=  this.allStarships.concat(this.starships)
        })
    }
  }
  @HostListener('window:scroll')
  onWindowScroll():void{
    const yOffSet = window.pageYOffset;
    const scrollTop = this.document.documentElement.scrollTop;
    this.showButton = (yOffSet || scrollTop)>500
  }

  conse(){
    console.log(this.starships)
    console.log(this.allStarships, 'totes')
    console.log(this.p)
  }

 onScrollDown():void{
  this.getStarShips()

 }
}
