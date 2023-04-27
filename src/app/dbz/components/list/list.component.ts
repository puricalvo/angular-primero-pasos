import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input() // resibe del padre
  public characterList: Character[] =[{
    name:'Trunks',
    power: 10
  }];

  @Output() // emite un evento
  public onDelelte:EventEmitter<string> = new EventEmitter();



  onDeleteCharacter( id?:string ): void {

    if ( !id ) return;
    this.onDelelte.emit( id );
  }

}
