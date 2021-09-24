import { Component, OnInit } from '@angular/core';

declare let Atom:any;

@Component({
  selector: 'app-atom',
  templateUrl: './atom.component.html',
  styleUrls: ['./atom.component.css']
})
export class AtomComponent implements OnInit {

  myAtom:any;

  constructor() { }

  ngOnInit(): void {
    let atomicConfig = {
      containerId: "#bohr-model-container",
      idNumber: 1, // Required int to provide unique Atoms
      numElectrons: 8, // An integer between 1 and 118
      nucleusRadius: 20, // If not supplied will be 1/12 of the containers width
      nucleusColor: 'rgba(124,240,10,0.5)', // Hex, string or rbga
      electronRadius: 3, // Default value is 3
      electronColor: 'blue', // See nucleusColor
      orbitalSpacing: 10, // If not specified will be a 1/3rd of the nucleusRadius
      orbitalWidth: 1, // width of orbital paths, default is 0.1
      orbitalColor: 'black', // see electronColor
      
      animationTime: 1300, // Time in milliseconds for initial electron animation
      orbitalRotationConfig: { // Invokes orbital rotations at initialization
          pattern: {
          alternating: false, // Alternate orbital direction
          clockwise: true, // Direction for all orbitals
          preset: 'cubedNegative', // String to set pattern (see Features section)
          }
      },
      symbolOffset: 8, // When modifying nucleus radius this may need adjusting
      drawSymbol: true // Render atomic symbol or not
    }

    this.myAtom = new Atom(atomicConfig);
  }

}
