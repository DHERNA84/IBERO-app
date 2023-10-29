import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: any[] = []; // Inicializamos la propiedad con un arreglo vacío

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getUsers().subscribe((data: any[]) => {
      console.log(data); // Agrega esta línea para verificar los datos
      this.users = data;
    });
  }
  
}
