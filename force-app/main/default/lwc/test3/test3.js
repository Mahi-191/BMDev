import { LightningElement, api } from 'lwc';

export default class Test3 extends LightningElement {

    @api testData;
    constructor(){
        super();
        console.log('inside test 3 constructor');
    }

    connectedCallback(){
        console.log('testData'+ this.testData);
        console.log('inside connectedCallback of Test 3');
    }
    renderedCallback(){
        console.log('inside renderedCallback of Test 3');
    }

    fireEvent(event){
        // child 2 parent 

    }
}