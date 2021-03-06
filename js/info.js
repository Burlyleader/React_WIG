//This is all just our test data
App.Department.FIXTURES = [ {title:"English",departmentId:1, id: 1, courseIds: [295,296,143,293,222,145,146,146,146,386,384,211]},
                {title:"History",departmentId:2, id: 2, courseIds: [54,302,156,301,94,159,160,160,160,218,219,220]},
                {title:"Math",departmentId:3, id: 3, courseIds: [5,5,5,70,70,70,72,72,72]},
                {title:"Science",departmentId:4, id: 4, courseIds: [1,1,1,66,66,66,162,162]},
                {title:"Spanish",departmentId:5, id: 5, courseIds: [16,16,16,65,65,65]},
                {title:"Fine and Performing Arts",departmentId:6, id: 6, courseIds: [303,235,149,235,242,152,149,245]},
                {title:"P.E.",departmentId:7, id: 7, courseIds: [463,308,463]},
                {title:"Electives",departmentId:8, id: 8, courseIds: [396,424,311,423,495,502]},
                {title:"Other",departmentId:9, id: 9, courseIds: []},
                {title:"Technology",departmentId:10, id: 10, courseIds: [397,493,498,498,485]}];


App.Course.FIXTURES = [
{id: 396,departmentId:8,yearId:12,termId:3,name:"Introduction to Public Speaking",shortname:"Public Speaking",credit:true,graded:true},
{id: 303,departmentId:6,yearId:12,termId:1,name:"Acting 1",shortname:"Acting 1",credit:true,graded:true},
{id: 16,departmentId:5,yearId:12,termId:1,name:"Spanish 1",shortname:"Spanish 1",credit:true,graded:true},
{id: 16,departmentId:5,yearId:12,termId:2,name:"Spanish 1",shortname:"Spanish 1",credit:true,graded:true},
{id: 16,departmentId:5,yearId:12,termId:3,name:"Spanish 1",shortname:"Spanish 1",credit:true,graded:true},
{id: 424,departmentId:8,yearId:12,termId:2,name:"Modern Mythology in American Film ",shortname:"Mythology in Am. Film",credit:true,graded:true},
{id: 54,departmentId:2,yearId:12,termId:1,name:"Medieval Era: Europe in Transition",shortname:"Medieval History",credit:true,graded:true},
{id: 295,departmentId:1,yearId:12,termId:1,name:"Medieval Era: Literary Foundations",shortname:"Lit. Foundations",credit:true,graded:true},
{id: 302,departmentId:2,yearId:12,termId:3,name:"Modern Asian History",shortname:"Mod. Asian Hist",credit:true,graded:true},
{id: 296,departmentId:1,yearId:12,termId:3,name:"Modern Asian Literature and Film",shortname:"Mod. Asian Lit. & Film",credit:true,graded:true},
{id: 311,departmentId:8,yearId:12,termId:1,name:"Appositives to Argument: Introduction to Upper School Writing",shortname:"Intro to Writing",credit:true,graded:true},
{id: 5,departmentId:3,yearId:12,termId:1,name:"Algebra 1",shortname:"Algebra 1",credit:true,graded:true},
{id: 5,departmentId:3,yearId:12,termId:2,name:"Algebra 1",shortname:"Algebra 1",credit:true,graded:true},
{id: 5,departmentId:3,yearId:12,termId:3,name:"Algebra 1",shortname:"Algebra 1",credit:true,graded:true},
{id: 1,departmentId:4,yearId:12,termId:1,name:"Conceptual Physics",shortname:"Conceptual Physics",credit:true,graded:true},
{id: 1,departmentId:4,yearId:12,termId:2,name:"Conceptual Physics",shortname:"Conceptual Physics",credit:true,graded:true},
{id: 1,departmentId:4,yearId:12,termId:3,name:"Conceptual Physics",shortname:"Conceptual Physics",credit:true,graded:true},
{id: 143,departmentId:1,yearId:12,termId:2,name:"Revolutions in Thought: 19th Century British Literature",shortname:"19th British Lit.",credit:true,graded:true},
{id: 156,departmentId:2,yearId:12,termId:2,name:"Revolutions in Thought: Enlightenment to Industrial Revolution",shortname:"Revolutions in Thought",credit:true,graded:true},
{id: 440,departmentId:9,yearId:12,termId:3,name:"Guided Study Hall (US)",shortname:"Guided Study Hall",credit:true,graded:true},
{id: 440,departmentId:9,yearId:12,termId:2,name:"Guided Study Hall (US)",shortname:"Guided Study Hall",credit:true,graded:true},
{id: 440,departmentId:9,yearId:12,termId:1,name:"Guided Study Hall (US)",shortname:"Guided Study Hall",credit:true,graded:true},
{id: 196,departmentId:9,yearId:12,termId:3,name:"Study Hall - US",shortname:"US Study Hall",credit:true,graded:false},
{id: 32,departmentId:9,yearId:12,termId:1,name:"Advisory - US",shortname:"",credit:true,graded:false},
{id: 32,departmentId:9,yearId:12,termId:2,name:"Advisory - US",shortname:"",credit:true,graded:false},
{id: 32,departmentId:9,yearId:12,termId:3,name:"Advisory - US",shortname:"",credit:true,graded:false},
{id: 31,departmentId:0,yearId:12,termId:1,name:"Lunch 9",shortname:"",credit:true,graded:false},
{id: 31,departmentId:0,yearId:12,termId:2,name:"Lunch 9",shortname:"",credit:true,graded:false},
{id: 31,departmentId:0,yearId:12,termId:3,name:"Lunch 9",shortname:"",credit:true,graded:false},
{id: 88,departmentId:9,yearId:12,termId:1,name:"Upper School Assembly",shortname:"",credit:true,graded:false},
{id: 88,departmentId:9,yearId:12,termId:2,name:"Upper School Assembly",shortname:"",credit:true,graded:false},
{id: 88,departmentId:9,yearId:12,termId:3,name:"Upper School Assembly",shortname:"",credit:true,graded:false},
{id: 201,departmentId:9,yearId:12,termId:1,name:"US Meeting",shortname:"",credit:true,graded:false},
{id: 201,departmentId:9,yearId:12,termId:2,name:"US Meeting",shortname:"",credit:true,graded:false},
{id: 201,departmentId:9,yearId:12,termId:3,name:"US Meeting",shortname:"",credit:true,graded:false},
{id: 196,departmentId:9,yearId:12,termId:2,name:"Study Hall - US",shortname:"US Study Hall",credit:true,graded:false},
{id: 293,departmentId:1,yearId:13,termId:1,name:"Latin American Literature ",shortname:"Latin American Lit",credit:true,graded:true},
{id: 463,departmentId:7,yearId:13,termId:3,name:"Yoga",shortname:"Yoga",credit:true,graded:true},
{id: 301,departmentId:2,yearId:13,termId:1,name:"The Historical Formation of Latin American Identity",shortname:"Lat. Amer. History",credit:true,graded:true},
{id: 94,departmentId:2,yearId:13,termId:2,name:"Renaissance: The Cultural Epicenter",shortname:"Renaissance History",credit:true,graded:true},
{id: 222,departmentId:1,yearId:13,termId:2,name:"Shakespeare",shortname:"Shakespeare",credit:true,graded:true},
{id: 145,departmentId:1,yearId:13,termId:3,name:"Middle-Eastern and Middle-Eastern American Literature",shortname:"Mid-East-Amer. Lit.",credit:true,graded:true},
{id: 159,departmentId:2,yearId:13,termId:3,name:"The Modern Middle East",shortname:"History of Middle-East",credit:true,graded:true},
{id: 423,departmentId:8,yearId:13,termId:2,name:"Programming 1",shortname:"Intro to Programming",credit:true,graded:true},
{id: 397,departmentId:10,yearId:13,termId:1,name:"Web Design 1: From the Ground Up",shortname:"Web Design",credit:true,graded:true},
{id: 70,departmentId:3,yearId:13,termId:1,name:"Geometry",shortname:"Geometry",credit:true,graded:true},
{id: 70,departmentId:3,yearId:13,termId:2,name:"Geometry",shortname:"Geometry",credit:true,graded:true},
{id: 70,departmentId:3,yearId:13,termId:3,name:"Geometry",shortname:"Geometry",credit:true,graded:true},
{id: 66,departmentId:4,yearId:13,termId:1,name:"Chemistry",shortname:"Chemistry",credit:true,graded:true},
{id: 66,departmentId:4,yearId:13,termId:2,name:"Chemistry",shortname:"Chemistry",credit:true,graded:true},
{id: 66,departmentId:4,yearId:13,termId:3,name:"Chemistry",shortname:"Chemistry",credit:true,graded:true},
{id: 65,departmentId:5,yearId:13,termId:1,name:"Spanish 2",shortname:"Spanish 2",credit:true,graded:true},
{id: 65,departmentId:5,yearId:13,termId:2,name:"Spanish 2",shortname:"Spanish 2",credit:true,graded:true},
{id: 65,departmentId:5,yearId:13,termId:3,name:"Spanish 2",shortname:"Spanish 2",credit:true,graded:true},
{id: 440,departmentId:9,yearId:13,termId:1,name:"Guided Study Hall (US)",shortname:"Guided Study Hall",credit:true,graded:true},
{id: 32,departmentId:9,yearId:13,termId:1,name:"Advisory - US",shortname:"",credit:true,graded:false},
{id: 32,departmentId:9,yearId:13,termId:2,name:"Advisory - US",shortname:"",credit:true,graded:false},
{id: 32,departmentId:9,yearId:13,termId:3,name:"Advisory - US",shortname:"",credit:true,graded:false},
{id: 31,departmentId:0,yearId:13,termId:1,name:"Lunch 9",shortname:"",credit:true,graded:false},
{id: 31,departmentId:0,yearId:13,termId:2,name:"Lunch 9",shortname:"",credit:true,graded:false},
{id: 31,departmentId:0,yearId:13,termId:3,name:"Lunch 9",shortname:"",credit:true,graded:false},
{id: 88,departmentId:9,yearId:13,termId:1,name:"Upper School Assembly",shortname:"",credit:true,graded:false},
{id: 88,departmentId:9,yearId:13,termId:2,name:"Upper School Assembly",shortname:"",credit:true,graded:false},
{id: 88,departmentId:9,yearId:13,termId:3,name:"Upper School Assembly",shortname:"",credit:true,graded:false},
{id: 201,departmentId:9,yearId:13,termId:1,name:"US Meeting",shortname:"",credit:true,graded:false},
{id: 201,departmentId:9,yearId:13,termId:2,name:"US Meeting",shortname:"",credit:true,graded:false},
{id: 201,departmentId:9,yearId:13,termId:3,name:"US Meeting",shortname:"",credit:true,graded:false},
{id: 440,departmentId:9,yearId:13,termId:2,name:"Guided Study Hall (US)",shortname:"Guided Study Hall",credit:true,graded:true},
{id: 440,departmentId:9,yearId:13,termId:3,name:"Guided Study Hall (US)",shortname:"Guided Study Hall",credit:true,graded:true},
{id: 235,departmentId:6,yearId:14,termId:1,name:"Stagecraft (US)",shortname:"Stagecraft",credit:true,graded:true},
{id: 493,departmentId:10,yearId:14,termId:3,name:"Web Design 2",shortname:"Adv. Web Design",credit:true,graded:true},
{id: 162,departmentId:4,yearId:14,termId:1,name:"Biology (11th)",shortname:"Biology",credit:true,graded:true},
{id: 162,departmentId:4,yearId:14,termId:2,name:"Biology (11th)",shortname:"Biology",credit:true,graded:true},
{id: 162,departmentId:4,yearId:14,termId:3,name:"Biology (11th)",shortname:"Biology",credit:true,graded:true},
{id: 149,departmentId:6,yearId:14,termId:2,name:"Graphic Design",shortname:"Graphic Design",credit:true,graded:true},
{id: 498,departmentId:10,yearId:14,termId:2,name:"Physical Meets Digital",shortname:"Physical-Digital",credit:true,graded:true},
{id: 495,departmentId:8,yearId:14,termId:3,name:"Programming 2",shortname:"Programming 2",credit:true,graded:true},
{id: 146,departmentId:1,yearId:14,termId:1,name:"American Literature",shortname:"American Lit.",credit:true,graded:true},
{id: 146,departmentId:1,yearId:14,termId:2,name:"American Literature",shortname:"American Lit.",credit:true,graded:true},
{id: 146,departmentId:1,yearId:14,termId:3,name:"American Literature",shortname:"American Lit.",credit:true,graded:true},
{id: 160,departmentId:2,yearId:14,termId:1,name:"United States History: The American Question",shortname:"US History",credit:true,graded:true},
{id: 160,departmentId:2,yearId:14,termId:2,name:"United States History: The American Question",shortname:"US History",credit:true,graded:true},
{id: 160,departmentId:2,yearId:14,termId:3,name:"United States History: The American Question",shortname:"US History",credit:true,graded:true},
{id: 72,departmentId:3,yearId:14,termId:1,name:"Algebra 2",shortname:"Algebra 2",credit:true,graded:true},
{id: 72,departmentId:3,yearId:14,termId:2,name:"Algebra 2",shortname:"Algebra 2",credit:true,graded:true},
{id: 72,departmentId:3,yearId:14,termId:3,name:"Algebra 2",shortname:"Algebra 2",credit:true,graded:true},
{id: 308,departmentId:7,yearId:14,termId:1,name:"PE Wellness",shortname:"P.E. Wellness",credit:true,graded:true},
{id: 31,departmentId:0,yearId:14,termId:1,name:"Lunch 9",shortname:"",credit:true,graded:false},
{id: 31,departmentId:0,yearId:14,termId:2,name:"Lunch 9",shortname:"",credit:true,graded:false},
{id: 31,departmentId:0,yearId:14,termId:3,name:"Lunch 9",shortname:"",credit:true,graded:false},
{id: 88,departmentId:9,yearId:14,termId:1,name:"Upper School Assembly",shortname:"",credit:true,graded:false},
{id: 88,departmentId:9,yearId:14,termId:2,name:"Upper School Assembly",shortname:"",credit:true,graded:false},
{id: 88,departmentId:9,yearId:14,termId:3,name:"Upper School Assembly",shortname:"",credit:true,graded:false},
{id: 32,departmentId:9,yearId:14,termId:1,name:"Advisory - US",shortname:"",credit:true,graded:false},
{id: 32,departmentId:9,yearId:14,termId:2,name:"Advisory - US",shortname:"",credit:true,graded:false},
{id: 32,departmentId:9,yearId:14,termId:3,name:"Advisory - US",shortname:"",credit:true,graded:false},
{id: 498,departmentId:10,yearId:15,termId:2,name:"Physical Meets Digital",shortname:"Physical-Digital",credit:true,graded:true},
{id: 386,departmentId:1,yearId:15,termId:2,name:"Western Fiction and Drama",shortname:"Western Fiction",credit:true,graded:true},
{id: 218,departmentId:2,yearId:15,termId:1,name:"Democratic Theories and Civic Practices",shortname:"Democratic Theories",credit:true,graded:true},
{id: 219,departmentId:2,yearId:15,termId:2,name:"Jurisprudence: The History of Legal Precedent in the United States",shortname:"Jurisprudence",credit:true,graded:true},
{id: 220,departmentId:2,yearId:15,termId:3,name:"International Relations",shortname:"Int. Relations",credit:true,graded:true},
{id: 235,departmentId:6,yearId:15,termId:1,name:"Stagecraft (US)",shortname:"Stagecraft",credit:true,graded:true},
{id: 242,departmentId:6,yearId:15,termId:1,name:"Perspective Drawing",shortname:"Perspective Drawing",credit:true,graded:true},
{id: 152,departmentId:6,yearId:15,termId:3,name:"Art Meets Science",shortname:"Mix.Media:Art meets Sci.",credit:true,graded:true},
{id: 463,departmentId:7,yearId:15,termId:3,name:"Yoga",shortname:"Yoga",credit:true,graded:true},
{id: 502,departmentId:8,yearId:15,termId:3,name:"Experience: Arches National Park",shortname:"Thinking: Nature",credit:true,graded:true},
{id: 384,departmentId:1,yearId:15,termId:1,name:"Postmodern Theory and Literature",shortname:"Postmodern Theory",credit:true,graded:true},
{id: 149,departmentId:6,yearId:15,termId:2,name:"Graphic Design",shortname:"Graphic Design",credit:true,graded:true},
{id: 211,departmentId:1,yearId:15,termId:3,name:"The 1950s: Literature, Culture and Film",shortname:"Mod. Lit, Film & Music",credit:true,graded:true},
{id: 245,departmentId:6,yearId:15,termId:1,name:"Drawing & Painting 1 (US)",shortname:"Drawing and Painting",credit:true,graded:true},
{id: 32,departmentId:9,yearId:15,termId:1,name:"Advisory - US",shortname:"",credit:true,graded:false},
{id: 32,departmentId:9,yearId:15,termId:2,name:"Advisory - US",shortname:"",credit:true,graded:false},
{id: 32,departmentId:9,yearId:15,termId:3,name:"Advisory - US",shortname:"",credit:true,graded:false},
{id: 31,departmentId:0,yearId:15,termId:1,name:"Lunch 9",shortname:"",credit:true,graded:false},
{id: 31,departmentId:0,yearId:15,termId:2,name:"Lunch 9",shortname:"",credit:true,graded:false},
{id: 31,departmentId:0,yearId:15,termId:3,name:"Lunch 9",shortname:"",credit:true,graded:false},
{id: 88,departmentId:9,yearId:15,termId:1,name:"Upper School Assembly",shortname:"",credit:true,graded:false},
{id: 88,departmentId:9,yearId:15,termId:2,name:"Upper School Assembly",shortname:"",credit:true,graded:false},
{id: 88,departmentId:9,yearId:15,termId:3,name:"Upper School Assembly",shortname:"",credit:true,graded:false},
{id: 545,departmentId:9,yearId:15,termId:1,name:"Clubs / Activities",shortname:"",credit:true,graded:false},
{id: 545,departmentId:9,yearId:15,termId:2,name:"Clubs / Activities",shortname:"",credit:true,graded:false},
{id: 545,departmentId:9,yearId:15,termId:3,name:"Clubs / Activities",shortname:"",credit:true,graded:false},
{id: 544,departmentId:9,yearId:15,termId:1,name:"Class Meeting",shortname:"",credit:true,graded:false},
{id: 544,departmentId:9,yearId:15,termId:2,name:"Class Meeting",shortname:"",credit:true,graded:false},
{id: 544,departmentId:9,yearId:15,termId:3,name:"Class Meeting",shortname:"",credit:true,graded:false},
{id: 485,departmentId:10,yearId:15,termId:2,name:"Programming 2",shortname:"Programming 2",credit:true,graded:true},
{id: 546,departmentId:8,yearId:15,termId:1,name:"IS:Data Driven Web App",shortname:"",credit:true,graded:true}];
