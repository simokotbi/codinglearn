import { Component, OnInit } from '@angular/core';
import { Document } from './document.model';
@Component({
  selector: 'app-documents',
  templateUrl: './documents.page.html',
  styleUrls: ['./documents.page.scss'],
})
export class DocumentsPage implements OnInit {
 document;
  constructor() { }
   displaydata(){ 
    return this.document=[
      {id:"1",title:"Java",imageurl:"/assets/imgs/3.jpg"},
      {id:"2",title:"c++",imageurl:"/assets/imgs/2.jpg"} ,
      {id:"3",title:"php",imageurl:"/assets/imgs/3.jpg"} ,
      {id:"4",title:"javascript",imageurl:"/assets/imgs/2.jpg"} ,
      {id:"5",title:"c#",imageurl:"/assets/imgs/3.jpg"}  
    ];
    }
  ngOnInit() {
    this.displaydata();
  }

}
