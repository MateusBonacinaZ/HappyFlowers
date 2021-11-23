import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})

export class MainPage implements OnInit {
  nomeSensor: string;
  nomeCientifico: string;
  nomePopular: string;
  tempoExposicao: string;
  valorCaptado: string;

  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit() {
    this.http.get("https://happyflowers-api.herokuapp.com/find/infos").subscribe(data => {
      this.nomeSensor = data['nome_sensor'],  
      this.nomeCientifico= data['nome_cientifico'],
      this.nomePopular= data['nome_popular'],
      this.tempoExposicao= data['tempo_exposicao'],
      this.valorCaptado= data['valor_captado'];
    }, (err)=> {
      this.router.navigate(['/connection-error'])
    });
  }

}
