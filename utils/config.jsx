//production
const baseURL7001 ="https://clinic-api.h-cura.com/"
// Testing
// const baseURL7001 = "http://65.2.126.18:7001/";
const apiPath = "api/v1/";
const apiName =  {
    apptFormFilling: "super_admin/patient/form/website",
    contactFormFilling:"super_admin/contact/us/form/website",
    offerFormFilling:"super_admin/appt/offer/form",
    corporateFormFilling:"super_admin/corporate/form/website",
    patientsCount:"super_admin/get/home/count"
 }
 
// API Configuration

export const API_CONFIG =
    {
    baseURL7001,
    apiPath,
    apiName
    };
    
    
