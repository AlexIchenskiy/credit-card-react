(this["webpackJsonpcredit-card"]=this["webpackJsonpcredit-card"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/visalogo.df5fcfcb.png"},function(e,t,a){e.exports=a.p+"static/media/cardchip.730fad8f.png"},function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(9),c=a.n(s),l=(a(17),a(1)),i=a(2),m=a(4),u=a(3),p=(a(18),a(10)),o=a.n(p),h=a(11),d=a.n(h),v=a(5);function b(e){return"0"<=e&&e<="9"}var f=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={value:"",prev:0},n.handleChange=n.handleChange.bind(Object(v.a)(n)),n}return Object(i.a)(a,[{key:"handleChange",value:function(e){var t=e.target.value;if("cardnumber"===this.props.name&&t.length<=19&&b(t[t.length-1])||""===t){for(var a=0;a<t.length;a++)4===a||9===a||14===a?t=t.substring(0,a)+"-"+t.substring(a,t.length):"-"===t[a]&&4!==a&&9!==a&&14!==a&&(t=t.substring(0,a)+t.substring(a+1,t.length));this.setState({value:t,prev:t.length}),this.props.update(t)}else if("cardnumber"===this.props.name)this.state.prev+1>t.length&&"-"===t[t.length-1]&&(t=t.substring(0,t.length-1),this.setState({value:t}),this.props.update(t));else if("cvc"===this.props.name&&b(t[t.length-1])&&t.length<=3||""===t)this.setState({value:t}),this.props.update(t);else{if("cvc"===this.props.name)return;!b((t=t[0].toUpperCase()+t.substring(1).toLowerCase())[t.length-1])&&t.length<=9&&" "!==t[t.length-1]&&(this.setState({value:t}),this.props.update(t))}}},{key:"render",value:function(){return r.a.createElement("div",{className:[this.props.name,"couple"].join(" ")},r.a.createElement("label",{for:this.props.name},this.props.title),r.a.createElement("input",{type:"text",name:this.props.name,id:this.props.name,value:this.state.value,autocomplete:"off",onChange:this.handleChange}))}}]),a}(r.a.Component),g=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;if(Object(l.a)(this,a),"year"===(n=t.call(this,e)).props.name){for(var s=[],c=(new Date).getFullYear(),i=c+11;c<i;)s.push(r.a.createElement("option",{key:c,value:c},c)),c++;n.state={content:[r.a.createElement("option",{value:"",selected:!0,disabled:!0},"Select ",n.props.title.toLowerCase())].concat(s),value:s[0],prev:"YYYY"}}else{for(var m=[],u=1,p=u+11;u<=p;)m.push(r.a.createElement("option",{key:u,value:u},u<10?"0"+u:u)),u++;n.state={content:[r.a.createElement("option",{value:"",selected:!0,disabled:!0},"Select ",n.props.title.toLowerCase())].concat(m),value:1,prev:"MM"}}return n.handleChange=n.handleChange.bind(Object(v.a)(n)),n}return Object(i.a)(a,[{key:"handleChange",value:function(e){e.target.value!==this.state.value&&(this.setState({value:e.target.value}),this.props.updatePrev(this.state.prev),this.props.update(e.target.value),this.setState({prev:e.target.value}))}},{key:"render",value:function(){return r.a.createElement("div",{className:[this.props.name,"couple"].join(" ")},r.a.createElement("label",{for:this.props.name},this.props.title),r.a.createElement("select",{name:this.props.name,id:this.props.name,value:this.state.value,onChange:this.handleChange},this.state.content))}}]),a}(r.a.Component),E=a(7),N=a(6),y=a.n(N),S=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(l.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=[];e.cardnumber.map((function(e){var a=Object(E.a)(e,2),n=a[0],s=a[1];t.push(r.a.createElement("span",null,r.a.createElement("span",{className:"#"===n[0]?"char visible":"char hidden",key:s.toString()},"#"),r.a.createElement("span",{className:"#"===n[0]?"char hidden":"char visible",key:(s+20).toString()},"#"===n[0]?"":n[0])))})),n.setState({items:t})};var s=[];return n.props.cardnumber.map((function(e){var t=Object(E.a)(e,2),a=t[0],n=t[1];s.push(r.a.createElement("span",null,r.a.createElement("span",{className:"#"===a[0]?"char visible":"char hidden",key:n.toString()},"#"),r.a.createElement("span",{className:"#"===a[0]?"char hidden":"char visible",key:(n+20).toString()},"#"===a[0]?"":a[0])))})),n.state={items:s},n}return Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.handleChange(e)}},{key:"render",value:function(){return this.state.items}}]),a}(r.a.Component),j=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(l.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=[];t.push(r.a.createElement("span",null,r.a.createElement("span",{className:"char chars hiddentoggle hidden",key:e.month[1]},e.month[1]<10?"0"+e.month[1]:e.month[1]),r.a.createElement("span",{className:"char chars visibletoggle",key:e.month[0]+1},e.month[0]<10?"0"+e.month[0]:e.month[0]))),e.month[1]!==e.month[0]&&n.setState({monthitems:t})};var s=[];return s.push(r.a.createElement("span",null,r.a.createElement("span",{className:"char visible",key:"MM1"},"MM"),r.a.createElement("span",{className:"char hidden",key:"MM2"},"MM"))),n.state={monthitems:s},n}return Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.handleChange(e)}},{key:"render",value:function(){return this.state.monthitems}}]),a}(r.a.Component),C=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(l.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=[];t.push(r.a.createElement("span",null,r.a.createElement("span",{className:"char hiddentoggle hidden",key:e.year[1].substring(2,4)+20},e.year[1].substring(2,4)<10?"0"+e.year[1].substring(2,4):e.year[1].substring(2,4)),r.a.createElement("span",{className:"char visibletoggle",key:e.year[0].substring(2,4)+21},e.year[0].substring(2,4)<10?"0"+e.year[0].substring(2,4):e.year[0].substring(2,4)))),e.year[0].substring(2,4)!==e.year[1].substring(2,4)&&n.setState({yearitems:t})};var s=[];return s.push(r.a.createElement("span",null,r.a.createElement("span",{className:"char visible",key:"YY1"},"YY"),r.a.createElement("span",{className:"char hidden",key:"YY2"},"YY"))),n.state={yearitems:s},n}return Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.handleChange(e)}},{key:"render",value:function(){return this.state.yearitems}}]),a}(r.a.Component),O=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(l.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=[],a=[],s=e.sname,c=n.state.nameitemsprev;if(s!==c){0===s.length?s="fname"===n.props.name?"Name":"Surname":0===c.length&&(c="fname"===n.props.name?"Name":"Surname");for(var l=0;l<9;l++)a.push([void 0!==s[l]?s[l]:" ",void 0!==c[l]?c[l]:" "]);a.map((function(e){var a=Object(E.a)(e,2),n=a[0],s=a[1];t.push(r.a.createElement("span",{className:"letter"},r.a.createElement("span",{className:n!==s?"char hiddentoggle hidden":"char visible",key:y()()},s),r.a.createElement("span",{className:n!==s?"char visibletoggle visible":"char hidden",key:y()()},n)))})),n.setState({nameitems:t,nameitemsprev:e.sname})}};var s=[];return("fname"===n.props.name?"Name".split(""):"Surname".split("")).map((function(e){s.push(r.a.createElement("span",{className:"letter"},r.a.createElement("span",{className:"char visible",key:y()()},e),r.a.createElement("span",{className:"char hidden",key:y()()},e)))})),n.state={nameitems:s,nameitemsprev:"fname"===n.props.name?"Name":"Surname"},n}return Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.handleChange(e)}},{key:"render",value:function(){return this.state.nameitems}}]),a}(r.a.Component),k=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"wrapper"}),r.a.createElement("div",{className:"cardimg"},r.a.createElement("img",{className:"chip",src:d.a,alt:"chip"}),r.a.createElement("img",{className:"logo",src:o.a,alt:"logo"})),r.a.createElement("div",{className:"cardnumber"},r.a.createElement("label",{for:"cardnumber",className:"numbertitle title"},r.a.createElement("span",null,"Card number")),r.a.createElement("label",{for:"cardnumber",className:"numberchars"},r.a.createElement(S,{name:"cardnumber",cardnumber:this.props.cardnumber}))),r.a.createElement("div",{className:"namedate"},r.a.createElement("div",{className:"fullname"},r.a.createElement("span",{className:"title"},"Cardholder name"),r.a.createElement("span",{className:"subtitle letterswrap"},r.a.createElement("label",{for:"firstname",className:"letters",style:{width:15*this.props.fname.length+20+"px"}},r.a.createElement(O,{name:"fname",sname:this.props.fname})),r.a.createElement("label",{for:"lastname",className:"letters",style:{left:15*this.props.fname.length+65+"px",width:15*this.props.lname.length+20+"px"}},r.a.createElement(O,{name:"lname",sname:this.props.lname})))),r.a.createElement("div",{className:"datecard"},r.a.createElement("span",{className:"title"},"Expiration date"),r.a.createElement("span",{className:"subtitle"},r.a.createElement("label",{for:"month",className:"datechars monthchars"},r.a.createElement(j,{name:"month",month:this.props.month})),r.a.createElement("span",{className:"datechars"},"/"),r.a.createElement("label",{for:"year",className:"datechars"},r.a.createElement(C,{name:"year",year:this.props.year}))))))}}]),a}(r.a.Component),Y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).updateFNameInput=function(e){n.setState({fname:e}),n.props.updateFName(e),0===e.length&&(n.setState({fname:"Name"}),n.props.updateFName("Name"))},n.updateLNameInput=function(e){n.setState({lname:e}),n.props.updateLName(e),0===e.length&&(n.setState({lname:"Surname"}),n.props.updateLName("Surname"))},n.updateNumberInput=function(e){for(var t=[],a=0;a<19;a++)e[a]>="0"&&e[a]<="9"?t.push(e[a]):"-"===e[a]?t.push([" ",a]):t.push(["#",a]);n.setState({cardnumber:t}),n.props.updateNumber(t)},n.updateCvcInput=function(e){n.setState({cvc:e}),n.props.updateCvc(e)},n.updateYearInput=function(e){n.setState({year:e}),n.props.updateYear(e)},n.updatePrevYearInput=function(e){n.setState({prevyear:e}),n.props.updatePrevYear(e)},n.updateMonthInput=function(e){n.setState({month:e}),n.props.updateMonth(e)},n.updatePrevMonthInput=function(e){n.setState({prevmonth:e}),n.props.updatePrevMonth(e)},n.state={fname:"",lname:"",cardnumber:["#","#","#","#"," ","#","#","#","#"," ","#","#","#","#"," ","#","#","#","#"],year:"YY",prevyear:"YY",month:"MM",prevmonth:"MM",cvc:""},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"inputs"},r.a.createElement("form",null,r.a.createElement("div",{className:"flname"},r.a.createElement(f,{name:"firstname",title:"Name",update:this.updateFNameInput}),r.a.createElement(f,{name:"lastname",title:"Surname",update:this.updateLNameInput})),r.a.createElement("div",{className:"numbercvc"},r.a.createElement(f,{name:"cardnumber",title:"Card number",update:this.updateNumberInput}),r.a.createElement(f,{name:"cvc",title:"CVC",update:this.updateCvcInput})),r.a.createElement("div",{className:"date"},r.a.createElement(g,{name:"year",title:"Year",content:"years",updatePrev:this.updatePrevYearInput,update:this.updateYearInput}),r.a.createElement(g,{name:"month",title:"Month",content:"months",updatePrev:this.updatePrevMonthInput,update:this.updateMonthInput})),r.a.createElement("input",{type:"submit",value:"Submit",className:"submitbutton",onClick:function(e){e.preventDefault()}})))}}]),a}(r.a.Component),M=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(l.a)(this,a),(n=t.call(this,e)).updateFName=function(e){n.setState({fname:e})},n.updateLName=function(e){n.setState({lname:e})},n.updateNumber=function(e){for(var t=[],a=[],r=0;r<19;r++)e[r]>="0"&&e[r]<="9"?t.push([e[r],r]):4===r||9===r||14===r?t.push([" ",r]):t.push(["#",r]),t[r][0]!=n.state.prevWhole[r]?a[r]=n.state.prevWhole[r]:t[r][0]==n.state.prevWhole[r]&&(a[r]="#");n.setState({prev:a}),n.setState({cardnumber:t}),n.setState({prevWhole:e})},n.updateCvc=function(e){n.setState({cvc:e})},n.updateYear=function(e){n.setState({year:e})},n.updatePrevYear=function(e){n.setState({prevyear:e})},n.updateMonth=function(e){n.setState({month:e})},n.updatePrevMonth=function(e){n.setState({prevmonth:e})};for(var r=[],s=0;s<19;s++)4===s||9===s||14===s?r.push([" ",s]):r.push(["#",s]);return n.state={fname:"Name",lname:"Surname",cardnumber:r,prev:r,prevWhole:r,year:"YYYY",prevyear:"YYYY",month:"MM",prevmonth:"MM",cvc:""},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"root"},r.a.createElement(k,{fname:this.state.fname,lname:this.state.lname,cardnumber:this.state.cardnumber,prev:this.state.prev,cvc:this.state.cvc,year:[this.state.year,this.state.prevyear],month:[this.state.month,this.state.prevmonth]}),r.a.createElement(Y,{updateFName:this.updateFName,updateLName:this.updateLName,updateNumber:this.updateNumber,updateCvc:this.updateCvc,updateYear:this.updateYear,updatePrevYear:this.updatePrevYear,updateMonth:this.updateMonth,updatePrevMonth:this.updatePrevMonth}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.3f6a3d2d.chunk.js.map