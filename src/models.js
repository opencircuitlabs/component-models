export const models=Object.freeze([
  {id:'basic-resistor',name:'Ideal resistor',category:'passive',symbol:'resistor',parameters:{resistance:{unit:'ohm',default:1000,min:1e-6}},tags:['resistor','linear','dc','ac']},
  {id:'basic-capacitor',name:'Ideal capacitor',category:'passive',symbol:'capacitor',parameters:{capacitance:{unit:'farad',default:1e-6,min:1e-15},initialVoltage:{unit:'volt',default:0}},tags:['capacitor','transient','ac']},
  {id:'basic-inductor',name:'Ideal inductor',category:'passive',symbol:'inductor',parameters:{inductance:{unit:'henry',default:1e-3,min:1e-12},initialCurrent:{unit:'ampere',default:0}},tags:['inductor','transient','ac']},
  {id:'dc-voltage-source',name:'DC voltage source',category:'source',symbol:'voltage-source',parameters:{voltage:{unit:'volt',default:5}},tags:['source','dc']},
  {id:'dc-current-source',name:'DC current source',category:'source',symbol:'current-source',parameters:{current:{unit:'ampere',default:0.001}},tags:['source','dc']},
  {id:'switch-spst',name:'SPST switch',category:'switch',symbol:'switch',parameters:{closed:{unit:'boolean',default:false},onResistance:{unit:'ohm',default:1e-6,min:1e-9}},tags:['switch','interactive']},
  {id:'1n4148',name:'1N4148 switching diode',category:'semiconductor',symbol:'diode',parameters:{forwardVoltage:{unit:'volt',default:0.7,min:0.1}},spice:'.model 1N4148 D(Is=2.52n Rs=.568 N=1.73 Cjo=4p M=.4 Tt=20n)',tags:['diode','switching']},
  {id:'led-red',name:'Red LED',category:'optoelectronics',symbol:'led',parameters:{forwardVoltage:{unit:'volt',default:1.9,min:1},color:{unit:'text',default:'red'}},tags:['led','light','red']},
  {id:'led-blue',name:'Blue LED',category:'optoelectronics',symbol:'led',parameters:{forwardVoltage:{unit:'volt',default:3.1,min:2},color:{unit:'text',default:'blue'}},tags:['led','light','blue']},
  {id:'2n3904',name:'2N3904 NPN transistor',category:'semiconductor',symbol:'npn',parameters:{beta:{unit:'ratio',default:200,min:1}},tags:['bjt','npn','transistor']},
  {id:'2n3906',name:'2N3906 PNP transistor',category:'semiconductor',symbol:'pnp',parameters:{beta:{unit:'ratio',default:180,min:1}},tags:['bjt','pnp','transistor']},
  {id:'2n7000',name:'2N7000 N-channel MOSFET',category:'semiconductor',symbol:'nmos',parameters:{thresholdVoltage:{unit:'volt',default:2.1,min:0}},tags:['mosfet','nmos','transistor']},
  {id:'lm358',name:'LM358 dual operational amplifier',category:'integrated-circuit',symbol:'opamp',parameters:{supplyMin:{unit:'volt',default:3},supplyMax:{unit:'volt',default:32}},tags:['opamp','analog','ic']},
  {id:'ne555',name:'NE555 timer',category:'integrated-circuit',symbol:'timer-555',parameters:{supplyMin:{unit:'volt',default:4.5},supplyMax:{unit:'volt',default:16}},tags:['timer','oscillator','ic']},
  {id:'lamp-resistive',name:'Educational lamp',category:'load',symbol:'lamp',parameters:{resistance:{unit:'ohm',default:100,min:0.01}},tags:['lamp','load','light']}
]);
