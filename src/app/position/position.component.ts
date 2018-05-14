import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PositionService } from '../data/position.service';
import { Position } from '../data/position';
@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {
  _id:Number;
  paramSubScription:any;
  positionSubscription:any;
  savePositionSubscription:any;
  position:Position;
  successMessage:boolean = false;
  failMessage:boolean = false;
  constructor(private positionService:PositionService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.paramSubScription = this.activatedRoute.params.subscribe(params=>{
      this._id = params['_id'];
   });
   this.positionSubscription = this.positionService.getPosition(this._id).subscribe(position =>{
    this.position = position[0];
   });
  }
  onSubmit(){
    this.savePositionSubscription = this.positionService.savePosition(this.position).subscribe(
      ()=>{
        this.successMessage = true;
        setTimeout(()=>{
          this.successMessage = false;
        }, 2500);
      },
      (error)=>{
        this.failMessage = true;
        setTimeout(()=>{
          this.failMessage = false;
        }, 2500);
      });
  }

  ngOnDestroy(){
    if(this.paramSubScription != undefined){
       this.paramSubScription.unsubscribe();
   }
    if(this.positionSubscription != undefined){
       this.positionSubscription.unsubscribe();
    }
   }
}
