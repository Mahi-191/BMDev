import { LightningElement, api } from 'lwc';

export default class Test4 extends LightningElement {
@api testData; 
constructor(){
    super();
    console.log('inside test 4 constructor');
    // throw 'woops error'
}

connectedCallback(){
    console.log('testData'+ this.testData);
    console.log('inside connectedCallback of Test 4');
}
renderedCallback(){
    console.log('inside renderedCallback of Test 4');
}
}