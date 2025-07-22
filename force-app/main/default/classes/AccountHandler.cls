public class AccountHandler {
    public static void insertAccount(Integer value){
        Integer n = 1;
        //create a list to add our accounts
        List<Account> addAccounts = new List<Account>();
        while(n <= value){
            Account acc = new Account();
            acc.Name = 'Acme Inc ' + n;
            acc.AccountNumber = 'A000' + n;
            addAccounts.add(acc);
            n = n + 1;
        }
        insert addAccounts;
    }
}