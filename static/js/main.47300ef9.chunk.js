(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n(56)},28:function(e,t,n){},4:function(e){e.exports=[{id:1,name:"SpongeBob",image:"https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014"},{id:2,name:"Mr. Krabs",image:"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131"},{id:3,name:"Squidward",image:"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626"},{id:4,name:"Dexter",image:"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png"},{id:5,name:"Courage",image:"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423"},{id:6,name:"Doug Funnie",image:"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511"},{id:8,name:"Johnny Bravo",image:"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist"},{id:9,name:"Tommy Pickles",image:"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641"},{id:10,name:"Rocko",image:"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416",occupation:"Cashier",location:"O-Town, California"},{id:12,name:"Ickis",image:"http://static.tvtropes.org/pmwiki/pub/images/ickis.png",occupation:"Ahhhh! A Real Monster!",location:"Under a City Dump"}]},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(15),r=n.n(o),s=n(16),c=n(17),m=n(20),l=n(18),u=n(21),g=(n(28),n(19));var d=function(e){return i.a.createElement(g.Animated,{animationIn:"headShake",isVisible:!0},i.a.createElement("div",{onClick:function(){return e.guess(e.id)},className:"card"},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image}))))};n(53);var p=function(e){return i.a.createElement(a.Fragment,null,i.a.createElement("div",{className:"upTop"},i.a.createElement("div",{className:"title"},e.children),i.a.createElement("div",{className:"subText"},"Welcome to the most ",i.a.createElement("strong",null,"radical")," memory game ever! If you can manage to only click each character once, then you win.")))};n(54);var h=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)},f=n(4),v=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={friends:f.sort(function(){return Math.random()-.5}),guessed:[],score:0},n.guess=function(e){var t=n.state.guessed;-1===t.indexOf(e)?n.setState({guessed:t.concat(e),score:n.state.score+1,friends:f.sort(function(){return Math.random()-.5})},function(){}):(alert("Buzz Kill! You Lose"),n.setState({score:0,guessed:[],friends:f.sort(function(){return Math.random()-.5})}))},n.sweetVictory=function(){alert("Tight, You Win!"),n.setState({score:0,guessed:[],friends:f.sort(function(){return Math.random()-.5})})},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e,t){console.log("Update complete!"),10===this.state.score&&this.sweetVictory()}},{key:"render",value:function(){var e=this;return i.a.createElement(h,null,i.a.createElement(p,null,"X-Treme Memory Game || Score: ",this.state.score),this.state.friends.map(function(t){return i.a.createElement(d,{sweetVictory:e.sweetVictory,guess:e.guess,removeFriend:e.removeFriend,id:t.id,key:t.id,image:t.image})}))}}]),t}(a.Component);n(55);r.a.render(i.a.createElement(v,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.47300ef9.chunk.js.map