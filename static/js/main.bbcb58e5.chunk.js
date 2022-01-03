(this.webpackJsonpeportfolio=this.webpackJsonpeportfolio||[]).push([[0],{124:function(e,a,t){},130:function(e,a,t){},136:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(23),c=t.n(l),s=(t(95),t(60)),i=t(9),o=!0,m={gradientColors:"#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",firstName:"Muhammad",middleName:"",lastName:"Hamza",message:" Software Engineer ",icons:[{image:"fa-github",url:"https://github.com/hamza3256"},{image:"fa-facebook",url:"https://www.facebook.com/Hamza3256"},{image:"fa-instagram",url:"https://www.instagram.com/m.hamza_"},{image:"fa-linkedin",url:"https://www.linkedin.com/in/-muhammadhamza/"}]},u={show:!0,heading:"About Me",imageLink:t(39),imageSize:375,message:"I am a computer science graduate from Queen Mary University of London with a 1st Class. As a highly adaptable and competent software engineer, I am proficient in Python, Java, and frontend languages and frameworks (HTML, CSS, JavaScript, React) with varying experiences in MongoDb, Django, MySQL, and C#. I have a keen interest in software engineering and I'm enthused by the prospect of becoming a part of such a dynamic and stimulating field. I am confident the skills and determination that have brought me success in the past would stand me in good stead for the exciting challenges ahead.",resume:"https://drive.google.com/file/d/1m0sAthHeB0u496j_pbqrA7WBYhP6gX-e/view?usp=sharing"},d={show:!0,heading:"Recent Projects",gitHubUsername:"hamza3256",reposLength:4,specificRepos:["MERN-eCommerce","django_auction_project"]},g={show:!1,heading:"Leadership",message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",images:[{img:t(39),label:"First slide label",paragraph:"Nulla vitae elit libero, a pharetra augue mollis interdum."},{img:t(39),label:"Second slide label",paragraph:"Nulla vitae elit libero, a pharetra augue mollis interdum."}],imageSize:{width:"615",height:"450"}},f={show:!0,heading:"Skills",hardSkills:[{name:"Python",value:95},{name:"Java",value:90},{name:"JavaScript",value:70},{name:"SQL",value:80},{name:"Algorithms & Data Structures",value:90},{name:"React",value:75},{name:"HTML/CSS",value:75},{name:"C#",value:70}],softSkills:[{name:"Teamwork and collaboration",value:90},{name:"Approachability and Helpfulness",value:95},{name:"Problem Solving",value:95},{name:"Empathy",value:90},{name:"Confidence",value:85},{name:"Open-mindedness and adaptability",value:90},{name:"Creativity",value:85},{name:"Patience",value:80}]},p=!0,h="Contact Me",b="I am open to full-time opportunities in Software Engineering. If you have any questions, or just want to say hello, feel free to use the contact form below or my email address: ",E="hamzaquant@gmail.com",v={show:!0,heading:"Experiences",data:[{role:"Software Engineer",companylogo:t(96),date:"October \u2014  November",description:"\u2022 Underwent six weeks training in Full Stack Engineering (Java)."},{role:"Software Engineer",companylogo:t(97),date:"June 2021 \u2014 August 2021",description:"\u2022 Created separate and restricted admin access for inventory management.\n\u2022 Implemented different access levels to handle orders and customer interaction which sped up the payment process by 70%."}]},w=t(77),k=t.n(w),N=t(26),y=t(33),S=r.a.forwardRef((function(e,a){var t=e.gradient,n=e.title,l=e.message,c=e.icons;return r.a.createElement(y.a,{fluid:!0,id:"home",style:{background:"linear-gradient(136deg,".concat(t,")"),backgroundSize:"1200% 1200%"},className:"title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"},r.a.createElement("div",{id:"stars"}),r.a.createElement(N.a,{className:"text-center"},r.a.createElement("h1",{ref:a,className:"display-1"},n),r.a.createElement(k.a,{className:"lead typist",cursor:{show:!1}}," ",l),r.a.createElement("div",{className:"p-5"},c.map((function(e,a){return r.a.createElement("a",{key:"social-icon-".concat(a),target:"_blank",rel:"noopener noreferrer",href:e.url,"aria-label":"My ".concat(e.image.split("-")[1])},r.a.createElement("i",{className:"fab ".concat(e.image,"  fa-3x socialicons")}))}))),r.a.createElement("a",{className:"btn btn-outline-light btn-lg ",href:"#aboutme",role:"button","aria-label":"Learn more about me"},"More about me")))})),x=t(6),j=t.n(x),_=t(11),O=t(8),z=t(78),C=t.n(z),R=t(39),L=t.n(R),M=t(29),A=t.n(M),P=new RegExp(/[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/),T=function(e){var a=e.heading,t=e.message,n=e.link,l=(e.imgSize,e.resume),c=r.a.useState(""),s=Object(O.a)(c,2),i=(s[0],s[1]),o=r.a.useState(Boolean(n)),m=Object(O.a)(o,2),u=m[0],d=m[1];r.a.useEffect((function(){n&&!P.test(n)?g():i(n)}),[n]);var g=function(){var e=Object(_.a)(j.a.mark((function e(){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://www.instagram.com/","/?__a=1",e.prev=2,e.next=5,A.a.get("https://www.instagram.com/"+n+"/?__a=1");case 5:a=e.sent,i(a.data.graphql.user.profile_pic_url_hd),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),d(!1),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{id:"aboutme",className:"jumbotron jumbotron-fluid m-0"},r.a.createElement("div",{className:"container container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-5 d-none d-lg-block align-self-center"},u&&r.a.createElement("img",{className:"border border-secondary rounded-circle",src:L.a,alt:"profilepicture"})),r.a.createElement("div",{className:"col-lg-".concat(u?"7":"12")},r.a.createElement("h2",{className:"display-4 mb-5 text-center"},a),r.a.createElement("p",{className:"lead text-center"},t),l&&r.a.createElement("p",{className:"lead text-center"},r.a.createElement("a",{className:"btn btn-outline-dark btn-lg",href:C.a,target:"_blank",rel:"noreferrer noopener",role:"button","aria-label":"Resume/CV"},"Resume"))))))},I=t(20),F=t(12),q=t(42),B=t(41),H=t(45),J=t(37),U=t.n(J),W=function(e){var a=e.svn_url,t=e.homepage;return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:a,target:" _blank",className:"btn btn-outline-secondary mr-3"},r.a.createElement("i",{className:"fab fa-github"})," Repo"),t&&r.a.createElement("a",{href:"".concat(t),className:"btn btn-outline-secondary mr-3"},r.a.createElement("i",{className:"fa fa-link"})," Demo"),r.a.createElement("a",{href:"".concat(a,"/archive/master.zip"),className:"btn btn-outline-secondary mr-3"},r.a.createElement("i",{className:"fa fa-clone"})," Clone Project"))},D=function(e){var a=e.languages_url,t=e.repo_url,l=Object(n.useState)([]),c=Object(O.a)(l,2),s=c[0],i=c[1],o=Object(n.useCallback)(Object(_.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.get(a);case 3:return t=e.sent,e.abrupt("return",i(t.data));case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[a]);Object(n.useEffect)((function(){o()}),[o]);var m=[],u=0;for(var d in s)m.push(d),u+=s[d];return r.a.createElement("div",{className:"pb-3"},"Languages:"," ",m.length?m.map((function(e){return r.a.createElement("a",{key:e,className:"badge badge-light card-link",href:t+"/search?l=".concat(e),target:" _blank"},e,":"," ",Math.trunc(s[e]/u*1e3)/10," %")})):"code yet to be deployed.")},V=function(e){var a=e.star_count,t=e.repo_url,l=e.pushed_at,c=Object(n.useState)("0 mints"),s=Object(O.a)(c,2),i=s[0],o=s[1],m=Object(n.useCallback)((function(){var e=new Date(l),a=(new Date).getTime()-e.getTime(),t=Math.trunc(a/1e3/60/60);if(t<24){if(t<1)return o("just now");var n=1===t?"hour":"hours";return o("".concat(t.toString()," ").concat(n," ago"))}var r=new Intl.DateTimeFormat("en-US",{day:"numeric",month:"long",year:"numeric"}).format(e);return o("on ".concat(r))}),[l]);return Object(n.useEffect)((function(){m()}),[m]),r.a.createElement("p",{className:"card-text"},r.a.createElement("a",{href:t+"/stargazers",target:" _blank",className:"text-dark text-decoration-none"},r.a.createElement("span",{className:"text-dark card-link mr-4"},r.a.createElement("i",{className:"fab fa-github"})," Stars"," ",r.a.createElement("span",{className:"badge badge-dark"},a))),r.a.createElement("small",{className:"text-muted"},"Updated ",i))},K=function(e){var a=e.value,t=a.name,n=a.description,l=a.homepage,c=a.svn_url,s=a.stargazers_count,i=a.languages_url,o=a.pushed_at;return r.a.createElement(B.a,{md:6},r.a.createElement(H.a,{className:"card shadow-lg p-3 mb-5 bg-white rounded"},r.a.createElement(H.a.Body,null,r.a.createElement(H.a.Title,{as:"h5"},t||r.a.createElement(U.a,null)," "),r.a.createElement(H.a.Text,null,n?n||r.a.createElement(U.a,{count:3}):""," "),c&&l?r.a.createElement(W,{svn_url:c,homepage:l}):c?r.a.createElement(W,{svn_url:c}):r.a.createElement(U.a,{count:2}),r.a.createElement("hr",null),i?r.a.createElement(D,{languages_url:i,repo_url:c}):r.a.createElement(U.a,{count:3}),a?r.a.createElement(V,{star_count:s,repo_url:c,pushed_at:o}):r.a.createElement(U.a,null))))},Z={name:null,description:null,homepage:null,svn_url:null,stargazers_count:null,languages_url:null,pushed_at:null},Q="https://api.github.com",$=function(e){var a=e.heading,t=e.username,l=e.length,c=e.specfic,s="".concat(Q,"/users/").concat(t,"/repos?sort=updated&direction=desc"),i="".concat(Q,"/repos/").concat(t),o=new Array(l+c.length).fill(Z),m=Object(n.useState)([]),u=Object(O.a)(m,2),d=u[0],g=u[1],f=Object(n.useCallback)(Object(_.a)(j.a.mark((function e(){var a,t,n,r,o,m,u,d;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.prev=1,e.next=4,A.a.get(s);case 4:t=e.sent,a=Object(F.a)(t.data.slice(0,l)),e.prev=6,n=Object(I.a)(c),e.prev=8,n.s();case 10:if((r=n.n()).done){e.next=18;break}return o=r.value,e.next=14,A.a.get("".concat(i,"/").concat(o));case 14:m=e.sent,a.push(m.data);case 16:e.next=10;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(8),n.e(e.t0);case 23:return e.prev=23,n.f(),e.finish(23);case 26:e.next=31;break;case 28:e.prev=28,e.t1=e.catch(6),console.error(e.t1.message);case 31:a=a.reverse(),u=0;case 33:if(!(u<a.length)){e.next=42;break}if("django_auction_project"!==a[u].name){e.next=39;break}return d=a[u],a.splice(u,1),a.splice(a.length-1,0,d),e.abrupt("break",42);case 39:u++,e.next=33;break;case 42:g(a),e.next=48;break;case 45:e.prev=45,e.t2=e.catch(1),console.error(e.t2.message);case 48:case"end":return e.stop()}}),e,null,[[1,45],[6,28],[8,20,23,26]])}))),[s,l,c,i]);return Object(n.useEffect)((function(){f()}),[f]),r.a.createElement(y.a,{fluid:!0,id:"projects",className:"bg-light m-0"},r.a.createElement(N.a,{className:""},r.a.createElement("h2",{className:"display-4 pb-5 text-center"},a),r.a.createElement(q.a,null,d.length?d.map((function(e,a){return r.a.createElement(K,{key:"project-card-".concat(a),id:"project-card-".concat(a),value:e})})):o.map((function(e,a){return r.a.createElement(K,{key:"dummy-".concat(a),id:"dummy-".concat(a),value:e})})))))},X=function(e){return r.a.createElement("footer",{style:{backgroundColor:"#f5f5f5"},className:"mt-auto py-5 text-center "},r.a.createElement(N.a,null,e.children))},Y="undefined"!==typeof window?n.useLayoutEffect:n.useEffect,G="undefined"!==typeof window;function ee(e){var a=e.element,t=e.useWindow;if(!G)return{x:0,y:0};var n=(a?a.current:document.body).getBoundingClientRect();return t?{x:window.scrollX,y:window.scrollY}:{x:n.left,y:n.top}}function ae(e,a,t,r,l){var c=Object(n.useRef)(ee({useWindow:r})),s=null,i=function(){var a=ee({element:t,useWindow:r});e({prevPos:c.current,currPos:a}),c.current=a,s=null};Y((function(){if(G){var e=function(){l?null===s&&(s=setTimeout(i,l)):i()};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e),s&&clearTimeout(s)}}}),a)}ae.defaultProps={deps:[],element:!1,useWindow:!1,wait:null};var te=function(e){var a=r.a.useState(null),t=Object(O.a)(a,2),n=t[0],l=t[1];return r.a.useEffect((function(){var a=e.current,t=new ResizeObserver((function(e){e.forEach((function(e){l(e.contentRect)}))}));return t.observe(a),function(){t.unobserve(a)}}),[e]),n},ne=t(44),re=t(25),le=r.a.forwardRef((function(e,a){var t=Object(n.useState)(!0),l=Object(O.a)(t,2),c=l[0],s=l[1],i=Object(n.useState)(0),o=Object(O.a)(i,2),g=o[0],p=o[1],h=r.a.useRef(),b=te(h),E=b?b.bottom:0;return ae((function(e){e.prevPos;var t=e.currPos;b&&(t.y+a.current.offsetTop-b.bottom>5?s(!0):s(!1),p(t.y))}),[E]),r.a.useEffect((function(){b&&(E-g>=a.current.offsetTop?s(!1):s(!0))}),[E,b,a,g]),r.a.createElement(ne.a,{ref:h,className:" fixed-top  ".concat(c?"navbar-transparent":"navbar-white"),expand:"lg"},r.a.createElement(ne.a.Brand,{className:"brand",href:"/hamza3256.github.io"},"<".concat(m.lastName," />")),r.a.createElement(ne.a.Toggle,{"aria-controls":"basic-navbar-nav",className:"toggler"}),r.a.createElement(ne.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(re.a,{className:"mr-auto"},u.show&&r.a.createElement(re.a.Link,{className:"nav-link lead",href:"/hamza3256.github.io/#aboutme"},"About"),v.show&&r.a.createElement(re.a.Link,{className:"nav-link lead",href:"/hamza3256.github.io/#experience"},"Career"),d.show&&r.a.createElement(re.a.Link,{className:"nav-link lead",href:"/hamza3256.github.io/#projects"},"Projects"),f.show&&r.a.createElement(re.a.Link,{className:"nav-link lead",href:"/hamza3256.github.io/#skills"},"Skills"),r.a.createElement(re.a.Link,{className:"nav-link lead",href:u.resume,target:"_blank",rel:"noreferrer noopener"},"Resume"))))})),ce=t(61),se=t(82),ie=t(81);var oe=function(e){var a=e.skill,t=e.value,n=e.isScrolled;return r.a.createElement("div",{style:{width:"95%"}},r.a.createElement("p",{className:"lead mb-1 mt-2"},a),r.a.createElement(ie.a,{className:n?" progress-bar-animation":"progress",now:t}))};function me(e){var a=e.skills,t=e.isScrolled;return r.a.createElement(r.a.Fragment,null,a.map((function(e,a){return r.a.createElement(oe,{key:"".concat(e,"-").concat(a),skill:e.name,value:e.value,isScrolled:t})})))}var ue=function(e){var a=e.skills,t=e.isScrolled;return r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,{xs:12,md:6},r.a.createElement(me,{skills:a.slice(0,Math.floor(a.length/2)),isScrolled:t})),r.a.createElement(B.a,{xs:12,md:6},r.a.createElement(me,{skills:a.slice(Math.floor(a.length/2),a.length),isScrolled:t})))};var de=function(e){var a=e.heading,t=e.hardSkills,n=e.softSkills,l=r.a.useRef(),c=r.a.useState(!1),s=Object(O.a)(c,2),i=s[0],o=s[1];return ae((function(e){e.prevPos;var a=e.currPos;!i&&a.y-400<0&&o(!0)}),[],l),r.a.createElement(y.a,{ref:l,fluid:!0,className:"bg-white m-0",id:"skills"},r.a.createElement(N.a,{className:"p-5 "},r.a.createElement("h2",{ref:l,className:"display-4 pb-5 text-center"},a),r.a.createElement(se.a,{className:"skills-tabs",defaultActiveKey:"hard-skills",id:"skills-tabs"},r.a.createElement(ce.a,{tabClassName:"skills-tab lead",eventKey:"hard-skills",title:"Technical Skills"},r.a.createElement(q.a,{className:"pt-3 px-1"},r.a.createElement(ue,{skills:t,isScrolled:i}))),r.a.createElement(ce.a,{tabClassName:"skills-tab lead",eventKey:"soft-skills",title:"Soft Skills"},r.a.createElement(q.a,{className:"pt-3 px-1"},r.a.createElement(ue,{skills:n,isScrolled:i}))))))},ge=t(88),fe=t(87),pe=t(62),he=(t(123),t(124),function(e){var a=e.heading,t=e.message,l=e.email,c=Object(ge.a)(),s=c.register,i=c.handleSubmit,o=c.reset,m=c.formState.errors,u=Object(n.useState)(!1),d=Object(O.a)(u,2),g=d[0],f=d[1],p=function(){var e=Object(_.a)(j.a.mark((function e(a){var t,n,r,l,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.name,n=a.email,r=a.subject,l=a.message,e.prev=1,f(!0),c={name:t,email:n,subject:r,message:l},e.next=6,fe.a.send("service_amxj2ei","template_n1a9r4b",c,"user_rkjBkROyKuZtWxnLmWTmx");case 6:o(),Object(pe.b)("Form sent!",{position:"bottom-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!1,className:"submit-feedback success",toastId:"notifyToast"}),f(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"display-4 pb-3 text-center"},a),r.a.createElement("p",{className:"lead text-center pb-3"},t," ",r.a.createElement("a",{href:"mailto:".concat(l)},l),"."),r.a.createElement("div",{className:"ContactForm"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("div",{className:"contactForm"},r.a.createElement("form",{id:"contact-form",onSubmit:i(p),noValidate:!0},r.a.createElement("div",{className:"row formRow"},r.a.createElement("div",{className:"col-6"},r.a.createElement("input",Object.assign({type:"text",name:"name"},s("name",{required:{value:!0,message:"Please enter your name"},maxLength:{value:30,message:"Please use 30 characters or less"}}),{className:"form-control formInput",placeholder:"Name"})),m.name&&r.a.createElement("span",{className:"errorMessage"},m.name.message)),r.a.createElement("div",{className:"col-6"},r.a.createElement("input",Object.assign({type:"email",name:"email"},s("email",{required:!0,pattern:/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/}),{className:"form-control formInput",placeholder:"Email address"})),m.email&&r.a.createElement("span",{className:"errorMessage"},"Please enter a valid email address"))),r.a.createElement("div",{className:"row formRow"},r.a.createElement("div",{className:"col"},r.a.createElement("input",Object.assign({type:"text",name:"subject"},s("subject",{required:{value:!0,message:"Please enter a subject"},maxLength:{value:75,message:"Subject cannot exceed 75 characters"}}),{className:"form-control formInput",placeholder:"Subject"})),m.subject&&r.a.createElement("span",{className:"errorMessage"},m.subject.message))),r.a.createElement("div",{className:"row formRow"},r.a.createElement("div",{className:"col"},r.a.createElement("textarea",Object.assign({rows:3,name:"message"},s("message",{required:!0}),{className:"form-control formInput",placeholder:"Message"})),m.message&&r.a.createElement("span",{className:"errorMessage"},"Please enter a message"))),r.a.createElement("button",{className:"submit-btn",disabled:g,type:"submit"},"Submit"))),r.a.createElement(pe.a,null))))))}),be=t(55),Ee=function(e){var a=e.heading,t=e.message,n=e.img,l=e.imageSize;return r.a.createElement("div",{id:"leadership",className:"jumbotron jumbotron-fluid m-0",style:{backgroundColor:"white"}},r.a.createElement("div",{className:"container container-fluid"},r.a.createElement("h2",{className:"display-4 pb-5 text-center"},a),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-5"},r.a.createElement("p",{className:"lead"},t)),r.a.createElement("div",{className:"col-md-7"},r.a.createElement(be.a,null,n.map((function(e,a){return r.a.createElement(be.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:e.img,alt:"First slide",width:l.width,height:l.height}),r.a.createElement(be.a.Caption,null,r.a.createElement("h3",null,e.label),r.a.createElement("p",null,e.paragraph)))})))))))},ve=t(38),we=(t(130),t(84)),ke=t.n(we),Ne=t(85),ye=t.n(Ne),Se=t(63),xe=t.n(Se),je=function(){return r.a.createElement(y.a,{fluid:!0,id:"experience",className:"bg-light m-0"},r.a.createElement(N.a,{className:"p-7"},r.a.createElement(ve.VerticalTimeline,null,r.a.createElement(ve.VerticalTimelineElement,{className:"vertical-timeline-element--work",contentStyle:{background:"rgb(33, 150, 243)",color:"#fff"},contentArrowStyle:{borderRight:"7px solid  rgb(33, 150, 243)"},date:"Oct 2021 \u2014 Nov 2021",iconStyle:{background:"rgb(33, 150, 243)",color:"#fff"},icon:r.a.createElement(xe.a,null)},r.a.createElement("h3",{className:"vertical-timeline-element-title"},"Alumni Software Engineer"),r.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"MThree ",r.a.createElement("span",{style:{float:"right"}},"London, UK")),r.a.createElement("p",null,"Underwent six\u2011weeks training in Full Stack Engineering (Java).")),r.a.createElement(ve.VerticalTimelineElement,{className:"vertical-timeline-element--work",contentStyle:{background:"rgb(33, 150, 243)",color:"#fff"},contentArrowStyle:{borderRight:"7px solid  rgb(33, 150, 243)"},date:"Jun 2021 \u2014 Aug 2021",iconStyle:{background:"rgb(33, 150, 243)",color:"#fff"},icon:r.a.createElement(xe.a,null)},r.a.createElement("h3",{className:"vertical-timeline-element-title"}," Full Stack Developer "),r.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"Freelance ",r.a.createElement("span",{style:{float:"right"}},"London, UK")),r.a.createElement("p",null,r.a.createElement("li",null,"Created separate and restricted admin access for inventory management"),r.a.createElement("li",null,"Implemented different access levels to handle orders and customer interaction which sped up the payment process by 70%"))),r.a.createElement(ve.VerticalTimelineElement,{className:"vertical-timeline-element--education",contentStyle:{background:"rgb(0,0,128)",color:"#fff"},contentArrowStyle:{borderRight:"7px solid  rgb(0,0,128)"},date:"Sep 2017 \u2014 Aug 2020",iconStyle:{background:"rgb(233, 30, 99)",color:"#fff"},icon:r.a.createElement(ke.a,null)},r.a.createElement("h3",{className:"vertical-timeline-element-title"},"BSc Computer Science"),r.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"Queen Mary University of London"),r.a.createElement("p",null,"1st Class Hons")),r.a.createElement(ve.VerticalTimelineElement,{iconStyle:{background:"rgb(16, 204, 82)",color:"#fff"},icon:r.a.createElement(ye.a,null)}))))},_e=r.a.forwardRef((function(e,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{gradient:m.gradientColors,title:"".concat(m.firstName," ").concat(m.middleName," ").concat(m.lastName),message:m.message,icons:m.icons,ref:a}),u.show&&r.a.createElement(T,{heading:u.heading,message:u.message,link:u.imageLink,imgSize:u.imageSize,resume:u.resume}),r.a.createElement(je,{experiences:v}),d.show&&r.a.createElement($,{heading:d.heading,username:d.gitHubUsername,length:d.reposLength,specfic:d.specificRepos}),g.show&&r.a.createElement(Ee,{heading:g.heading,message:g.message,img:g.images,imageSize:g.imageSize}),f.show&&r.a.createElement(de,{heading:f.heading,hardSkills:f.hardSkills,softSkills:f.softSkills}))})),Oe=function(){var e=r.a.useRef();return r.a.createElement(s.a,{basename:"/hamza3256.github.io/"},o&&r.a.createElement(le,{ref:e}),r.a.createElement(i.a,{path:"/",exact:!0,component:function(){return r.a.createElement(_e,{ref:e})}}),r.a.createElement(X,null,p&&r.a.createElement(he,{heading:h,message:b,email:E})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},39:function(e,a,t){e.exports=t.p+"static/media/myProf.d78ebf92.jpg"},78:function(e,a,t){e.exports=t.p+"static/media/Resume__Muhammad_Hamza.cfee3159.pdf"},90:function(e,a,t){e.exports=t(136)},95:function(e,a,t){},96:function(e,a,t){e.exports=t.p+"static/media/mthree.073c863f.png"},97:function(e,a,t){e.exports=t.p+"static/media/AJ-icon.7b8a5db9.jpeg"}},[[90,1,2]]]);
//# sourceMappingURL=main.bbcb58e5.chunk.js.map