import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title= 'Estadias_PaginaWeb'
showNav=true;
otherScroll=window.pageYOffset;
x= fromEvent(document, 'scroll');

  constructor() {
    this.x.subscribe((res:any) =>{
console.log(res);
const scroll=res.target.documentElement.scrollTop;
console.log(scroll);

if(scroll>100){
this.showNav=false;
}
if(scroll<this.otherScroll){
  this.showNav=true;
}
this.otherScroll=scroll;
    });
   }

  ngOnInit(): void {AOS.init();
  }

}
