import { LightningElement, track, wire, api } from 'lwc';

export default class Test1 extends LightningElement {
    @api testData = 'data from test1';
    constructor(){
        super();
        console.log('inside test 1 constructor');
        console.log('testData in construtor --- >  '+ this.testData);
        // this.testData = 'data from test1 construtor';
       
    }

    connectedCallback(){
        console.log('testData -->  '+ this.testData);
        console.log('inside connectedCallback of Test 1');
    }
    renderedCallback(){
        console.log('inside renderedCallback of Test 1');
    }

    errorCallback(error, stack){
        console.log('errorcallback - grandparent test1' + error );
        console.log(stack);
    }

    cathEvent(event){
        console.log('catch event in test 1');
        console.log(JSON.stringify(event.detail));
    }

}