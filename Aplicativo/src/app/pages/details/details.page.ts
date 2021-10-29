import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  dataApi = [];
  chartData: ChartDataSets[] = [{data: [], label: "Média de Lux por hora"}];
  chartType: ChartType = 'line';
  chartLabels: Label[] = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23"];

  constructor(private http:HttpClient) { 
    this.load_data()
  }

  ngOnInit() {

  }
  
  load_data(){
    this.http.get("https://happyflowers-api.herokuapp.com/find/graphic").subscribe(data => {
      console.log(data)
      this.chartData[0].data.push(data[0],data[1],data[2],data[3],data[4],data[5],data[6],data[7],data[8],data[9],data[10],data[11],data[12],data[13],data[14],data[15],data[16],data[17],data[18],data[19],data[20],data[21],data[22],data[23])
    });
  }  
};
