import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  public chart: any;

  constructor() { }

  ngOnInit(): void {

     this.createChart();
  }

  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['mon', 'tue', 'wed','thu',
								 'fri', 'sat', 'sun'], 
	       datasets: [
          {
            label: "spending",
            data: ['300','450', '600', '400', '300',
								 '460', '573'],
            backgroundColor: ' hsl(10, 79%, 65%)'
          }
        ]
      },
      options: {
        aspectRatio:2.10
      }
      
    });
  }

}
