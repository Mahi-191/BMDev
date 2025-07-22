import { LightningElement, api } from 'lwc';
import apez from '@salesforce/apex/NewApexClass.getAccounts'
export default class TestLwc extends LightningElement {
    @api recordId;
    connectedCallback() {
        apez({}).then(result =>{
            console.log('OUTPUT : ',);
        })
    }
    
}