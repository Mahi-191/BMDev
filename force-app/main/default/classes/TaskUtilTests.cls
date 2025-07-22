@IsTest
private class TaskUtilTests {

    @IsTest
    static void testGetTaskPriorityNormal(){
       Test.startTest();
       String result = TaskUtil.getTaskPriority('HA');
       Test.stopTest();
       Assert.areEqual('Normal',result,'Task Priority is not expected.');
    }
    
    @IsTest
    static void testGetTaskPriorityHigh(){
        Test.startTest();
        String result =TaskUtil.getTaskPriority('CA');
        Test.stopTest();
        Assert.areEqual('High',result,'Task Priority is not expected.');

    }
}