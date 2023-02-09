import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

    heroeBorrado: string ='';
    heroes:string[] = ['Spiderman','Ironman','Hulk','Thor'];
    


    borrarHeroe(indiceHeroe:number):void{
      
      this.heroeBorrado=this.heroes.shift() || '';
      
      //console.log('Hereo borrado:'+this.heroeBorrado);
    }


      
      
    


}


