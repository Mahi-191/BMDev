import { LightningElement, track, wire } from 'lwc';
import fetchObjects from '@salesforce/apex/ServerSidePaginationController.fetchObjects';
import fetchFields from '@salesforce/apex/ServerSidePaginationController.fetchFields';
export default class SelectObjectAndFields extends LightningElement {
    @track objectList =[]; //all object list 
    @track FieldsList; // all fields of selected object
    error;
    selectedObj;
    @track selectedFields; 
    showFields = false;
    showProcessBtn = false;
    isdataSelected = false;
    @track showSpinner;
    showSchema = false;
    insertField='';
    constructor() {
        super();
        this.template.addEventListener('selectedfield', this.insertFieldMethod.bind(this));
        this.showSpinner = true;
        //get list of objects from apex 
        fetchObjects()
        .then(result => {
            this.objectList = Object.entries(result).map(([value,label]) => ({ value, label}));
            this.showSpinner = false;
        }).catch(error => {
            console.log(error);
            this.showSpinner = false;
        })
        
    }

    insertFieldMethod(event){
        console.log('got the value -->'+ event.detail);
        this.insertField =event.detail;
    }

    //when user selecte object get fields of that object
    onObjectSelection(event){
        this.showSpinner = true;
        this.selectedFields = null;
        this.FieldsList =[];
        this.selectedObj = event.detail.value;
        this.showSpinner = false;     
    }

    //when user select fields assign them in a list and show process button
    onSelectFields(event){
        this.showSpinner = true;
        this.isdataSelected = false;
        this.selectedFields = event.detail.value;
        this.showProcessBtn = true;
        this.showSpinner = false;
    }

    //Show Records
    processButton(){
        this.isdataSelected = true;
    }   
    showFieldSchema(){
        this.showSchema = true;
    }
    selectFields(){
        this.showFields = true;
        this.showProcessBtn = false;
        this.isdataSelected = false;
        fetchFields({ sobj : event.detail.value})
            .then(result => {
                this.FieldsList = Object.entries(result).map(([value,label]) => ({ value, label}));
                this.showSpinner = false;
            })
            .catch(error => {
                this.error = error;
                this.showSpinner = false;
        });
        
    }
}