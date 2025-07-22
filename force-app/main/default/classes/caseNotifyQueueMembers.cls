public class caseNotifyQueueMembers {
 @InvocableMethod(label='Notify Queue  ' description='Notifies queue members for assigned case')
    public static void notifyQueueMembers(List<Id> caseIds) {
        List<Case> cases = [SELECT Id, OwnerId, Subject, Description, Owner.Email FROM Case WHERE Id IN :caseIds];
        
        List<Messaging.SingleEmailMessage> emails = new List<Messaging.SingleEmailMessage>();
        
        for (Case caseRecord : cases) {
            List<GroupMember> queueMembers = [SELECT UserOrGroupId FROM GroupMember WHERE GroupId = :caseRecord.OwnerId];
            
            for (GroupMember member : queueMembers) {
                Messaging.SingleEmailMessage email = new Messaging.SingleEmailMessage();
                email.setTemplateId('YOUR_EMAIL_TEMPLATE_ID'); // Replace with the actual Email Template Id
                email.setTargetObjectId(member.UserOrGroupId);
                email.setToAddresses(new List<String>{caseRecord.Owner.Email});
                
                // Set email template merge fields
                email.setWhatId(caseRecord.Id);
                email.setSaveAsActivity(false);
                
                emails.add(email);
            }
        }
        
        Messaging.sendEmail(emails);
    }
}