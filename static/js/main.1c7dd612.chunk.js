(this.webpackJsonpknuffel=this.webpackJsonpknuffel||[]).push([[0],[,,,,,,,,,,,,function(e,c,t){},function(e,c,t){},,function(e,c,t){},function(e,c,t){},function(e,c,t){"use strict";t.r(c);var n=t(1),r=t.n(n),a=t(7),i=t.n(a),s=(t(12),t(13),t(2)),o=t(3),d=t(0),l=function(e){var c=e.data,t=e.freezeRow;return Object(d.jsxs)("li",{className:"row",children:[Object(d.jsx)("div",{children:"Aces"}),Object(d.jsx)("div",{children:"Count and add only Aces"}),Object(d.jsx)("div",{id:"Aces",className:"".concat(c[0].frozen?"frozen":c[0].checked?"checked":""),onClick:t,children:c[0].value})]})},u=function(e){var c=e.data,t=e.freezeRow;return Object(d.jsxs)("li",{className:"row",children:[Object(d.jsx)("div",{children:"Twos"}),Object(d.jsx)("div",{children:"Count and add only Twos"}),Object(d.jsx)("div",{id:"Twos",className:"".concat(c[1].frozen?"frozen":c[1].checked?"checked":""),onClick:t,children:c[1].value})]})},j=function(e){var c=e.data,t=e.freezeRow;return Object(d.jsxs)("li",{className:"row",children:[Object(d.jsx)("div",{children:"Threes"}),Object(d.jsx)("div",{children:"Count and add only Threes"}),Object(d.jsx)("div",{id:"Threes",className:"".concat(c[2].frozen?"frozen":c[2].checked?"checked":""),onClick:t,children:c[2].value})]})},f=function(e){var c=e.data,t=e.freezeRow;return Object(d.jsxs)("li",{className:"row",children:[Object(d.jsx)("div",{children:"Fours"}),Object(d.jsx)("div",{children:"Count and add only Fours"}),Object(d.jsx)("div",{id:"Fours",className:"".concat(c[3].frozen?"frozen":c[3].checked?"checked":""),onClick:t,children:c[3].value})]})},b=function(e){var c=e.data,t=e.freezeRow;return Object(d.jsxs)("li",{className:"row",children:[Object(d.jsx)("div",{children:"Fives"}),Object(d.jsx)("div",{children:"Count and add only Fives"}),Object(d.jsx)("div",{id:"Fives",className:"".concat(c[4].frozen?"frozen":c[4].checked?"checked":""),onClick:t,children:c[4].value})]})},h=function(e){var c=e.data,t=e.freezeRow;return Object(d.jsxs)("li",{className:"row",children:[Object(d.jsx)("div",{children:"Sixes"}),Object(d.jsx)("div",{children:"Count and add only Sixes"}),Object(d.jsx)("div",{id:"Sixes",className:"".concat(c[5].frozen?"frozen":c[5].checked?"checked":""),onClick:t,children:c[5].value})]})},O=function(e){var c=e.bonus,t=e.setBonus,r=e.countLeft;return Object(n.useEffect)((function(){r>=63&&t(35)}),[r]),Object(d.jsxs)("li",{className:"row",children:[Object(d.jsx)("div",{children:"Bonus"}),Object(d.jsx)("div",{children:"Score 35"}),Object(d.jsx)("div",{children:c})]})},v=function(e){var c=e.dice,t=e.data,r=e.setData,a=e.freezeRow;return Object(n.useEffect)((function(){var e=c.map((function(e){return e.number}));if(e.length&&(e=e.sort(),Object(s.a)(new Set(e)).length<=3&&(e[0]===e[2]||e[1]===e[3]||e[2]===e[4]))){var n=Object(s.a)(t),a=e.reduce((function(e,c){return e+c}),0);n[6].value=a,r(n)}}),[c]),Object(d.jsxs)("li",{className:"row",children:[Object(d.jsx)("div",{children:"3 of a kind"}),Object(d.jsx)("div",{children:"Add Total of all dice"}),Object(d.jsx)("div",{id:"ThreeOfAKind",className:"".concat(t[6].frozen?"frozen":t[6].checked?"checked":""),onClick:a,children:t[6].value})]})},x=function(e){var c=e.dice,t=e.data,r=e.setData,a=e.freezeRow;return Object(n.useEffect)((function(){var e=c.map((function(e){return e.number}));if(e.length){e=e.sort();var n=Object(s.a)(new Set(e));if(n.length<=2&&n[0]!==n[n.length-1]){var a=Object(s.a)(t),i=e.reduce((function(e,c){return e+c}),0);a[7].value=i,r(a)}}}),[c]),Object(d.jsxs)("li",{className:"row",children:[Object(d.jsx)("div",{children:"4 of a kind"}),Object(d.jsx)("div",{children:"Add Total of all dice"}),Object(d.jsx)("div",{id:"FourOfAKind",className:"".concat(t[7].frozen?"frozen":t[7].checked?"checked":""),onClick:a,children:t[7].value})]})},k=function(e){var c=e.data,t=e.setData,r=e.dice,a=e.freezeRow;return Object(n.useEffect)((function(){var e=r.map((function(e){return e.number}));if(e.length){e=e.sort();var n=Object(s.a)(new Set(e));if(2===n.length&&n[1]!==n[3]){var a=Object(s.a)(c);a[8].value=25,t(a)}}}),[r]),Object(d.jsxs)("li",{className:"row",children:[Object(d.jsx)("div",{children:"Full House"}),Object(d.jsx)("div",{children:"Score 25"}),Object(d.jsx)("div",{id:"FullHouse",className:"".concat(c[8].frozen?"frozen":c[8].checked?"checked":""),onClick:a,children:c[8].value})]})},m=function(e){var c=e.data,t=e.setData,r=e.dice,a=e.freezeRow;return Object(n.useEffect)((function(){var e=Object(s.a)(c),n=[];if(r.length)for(var a=0;a<5;a++)n.push(r[a].number);(n.includes(1)&&n.includes(2)&&n.includes(3)&&n.includes(4)||n.includes(2)&&n.includes(3)&&n.includes(4)&&n.includes(5)||n.includes(3)&&n.includes(4)&&n.includes(5)&&n.includes(6))&&(e[9].value=30),t(e)}),[r]),Object(d.jsxs)("li",{className:"row",children:[Object(d.jsx)("div",{children:"Small Straight"}),Object(d.jsx)("div",{children:"Score 30"}),Object(d.jsx)("div",{id:"SmStraight",className:"".concat(c[9].frozen?"frozen":c[9].checked?"checked":""),onClick:a,children:c[9].value})]})},z=function(e){var c=e.data,t=e.setData,r=e.dice,a=e.freezeRow;return Object(n.useEffect)((function(){var e=Object(s.a)(c),n=[];if(r.length)for(var a=0;a<5;a++)n.push(r[a].number);(n.includes(1)&&n.includes(2)&&n.includes(3)&&n.includes(4)&&n.includes(5)||n.includes(2)&&n.includes(3)&&n.includes(4)&&n.includes(5)&&n.includes(6))&&(e[10].value=40),t(e)}),[r]),Object(d.jsxs)("li",{className:"row",children:[Object(d.jsx)("div",{children:"Large Straight"}),Object(d.jsx)("div",{children:"Score 40"}),Object(d.jsx)("div",{id:"LgStraight",className:"".concat(c[10].frozen?"frozen":c[10].checked?"checked":""),onClick:a,children:c[10].value})]})},g=function(e){var c=e.dice,t=e.data,r=e.freezeRow;return Object(n.useEffect)((function(){var e=c.map((function(e){return e.number}));e.length&&(e.every((function(c){return c===e[0]}))&&(Object(s.a)(t)[11].value=50))}),[c]),Object(d.jsxs)("li",{className:"row",children:[Object(d.jsx)("div",{children:"Knuffle"}),Object(d.jsx)("div",{children:"Score 50"}),Object(d.jsx)("div",{id:"Knuffle",className:"".concat(t[11].frozen?"frozen":t[11].checked?"checked":""),onClick:r,children:t[11].value})]})},w=function(e){var c=e.data,t=e.setData,r=e.dice,a=e.freezeRow;return Object(n.useEffect)((function(){if(!1===c[12].frozen){var e=Object(s.a)(c),n=r.map((function(e){return e.number})).reduce((function(e,c){return e+c}),0);e[12].value=n,t(e)}}),[r]),Object(d.jsxs)("li",{className:"row",children:[Object(d.jsx)("div",{children:"Chance"}),Object(d.jsx)("div",{children:"Total Score of all Dice"}),Object(d.jsx)("div",{id:"Chance",className:"".concat(c[12].frozen?"frozen":c[12].checked?"checked":""),onClick:a,children:c[12].value})]})},S=function(e){var c=e.countLeft;return Object(d.jsxs)("li",{className:"row",children:[Object(d.jsx)("div",{children:"Total Left"}),Object(d.jsx)("div",{children:"----------------------------------\x3e"}),Object(d.jsx)("div",{children:c})]})},C=function(e){var c=e.data,t=e.playSignal,r=e.countRight,a=e.setCountRight,i=0;return Object(n.useEffect)((function(){for(var e=Object(s.a)(c),t=6;t<13;t++)i+=e[t].value;a(i)}),[t]),Object(d.jsxs)("li",{className:"row",children:[Object(d.jsx)("div",{children:"Total Right"}),Object(d.jsx)("div",{children:"----------------------------------\x3e"}),Object(d.jsx)("div",{children:r})]})},N=function(e){var c=e.totalScore;return Object(d.jsxs)("li",{className:"row",children:[Object(d.jsx)("div",{children:"Overall Score"}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{id:"OverallScore",children:c})]})},R=function(e){var c,t=e.numberRolls,n=e.setNumberRolls,r=e.dice,a=e.setDice,i=e.play,o=e.setMessage,l=e.data,u=function(e){var c;switch(e.target.id){case"firstDice":c=0;break;case"secondDice":c=1;break;case"thirdDice":c=2;break;case"fourthDice":c=3;break;case"fifthDice":c=4;break;default:c=-1}if("black"===e.target.style.backgroundColor){e.target.style.backgroundColor="";var t=Object(s.a)(r);t[c].selected=!1,a(t)}else{e.target.style.backgroundColor="black";var n=Object(s.a)(r);n[c].selected=!0,a(n)}};return t<3&&(c=Object(d.jsxs)("div",{className:"diceDivs",children:[Object(d.jsx)("div",{id:"firstDice",onClick:u,children:r[0].number}),Object(d.jsx)("div",{id:"secondDice",onClick:u,children:r[1].number}),Object(d.jsx)("div",{id:"thirdDice",onClick:u,children:r[2].number}),Object(d.jsx)("div",{id:"fourthDice",onClick:u,children:r[3].number}),Object(d.jsx)("div",{id:"fifthDice",onClick:u,children:r[4].number})]})),Object(d.jsxs)("li",{className:"buttonrow",children:[Object(d.jsxs)("button",{onClick:function(){if(3===t){n(t-1);for(var e=[],c=0;c<5;c++)e.push({id:c,number:Math.floor(6*Math.random())+1,selected:!1});a(e)}else if(t>0){n(t-1);var i=Object(s.a)(r);i.filter((function(e){return!1===e.selected})).forEach((function(e){return e.number=Math.floor(6*Math.random())+1})),a(i),o("Click on the dice to keep them")}else 0===t&&o("Log in one row to transfer the points")},children:[t," left"]}),Object(d.jsx)("button",{className:"".concat(l.some((function(e){return!1===e.frozen&&!0===e.checked}))?"":"grey"),onClick:i,children:" Play "}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{children:c})]})},p=function(e){var c=e.message,t=e.setMessage,r=e.data,a=e.totalScore;return Object(n.useEffect)((function(){r.some((function(e){return!0===e.checked&&!1===e.frozen}))?t("Press the left button to roll the dice/Click on the dice to keep them for the next roll/Press the Play button after selecting a number"):r.every((function(e){return!0===e.frozen}))&&t("Your final score is: ")}),[r]),Object(d.jsx)("li",{className:"row",children:Object(d.jsxs)("div",{children:[c," ","".concat(r.every((function(e){return e.frozen}))?a:"")," "]})})},y=function(){var e=Object(n.useState)(3),c=Object(o.a)(e,2),t=c[0],r=c[1],a=Object(n.useState)([]),i=Object(o.a)(a,2),y=i[0],D=i[1],E=Object(n.useState)(0),F=Object(o.a)(E,2),T=F[0],L=F[1],A=Object(n.useState)(0),K=Object(o.a)(A,2),M=K[0],P=K[1],B=Object(n.useState)(0),H=Object(o.a)(B,2),I=H[0],J=H[1],Y=Object(n.useState)("Press the left button to roll the dice"),q=Object(o.a)(Y,2),G=q[0],Q=q[1],U=Object(n.useState)(0),V=Object(o.a)(U,2),W=V[0],X=V[1],Z=Object(n.useState)(0),$=Object(o.a)(Z,2),_=$[0],ee=$[1],ce=Object(n.useState)(0),te=Object(o.a)(ce,2),ne=te[0],re=te[1],ae=Object(n.useState)(0),ie=Object(o.a)(ae,2),se=ie[0],oe=ie[1],de=Object(n.useState)(0),le=Object(o.a)(de,2),ue=le[0],je=le[1],fe=Object(n.useState)([{name:"ones",value:0,checked:!1,frozen:!1},{name:"twos",value:0,checked:!1,frozen:!1},{name:"threes",value:0,checked:!1,frozen:!1},{name:"fours",value:0,checked:!1,frozen:!1},{name:"fives",value:0,checked:!1,frozen:!1},{name:"sixes",value:0,checked:!1,frozen:!1},{name:"threeofakind",value:0,checked:!1,frozen:!1},{name:"fourofakind",value:0,checked:!1,frozen:!1},{name:"fullhouse",value:0,checked:!1,frozen:!1},{name:"smallstraight",value:0,checked:!1,frozen:!1},{name:"largestraight",value:0,checked:!1,frozen:!1},{name:"knuffle",value:0,checked:!1,frozen:!1},{name:"chance",value:0,checked:!1,frozen:!1}]),be=Object(o.a)(fe,2),he=be[0],Oe=be[1],ve={Aces:0,Twos:1,Threes:2,Fours:3,Fives:4,Sixes:5,ThreeOfAKind:6,FourOfAKind:7,FullHouse:8,SmStraight:9,LgStraight:10,Knuffle:11,Chance:12};Object(n.useEffect)((function(){for(var e=Object(s.a)(he),c=function(c){if(!1===he[c].frozen){var t=y.map((function(e){return e.number})).reduce((function(e,t){return t===c+1?e+c+1:e}),0);e[c].value=t,Oe(e)}},t=0;t<6;t++)c(t)}),[y]),Object(n.useEffect)((function(){for(var e=Object(s.a)(he),c=0;c<13;c++)!0===e[c].checked&&(e[c].frozen=!0),Oe(e)}),[T]),Object(n.useEffect)((function(){oe(W+_)}),[W,_]),Object(n.useEffect)((function(){for(var e=0,c=Object(s.a)(he),t=0;t<6;t++)!0===c[t].frozen&&(e+=c[t].value);X(35===ne?e+35:e)}),[T,ne]);var xe=function(e){var c=ve[e.target.id],t=Object(s.a)(he);!1===t[c].frozen&&(!0===t[c].checked?t[c].checked=!1:(t.filter((function(e){return!1===e.frozen&&!0===e.checked})).forEach((function(e){return e.checked=!1})),t[c].checked=!0),Oe(t))};return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"rowsContainer",children:[Object(d.jsxs)("ul",{className:"leftContainer",children:[Object(d.jsx)(l,{data:he,freezeRow:xe}),Object(d.jsx)(u,{data:he,freezeRow:xe}),Object(d.jsx)(j,{data:he,freezeRow:xe}),Object(d.jsx)(f,{data:he,freezeRow:xe}),Object(d.jsx)(b,{data:he,freezeRow:xe}),Object(d.jsx)(h,{data:he,freezeRow:xe}),Object(d.jsx)(O,{bonus:ne,playSignal:T,setBonus:re,countLeft:W}),Object(d.jsx)(S,{data:he,bonus:ne,playSignal:T,countLeft:W,setCountLeft:X}),Object(d.jsx)(R,{numberRolls:t,setNumberRolls:r,dice:y,setDice:D,play:function(){P(M+1);var e=Object(s.a)(he);e.filter((function(e){return 1==e.checked})).length&&(L(T+1),r(3),e.filter((function(e){return!1===e.checked})).forEach((function(e){return e.value=0})),e.filter((function(e){return!0===e.checked})).forEach((function(e){return e.frozen=!0})),Oe(e),J(0))},setMessage:Q,data:he})]}),Object(d.jsxs)("ul",{className:"rightContainer",children:[Object(d.jsx)(v,{dice:y,data:he,setData:Oe,freezeRow:xe}),Object(d.jsx)(x,{dice:y,data:he,setData:Oe,freezeRow:xe}),Object(d.jsx)(k,{dice:y,data:he,setData:Oe,freezeRow:xe}),Object(d.jsx)(m,{data:he,setData:Oe,dice:y,freezeRow:xe}),Object(d.jsx)(z,{data:he,setData:Oe,dice:y,freezeRow:xe}),Object(d.jsx)(g,{dice:y,data:he,freezeRow:xe,knuffle:ue,setKnuffle:je}),Object(d.jsx)(w,{dice:y,data:he,setData:Oe,freezeRow:xe}),Object(d.jsx)(S,{data:he,bonus:ne,playSignal:T,countLeft:W,setCountLeft:X}),Object(d.jsx)(C,{data:he,playSignal:T,countRight:_,setCountRight:ee}),Object(d.jsx)(N,{totalScore:se})]})]}),Object(d.jsx)(p,{data:he,totalScore:se,playSignal:T,playPush:M,playCount:I,setPlayCount:J,message:G,setMessage:Q,numberRolls:t})]})};t(15),t(16);var D=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{className:"header",children:" Knuffle. "}),Object(d.jsx)(y,{})]})},E=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,18)).then((function(c){var t=c.getCLS,n=c.getFID,r=c.getFCP,a=c.getLCP,i=c.getTTFB;t(e),n(e),r(e),a(e),i(e)}))};i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(D,{})}),document.getElementById("root")),E()}],[[17,1,2]]]);
//# sourceMappingURL=main.1c7dd612.chunk.js.map