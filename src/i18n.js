// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          // nav link
          'My app' : 'My app',
          'Switch Language': 'العربي',
          'Home' : 'Home',
          'Orders': 'My Orders',
          'noOrders': 'There is no orders yet!',
          'noAppointments': 'There is no appointments yet!',
          'Visits': 'Hove visits',
          'Appointments': 'Appointments',
          'Services' : 'Services',
          'About' : 'About Us',
          'Results' : 'Results',
          'Contact Us' : 'Contact Us',
          'Reserve' : 'Reserve',
          'Login' : 'Login',
          'Create Account' : 'Create Account',
          'ApplyJob' :'Job Apply',
          'Apply' :'Apply',
          'chooseCv' :'Upload Your CV',
          'applyForJob' :'Apply for job',
          'recevidYourRequest' :'We have recieved your request successfully, will contact you',
          'uploaded' :'Uploaded',

          // login page
          'LoginPage' : 'Login',
          'help' : 'Help',
          'errorMsgLogin'  :'Wrong Password' ,
          'logOut' :'Log Out',
          'pls' :'please login first',

          // there is contact us in the navbar and here
          // 'Contact Us' : 'Contact Us',
          // 'Login' : 'تسجيل الدخول',

          'loginPara':'Get the best medical care with the Royal Medical Analysis Laboratory',
          'tasaphah' : 'Browse Now!',
          'hello'  : 'Hello',
          'password'  : 'Password',
          'EmailLogin'  : 'Email',
          'forgetPassword'  : 'Forget Password ?',
          'createNewAccount'  : 'Create New Account',

          // register page
          'registerPage' : 'Register',
          'createNewAccount' : 'Create New Account',
          'createAccount' : 'Create Account',
          'errorMsg' :'This Account Already Exists',
          'loading' : 'loading...',
          "errorMessageName": "Enter the first three names",
          "errorMessageNamemin": "Enter at least three names",
          "errorPhoneRequired": "Phone is required",
          "errorPasswordRequired": "Password is required",
          "errorPasswordMismatch": "Passwords do not match",
          "errorPasswordComplexity": "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character, and be at least 8 characters long",
          // there is contact us in the navbar and here
          // 'createNewAccount'  : 'Create New Account',
          // 'tasaphah' : 'Browse Now!',
          'name' : 'Name*',
          'phone' : 'Phone Number*',
          'address' : 'Address*',
          'Emailregister'  : 'Eamil*',
          'passwordRegister'  : 'Password*',
          'rePassword' : 'Password Confirm*',

          // profile page
          'Profile' : 'Personal Profile',
          'personalInfo' : 'Personal Info',
          'Address' : 'Address',
          'file' : 'File',
          'Name' : 'Name',
          'Phone' : 'Phone',
          'email1' :'Email',
          'age' :'Age',

          




          // services page
          'tahalilAndBaqat':'Tahalil And Baqat',
          'ElbahsAnTahalih' : 'Search for Tahalil',
          'UploadWasfa':'Upload a prescription',
          'Baqat' : 'Baqat',
          'EGP' : 'EGP',
          // will change according the card
          'Enzem':'Phosphokinase enzyme',
          'heartEnzem':'Heart enzymes - requested  when feeling chest pain',
          'price' : '250 egp',
          'addToCar':'Add To Cart',
          'tahalilhLists' : 'Tahalil Lists',
          'services' : 'Services',
          'finish' : 'Finish',

          // home page 
          'welcome' : 'Welcome to Royal Diagnostic Laboratories',
          'welcome2' : 'Your service reflects our vision',
          'buttonHome' : 'Discover More !',
          'elafrad' : 'Individuals',
          'companies' :'Companies',
          'tahalilElgezaa' : 'Food analyses',
          'araClients' : 'Clients Opinion',
          'torki' : 'Torki abdelrahman',
          'lorem' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          'technical' : 'technical Support',
          'techLorem' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          'waterAnalysis':'Water Analysis',
          'pharmaAnalysis' : 'Pharma Analysis',
          'recipeMedical' : 'Recipe Medical',
          'chooseFileRecipe' : 'Please Uploade file',
          'fileUploadedSuccessfully' : 'The prescription has been sent successfully. We will contact you',
          'bloodAnalysis' : 'Blood Analysis',
          'homeVisit':'Home Visit',
          'Branches':'Branches',
          'Insurances':'Insurances',
          'consultation':'Consultation',
          'Vaccinations':'Vaccinations',

            // Download the medical prescription
            'medicalPrescription' : 'Download the medical prescription',
            "imageLabel": "Upload Image",
            "notesLabel": "Notes",
            "chooseFile": "Choose File",
           "uploadBtn": "Upload",

           //  Services

           'servicesp1' : 'Services / Blood Analysis',
           'servicesp2' : 'Date : 2/8/2024',
           'servicesp3' : 'Service : Done',

           'updloadPdf' : 'Upload Pdf',

          //  Home visit
          'homeVisit' : 'Home visit',
          'visitNumber' : 'Search by visit number',
          'notFoundVisit' : 'No home visits found yet!' ,
          'reserverNow' : 'Reserver Now!',

          // about Page 
          'aboutUs' : 'About Us',
          'AboutRoyal' : 'About Royal',
          'firstPara' : 'The laboratory laboratories are considered the largest private medical laboratory companies in the Middle East region, providing diagnostic laboratory services and pathological tests to the medical community in the Kingdom of Saudi Arabia.',
          'readeBtn' :'Read More!',
          'ourVision' : 'Our Vision' ,
          'aboutUsHeading' : 'Royal Diagnostic Laboratories' ,
          'aboutUsParagraph1' : 'We strive to be graduates of medical laboratories that rely on the production of ions with modern development and technologies in the field of laboratory medical laboratories.',
          'aboutUsParagraph2' : 'We strive to be graduates of medical laboratories that work on the final appearance of high-quality laboratory services that are in line with community requirements and keep up with the latest details.' ,
          'secPara' : 'Our vision is to be the recognized leader in the field of laboratory medicine in the Middle East.',
          'after' : 'This vision is achieved through:' ,
          'firstLi' : 'The commitment of our leaders and employees to our mission and core values.',
          'secondLi' : 'Providing the ideal environment during the work environment.',
          'theThirdLi' : 'For innovative application of new technologies.',
          'ourMission' : 'Our Mission' ,
          'thirdPara' : 'Providing high-quality laboratory diagnostic information to help improve the health and well-being of the communities we serve',
          'firLi' : 'This vision is achieved through:',
          'secLi' : 'Providing high-quality medical laboratory services using the latest technologies.Emphasis on good treatment   and empathy with patients, in addition to professional expertise.',
          'thirdLi' : 'The relentless pursuit of accuracy in results, responsiveness to our customers’ needs, and speed of service',
          'fourthLi' : 'Acquire, disseminate and apply knowledge through the innovative use of technology.',
          'fifthLi' : 'Create and expand collaborative professional partnerships.',

          // Royal Page
 
          'p1' : 'Laboratories is considered one of the largest private medical laboratory companies in the Middle East, which provides diagnostic laboratory services and pathological tests for medical drugs in the Kingdom of Saudi Arabia.',
          'p2' : 'The company offers a range of more than 1,400 analyzes in the fields of immunology, hematology/coagulation, diagnostic blood chemistry, parasitology, microbiology/infectious diseases, toxicology, cytology, surgical pathology, flow cytometry, molecular biology and genetics. Cellular. Samples are collected in more than 214 branches covering the governorates of all regions in Egypt, and analyzes are performed in the main laboratory in addition to the central laboratories in the main governorates in Egypt.',
          'p3' : 'The company was established in 1979 as a single laboratory by Professor Dr. Moumina Kamel - Professor of Immunology at the College of Medicine, University of Dammam.',
          'p4' : 'The company was established in 1979 as a single laboratory by Professor Dr. Moamena Kamel - Professor of Immunology at the Faculty of Medicine, Cairo University. Today the laboratory is considered the largest chain of medical laboratories, especially with the renewed trend towards expansion. Over 40 years. Laboratory laboratories have gained a lot of knowledge about your needs and expectations during their 40 years of leadership in the field of medical analysis, and for this reason, laboratory laboratories follow quality standards on all fronts and are therefore the only laboratories to obtain CAP in Egypt since 2010, which is considered... The gold standard for medical laboratory accreditation, which means that the accuracy of laboratory results is guaranteed and similar results are obtained from all CAP-accredited laboratories around the world.',
          'p5' : 'Royal Laboratories represents the largest network in Saudi Arabia with more than 218 branches nationwide, and selection of the best cadres to work in laboratory laboratories is also taken into consideration, both at the administrative and technical levels. The laboratory laboratories are considered the first medical laboratory in Egypt to use “work cell” technology, which is the latest technology in medical laboratory technology, and thus human errors are reduced to a minimum.',
          'p6' : 'In addition to that, we have the ability to draw samples and deliver the results to and from your location, as well as provide your test results for free, on our website. We constantly strive to exceed your expectations and fulfill our promises because we truly care from the heart.',
          'readLess' : 'Read Less!',
 
           // Book appointment
           'bookAppointment' : 'Book an Appointment',

           'personalInfo' : 'Personal Info',

           'namePlaceholder' : 'Name : Sara Mohamed',
           'agePlaceholder' : 'Age : 25',
           'phonePlaceholder' : 'Phone : 012021615',
           'save' : 'Save',
           'update' : 'Update',

          'Date' : 'Date',

           'lableOptPlace' :  'Choose Branch',
           'opt1' : 'Eldamam/Flowers area',
          'opt2' : 'Mekka/Flowers area',
          'opt3' : 'Elmadina/Flowers area',

          'lableOptServe' :  'Service',

          'opt4' : 'Blood result',
          'opt5' : 'Food Result',
          'opt6' : 'Medicine Result',

         

          'serveBtnNow' : 'Book Now!',
          'servicePrice' : 'Service Price' ,
          'recipientName' : "Recipient's Name" ,
          'recipientPhone' : "Recipient's Phone" ,
          'recipientAddress' : "Recipient's Address" ,
          'orderDate' : "Order Date" ,
          'appointmentDate' : "Appointment Date" ,
          'appointmentStatus' : "Appointment Status" ,
          'branch' : "Branch" ,
          'appointmentDetails' : "Appointment Details" ,
          'orderStatus' : "Order Status" ,
          'under_review' : "Reviewing" ,
          'confirmed' : "Confirmed" ,
          'completed' : "Completed" ,
          'canceld' : "Canceled" ,

          // doctorConsultation
          'doctorConsultation' : 'Doctor Consultation',

          'doctorName' : 'Doctor Name' , 
          'nameDoctor1' : 'Dr / Ebrahim Ahmed' , 
          'nameDoctor2' : 'Dr / Khaled Mohamed' , 
          'nameDoctor3' : 'Dr / Ahmed Ali' , 
          'kind' : 'Online Consultation' ,

 
          // 'Date' : 'Date',
          'specialization' : 'Specialization',
          'opt1specialization' : 'Neurologists',
          'opt2specialization' : 'Analysis',
          'opt3specialization' : 'Cardiologist',
          'requestBtnNow' : 'Send Request',

          // Food analysis
          'foodAnalysis' : 'Food Analysis' ,

          'foodFisrtPara' : 'In the Laboratory Department for Food and Environmental Surveys, we conduct a wide range of tests and analyzes using our scientific and technological strength. Microbiological contamination is a major problem in many industries and legislation states that all food companies must ensure food safety and hygienic practices. All tests are available to restaurants, tourism establishments, and food manufacturers quickly, efficiently and certified throughout Egypt for all production, catering and export needs.',

          'foodSecondPara' : 'The laboratory is an accredited laboratory and holds a certificate. ISO / IEC 17025: 2017 and provides all tests, such as food microbiology to detect food-borne pathogens and food spoilage organisms, in addition to environmental swabs. Samples can be collected from your organization throughout Egypt by taking advantage of the laboratory’s widely spread network of branches and our fleet of specialized chemists.' , 

          'foodThirdPara' : 'The following services are provided for food, feed and environmental surveys:' , 
          
          'foodThirdParaLione' : 'Microbiological analysis of foods – includes raw meat, poultry, seafood, ready-to-eat meals, fresh fruits, vegetables, juices, milk, dairy products, grains, nuts, herbs, and additives.',
          
          'foodThirdParaLiTwo' : 'Food chemical analysis – covers foods and beverages to ensure safe consumption, product quality and product safety. Correct nutritional labeling must be used and consumers must be protected from adulteration and tampering with unsafe food and beverages. We do this using a combined approach of appropriate food legislation coupled with increased controls by food authorities. Specific analysis can be performed based on need including trace elements, heavy metals, mycotoxins, persistent organic pollutants (POPs), illegal food dyes, antibiotics and veterinary drug residues, food additives, and vitamins.',

          'foodThirdParaLiThree' : 'Food Chemical Analysis: Food chemical analysis is used to ensure safe consumption of food and beverages, product quality, and product safety. Correct food labels must be used, in addition to increased controls by food authorities. Specific analysis can be performed based on need, including trace elements, heavy metals, mycotoxins, persistent organic pollutants (POPs), illicit food dyes, residues of antibiotics and veterinary drugs, food additives, and vitamins.',

          'foodThirdParaLiFour' : 'Environmental scanning analysis: The cleanliness of a food processing area can be detected through environmental scanning, in addition to being used to alert food inspectors and business owners. Environmental scanning is the process of evaluating the presence of pathogens by microbiological examination of surfaces, tools and utensils used in food preparation to confirm whether cleaning and disinfection programs are effective (known as cleaning verification).',


          'Certificates' : 'Certificates' , 
          'firstCertificate' : 'CAP (American Association of Pathologists)',
          'secondCertificate' : 'EGAC (Egyptian Accreditation Council)',

          'foodForthPara' : 'Royal Lab is the heart of our operations and one of the most important pillars of our scientific and technological progress. Click on the link to take a video tour of our factory to see how we carry out our work with the highest levels of accuracy.',

          'name' : 'Name',
          'email' : 'Email',
          'subject' : 'Subject',
          'notes' : 'Notes (option)',
          'send' : 'Send',

          // water analysis
          'waterAnalysis' : 'Water Analysis' ,

          'waterFirstPara' : 'Microbiological contamination is a major problem in many industries, as it can lead to many diseases. The law also requires all food companies to ensure food safety and adopt healthy practices.',

          'waterSecondPara' : 'In the laboratory, our Water Analysis Department is an innovative extension of our trusted business and is a strong addition to the much needed food and water laboratory testing market to ensure the best hygienic practices for restaurants, tourism establishments and food manufacturers. We provide effective and certified tests throughout Egypt to meet the needs of all sectors.',

          'waterThirdPara' : 'The laboratory is an accredited laboratory and holds an ISO / IEC 17025: 2017 certificate in the microbiological range. We also provide complete microbiological and chemical tests for water to ensure that water from any source is within international and Egyptian standards. Our branch network covers all governorates, with full readiness to collect samples from anywhere.',

          'waterForthPara' : 'The laboratory provides the following water analyses:',
          'waterForthParaFirstLi' : 'Water Microbiological Analysis – We offer a full range of water tests including industrial, agricultural and potable.',
          'waterForthParaSecondLi' : ' Chemical analysis of water – examined parameters, physical and chemical parameters, undesirable substances, heavy metals, as well as other tests individually analyzed from the water sample.',

          'waterSixPara' :'Water tests are certified under EOS 190-01/2007.',
          'waterSevenPara' :'Royal Lab is the heart of our operations and one of the most important pillars of our scientific and technological progress. Click on the link to take a video tour of our factory to see how we carry out our work with the highest levels of accuracy.',
          
          'waterCertificate' : 'Certificates:' , 
          'waterfirstCertificate' : '3- CAP (American Association of Pathologists)',
          'watersecondCertificate' : '4- EGAC (Egyptian Accreditation Council)',

          'nameWater' : 'Name',
          'phoneWater' : 'Phone',
          'subjectWater' : 'Subject',
          'notesWater' : 'Notes',

          'sendWater' : 'Send',


          'secondLi' : 'Providing the ideal environment during the work environment.',
          'theThirdLi' : 'For innovative application of new technologies.',
          'ourMission' : 'Our Mission' ,
          'thirdPara' : 'Providing high-quality laboratory diagnostic information to help improve the health and well-being of the communities we serve',
          'firLi' : 'This vision is achieved through:',
          'secLi' : 'Providing high-quality medical laboratory services using the latest technologies.Emphasis on good treatment   and empathy with patients, in addition to professional expertise.',
          'thirdLi' : 'The relentless pursuit of accuracy in results, responsiveness to our customers’ needs, and speed of service',
          'fourthLi' : 'Acquire, disseminate and apply knowledge through the innovative use of technology.',
          'fifthLi' : 'Create and expand collaborative professional partnerships.',

           // Book appointment
           'bookAppointment' : 'Book an Appointment',

           'personalInfo' : 'Personal Info',

           'namePlaceholder' : 'Name : Sara Mohamed',
           'agePlaceholder' : 'Age : 25',
           'phoneP:laceholder' : 'Phone : 012021615',
           'save' : 'Save',
           'update' : 'Update',

          'Date' : 'Date',

           'lableOptPlace' :  'Choose Branch',
           'opt1' : 'Eldamam/Flowers area',
          'opt2' : 'Mekka/Flowers area',
          'opt3' : 'Elmadina/Flowers area',

          'lableOptServe' :  'Service',

          'opt4' : 'Blood result',
          'opt5' : 'Food Result',
          'opt6' : 'Medicine Result',
          'orderDetails' : 'Order Details' ,
          'service' : 'Service Name' ,
         

          'serveBtnNow' : 'Book Now!',
          "pleaseEnterName": "Please enter a name",
          "pleaseEnterEmail": "Please enter an email",
          "pleaseEnterSubject": "Please enter message subject",
          "pleaseEnterAddress": "Please enter an address",
          "uploadYourCv": "Please upload your CV",
          "requestReceived": "Your Request have recieved successfuly, we will contact you!",
          "pleaseEnterAge": "Please enter an age",
          "pleaseEnterPhone": "Please enter a phone number",
          "pleaseEnterDate": "Please enter a date",
          "pleaseSelectBranch": "Please select a branch",
          "pleaseSelectService": "Please select a service",
          "appointmentSentSuccussfuly": "Your appointment have sent successfuly, We will contact you!",
          "orderSuccess": "Order placed successfuly!",
          // doctorConsultation
          'doctorConsultation' : 'Doctor Consultation',
          // 'Date' : 'Date',
          'specialization' : 'Specialization',
          'opt1specialization' : 'Neurologists',
          'opt2specialization' : 'Analysis',
          'opt3specialization' : 'Cardiologist',
          'requestBtnNow' : 'Send Request',
          'consultationType' : 'consultation Type',

          // Food analysis
          'foodAnalysis' : 'Food Analysis' ,

          'foodFisrtPara' : 'In the Laboratory Department for Food and Environmental Surveys, we conduct a wide range of tests and analyzes using our scientific and technological strength. Microbiological contamination is a major problem in many industries and legislation states that all food companies must ensure food safety and hygienic practices. All tests are available to restaurants, tourism establishments, and food manufacturers quickly, efficiently and certified throughout Egypt for all production, catering and export needs.',

          'foodSecondPara' : 'The laboratory is an accredited laboratory and holds a certificate. ISO / IEC 17025: 2017 and provides all tests, such as food microbiology to detect food-borne pathogens and food spoilage organisms, in addition to environmental swabs. Samples can be collected from your organization throughout Egypt by taking advantage of the laboratory’s widely spread network of branches and our fleet of specialized chemists.' , 

          'foodThirdPara' : 'The following services are provided for food, feed and environmental surveys:' , 
          
          'foodThirdParaLione' : 'Microbiological analysis of foods – includes raw meat, poultry, seafood, ready-to-eat meals, fresh fruits, vegetables, juices, milk, dairy products, grains, nuts, herbs, and additives.',
          
          'foodThirdParaLiTwo' : 'Food chemical analysis – covers foods and beverages to ensure safe consumption, product quality and product safety. Correct nutritional labeling must be used and consumers must be protected from adulteration and tampering with unsafe food and beverages. We do this using a combined approach of appropriate food legislation coupled with increased controls by food authorities. Specific analysis can be performed based on need including trace elements, heavy metals, mycotoxins, persistent organic pollutants (POPs), illegal food dyes, antibiotics and veterinary drug residues, food additives, and vitamins.',

          'foodThirdParaLiThree' : 'Food Chemical Analysis: Food chemical analysis is used to ensure safe consumption of food and beverages, product quality, and product safety. Correct food labels must be used, in addition to increased controls by food authorities. Specific analysis can be performed based on need, including trace elements, heavy metals, mycotoxins, persistent organic pollutants (POPs), illicit food dyes, residues of antibiotics and veterinary drugs, food additives, and vitamins.',

          'foodThirdParaLiFour' : 'Environmental scanning analysis: The cleanliness of a food processing area can be detected through environmental scanning, in addition to being used to alert food inspectors and business owners. Environmental scanning is the process of evaluating the presence of pathogens by microbiological examination of surfaces, tools and utensils used in food preparation to confirm whether cleaning and disinfection programs are effective (known as cleaning verification).',


          'Certificates' : 'Certificates' , 
          'firstCertificate' : 'CAP (American Association of Pathologists)',
          'secondCertificate' : 'EGAC (Egyptian Accreditation Council)',

          'foodForthPara' : 'Royal Lab is the heart of our operations and one of the most important pillars of our scientific and technological progress. Click on the link to take a video tour of our factory to see how we carry out our work with the highest levels of accuracy.',

          'name' : 'Name',
          'email' : 'Email',
          'subject' : 'Subject',
          'notes' : 'Notes (option)',
          'send' : 'Send',

          // water analysis
          'waterAnalysis' : 'Water Analysis' ,

          'waterFirstPara' : 'Microbiological contamination is a major problem in many industries, as it can lead to many diseases. The law also requires all food companies to ensure food safety and adopt healthy practices.',

          'waterSecondPara' : 'In the laboratory, our Water Analysis Department is an innovative extension of our trusted business and is a strong addition to the much needed food and water laboratory testing market to ensure the best hygienic practices for restaurants, tourism establishments and food manufacturers. We provide effective and certified tests throughout Egypt to meet the needs of all sectors.',

          'waterThirdPara' : 'The laboratory is an accredited laboratory and holds an ISO / IEC 17025: 2017 certificate in the microbiological range. We also provide complete microbiological and chemical tests for water to ensure that water from any source is within international and Egyptian standards. Our branch network covers all governorates, with full readiness to collect samples from anywhere.',

          'waterForthPara' : 'The laboratory provides the following water analyses:',
          'waterForthParaFirstLi' : 'Water Microbiological Analysis – We offer a full range of water tests including industrial, agricultural and potable.',
          'waterForthParaSecondLi' : ' Chemical analysis of water – examined parameters, physical and chemical parameters, undesirable substances, heavy metals, as well as other tests individually analyzed from the water sample.',

          'waterSixPara' :'Water tests are certified under EOS 190-01/2007.',
          'waterSevenPara' :'Royal Lab is the heart of our operations and one of the most important pillars of our scientific and technological progress. Click on the link to take a video tour of our factory to see how we carry out our work with the highest levels of accuracy.',
          
          'waterCertificate' : 'Certificates:' , 
          'waterfirstCertificate' : '3- CAP (American Association of Pathologists)',
          'watersecondCertificate' : '4- EGAC (Egyptian Accreditation Council)',

          'nameWater' : 'Name',
          'phoneWater' : 'Phone',
          'subjectWater' : 'Subject',
          'notesWater' : 'Notes',

          'sendWater' : 'Send',


          // Pharmaceutical analyses
          'pharmaceuticalAnalyses' : 'Pharmaceutical Analyses', 

          'PharmaceuticalFirstPara' : 'In our laboratories, we enhance our customers success by helping to provide patients with the best possible healthcare experience and supporting clinical trials with accurate, state-of-the-art medical analysis. The laboratory is your partner when it comes to ensuring the best healthcare experience and supporting clinical trials. With medical diagnostics for patient support programs, our lab results will help you keep your programs consistently on the market, with the right time to market and within your allocated budget. The laboratory is the only CAP-accredited medical laboratory in Egypt that has the latest technologies and competitive advantages.',

          'PharmaceuticalSecondPara' : 'Our services are tailored to meet the specific needs of businesses. We are flexible enough to meet any needs you may have.' ,

          'PharmaceuticalServices' : 'Our services:',
          'PharmaceuticalServices1' : 'Patient support analyzes (oncology, cardiology, dermatology...etc.)',
          'PharmaceuticalServices2' : 'Analyzes for research and clinical organizations.',

          'pharmacyCertificate'  : 'Certificates :',
          'pharmacyCertificate1' : 'Certificate of accreditation from the American International Society of Pathologists (CAP).',
          'pharmacyCertificate2' :'ISO',
          'pharmacyCertificate3' :'Accreditation by the General Authority for Health Accreditation and Control (GAHAR).',

          'namePharmacy' : 'Name',
          'phonePharmacy' : 'Phone',
          'subjectPharmacy' : 'Subject',
          'notesPharmacy' : 'Notes(optional)',
          "pleaseSelectDoctor": "Please select a doctor.",
          "pleaseSelectSpecialization": "Please select a specialization.",
          "pleaseSelectDate": "Please select a date.",
          "pleaseSelectConsultation": "Please select a consultation.",
          "appointmentSentSuccessfully": "Appointment sent successfully we will contact you.",
          "errorSubmittingAppointment": "Error submitting appointment.",


          'sendPharmacy' : 'Send',


               // footer
               'TradeAssurance' : 'Trade Assurance',
               'TradeAssuranceli1' : 'Safe and easy payments',
               'TradeAssuranceli2' : 'Return Policy',
               'TradeAssuranceli3' : 'Arriving on time',
               'TradeAssuranceli4' : 'After-sales protections',
               'TradeAssuranceli5' : 'Product monitoring services',


               'knowus' : 'get to know us',
               'knowusl1' : 'get to know us',
               'knowusl2' : 'Pay Alibaba.com',
               'knowusl3' : 'corporate responsibility',
               'knowusl4' : 'News Center',
               'knowusl4' : 'Jobs',
     
               'Getsupport' : 'Get Support',
               'Getsupportl1' : 'Help Center',
               'Getsupportl2' : 'live chat',
               'Getsupportl3' : 'Check order status',
               'Getsupport4' : 'Refunds',
               'Getsupport5' : 'Report abuse',

              //  Cart

              'shoppingCart' : 'Shopping Cart',
              'addMoreBaqat' : 'Add more Baqat / Tests',
              'theAll' : 'Total : ',
              'payBtn' : 'Checkout',
              'checkout' : 'Checkout',
                    

          








          // Add other English translations here
        },
      },
      ar: {
        translation: {
          // nav link
          'My app' : 'موقعي',
          'Switch Language': 'English',
          'Orders': 'طلباتي',
          'noOrders': 'لا يوجد طلبات حتى الان!',
          'noAppointments': 'لا يوجد حجوزات حتى الان!',
          'Appointments': 'المواعيد',
          'Visits': 'الزيارات',
          'Home' : 'الرئيسية',
          'Services' : 'الخدمات',
          'Results' : 'النتائج',
          'Contact Us' : 'تواصل معنا',
          'Reserve' : 'احجز موعد',
          'About' : ' من نحن',
          'AboutRoyal' : ' عن رويال',
          'Login' : 'تسجيل الدخول',
          'Create Account' :'انشاء حساب',
          'ApplyJob' :'توظيف',
          'Apply' :'تقديم',
          'recevidYourRequest' :'تم استقبال طلبك بنجاح سيتم التواصل معك',
          'uploaded' :'تم التحميل',
          'chooseCv' :'ملف السيرة الذاتية',
          'applyForJob' :'التقديم علي العمل',

          // login page
          'LoginPage' : 'تسجيل دخول',
          'help' : 'مساعدة',
          'errorMsgLogin'  :'كلمة مرور خاطئة' ,
          'logOut' : 'تسجيل خروج',
          'pls' :'سجل دخولك اولا',
          'service' : 'اسم الخدمة' ,
          'servicePrice' : 'سعر الخدمة' ,
          'recipientName' : "اسم المستلم" ,
          'recipientPhone' : "هاتف المستلم" ,
          'appointmentDate' : "تاريخ الحجز" ,
          'appointmentStatus' : "حالة الحجز" ,
          'appointmentDetails' : "تفاصيل الحجز" ,
          'recipientAddress' : "عنوان المستلم" ,
          'orderDate' : "تاريخ الطلب" ,
          'orderStatus' : "حالة الطلب" ,
          'branch' : "الفرع" ,
          'under_review' : "تحت المراجعة" ,
          'confirmed' : "تم التاكيد" ,
          'completed' : "اكتمل" ,
          'canceld' : "فشل او الغي" ,

          // there is contact us in the navbar and here
          // 'Contact Us' : 'تواصل معنا',
          // 'Login' : 'تسجيل الدخول',
          
          'loginPara' :'احصل على افضل رعاية طبية مع معمل رويال للتحاليل الطبية',
          'tasaphah' : 'تصفح الان ! ',
          'hello'  : 'مرحبا',
          'EmailLogin'  : 'البريد الالكتروني',
          'password'  : 'كلمة المرور',
          'forgetPassword'  : 'هل نسيت كلمة المرور ؟',




          // register page
          'registerPage' : 'عمل حساب',
          'createAccount' : 'انشاء حساب',
          'createNewAccount' : 'انشاء حساب جديد',

          'errorMsg' :'هذا الحساب موجود بالفعل',
          'loading' : 'جاري التحميل ....',

          "errorNameRequired": "ادخل الاسم",
          "errorMessageNamemin": "ادخل الاسم ثلاثي",
          "errorPhoneRequired": "الهاتف مطلوب",
          "errorPasswordRequired": "كلمة المرور مطلوبة",
          "errorPasswordMismatch": "كلمتا المرور غير متطابقتين",
          "errorPasswordComplexity": "يجب أن تحتوي كلمة المرور على حرف كبير وحرف صغير ورقم وحرف خاص، وأن تكون على الأقل ٨ أحرف",

          "errorMessagePassword": "يجب أن تكون كلمة المرور من 8 أحرف على الأقل",
          // there is contact us in the navbar and here
          // 'Create Account' :'انشاء حساب',
          // 'tasaphah' : 'تصفح الان ! ',
          'name' : 'الاسم*',
          'phone' : 'رقم الجوال*',
          'Emailregister'  : 'البريد الالكتروني*',
          'passwordRegister'  : 'كلمة المرور*',
          'rePassword'  : 'تأكيد كلمة المرور *' ,

          // profile page
          'Profile' : 'الملف الشخصي',

          'personalInfo' : 'المعلومات الشخصية',
          'Address' : 'العنوان',
          'file' : 'الملف',
          'Name' : 'الاسم',
          'age' : 'العمر',
          'Phone' : 'الجوال',
          'address' : 'العنوان*',
          'email1' :'البريد',




          // services page
          'tahalilAndBaqat':'التحاليل والباقات',
          'ElbahsAnTahalih' : 'البحث عن التحاليل',
          

          'UploadWasfa' : 'تحميل وصفة طبية',
          'Baqat' : 'باقات',
          'EGP' : 'جنيه مصري',
          // will change according the card
          'Enzem':'إنزيم فوسفو كينز',
          'heartEnzem':'انزيمات قلب - يتم طلبه عند الشعور بآلام بالصدر',
          'price' : '250.رس',
          'addToCar' : 'اضافة الي العربة',
          'tahalilhLists' : 'قائمة التحاليل',
          "pleaseSelectDoctor": "يرجى اختيار طبيب.",
          "pleaseSelectSpecialization": "يرجى اختيار تخصص.",
          "pleaseSelectDate": "يرجى اختيار تاريخ.",
          "pleaseSelectConsultation": "يرجى اختيار استشارة.",
          "appointmentSentSuccessfully": "تم إرسال الطلب بنجاح سيتم التواصل معك.",
          "errorSubmittingAppointment": "حدث خطأ أثناء إرسال الموعد.",

          // home page
          'welcome' : 'مرحبا بك في مختبرات رويال التشخيصية',
          'welcome2' : 'خدمتكم تعكس رؤيتنا',
          'buttonHome' : 'اكتشف المزيد !',
          'elafrad' : 'الافراد',
          'companies' :'الشركات',
          'tahalilElgezaa' : 'تحاليل الغذاء',
          'araClients' : 'اراء العملاء',
          'torki' : 'تركي عبد الرحمن',
          'lorem' :'لوريم إيبسوم دولور يجلس أميت لوريم إيبسوم دولور يجلس أميت كونسيكتور',
          'technical':'الدعم المهني',
          'techLorem':'لوريم إيبسوم دولور يجلس أميت لوريم إيبسوم دولور يجلس أميت كونسيكتور.',
          'waterAnalysis':'تحليل المياة',
          'pharmaAnalysis':'التحاليل الصيدلانية',
          'recipeMedical' : 'الوصفة الطبية',
          'chooseFileRecipe' : 'قم باختيار ملف الروشتة',
          'fileUploadedSuccessfully' : 'تم ارسال الروشتة بنجاح سوف نتواصل معك',
          'bloodAnalysis' : 'تحليل الدم',
          'homeVisit':'زيارة منزلية',
          'Branches':'الفروع',
          'Insurances':'التامينات',
          'consultation':'استشارة',
          'Vaccinations':'التطعيمات',

          // Download the medical prescription
          'medicalPrescription' : 'تحميل الوصفة الطبية',
           "imageLabel": "تحميل الصورة",
           "notesLabel": "ملاحظات",
           "chooseFile": "اختار ملف",
           "uploadBtn": "رفع",

           //  Services

           'servicesp1' : 'الخدمة :  ',
           'servicesp2' : 'التاريخ : ',
           'servicesp3' : 'الخدمة : ',

           'updloadPdf' : 'تحميل pdf',

           //  Home visit
          'homeVisit' : 'الزيارة المنزلية',
          'visitNumber' : 'البحث عن طريق رقم الزيارة ',
          'notFoundVisit' : 'لم يتم العثور على زيارات منزلية بعد !',
          'reserverNow' : 'احجز الان!',

          // about Page
          'aboutUs' : 'عن المختبر',
          'aboutUsHeading' : 'مختبرات رويال التشخيصية' ,
          'aboutUsParagraph1' : 'نسعى جاهدين إلى أن تكون خريجات ​​المختبرات الطبية التي تعتمد على إنتاج الأيونات بالتطوير والتقنيات الحديثة في مجال المختبرات الطبية المخبريه.',
          'aboutUsParagraph2' : 'نسعى مجاهدين إلى أن نكون خريجي المختبرات الطبية التي تعمل علي المظهر النهائي خدمات مخبرية عالية الجودة تتماشى مع متطلبات المجتمع ومواكبة آخر التفاصيل.' ,
          'firstPara' : 'تعتبر معامل المختبر هي أكبر شركات المختبرات الطبية الخاصة في منطقة الشرق الأوسط، التي توفر خدمات المختبرات التشخيصية والاختبارات الباثولوجية للأوساط الطبية في المملكة العربية السعودية.',
          'readeBtn' :'اقرأ المزيد !',
          
          'ourVision' : 'رؤيتنا' ,
          'secPara' : 'أن نكون الرائد المعترف به في مجال الطب المخبري في الشرق الأوسط.',
          'after' : 'تتحقق هذه الرؤية من خلال:' ,
          'firstLi' : 'التزام قادتنا وموظفينا بمهمتنا وقيمنا الأساسية.',
          'secondLi' : 'توفير البيئة المثالية خلال بيئة العمل.',
          'theThirdLi' : 'لتطبيق المبتكر للتقنيات الجديدة.',

          'ourMission' : 'مهمتنا' ,
          'thirdPara' : 'توفير معلومات تشخيصية معملية عالية الجودة للمساعدة في تحسين صحة ورفاهية المجتمعات التي نخدمها.',
          'firLi' : 'تقديم خدمات معملية طبية عالية الجودة باستخدام أحدث التقنيات.',
          'secLi' : 'التأكيد على حسن المعاملة، والتعاطف مع المرضى، بالإضافة إلى الخبرة المهنية.',
          'thirdLi' : 'السعي الحثيث لتحقيق الدقة في النتائج، والاستجابة لاحتياجات عملائنا، وسرعة الخدمة.',
          'fourthLi' : 'اكتساب ونشر وتطبيق المعرفة من خلال الاستخدام المبتكر للتكنولوجيا.',
          'fifthLi' : 'إنشاء وتوسيع الشراكات المهنية التعاونية.',

           // Royal Page

           'p1' : 'تعتبر معامل المختبر هي أكبر شركات المختبرات الطبية الخاصة في منطقة الشرق الأوسط، التي توفر خدمات المختبرات التشخيصية والاختبارات الباثولوجية للأوساط الطبية في المملكة العربية السعودية.',
           'p2' : 'تقدم الشركة مجموعة من أكثرمن 1400 تحليل في مجالات علم المناعة ، أمراض الدم / التخثر ، كيمياء الدم التشخيصية ، علم الطفيليات ، علم الأحياء الدقيقة / الأمراض المعدية ، علم السموم ، علم الخلايا ، علم الأمراض الجراحية ، قياس التدفق الخلوي ، علم البايولوجيا الجزيئية وعلم الوراثة الخلوي. يتم جمع العينات في أكثر من 214 فرعا تغطي محافظات جميع المناطق في مصر وتتم التحاليل في المختبر الرئيسى بالاضافةالي المعامل المركزية في المحافظات الرئيسية في مصر.',
           'p3' : 'تم تأسيس الشركة عام 1979 كمختبر واحد علي يد الاستاذة الدكتورة مؤمنة كامل- أستاذة علم المناعة بكلية الطب جامعة الدمام',
           'p4' : 'تم تأسيس الشركة عام 1979 كمختبر واحد علي يد الاستاذة الدكتورة مؤمنة كامل- أستاذة علم المناعة بكلية الطب جامعة القاهرة.و يعد المختبر اليوم أكبر سلسلة في المختبرات الطبية خاصة مع التوجه المتجدد نحو التوسع. على مدى 40 عامًا . اكتسبت معامل المختبر الكثير من المعرفة عن الاحتياجات والتوقعات الخاصة بك في خلال 40 عاما من الريادة في مجال التحاليل الطبية ، و لهذا السبب في تقوم معامل المختبر باتباع معايير الجودة على جميع الجبهات و لذلك هي المختبرات الوحيدة الحاصلة علي CAP في مصر منذ 2010 و الذي يعتبر المعيار الذهبي لاعتماد المختبرات الطبية مما يعني أن دقة نتائج المختبر مضمونة ويتم الحصول علي نتائج مماثلة من جميع المختبرات المعتمدة من CAP في جميع أنحاء العالم.',
           'p5' : 'تمثل معامل رويال أكبر شبكة في السعودية بأكثر من 218 فرعًا علي مستوي الجمهورية و أيضا يؤخذ في الاعتبار اختيار أفضل الكوادر للعمل في معامل المختبر سواءا على المستويات الإدارية والفنية. تعتبر معامل المختبر أول مختبر طبي في مصر يستخدم تكنولوجيا “خلية عمل” و هي التقنية الأحدث في تكنولوجيا المختبرات الطبية ، وبالتالي قلة الأخطاء البشرية الي الحد الأدني.',
           'p6' : 'إضافة إلى ذلكن القدرة علي سحب العينات و تسليم النتائج من و الي مكان تواجدكم وأيضا توفير نتائج الاختبار الخاص بك مجانا، على موقعنا الالكتروني ونحن نسعى باستمرار لتجاوز توقعاتك والوفاء بوعودنا لأننا نهتم حقًا من القلب.',
           'readLess' : 'اقرأ أقل !',

          // Book appointment
          'bookAppointment' : 'احجز موعد',
          'lableOptPlace' :  'اختر الفرع',
          'personalInfo' : 'المعلومات الشخصية',
          'namePlaceholder' : 'الاسم : سارة محمد',
          'agePlaceholder' : 'العمر : 25',
          'phonePlaceholder' : 'الفون : 010230361',
          'save' : 'حفظ',
          'update' : 'تعديل',

          'Date' : 'الموعد',
          'opt1' : 'الدمام/حي الزهور',
          'opt2' : 'مكة/حي الزهور',
          'opt3' : 'المدينة/حي الزهور',
          'lableOptServe' :  'الخدمة',

          'opt4' : 'تحليل الدم',
          'opt5' : 'تحليل الغذاء',
          'opt6' : 'تحليل الدواء',

          'serveBtnNow' : 'احجز الان!',
          "pleaseEnterName": "يرجى إدخال الاسم",
          "pleaseEnterEmail": "يرجي ادخال البريد الاكتروني",
          "pleaseEnterSubject": "يرجي ادخال محتوى الرسالة",
          "requestReceived": "تم استقبال طلبك بنجاح سوف يتم التواصل معك",
          "pleaseEnterAddress": "يرجى إدخال العنوان",
          "uploadYourCv": "قم بارفاق ملف السيرة الذاتية الخاص بك",
          "pleaseEnterAge": "يرجى إدخال العمر",
          "pleaseEnterPhone": "يرجى إدخال رقم الهاتف",
          "pleaseEnterDate": "يرجى إدخال التاريخ",
          "pleaseSelectBranch": "يرجى اختيار الفرع",
          "pleaseSelectService": "يرجى اختيار الخدمة",
          "appointmentSentSuccussfuly": "تم إرسال طلبك بنجاح، سوف نقوم بالتواصل معك!",
          "orderSuccess": "تم ارسال الطلب بنجاح !",

          // doctor consultation
          'doctorConsultation' : 'استشارة الطبيب',
          'doctorName' : 'اسم الدكتور' , 
          'nameDoctor1' : 'د / ابراهيم احمد' , 
          'nameDoctor2' : 'د / خالد محمد' , 
          'nameDoctor3' : 'د / أحمد علي' , 
          'kind' : 'استشارة عبر الانترنت' ,
          'orderDetails' : 'تفاصيل الطلب' ,
          // 'Date' : 'الموعد',
          'specialization' : 'التخصص',
          'opt1specialization' : 'مخ وأعصاب',
          'opt2specialization' : 'تحاليل',
          'opt3specialization' : 'امراض القلب',
          'requestBtnNow' : 'أرسل طلب',
          'consultationType' : 'نوع الاستشارة',

          // Food analysis
          'foodAnalysis' : 'تحليل الغذاء' ,

          'foodFisrtPara' : 'نجري في قسم المختبر للأغذية والمسحات البيئية ، مجموعة واسعة من الاختبارات والتحليلات باستخدام قوتنا العلمية والتكنولوجية. يعد التلوث الميكروبيولوجي مشكلة كبيرة في العديد من الصناعات والتشريعات تنص على أن جميع شركات الأغذية يجب أن تضمن سلامة الأغذية والممارسات الصحية.جميع الاختبارات متاحه للمطاعم، والمؤسسات السياحية، ومصنعي المواد الغذائية بسرعة وكفاءة ومعتمدة في جميع أنحاء مصر لجميع احتياجات الإنتاج والتموين والتصدير.',

          'foodSecondPara' : 'المختبر هو معمل معتمد و حاصل علي شهاده . ISO / IEC 17025: 2017  و يقدم جميع الاختبارات كالميكروبيولوجيا للأغذية للكشف عن مسببات الأمراض التي تنقلها الأغذية والكائنات المفسده للطعام بالإضافة إلى المسحات البيئيه و يمكن جمع العينات من مؤسستك في جميع أنحاء مصر بالاستفادة من شبكة فروع المختبر المنتشرة على نطاق واسع وأسطولنا من الكيميائيين المتخصصين.' , 

          'foodThirdPara' : 'يتم تقديم الخدمات الآتية للأغذية والأعلاف والمسحات البيئية:' , 
          
          'foodThirdParaLione' : 'التحليل الميكروبيولوجيي للأغذية – يشمل اللحوم النيئة، والدواجن، والمأكولات البحرية، والوجبات الجاهزة للأكل، والفواكه الطازجة، والخضروات، والعصائر، والحليب، ومنتجات الألبان، والحبوب، والمكسرات، والأعشاب، والمواد المضافة.',
          
          'foodThirdParaLiTwo' : 'التحليل الكيميائي للأغذية – يغطي الأطعمة والمشروبات لضمان الاستهلاك الآمن وجودة المنتج وسلامة المنتج. يجب استخدام الملصقات الغذائية الصحيحة وكذلك حماية المستهلكين من الغش والتلاعب بالأغذية والمشروبات غير الآمنة. نقوم بذلك  باستخدام نهج مشترك للتشريعات الغذائية المناسبة إلى جانب زيادة الضوابط من قبل السلطات الغذائية. يمكن إجراء تحليل محدد بناءً على الحاجة بما في ذلك العناصر النزرة ، والمعادن الثقيلة ، والسموم الفطرية ، والملوثات العضوية الثابتة (POPs) ، والأصباغ الغذائية غير القانونية ، والمضادات الحيوية ومخلفات الأدوية البيطرية ، والمضافات الغذائية ، والفيتامينات.',

          'foodThirdParaLiThree' : 'التحليل الكيميائي للأغذية :يستخدم التحليل الكيميائي للأغذية لضمان الاستهلاك الآمن للأغذية والمشروبات ، وجودة المنتج، وسلامة المنتج. كما يجب استخدام الملصقات الغذائية الصحيحة ،ذلك و بالإضافة إلى زيادة الضوابط من قبل السلطات الغذائية. يمكن إجراء تحليل محدد على أساس الحاجة ، بما في ذلك العناصر النادره ، والمعادن الثقيلة ، والسموم الفطرية ، والملوثات العضوية الثابتة (POPs)، الأصباغ الغذائية غير المشروعة ، ومتبقيات المضادات الحيوية و الأدوية البيطرية ، والاضافات الغذائية ، والفيتامينات',

          'foodThirdParaLiFour' : 'تحليل المسحات البيئية: يمكن الكشف عن نظافة منطقة تجهيز الأغذية من خلال المسح البيئي ، بالإضافة إلى استخدامها لتنبيه مفتشي الأغذية وأصحاب الأعمال. المسح البيئي هو عملية تقييم وجود مسببات الأمراض عن طريق الفحص الميكروبيولوجي للأسطح والأدوات والأواني  المستخدمة في تحضير الطعام للتاكيد ما إذا كانت برامج التنظيف والتطهير  فعالة (المعروفة باسم التحقق من التنظيف)',


          'Certificates' : 'الشهادات:' , 
          'firstCertificate' : '3- CAP (الsجمعية الأمريكية للباثولوجيين)',
          'secondCertificate' : '4- EGAC (مجلس الاعتماد المصري)',

          'foodForthPara' : 'الميجا لاب هو قلب عملياتنا واحد اهم الدعائم الاساسه لتقدمنا ​​العلمي والتكنولوجي. انقر  على الرابط للقيام بجولة عبر معملنا من خلال الفيديو لترى كيف ننفذ أعمالنا بأعلي مستوايات الدقه .',

          'name' : 'الاسم',
          'email' : 'البريد الالكتروني',
          'subject' : 'الموضوع',
          'notes' : 'ملاحظات (اختياري)',

          'send' : 'أرسل',
          

          // Water analysis
          'waterAnalysis' : 'تحليل المياه',

          'waterFirstPara' : 'يعد التلوث الميكروبيولوجي مشكلة كبيرة في العديد من الصناعات.، حيث يمكن أن يؤدي إلى كثيرمن الأمراض. كما يفرض القانون على جميع شركات الأغذية  أن تضمن سلامة الأغذية و تعتمد الممارسات الصحية.',

          'waterSecondPara' : 'في المختبر ، يعد قسم تحليل المياه التابع لنا امتدادًا مبتكرًا لأعمالنا الموثوق بها ، ويعد إضافة قويه لسوق الاختبارات المعملية للأغذية والمياه التي يزيد الحاجة إليها لضمان أفضل الممارسات الصحيه للمطاعم والمؤسسات السياحية ومصنعي المواد الغذائية. نقدم اختبارات فعالة ومعتمدة في جميع أنحاء مصر لتلبية احتياجات جميع القطاعات.',

          'waterThirdPara' : 'المختبر هو معمل معتمد و حاصل علي شهاده  ISO / IEC 17025: 2017 في النطاق الميكروبيولوجي كما نقدم اختبارات ميكروبيولوجية وكيميائية كاملة للمياه للتأكد من أن المياه من أي مصدر ضمن المعايير الدوليه و المصريه . تغطي شبكة فروعنا جميع المحافظات مع جاهزية كاملة لجمع العينات من أي مكان.',

          'waterForthPara' : 'المختبر يقدم  تحاليل المياه ا التالية:',
          'waterForthParaFirstLi' : 'تحليل ميكروبيولوجيا المياه – نقدم مجموعة كاملة من اختبارات المياه بما في ذلك الصناعية والزراعية والصالحة للشرب',
          'waterForthParaSecondLi' : 'التحليل الكيميائي للمياه – المعايير التي تم فحصها ، والمعايير الفيزيائية والكيميائية ، والمواد غير المرغوب فيها ، والمعادن الثقيلة ، بالإضافة إلى الاختبارات الأخرى التي تم تحليلها بشكل فردي من عينة الماء.',

          'waterSixPara' :'يتم اعتماد اختبارات المياه بموجب شهادة EOS 190-01 / 2007.',
          'waterSevenPara' :'الميجا لاب هو قلب عملياتنا وأحد اهم الدعائم الأساسية لتقدمنا ​​العلمي والتكنولوجي. انقر على الرابط  للقيام بجولة عبر معملنا من خلال الفيديو لترى كيف ننفذ أعمالنا بأعلي مستوايات الدقه .',
          'waterCertificate' : 'الشهادات:' , 
          'waterfirstCertificate' : 'CAP (الsجمعية الأمريكية للباثولوجيين)',
          'watersecondCertificate' : 'EGAC (مجلس الاعتماد المصري)',

          'nameWater' : 'الاسم',
          'phoneWater' : 'الفون',
          'subjectWater' : 'الموضوع',
          'notesWater' : 'ملاحظات (اختياري)',

          'sendWater' : 'أرسل',

          // Pharmaceutical analyses
          'pharmaceuticalAnalyses' : 'التحاليل الصيدلانية', 

          'PharmaceuticalFirstPara' : 'في مختبراتنا ، نعزز نجاح عملائنا من خلال المساعدة في تزويد المرضى بأفضل تجربة رعاية صحية ممكنة ودعم التجارب الاكلينيكيه  من خلال التحاليل الطبية الدقيقة والحديثة. المختبر هو شريكك عندما يتعلق الأمر بضمان أفضل تجربة رعاية صحية ودعم التجارب الاكلينيكيه. من خلال التشخيص الطبي لبرامج دعم المرضى ، ستساعدك نتائج المختبر لدينا على الحفاظ على برامجك في السوق باستمرار ، مع الوقت المناسب للتسويق وفي حدود ميزانيتك المخصصة. المختبر هو المعمل الطبي الوحيد المعتمد من CAP في مصر الذي يتمتع باحدث التقنيات ومزايا تنافسية..',

          'PharmaceuticalSecondPara' : 'تم تصميم خدماتنا خصيصا لتلبية الاحتياجات المحددة للشركات. نحن مرنون بما يكفي لتلبية أي احتياجات قد تكون لديك.' ,

          'PharmaceuticalServices' : 'خدماتنا :',
          'PharmaceuticalServices1' : 'تحاليل دعم المريض (الأورام ، أمراض القلب ، الأمراض الجلدية … إلخ)',
          'PharmaceuticalServices2' : 'تحاليل للمنظمات البحثيه و الاكلينكيه.',

          'pharmacyCertificate'  : 'الشهادات:',
          'pharmacyCertificate1' : 'شهاده اعتماد  الجمعيه الدوليه الأمريكية للباثولوجيين CAP',
          'pharmacyCertificate2' :'الايزو ISO',
          'pharmacyCertificate3' :'اعتماد الهيئة العامة للاعتماد والرقابة الصحية GAHAR',


          // Pharmaceutical analyses

          'namePharmacy' : 'الاسم',
          'phonePharmacy' : 'الفون',
          'subjectPharmacy' : 'الموضوع',
          'notesPharmacy' : 'ملاحظات(اختياري)',

          'sendPharmacy' : 'أرسل',


             // footer
             'TradeAssurance' : 'ضمان التجارة',
             'TradeAssuranceli1' : 'دفعات آمنة وسهلة',
             'TradeAssuranceli2' : 'سياسة الاسترجاع',
             'TradeAssuranceli3' : 'الشحن في الوقت المحدد',
             'TradeAssuranceli4' : 'وسائل حماية ما بعد البيع',
             'TradeAssuranceli5' : 'خدمات مراقبة المنتج',


             'knowus' : 'تعرف علينا',
             'knowusl1' : 'حول علي بابا.كوم',
             'knowusl2' : 'مسؤولية مشتركة',
             'knowusl3' : 'مركز الأخبار',
             'knowusl4' : 'وظائف',
   
             'Getsupport' : 'احصل على الدعم',
             'Getsupportl1' : 'مركز المساعدة',
             'Getsupportl2' : 'دردشة مباشرة',
             'Getsupportl3' : 'التحقق من حالة الطلب',
             'Getsupport4' : 'المبالغ المستردة',
             'Getsupport5' : 'بلغ عن سوء معاملة',


            //  Cart
             'shoppingCart' : 'عربية التسوق',
              'addMoreBaqat' : 'اضف المزيد من الاختبارات / الباقات',
              'theAll' : 'المجموع : ',
              'payBtn' : 'اكمل الطلب',
              'checkout' : 'اكمال الطلب',
              'services' : 'الخدمات',
              'finish' : 'اطلب',

            







          // Add other Arabic translations here
        },
      },
    },
    lng: 'ar', // default language
    fallbackLng: 'ar', // fallback language
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
  });

export default i18n;
