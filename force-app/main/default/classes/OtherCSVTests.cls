@IsTest
public class OtherCSVTests {
  @TestSetup
  static void loadTestDataFromStaticResource() {
    List<sObject> accounts = Test.loadData(Account.SObjectType, 'otherAccountData');
  } 
  @IsTest
    static void testLoadOtherAccountsFromStaticResource (){
        Test.startTest();
        List<Account> accts = [SELECT ID FROM Account];
        Test.stopTest();
        Assert.isTrue(accts.size() == 15, 'Expected 15 accounts');
    }
}