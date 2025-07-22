import { LightningElement,api,track } from 'lwc';

export default class Test2 extends LightningElement {
    @track ddataValue
    connectedCallback(){
        this.ddataValue += ' + Some data From test 2';
        console.log('this.ddataValue => '+ this.ddataValue);
        this.template.addEventListener('test4event',this.handleEvent.bind(this))
    }
    handleEvent(event){
        console.log('handleEvent called');
        console.log('handleEvent called => '+ event.detail);
        this.data = event.detail;
    }
}trigger