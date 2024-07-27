import { Component } from '@angular/core';

@Component({
  selector: 'app-cages',
  templateUrl: './cages.component.html',
  styleUrls: ['./cages.component.css']
})
export class CagesComponent {

  product=[
    {
      id: 1,
      name: "French Fitness R6 Cross Training Squat Stand (New)",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat facilis inventore tempore aut, officia at.", 
      Catogory: "Running",
      size:[2,4,6,7],
      color:["white", "Red", "Black"],
      price: 449.00,
      is_in_inventory: true,
      item_left: 3,
      imageURL: 'assets/Images/Shop-now/FF-R6-2.jpg',

    },

      {
        
        name: "French Fitness FFB Black 360XL Energy Group Training System (New)",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat facilis inventore tempore aut, officia at.", 
        Catogory: "Running",
        size:[2,4,6,7],
        color:["white", "Red", "Black"],
        price: 8999.00,
        is_in_inventory: true,
        item_left: 3,
        imageURL: 'assets/Images/Shop-now/FFB-360XL-2.jpg',
        
      },
      
      {
        id: 3,
        name: "French Fitness Toning Resistance Tube Bands Set of 5 w/Handles (New)",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat facilis inventore tempore aut, officia at.", 
        Catogory: "Running",
        size:[2,4,6,7],
        color:["white", "Red", "Black"],
        price: 49.88,
        is_in_inventory: true,
        item_left: 3,
        imageURL: 'assets/Images/Shop-now/BSLDSPR1000P2-2.jpg',
      },

      {
        id: 4,
        name: "Body-Solid GS348QP4 Series 7 Smith Gym System (New)",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat facilis inventore tempore aut, officia at.", 
        Catogory: "Running",
        size:[2,4,6,7],
        color:["white", "Red", "Black"],
        price: 2695.00,
        is_in_inventory: true,
        item_left: 3,
        imageURL: 'assets/Images/Shop-now/bsldGS348QP4-2.jpg',
      },
      
      {
        id: 5,
        name: "  Body-Solid SPR500P2 Commercial Half Cage Package (New)",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat facilis inventore tempore aut, officia at.", 
        Catogory: "Running",
        size:[2,4,6,7],
        color:["white", "Red", "Black"],
        price: 1316.00,
        is_in_inventory: true,
        item_left: 3,
        imageURL: 'assets/Images/Shop-now/BSLDSPR500P2-2.jpg',
       
       
      },

      {
        id: 6,
        name: "Body-Solid GPR378P4 Power Rack Package (New)",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat facilis inventore tempore aut, officia at.", 
        Catogory: "Running",
        size:[2,4,6,7],
        color:["white", "Red", "Black"],
        price: 1950.00,
        is_in_inventory: true,
        item_left: 3,
        imageURL: 'assets/Images/Shop-now/BSLDGPR378P4-2.jpg',
        
      },    
  ]
}
