import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-tecgurus',
  templateUrl: './tecgurus.component.html',
  styleUrls: ['./tecgurus.component.css']
})
export class TecgurusComponent implements OnInit {

  ngOnInit(): void {
    
  }

  isOpen : boolean = true;
  title = 'tecgurus-carrito';

  constructor(public alert:AlertService){

  }

  openMenu(){
    this.isOpen = !this.isOpen;
    //alert("Clic Menu");
  }

}
