import { LightningElement, api, track } from 'lwc';
import getObjectFields from '@salesforce/apex/MergeFieldController.getObjectFields';

export default class ObjectFieldSchema extends LightningElement {
    @api objectName = 'Account';
    @track fields;
    selectedObjectname;
    openRelatedFields = false;
    @api selectedField = '';
    selectedFieldTmp ='';
    connectedCallback() {
        if (this.objectName) {
            console.log('this.objectName--> ',this.objectName);
            console.log('selected field --> '+ this.selectedField);
            getObjectFields({ objectName: this.objectName })
            .then(result => {
                result.forEach(element => {
                    element.css = 'color: black;';
                });
                this.fields = result;
            })
            .catch(error => {
                console.error('Error fetching fields: ' + JSON.stringify(error));
            });
        }
    }

    openObj(event) {
        let objName = event.target.dataset.objname;
        let index = event.target.dataset.index;
        let selectedfld = event.target.dataset.field;
        if (objName !=  this.selectedObjectname) {
            this.openRelatedFields = false;
        }
        this.selectedObjectname = objName;
       
        if (this.selectedField == '') {
            this.selectedFieldTmp = selectedfld;
        }else{
            this.selectedFieldTmp = this.selectedField + '.'+selectedfld;
        }
        setTimeout(()=>{
            this.openRelatedFields = true;
        },100);

        for (let i = 0; i < this.fields.length; i++) {
            if (i == index) {
                this.fields[i].css = 'active-field';
            }else{
                this.fields[i].css = 'inactive-field';
            }            
        }
    }

    selectField(event){
        this.openRelatedFields = false;
        let index = event.target.dataset.index;
        let selectedfld = event.target.dataset.field;
        if (this.selectedField == '') {
            this.dispatchEvent(new CustomEvent('selectedfield', {bubbles: true, composed: true, detail : selectedfld}) )
        }else{
            let finalfield = this.selectedField + '.'+selectedfld;
            this.dispatchEvent(new CustomEvent('selectedfield', {bubbles: true, composed: true, detail : finalfield}) )
        }
        for (let i = 0; i < this.fields.length; i++) {
            if (i == index) {
                this.fields[i].css = 'active-field';
            }else{
                this.fields[i].css = 'inactive-field';
            }            
        }   
    }

}