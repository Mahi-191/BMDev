public class NewApexClass {
    @AuraEnabled
    public static void getAccounts(){
        List<Account> acc= [SELECT Id, Name,Industry FROM Account with security_enforced];
    }
}