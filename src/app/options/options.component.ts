import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit{
  constructor(private router:Router){}
  ngOnInit(): void {
    
  }

  mcv:number=0;
  rbc:number=0;
  mentzer:number=0;

  calc(){
    this.mentzer = this.mcv/this.rbc;
    if(this.mentzer>13){
      this.router.navigate(['mida']);
    }else{
      this.router.navigate(['mhbana']);
    }

  }
  
}
