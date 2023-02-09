
import { Component } from "@angular/core"

@Component({

    selector:'app-heroe',
    templateUrl:'heroe.component.html'


})
export class HeroeComponent{

    nombre:string='ironman';
    edad:number=45
    

    obtenerNombre(): string {

        return `${ this.nombre } - ${this.edad}`;

    };


    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    cambiarNombre(nombre:string):void{

        this.nombre=nombre;

    }
    cambiarEdad(edad:number):void{

        this.edad=edad;
        
    }

};