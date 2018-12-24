import { Component, OnInit } from '@angular/core';
import { Server } from '../server';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  appStatus=new Promise((res,rej)=>{
    setTimeout(()=>{
      res('Online');
    },2000);
  });
  filterStr='';
  country={'SA': 'Saudi Arabia','EG':'Egypt','US':'Unit State','CA':'Canada'} ;
servers: Server[]=[];
  constructor() { }

  ngOnInit() {
    this.servers.push({type:'HP G7', name:'Web Server1', statred:new Date(2017,5,13),status:true, location:'SA'});
    this.servers.push({type:'HP G8', name:'Web Server2', statred:new Date(2017,6,13),status:true, location:'EG'});
    this.servers.push({type:'Dell', name:'DC', statred:new Date(2017,7,12),status:true, location:'US'});
    this.servers.push({type:'Sun', name:'Firewall', statred:new Date(2017,8,10),status:true, location:'CA'});
  }
  addServer()
  {
    this.servers.push({type:'Micro', name:'Vmware Server', statred:new Date(2018,5,13),status:true, location:'EG'});
  }
}
