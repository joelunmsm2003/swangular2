import { Component, OnInit } from '@angular/core';
import {PruebaService} from './prueba.service';
import {Http, Response} from '@angular/http';
import { Person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

   people: Person[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;
message: string;




  constructor(private http : Http,private _pruebaService: PruebaService) { }


 ngOnInit(){
    
    this.message = '';
    this.http.get('http://estokealo.com:8000/productosjson')
      .map(res => res.json())
      .subscribe(

        data =>  console.log('sjjjsjs',data),
        error => this.message = error._body
      );
 
  }

 
}

