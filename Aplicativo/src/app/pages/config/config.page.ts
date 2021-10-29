import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {
  
  cultura:string;
  nomeSensor:string;

  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit() {
    this.http.get("https://happyflowers-api.herokuapp.com/find/infos").subscribe(data => {
      this.cultura = data['nome_popular']
      this.nomeSensor = data['nome_sensor']
    })
  }

  insert_config(){
    this.http.get("https://happyflowers-api.herokuapp.com/insert/config/"+this.nomeSensor+"/"+this.cultura).subscribe(data => {
      console.log(data);
    }, (err) => {
      this.router.navigate(['/connection-error'])
    });
  }
}