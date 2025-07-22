public class AccountUtility {
 public static void viewAnnualRevenue(){
        List<Account> accountsList = [SELECT Name, AnnualRevenue FROM Account];
        for (Account Acc : accountsList){
            String acctRev = Acc.Name + ':' + Acc.AnnualRevenue;
            system.debug(acctRev);
        }
    }
}