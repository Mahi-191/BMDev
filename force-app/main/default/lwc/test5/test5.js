import { LightningElement, api } from 'lwc';

export default class Test5 extends LightningElement {
    @api testData;
    constructor(){
        super();
        console.log('inside test 5 constructor');
    }

    connectedCallback(){
        console.log('testData'+ this.testData);
        console.log('inside connectedCallback of Test 5');
    }
    renderedCallback(){
        console.log('inside renderedCallback of Test 5');
    }

}