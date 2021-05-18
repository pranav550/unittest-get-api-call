import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'unit1';
  showLoadingIndicator:boolean=false;
  postDetails:any=[];
  constructor(private service:AppService){

  }

  ngOnInit(){
    this.getPostDetails()
  }

  getPostDetails(){
    this.showLoadingIndicator=true
    this.service.getPosts().subscribe(data=>{
      console.log(data)
      this.showLoadingIndicator=false;
      if(data && data['length']>0){
       this.postDetails=data
       console.log(this.postDetails)
      }else{
        this.postDetails=[]
      }
    })
  }
}
