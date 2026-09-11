const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const languageButtons = document.querySelectorAll('[data-lang]');

const translations = {
  en: {
    brandKicker: 'words with conscience',
    menu: 'Menu',
    menuClose: 'Close',
    navServices: 'Services',
    navLens: 'Our lens',
    navProfile: 'Consultant profile',
    navApproach: 'Approach',
    navContact: 'Begin a conversation',
    brandTagline: 'Seeing the Sacred Beyond Belief',
    brandTaglineMy: 'ယုံကြည်မှုအလွန်',
    heroEyebrow: 'Research &amp; Content Consultancy',
    heroTitle: 'Thoughtful words<br /><em>for sacred spaces.</em>',
    heroIntro: 'Research-led strategy and editorial care for institutions, scholars, and communities communicating about religion, culture, and heritage.',
    workWith: 'Work with Dassana',
    exploreServices: 'Explore services',
    heroNote: 'Based on attentive listening &amp; grounded practice',
    quote: 'Let every word make room for meaning.',
    beliefOne: 'Good religious communication does more than inform.',
    beliefTwo: 'It creates a place to belong.',
    lensEyebrow: 'A wider lens',
    lensTitle: 'Make room for every<br /><em>meaningful perspective.</em>',
    lensLede: 'Dassana helps institutions, scholars, and communities communicate about religion with care&mdash;without reducing belief to a single point of view.',
    lensOneTitle: 'Respect before reaction',
    lensOneText: 'We listen for context, tradition, and lived experience before shaping a message.',
    lensTwoTitle: 'Depth that welcomes',
    lensTwoText: 'Research-led language makes complex ideas clear without flattening their nuance.',
    lensThreeTitle: 'A voice people can trust',
    lensThreeText: 'Thoughtful content connects across communities, generations, and traditions.',
    topicsEyebrow: 'Fields of focus',
    topicsIntro: 'Research-led perspective for stories that connect belief, history, and everyday life.',
    topicBuddhism: 'ဗုဒ္ဓဘာသာ',
    topicBelief: 'ယုံကြည်မှုနှင့်ရိုးရာအစဥ်အလာ',
    topicSociety: 'လူမှုအဖွဲ့အစည်းနှင့် ယဉ်ကျေးမှု',
    topicHistory: 'သမိုင်းနှင့် အမွေအနှစ်',
    topicIdeas: 'အယူအဆများ',
    servicesEyebrow: 'What Dassana does',
    servicesTitle: 'Careful thinking.<br /><em>Clear expression.</em>',
    servicesLede: 'From research framing to the final edit, we bring clear direction, cultural care, and editorial strength to the stories your community needs to hear.',
    serviceOneTitle: 'Content strategy',
    serviceOneText: 'Find the through-line in your message and build a content plan that serves both your mission and your people.',
    serviceTwoTitle: 'Editorial care',
    serviceTwoText: 'Shape sermons, newsletters, campaigns, and web copy so every sentence is warm, precise, and easy to receive.',
    serviceThreeTitle: 'Voice &amp; values',
    serviceThreeText: 'Define a language that sounds like you&mdash;rooted in tradition, open to the present, and welcoming to all.',
    learnMore: 'Learn more',
    portraitCaption: 'with intention,<br /><em>always</em>',
    profileEyebrow: 'Consultant profile',
    profileTitle: 'Scholarship with a<br /><em>wider sense of audience.</em>',
    profileRole: 'Religious Studies scholar &middot; PhD, Mahidol University',
    profileIntro: 'Religious Studies scholar with a PhD from Mahidol University, specializing in Theravada Buddhism, Pali epigraphy, Burmese Buddhism, and material religion in Southeast Asia.',
    profileParagraphOne: 'Research interests centre on the intersections of texts, inscriptions, religious practices, social history, and Buddhist institutions, with particular emphasis on premodern Myanmar.',
    profileParagraphTwo: 'Experienced in teaching and postgraduate research mentoring, with publications in Scopus-indexed and peer-reviewed academic journals and active participation in international academic conferences.',
    profileParagraphThree: 'Research and teaching draw on interdisciplinary approaches across Religious Studies, Buddhist Studies, epigraphy, textual studies, and social history, with a commitment to research-led, student-centred learning and critical engagement with religious and historical sources.',
    academiaLink: 'Academia.edu profile',
    orcidLink: 'ORCID research record',
    profileCta: 'Discuss a collaboration',
    connectHeading: 'Connect',
    lineLabel: 'LINE ID',
    linkedinLabel: 'LINKEDIN',
    linkedinValue: 'View professional profile',
    whatsappLabel: 'WHATSAPP',
    approachEyebrow: 'A gentle process',
    approachTitle: 'Make room for<br /><em>the right words.</em>',
    stepOneTitle: 'Listen deeply',
    stepOneText: 'We begin with the why&mdash;your community, your context, and the heart behind the work.',
    stepTwoTitle: 'Shape the message',
    stepTwoText: 'We find the clearest, most human way to carry your meaning forward.',
    stepThreeTitle: 'Share with confidence',
    stepThreeText: 'You leave with language that feels grounded, generous, and ready to meet the world.',
    contactEyebrow: 'Let&rsquo;s begin',
    contactTitle: 'A meaningful message<br /><em>starts here.</em>',
    contactCopy: 'Tell me a little about what you are working on. I&rsquo;ll get back to you with a thoughtful next step.',
    footerLine: 'www.dassana.org &middot; Research &amp; Content Consultancy',
    backTop: 'Back to top &uarr;'
  },
  my: {
    brandKicker: 'သိက္ခာရှိသော စကားလုံးများ',
    menu: 'မီနူး',
    menuClose: 'ပိတ်ရန်',
    navServices: 'ဝန်ဆောင်မှုများ',
    navLens: 'ကျွန်ုပ်တို့၏အမြင်',
    navProfile: 'အကြံပေးပညာရှင်အကြောင်း',
    navApproach: 'လုပ်ငန်းဆောင်ရွက်ပုံ',
    navContact: 'ဆွေးနွေးရန် စတင်မည်',
    brandTagline: 'မြင့်မြတ်မှုကို ယုံကြည်ချက်ထက် ကျော်လွန်၍ မြင်ခြင်း',
    brandTaglineMy: 'ယုံကြည်မှုအလွန်',
    heroEyebrow: 'သုတေသနနှင့် အကြောင်းအရာ အကြံပေးဝန်ဆောင်မှု',
    heroTitle: 'မြင့်မြတ်သောနေရာများအတွက်<br /><em>အဓိပ္ပါယ်ရှိသော စကားလုံးများ။</em>',
    heroIntro: 'ဘာသာရေး၊ ယဉ်ကျေးမှုနှင့် အမွေအနှစ်အကြောင်း ဆက်သွယ်ပြောဆိုနေသော အဖွဲ့အစည်းများ၊ ပညာရှင်များနှင့် လူမှုအသိုင်းအဝိုင်းများအတွက် သုတေသနအခြေပြု မဟာဗျူဟာနှင့် အယ်ဒီတာ့အာရုံစိုက်မှုကို ပေးပါသည်။',
    workWith: 'Dassana နှင့် ပူးပေါင်းလုပ်ဆောင်ရန်',
    exploreServices: 'ဝန်ဆောင်မှုများကို ကြည့်ရှုရန်',
    heroNote: 'ဂရုတစိုက်နားထောင်မှုနှင့် အခြေခံကျသော လက်တွေ့ကျင့်သုံးမှုအပေါ် အခြေခံသည်',
    quote: 'စကားလုံးတိုင်းတွင် အဓိပ္ပါယ်အတွက် နေရာရှိပါစေ။',
    beliefOne: 'ကောင်းမွန်သော ဘာသာရေးဆိုင်ရာ ဆက်သွယ်ပြောဆိုမှုသည် သတင်းပေးရုံထက် ပိုမိုပါသည်။',
    beliefTwo: 'မိမိနှင့် သက်ဆိုင်သည်ဟု ခံစားရမည့် နေရာတစ်ခုကို ဖန်တီးပေးပါသည်။',
    lensEyebrow: 'ကျယ်ပြန့်သော အမြင်',
    lensTitle: 'အဓိပ္ပါယ်ရှိသော အမြင်တိုင်းအတွက်<br /><em>နေရာဖန်တီးပေးခြင်း။</em>',
    lensLede: 'Dassana သည် ဘာသာရေးဆိုင်ရာ အကြောင်းအရာများကို အမြင်တစ်ခုတည်းဖြင့် ကန့်သတ်မထားဘဲ လေးစားမှု၊ သုတေသနနှင့် လူသားဆန်သော နားလည်မှုတို့ဖြင့် အဖွဲ့အစည်းများ၊ ပညာရှင်များနှင့် လူမှုအသိုင်းအဝိုင်းများ ဆက်သွယ်ပြောဆိုနိုင်ရန် ကူညီပေးပါသည်။',
    lensOneTitle: 'ယုံကြည်မှုကို လေးစားပြီး နားထောင်ခြင်း',
    lensOneText: 'သတင်းစကားကို ပုံဖော်မီ အခြေအနေ၊ ရိုးရာနှင့် လူတို့၏ အတွေ့အကြုံကို ဦးစွာ နားထောင်ပါသည်။',
    lensTwoTitle: 'နက်ရှိုင်းမှုကို ရှင်းလင်းစွာ မျှဝေခြင်း',
    lensTwoText: 'ရှုပ်ထွေးသော အယူအဆများကို အနှစ်သာရမပျောက်ဘဲ နားလည်ရလွယ်ကူအောင် ဖော်ပြပေးပါသည်။',
    lensThreeTitle: 'လူတိုင်း ယုံကြည်လက်ခံနိုင်သော အသံ',
    lensThreeText: 'အသိုင်းအဝိုင်းများ၊ မျိုးဆက်များနှင့် ရိုးရာဓလေ့များအကြား ဆက်သွယ်ပေးနိုင်သော အကြောင်းအရာများကို ဖန်တီးပေးပါသည်။',
    topicsEyebrow: 'အာရုံစိုက်လေ့လာရာ နယ်ပယ်များ',
    topicsIntro: 'ယုံကြည်မှု၊ သမိုင်းနှင့် နေ့စဉ်ဘဝတို့ကို ဆက်စပ်ပေးသည့် အကြောင်းအရာများအတွက် သုတေသနအခြေပြု အမြင်။',
    topicBuddhism: 'ဗုဒ္ဓဘာသာ',
    topicBelief: 'ယုံကြည်မှုနှင့်ရိုးရာအစဥ်အလာ',
    topicSociety: 'လူမှုအဖွဲ့အစည်းနှင့် ယဉ်ကျေးမှု',
    topicHistory: 'သမိုင်းနှင့် အမွေအနှစ်',
    topicIdeas: 'အယူအဆများ',
    servicesEyebrow: 'Dassana လုပ်ဆောင်ပေးသည်များ',
    servicesTitle: 'ဂရုတစိုက် စဉ်းစားခြင်း။<br /><em>ရှင်းလင်းသော ဖော်ပြချက်။</em>',
    servicesLede: 'သုတေသနအကြောင်းအရာ သတ်မှတ်ခြင်းမှ နောက်ဆုံးတည်းဖြတ်မှုအထိ သင့်လူမှုအသိုင်းအဝိုင်း ကြားသိရန်လိုအပ်သော အကြောင်းအရာများအတွက် ရှင်းလင်းသော ဦးတည်ချက်၊ ယဉ်ကျေးမှုကို လေးစားမှုနှင့် အယ်ဒီတာ့အားကောင်းမှုကို ပေါင်းစပ်ပေးပါသည်။',
    serviceOneTitle: 'အကြောင်းအရာ မဟာဗျူဟာ',
    serviceOneText: 'သင့်သတင်းစကား၏ အဓိကအကြောင်းရင်းကို ရှာဖွေပြီး သင့်ရည်ရွယ်ချက်နှင့် လူထုနှစ်ဖက်စလုံးကို အကျိုးပြုမည့် အကြောင်းအရာအစီအစဉ်ကို တည်ဆောက်ပေးပါသည်။',
    serviceTwoTitle: 'အယ်ဒီတာ့အာရုံစိုက်မှု',
    serviceTwoText: 'တရားဟောချက်များ၊ သတင်းလွှာများ၊ လှုပ်ရှားမှုများနှင့် ဝက်ဘ်စာသားများကို နွေးထွေး၊ တိကျပြီး ဖတ်ရှုရလွယ်ကူအောင် ပုံဖော်ပေးပါသည်။',
    serviceThreeTitle: 'အသံနှင့် တန်ဖိုးများ',
    serviceThreeText: 'ရိုးရာတွင် အမြစ်တွယ်ပြီး ယနေ့ခေတ်ကို ဖွင့်လှစ်လက်ခံကာ လူတိုင်းအတွက် ကြိုဆိုမှုရှိသော သင့်ကိုယ်ပိုင်ဘာသာစကားကို သတ်မှတ်ပေးပါသည်။',
    learnMore: 'ပိုမိုလေ့လာရန်',
    portraitCaption: 'ရည်ရွယ်ချက်ဖြင့်၊<br /><em>အမြဲတမ်း</em>',
    profileEyebrow: 'အကြံပေးပညာရှင်အကြောင်း',
    profileTitle: 'ပညာရပ်နှင့်<br /><em>ကျယ်ပြန့်သော ပရိသတ်အမြင်။</em>',
    profileRole: 'ဘာသာရေးလေ့လာမှု ပညာရှင် &middot; မဟီဒေါလ်တက္ကသိုလ် PhD',
    profileIntro: 'မဟီဒေါလ်တက္ကသိုလ်မှ PhD ဘွဲ့ရ Religious Studies ပညာရှင်ဖြစ်ပြီး ထေရဝါဒဗုဒ္ဓဘာသာ၊ ပါဠိကျောက်စာပညာ၊ မြန်မာဗုဒ္ဓဘာသာနှင့် အရှေ့တောင်အာရှရှိ ရုပ်ဝတ္ထုဘာသာရေးလေ့လာမှုတို့ကို အထူးပြုလေ့လာပါသည်။',
    profileParagraphOne: 'လေ့လာသုတေသနစိတ်ဝင်စားမှုများမှာ စာပေများ၊ ကျောက်စာများ၊ ဘာသာရေးအလေ့အကျင့်များ၊ လူမှုသမိုင်းနှင့် ဗုဒ္ဓဘာသာအဖွဲ့အစည်းများ ဆုံမှတ်ရာများဖြစ်ပြီး အထူးသဖြင့် ခေတ်မီမတိုင်မီ မြန်မာနိုင်ငံကို အာရုံစိုက်ပါသည်။',
    profileParagraphTwo: 'သင်ကြားရေးနှင့် ဘွဲ့လွန်သုတေသန လမ်းညွှန်မှုအတွေ့အကြုံရှိပြီး Scopus တွင် အညွှန်းတင်ထားသော နှင့် peer-reviewed ပညာရပ်ဆိုင်ရာ ဂျာနယ်များတွင် ထုတ်ဝေမှုများ၊ နိုင်ငံတကာ ပညာရပ်ဆိုင်ရာ အစည်းအဝေးများတွင် တက်ကြွစွာ ပါဝင်မှုများ ရှိပါသည်။',
    profileParagraphThree: 'သုတေသနနှင့် သင်ကြားရေးတွင် Religious Studies၊ Buddhist Studies၊ epigraphy၊ textual studies နှင့် social history တို့၏ အပြန်အလှန် ပေါင်းစပ်နည်းလမ်းများကို အသုံးပြုကာ သုတေသနအခြေပြု၊ ကျောင်းသားဗဟိုပြု သင်ယူမှုနှင့် ဘာသာရေးနှင့် သမိုင်းဆိုင်ရာ ရင်းမြစ်များကို ဝေဖန်စွာ လေ့လာမှုအပေါ် အလေးထားပါသည်။',
    academiaLink: 'Academia.edu ပရိုဖိုင်',
    orcidLink: 'ORCID သုတေသနမှတ်တမ်း',
    profileCta: 'ပူးပေါင်းဆောင်ရွက်ရန် ဆွေးနွေးမည်',
    connectHeading: 'ဆက်သွယ်ရန်',
    lineLabel: 'LINE ID',
    linkedinLabel: 'LINKEDIN',
    linkedinValue: 'ပရော်ဖက်ရှင်နယ် ပရိုဖိုင်ကို ကြည့်ရန်',
    whatsappLabel: 'WHATSAPP',
    approachEyebrow: 'နူးညံ့သော လုပ်ငန်းစဉ်',
    approachTitle: 'မှန်ကန်သော စကားလုံးများအတွက်<br /><em>နေရာဖန်တီးပါ။</em>',
    stepOneTitle: 'နက်နက်ရှိုင်းရှိုင်း နားထောင်ခြင်း',
    stepOneText: 'သင့်လူမှုအသိုင်းအဝိုင်း၊ သင့်အခြေအနေနှင့် အလုပ်နောက်ကွယ်မှ အနှစ်သာရ—ဘာကြောင့် လုပ်ဆောင်ရသည်ကို ဦးစွာနားထောင်ပါသည်။',
    stepTwoTitle: 'သတင်းစကားကို ပုံဖော်ခြင်း',
    stepTwoText: 'သင့်အဓိပ္ပါယ်ကို ရှေ့ဆက်သယ်ဆောင်နိုင်မည့် အရှင်းလင်းဆုံးနှင့် လူသားဆန်ဆုံး နည်းလမ်းကို ရှာဖွေပါသည်။',
    stepThreeTitle: 'ယုံကြည်မှုဖြင့် မျှဝေခြင်း',
    stepThreeText: 'အခြေခံကျ၊ ရက်ရောပြီး ကမ္ဘာနှင့် တွေ့ဆုံရန် အသင့်ဖြစ်သော ဘာသာစကားကို ရရှိစေပါသည်။',
    contactEyebrow: 'စတင်ကြပါစို့',
    contactTitle: 'အဓိပ္ပါယ်ရှိသော သတင်းစကား<br /><em>ဤနေရာမှ စတင်ပါသည်။</em>',
    contactCopy: 'သင်လုပ်ဆောင်နေသည့် အကြောင်းအရာကို အနည်းငယ် မျှဝေပါ။ ထို့နောက် အဓိပ္ပါယ်ရှိသည့် နောက်တစ်ဆင့်ကို ပြန်လည်ဆက်သွယ်ပေးပါမည်။',
    footerLine: 'www.dassana.org &middot; သုတေသနနှင့် အကြောင်းအရာ အကြံပေးဝန်ဆောင်မှု',
    backTop: 'အပေါ်သို့ ပြန်သွားရန် &uarr;'
  },
  pi: {
    brandKicker: 'saddhāsampannāni vacanāni',
    menu: 'Niddesa',
    menuClose: 'Pidahituṃ',
    navServices: 'Kiccāni',
    navLens: 'Amhākaṃ dassanaṃ',
    navProfile: 'Sallahadātussa paricayo',
    navApproach: 'Kamma-paddhati',
    navContact: 'Sambhāsanaṃ ārabhāma',
    brandTagline: 'Saddhāya pāraṃ pavittaṃ passati',
    brandTaglineMy: 'Saddhāya pāraṃ pavittaṃ passati',
    heroEyebrow: 'Pariyesanā ca atthasandesa-sallahadānañca',
    heroTitle: 'Atthayuttāni vacanāni<br /><em>pavittānaṃ ṭhānānaṃ atthāya.</em>',
    heroIntro: 'Pavittadhamme, saṃskāre, itihāse ca kathentānaṃ saṃghānaṃ, paṇḍitānaṃ, samājānañca pariyesanāya patiṭṭhitaṃ nayaṃ lekhanañca dassāma.',
    workWith: 'Dassenaṃ saha samāgaccha',
    exploreServices: 'Kiccāni olokehi',
    heroNote: 'Sādhu-savanena patiṭṭhitaṃ, yathābhūta-payogena ca',
    quote: 'Sabbavacanaṃ atthassa okāsaṃ karotu.',
    beliefOne: 'Sundaraṃ dhammakathanaṃ kevalaṃ na pakāseti.',
    beliefTwo: 'Taṃ saṃvasituṃ okāsaṃ karoti.',
    lensEyebrow: 'Vitthataṃ dassanaṃ',
    lensTitle: 'Sabbesaṃ<br /><em>atthayuttānaṃ dassanānaṃ okāso hotu.</em>',
    lensLede: 'Dassanaṃ saṃghānaṃ, paṇḍitānañca samājānañca dhammavisaye garunā kathayituṃ sahāyaṃ karoti—saddhaṃ ekadassanaṃ viya na karonto.',
    lensOneTitle: 'Paṭhamaṃ garukāro',
    lensOneText: 'Atthassa, paramparāya, manussānañca anubhavaṃ sutvā pacchā sandesaṃ rūpema.',
    lensTwoTitle: 'Gambhīratā ca pasādo ca',
    lensTwoText: 'Pariyesanāya patiṭṭhitaṃ vacanaṃ gambhīraṃ atthaṃ suviññeyyaṃ karoti, tassa sūkhamatthaṃ na vināseti.',
    lensThreeTitle: 'Pasādanīyā vāṇī',
    lensThreeText: 'Sādhu-racitaṃ atthasandesaṃ samājānaṃ, yuvānaṃ, paramparānañca antare sambandhaṃ karoti.',
    topicsEyebrow: 'Ārammaṇāni',
    topicsIntro: 'Saddhāya, itihāsassa, dainandinajīvitassa ca sambandhe kathāsu pariyesanāya patiṭṭhitaṃ dassanaṃ.',
    topicBuddhism: 'Buddhadhammo',
    topicBelief: 'Saddhā ca ācārā ca',
    topicSociety: 'Samājo ca saṃskāro ca',
    topicHistory: 'Itihāso ca dāyajjā ca',
    topicIdeas: 'Cintā',
    servicesEyebrow: 'Dassenaṃ kiṃ karoti',
    servicesTitle: 'Saccintanaṃ.<br /><em>Parisuddho sandeso.</em>',
    servicesLede: 'Paṭhamacintanāya ārabhitvā antimatthasodhanāya yāva, samājassa sotabbānaṃ kathānaṃ atthāya nayaṃ, garukāraṃ, lekhanañca demi.',
    serviceOneTitle: 'Atthasandesa-nayo',
    serviceOneText: 'Tava sandesassa mūlaṃ passitvā tava kiccassa janānañca hitāya atthasandesa-pakāraṃ karoma.',
    serviceTwoTitle: 'Lekhane paricariyā',
    serviceTwoText: 'Desanā, paṇṇalekha, yojanā, jālapatta-lekhanañca sukhumaṃ, saccaṃ, suviññeyyañca karoma.',
    serviceThreeTitle: 'Vāṇī ca guṇā ca',
    serviceThreeText: 'Paramparāya patiṭṭhitaṃ, paccuppannaṃ anukūlaṃ, sabbesaṃ pavesaniyañca tava vāṇiṃ nirūpema.',
    learnMore: 'Bhiyyo olokehi',
    portraitCaption: 'Atthena,<br /><em>sabbadā</em>',
    profileEyebrow: 'Sallahadātussa paricayo',
    profileTitle: 'Sikkhā ca<br /><em>vitthataṃ sotu-samūha-dassanaṃ.</em>',
    profileRole: 'Dhamma-ajjhena-paṇḍitā &middot; PhD, Mahidol University',
    profileIntro: 'Mahidol University-to PhD pattā Religious Studies paṇḍitā, Theravāda-Buddhadhammaṃ, Pāḷi-silālekhaṃ, Myanmar-Buddhadhammaṃ, Southeast Asia-ya bhautikadhammañca visesena ajjheti.',
    profileParagraphOne: 'Tassā pariyesanāya mūlaṃ pāḷi-pāṭhesu, silālekhesu, dhammacariyāsu, samājik-itihāse, Buddhadhamma-saṃghesu ca sambandhe; purātana-Myanmar desañca visesena oloketi.',
    profileParagraphTwo: 'Sā ajjheti ca sikkhāpeti ca, uttarajjhena-sissānaṃ anusāsati ca; Scopus-niddiṭṭhesu peer-reviewed ajjhenapatṭesu lekhāni ca antararaṭṭhiya-sammelanesu bhāgo ca atthi.',
    profileParagraphThree: 'Tassā sikkhāpanañca pariyesanā ca Religious Studies, Buddhist Studies, silālekha-vijjā, pāṭha-vijjā, samājik-itihāsañca saṃyojetvā; sissakesu patiṭṭhitaṃ sikkhaṃ, dhammika-itihāsika-mūlesu yoniso manasikārañca garukaroti.',
    academiaLink: 'Academia.edu paricayo',
    orcidLink: 'ORCID pariyesanā-lekhaṃ',
    profileCta: 'Sahakiccaṃ mantayāma',
    connectHeading: 'Samparkā',
    lineLabel: 'LINE ID',
    linkedinLabel: 'LINKEDIN',
    linkedinValue: 'Paṇḍita-paricayaṃ olokehi',
    whatsappLabel: 'WHATSAPP',
    approachEyebrow: 'Sītalakicca-paddhati',
    approachTitle: 'Sammāvacanānaṃ atthāya<br /><em>okāsaṃ karohi.</em>',
    stepOneTitle: 'Gambhīraṃ suṇāti',
    stepOneText: 'Tava samājaṃ, ṭhānaṃ, kiccassa hadayañca—kasmā kiccaṃ karosīti paṭhamaṃ suṇāma.',
    stepTwoTitle: 'Sandesaṃ rūpeti',
    stepTwoText: 'Tava atthaṃ purato netuṃ sabbasādhāraṇaṃ, manussānaṃ hitakarañca pakāraṃ vidhāma.',
    stepThreeTitle: 'Pasādena saṃvibhajati',
    stepThreeText: 'Patiṭṭhitaṃ, dānasīlaṃ, lokassa sammukhībhavituṃ yuttañca vāṇiṃ labhasi.',
    contactEyebrow: 'Ārabhāma',
    contactTitle: 'Atthayutto sandeso<br /><em>idha ārabhati.</em>',
    contactCopy: 'Tava kiccaṃ thokaṃ kathaya. Mayaṃ yoniso cintetvā anantarakiccaṃ paṭivademi.',
    footerLine: 'www.dassana.org &middot; Pariyesanā ca atthasandesa-sallahadānañca',
    backTop: 'Upari gaccha &uarr;'
  }
};

const savedLanguage = localStorage.getItem('dassana-language');
let currentLanguage = ['en', 'my', 'pi'].includes(savedLanguage) ? savedLanguage : 'en';

function setLanguage(language) {
  currentLanguage = ['en', 'my', 'pi'].includes(language) ? language : 'en';
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[currentLanguage][key]) element.innerHTML = translations[currentLanguage][key];
  });
  languageButtons.forEach((button) => {
    const active = button.dataset.lang === currentLanguage;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  if (menuToggle && !siteNav.classList.contains('is-open')) {
    menuToggle.textContent = translations[currentLanguage].menu;
  }
  localStorage.setItem('dassana-language', currentLanguage);
}

languageButtons.forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.textContent = isOpen ? (translations[currentLanguage].menuClose || 'Close') : translations[currentLanguage].menu;
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = translations[currentLanguage].menu;
    });
  });
}

document.getElementById('year').textContent = new Date().getFullYear();
setLanguage(currentLanguage);

