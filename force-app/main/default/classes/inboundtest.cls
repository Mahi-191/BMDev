global class inboundtest implements Messaging.InboundEmailHandler {

   // global class CustomObjectEmailHandler implements Messaging.InboundEmailHandler {
    global Messaging.InboundEmailResult handleInboundEmail(Messaging.InboundEmail email, Messaging.InboundEnvelope envelope) {
        Messaging.InboundEmailResult result = new Messaging.InboundEmailResult();
        
        try {
            // Parse the email content and extract the necessary information
            String subject = email.subject;
            String body = email.plainTextBody;
            system.debug('subject and body ='+subject+body);
            // Create a new instance of the custom object and populate its fields
             Contact customObject = new Contact();
            customObject.LastName = subject;
            //customObject.Description__c = body;
            
            // Insert the new custom object record
            insert customObject;
            
            // Set the result status to indicate success
            result.success = true;
        } catch (Exception e) {
            // Set the result status to indicate failure
            result.success = false;
            result.message = 'An error occurred while creating the custom object record.';
        }
        
        return result;
    }
//}

}