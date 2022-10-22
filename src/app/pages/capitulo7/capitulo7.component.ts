import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-capitulo7',
  templateUrl: './capitulo7.component.html',
  styleUrls: ['./capitulo7.component.css']
})
export class Capitulo7Component implements OnInit {

  isMessage : boolean = false;
  form: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    precio: new FormControl(0.00)
  });
  constructor() { }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(item =>{
      if(item.precio > 100 && item.precio < 200){
        this.isMessage= true;
      }else {
        this.isMessage = false;
      }
    })
  }

  limpiar() {
    this.form.reset();
  }

  login() {
    let sesion: any = this.form.value;
    console.log(sesion.username);
    console.log(sesion.password)

    this.form.disable();
  }

  setDefault() {
    this.form.patchValue({
      username: 'danyska91@gmail.com',
      password: '1234567'
    })
    this.form.get('username')?.setValue('danyska91@gmail.com')
  }

  login2() {
    let sesion: any = this.form.value;
   this.form.get('username')?.disable();
  
  }

}
