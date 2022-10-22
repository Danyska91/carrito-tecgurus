import { Component, OnInit } from '@angular/core';

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

  openMenu(){
    this.isOpen = !this.isOpen;
    //alert("Clic Menu");
  }

}
