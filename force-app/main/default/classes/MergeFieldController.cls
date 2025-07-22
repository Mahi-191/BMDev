public with sharing class MergeFieldController {
    @AuraEnabled
    public static List<FieldInfoWrap> getObjectFields(String objectName) {
        List<FieldInfoWrap> fieldInfoList = new List<FieldInfoWrap>();
        SObjectType objectType = Schema.getGlobalDescribe().get(objectName);
        if (objectType != null) {
        	Map<String,Schema.SObjectField> objectFields = objectType.getDescribe().fields.getMap();

            for (String fieldName : objectFields.keySet()) {
                FieldInfoWrap fieldInfo = new FieldInfoWrap();
                Schema.DescribeFieldResult fieldDescribe = objectFields.get(fieldName).getDescribe();
				fieldInfo.apiName = fieldDescribe.getName();
                fieldInfo.label = fieldDescribe.getLabel();
                System.debug('FieldType is ---'+ fieldDescribe.getType() +' for '+  fieldInfo.label);
                fieldInfo.isRelationField = string.valueOf(fieldDescribe.getType()) == 'REFERENCE'? true: false;
                if(fieldInfo.isRelationField){
                    fieldInfo.relatedObject = fieldDescribe.getReferenceTo()[0].getDescribe().getName();
                    System.debug('REFERENCE field object is '+  fieldInfo.relatedObject);
                }
                fieldInfoList.add(fieldInfo);
            }
        }
        return fieldInfoList;
    }
    
    public class FieldInfoWrap {
        @AuraEnabled public string apiName;
        @AuraEnabled public string label;
        @AuraEnabled public boolean isRelationField;
        @AuraEnabled public string relatedObject;
        
    }
}