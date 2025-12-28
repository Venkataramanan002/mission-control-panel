export type Language = 'en' | 'hi';

export const translations = {
  en: {
    title: 'CHHATTISGARH STATE LEADERSHIP COCKPIT',
    actionNeeded: 'ACTION NEEDED:',
    criticalDistricts: '2 CRITICAL DISTRICTS',
    sushasanIndex: 'SUSHASAN INDEX',
    lastWeek: 'last week',
    
    farmerWealth: 'FARMER WEALTH',
    farmerNehon: 'FARMER NEHON',
    dbtDisbursed: 'DBT Disbursed Today',
    
    womensTrust: "WOMEN'S TRUST",
    womensTrustSub: 'WOMENSOTRUST',
    matterVendorSuccess: 'Matter/ Vendor Success',
    
    districtHealth: 'DISTRICT HEALTH',
    onlineAlerts: 'ONLINE ALERTS',
    criticalTowerUptime: '#1 Critical Tower Uptime',
    redAlerts: 'RED ALERTS',
    
    citizenSatisfaction: 'CITIZEN SATISFACTION',
    womenIncome: 'WOMENINCOME.DT',
    realTimeSentiment: 'Real time Sentiment',
    
    bastarDistrict: 'BASTAR DISTRICT',
    collector: 'Ms. RIMA SINGH, IAS',
    top3Lags: 'TOP 3 LAGs:',
    lag1: '#1 Rporal Bor Revlw #2',
    lag2: '#1 Mobile Tower Uptime',
    directCall: 'DIRECT CALL',
    
    crisisResponseTray: 'CRISIS RESPONSE TRAY',
    urgent: 'URGENT:',
    urgentMessage: '5,000 Failed Payments in Bilaspur (Tap to Resolve)',
    
    mahariVandan: 'MAHARI VANDAN YOJANA',
    paddyProcurement: 'PADDY PROCUREMENT',
    infraPmay: 'INFRA: PMAY O',
    swaAtmaandSchools: 'SWA. ATMAAND SCHOOLS',
    
    english: 'English',
    hindi: 'Hindi',
  },
  hi: {
    title: 'छत्तीसगढ़ राज्य नेतृत्व कॉकपिट',
    actionNeeded: 'कार्रवाई आवश्यक:',
    criticalDistricts: '2 गंभीर जिले',
    sushasanIndex: 'सुशासन सूचकांक',
    lastWeek: 'पिछले सप्ताह',
    
    farmerWealth: 'किसान संपत्ति',
    farmerNehon: 'किसान नेहोन',
    dbtDisbursed: 'आज डीबीटी वितरित',
    
    womensTrust: 'महिला विश्वास',
    womensTrustSub: 'महिला विश्वास',
    matterVendorSuccess: 'मैटर/ वेंडर सफलता',
    
    districtHealth: 'जिला स्वास्थ्य',
    onlineAlerts: 'ऑनलाइन अलर्ट',
    criticalTowerUptime: '#1 क्रिटिकल टावर अपटाइम',
    redAlerts: 'रेड अलर्ट',
    
    citizenSatisfaction: 'नागरिक संतुष्टि',
    womenIncome: 'महिला आय.डीटी',
    realTimeSentiment: 'रीयल टाइम सेंटीमेंट',
    
    bastarDistrict: 'बस्तर जिला',
    collector: 'सुश्री रीमा सिंह, आईएएस',
    top3Lags: 'शीर्ष 3 LAGs:',
    lag1: '#1 रपोरल बोर रिव्लव #2',
    lag2: '#1 मोबाइल टावर अपटाइम',
    directCall: 'डायरेक्ट कॉल',
    
    crisisResponseTray: 'संकट प्रतिक्रिया ट्रे',
    urgent: 'अत्यावश्यक:',
    urgentMessage: 'बिलासपुर में 5,000 विफल भुगतान (हल करने के लिए टैप करें)',
    
    mahariVandan: 'महतारी वंदन योजना',
    paddyProcurement: 'धान खरीदी',
    infraPmay: 'इंफ्रा: पीएमएवाई ओ',
    swaAtmaandSchools: 'स्वा. आत्मानंद स्कूल',
    
    english: 'अंग्रेज़ी',
    hindi: 'हिंदी',
  }
} as const;

export const getTranslation = (lang: Language, key: keyof typeof translations.en): string => {
  return translations[lang][key];
};
