import { CustomerAccountDetails } from "./customer-account-details";
import { CustomerAddress } from "./customer-address";
import { CustomerDocuments } from "./customer-documents";
import { CustomerFamilyDetails } from "./customer-family-details";
import { CustomerInfo } from "./customer-info";
import { CustomerMortgage } from "./customer-mortgage";
import { CustomerPreviousLoan } from "./customer-previous-loan";
import { CustomerProfession } from "./customer-profession";
import { CustomerPropertyDetails } from "./customer-property-details";
import { EducationalDetails } from "./educational-details";

export class CustomerLoanApplication {

    id:number;

    email:string
    // secondary class 1
    customerinfo:CustomerInfo
    // secondary class 2
    customerfamilydetails:CustomerFamilyDetails
    // secondary class 3
    customeraddress:CustomerAddress
    // secondary class 4
    educationaldetails:EducationalDetails
    // secondary class 5
    customerprofession:CustomerProfession
    // secondary class 6
    customermortgage:CustomerMortgage
    // secondary class 7
    customeraccountdetails:CustomerAccountDetails
    // secondary class 8
    customerpreviousloan:CustomerPreviousLoan
    // secondary class 9
    customerpropertydetails:CustomerPropertyDetails
     
    customerdocx:CustomerDocuments
    
}
