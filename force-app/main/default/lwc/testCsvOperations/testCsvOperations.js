import { LightningElement } from 'lwc';

export default class TestCsvOperations extends LightningElement {
    filesUploaded;
    fileName;
    file;
    fileReader;
    fileContents;
    handleFilesChange(event) {

        if(event.target.files.length > 0) {
            console.log('file name - '+ event.target.files[0].name);
            this.filesUploaded = event.target.files;
 
            this.fileName = event.target.files[0].name;
 
        }else{
            console.log('no files');
        }
 
    }
 
  
 
    handleSave() {
        console.log('handle save');
        if(this.filesUploaded.length > 0) {
 
            this.uploadHelper();
 
        }
 
        else {
 
            this.fileName = 'Please select a CSV file to upload!!';
 
        }
 
    }
 
  
 
    uploadHelper() {
        this.file = this.filesUploaded[0];
        this.fileReader= new FileReader();
        this.fileReader.onloadend = (() => {
            console.log('result is', this.fileReader.result);
            this.fileContents = this.fileReader.result;
            this.saveToFile();
 
        });
        this.fileReader.readAsText(this.file);
    }

    saveToFile(){
        console.log('fileContents'+this.fileContents);
        var lines = this.fileContents.split("\n");

        splitAndSaveCSV(this.fileContents, 10);

    }

    splitAndSaveCSV(csvString, chunkSize) {
        // Step 1: Split CSV string into an array of rows
        let rows = csvString.split('\n');
    
        // Step 2: Create chunks of rows
        let rowChunks = [];
        for (let i = 0; i < rows.length; i += chunkSize) {
            let chunk = rows.slice(i, i + chunkSize);
            rowChunks.push(chunk);
            console.log('chunk----->'+chunk);
        }
    
        // Step 3: Save each chunk as a separate CSV file
        // rowChunks.forEach((chunk, index) => {
        //     const chunkCSV = chunk.join('\n');
        //     const blob = new Blob([chunkCSV], { type: 'text/csv' });
        //     const fileName = `chunk_${index + 1}.csv`;
    
        //     // Create a download link and trigger a click to download the file
        //     const link = document.createElement('a');
        //     link.href = URL.createObjectURL(blob);
        //     link.download = fileName;
        //     link.click();
        // });
    }


    processFiles(event) {
        console.log('files-'+event.target.files[0]);
        var file = event.target.files[0];
        var reader = new FileReader();
        var output;
        reader.onload(e=> {
            var csvToText = e.target.result;
            output = csvToJSON(csvToText);
            console.log(output);
        });
        reader.readAsText(file);
    }

    csvToJSON(csv) {
        console.log('csv --->',csv);
        var lines = csv.split("\n");
        var result = [];
        var headers;
        for (var i = 0; i < lines.length; i++) {
            headers = lines[i].split("\n");
        }
        var cont = 0;
        for (var i = 0; i < lines.length; i++) {

            var obj = {};
            var currentline = lines[i].split("\n");
            for (var j = 0; j < headers.length; j++) {
                obj[cont] = currentline[j];
            }
            cont++;
            result.push(obj);
        }
        console.log(result);
        //console.log(JSON.stringify(result));

        //return result;
    }
 
}