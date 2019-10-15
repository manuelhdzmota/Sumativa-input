import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  public inputVal:string;

  constructor(public alertController: AlertController){}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Nombre',
      message: this.inputVal,
      buttons: ['OK']
    });

    await alert.present();
  }

  buttonCLick(){
    alert(this.inputVal);
  }
}
