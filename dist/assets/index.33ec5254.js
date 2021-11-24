var M=Object.defineProperty,L=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var g=(s,e,t)=>e in s?M(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,v=(s,e)=>{for(var t in e||(e={}))P.call(e,t)&&g(s,t,e[t]);if(f)for(var t of f(e))R.call(e,t)&&g(s,t,e[t]);return s},b=(s,e)=>L(s,O(e));var y=(s,e,t)=>(g(s,typeof e!="symbol"?e+"":e,t),t);import{a as E,p as U,i as j}from"./vendor.f82318bc.js";const q=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}};q();const o="http://192.168.31.132:5000";class _{constructor(e=!1,t=()=>{}){this.onClose=t,this.isOpen=e}makeDOMElements(){const e=document.getElementById("overlays");this.bgDiv=document.createElement("div"),this.bgDiv.className="bg-disabled",this.container=document.createElement("div"),this.container.className="popup-container",this.closeBtn=document.createElement("button"),this.closeBtn.className="close-button",this.closeBtn.addEventListener("click",()=>this.close()),this.container.append(this.closeBtn),e.append(this.bgDiv,this.container)}populatePopup(e){this.container.append(e)}show(){this.isOpen||(this.makeDOMElements(),this.isOpen=!0)}close(){this.isOpen=!1,this.onClose(),this.container.classList.add("closeState"),setTimeout(()=>this.remove(),300)}remove(){this.bgDiv.style.zIndex=-2,this.container.remove()}}const x=(s,e,t="left",n=!0)=>{const i=document.createElement("button");i.className="icon-button";const a=document.createElement("img");a.src=e,a.className="icon-button__icon";const r=document.createElement("span");return r.className="icon-button__text",r.innerText=s,t=="right"?(a.style.transform=n?"rotate(180deg)":"",i.append(r,a)):i.append(a,r),i},Y=s=>{d.emit("terminate-chat",()=>{})};class w{constructor(e,t,n=!1,i=!1){y(this,"setAlertText",e=>{this.alertText&&(this.alertText=e)});this.text=e,this.isOpen=!!n,this.onClose=t,this.forceRemove=i,n&&this.makeDOMElements()}show(){this.isOpen||(this.isOpen=!0,this.makeDOMElements())}closeAlert(){this.alertDiv.className="closeState",this.isOpen=!1,this.setAlertText(""),this.onClose&&this.onClose(),this.forceRemove&&setTimeout(()=>this.remove(),500)}remove(){this.alertDiv.remove()}DOMExists(){return document.getElementById("alert")!==null}makeDOMElements(){if(!this.DOMExists){const e=document.getElementById("overlays");this.alertDiv=document.createElement("div"),this.alertDiv.id="alert",this.closeBtn=document.createElement("button"),this.closeBtn.className="close-button",this.closeBtn.addEventListener("click",()=>this.closeAlert()),this.alertDiv.appendChild(this.closeBtn),this.alertText=document.createElement("span"),this.alertText.id="alertText",this.alertText.innerText=this.text,this.alertDiv.appendChild(this.alertText),e.appendChild(this.alertDiv)}}}const F=({text:s,onClickFn:e})=>{const t=document.createElement("button");return t.innerText=s,t.addEventListener("click",()=>e()),t},J=s=>{const e=document.createElement("div");return e.className="button-group",s.forEach(t=>{e.append(F(t))}),e};class Q extends w{constructor(e,t,n=!1,i=!1,a=()=>{}){super(null,a,n,i);this.dialogObj=e,this.spriteImg=t}makeDOMElements(){const e=document.getElementById("overlays");this.alertDiv=document.createElement("div"),this.alertDiv.id="dialog",this.closeBtn=document.createElement("button"),this.closeBtn.id="close-button",this.closeBtn.addEventListener("click",()=>this.closeAlert());const t=this.generateConversation();this.alertDiv.append(this.closeBtn,t),e.appendChild(this.alertDiv)}generateConversation(){const e=document.createElement("div");e.className="conv-container";const t=document.createElement("div");t.className="question-container";const n=document.createElement("img");n.src=this.spriteImg,this.questionText=document.createElement("p"),this.questionText.innerHTML=this.dialogObj.text,t.append(n,this.questionText),e.append(t),this.inputControl=J(this.dialogObj.buttons);const i=document.createElement("img");return i.src=l.avatar?`${o}/thumbnails/${l.avatar}.png`:`${o}/thumbnails/cap_blue_boy.png`,this.inputControl.append(i),e.append(this.inputControl),e}}const k=(s,e)=>{s.create({key:"left-walk",frames:s.generateFrameNames(e,{prefix:"left-walk.",start:0,end:2,zeroPad:3}),frameRate:10,repeat:-1}),s.create({key:"right-walk",frames:s.generateFrameNames(e,{prefix:"right-walk.",start:0,end:2,zeroPad:3}),frameRate:10,repeat:-1}),s.create({key:"front-walk",frames:s.generateFrameNames(e,{prefix:"front-walk.",start:0,end:2,zeroPad:3}),frameRate:10,repeat:-1}),s.create({key:"back-walk",frames:s.generateFrameNames(e,{prefix:"back-walk.",start:0,end:2,zeroPad:3}),frameRate:10,repeat:-1})};var u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACTSURBVHgB7ZbRCYAwDESvTuAIjuAIOplu4Eiu4AaOoBvEiAVRVATlRLgHoR+l3KMpJYAQBMwsxVd4eO7V20IDNlFgsC35nbMJXiCGtV77NnDacnIDMzUYSEACEvCgzNafkC8QJYoDgRZMPDA9aUUFJhdvQiISkchvRXjjXQih86X0Gndb/KnbttM291s/kMkgxAMmgqkZMBLV0IQAAAAASUVORK5CYII=";const H={isEmpty:s=>{if(s==="")return"Password cannot be empty"},validateEmail:s=>{const e=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;return s===""?"Email cannot be empty!":e.test(s)?void 0:"Invalid email"},validateName:s=>{const e=/^[A-Za-z\s]+$/;return s===""?"Name cannot be empty!":e.test(s)?s.length<=2?"Name must be greater than 2 letters":s.length>=19?"Name must be lesser than 20 letters":void 0:"Name can only contain alphabets"},validateUsername:s=>{const e=/^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;return s===""?"Username cannot be empty!":s.length<=2?"Username must be greater than 2 letters":s.length>14?"Username must be lesser than 14 letters":e.test(s)?void 0:"Username cannot have special characters"},validatePassword:s=>{const e=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d$@$!^%*#?()&{}_]{6,}$/;return s===""?"Password cannot be empty!":s.length<6?"Password must be greater than 6 letters":s.length>14?"Password must be lesser than 14 letters":e.test(s)?void 0:"Password must be a mixture of alphabets and numbers"},validatePhone:s=>{const e=/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;return s===""?"Phone number cannot be empty!":e.test(s)?void 0:"Invalid phone number!"}},I=s=>H[{isEmpty:"isEmpty",name:"validateName",username:"validateUsername",password:"validatePassword",email:"validateEmail",phone:"validatePhone"}[s]];var V="/assets/error.bdcda763.svg";const B=[{name:"bald_blue_boy",gender:"male",desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam cum at soluta veritatis, minus libero!"},{name:"bald_lightblue_boy",gender:"male",desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam cum at soluta veritatis, minus libero!"},{name:"braided_purple_girl",gender:"female",desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam cum at soluta veritatis, minus libero!"},{name:"curly_blue_girl",gender:"female",desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam cum at soluta veritatis, minus libero!"},{name:"curly_white_girl",gender:"female",desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam cum at soluta veritatis, minus libero!"},{name:"graduation_purple_boy",gender:"male",desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam cum at soluta veritatis, minus libero!"},{name:"cap_blue_boy",gender:"male",desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam cum at soluta veritatis, minus libero!"},{name:"beard_purple_boy",gender:"male",desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam cum at soluta veritatis, minus libero!"},{name:"beard_red_boy",gender:"male",desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam cum at soluta veritatis, minus libero!"},{name:"hijab_blue_girl",gender:"female",desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam cum at soluta veritatis, minus libero!"}];class G{constructor(e,t){this.avatarList=B,this.avatarIndex=0,this.makeDOMElements(),this.data=e,this.onClose=t}makeDOMElements(){const e=document.getElementById("overlays");this.bgDiv=document.createElement("div"),this.bgDiv.className="bg-disabled",this.container=document.createElement("div"),this.container.className="avatar-picker__container";const t=document.createElement("div");t.className="avatar-picker__preview";const n=document.createElement("div");n.className="flex-center",this.leftArrow=document.createElement("img"),this.leftArrow.addEventListener("click",()=>this.prevAvatar()),this.leftArrow.className="left-arrow",this.leftArrow.style.opacity=0,this.leftArrow.src=u,this.mainImg=document.createElement("img"),this.mainImg.className="img-preview",this.mainImg.src=`${o}/thumbnails/${this.avatarList[this.avatarIndex].name}.png`,this.rightArrow=document.createElement("img"),this.rightArrow.addEventListener("click",()=>this.nextAvatar()),this.rightArrow.className="right-arrow",this.rightArrow.src=u,n.append(this.leftArrow,this.mainImg,this.rightArrow),t.append(n);const i=document.createElement("div");i.className="avatar-picker__details";const a=document.createElement("h1");a.innerText="Character Selection";const r=document.createElement("h2");r.innerText="Name",this.nameElement=document.createElement("h3"),this.nameElement.innerText=this.avatarList[this.avatarIndex].name;const m=document.createElement("h2");m.innerText="About",this.descElement=document.createElement("h3"),this.descElement.innerText=this.avatarList[this.avatarIndex].desc;const c=document.createElement("button");c.innerText="Select this character",c.addEventListener("click",()=>{this.data.avatar=this.avatarList[this.avatarIndex].name,this.close()}),i.append(a,r,this.nameElement,m,this.descElement,c),this.container.append(t,i),e.append(this.bgDiv,this.container)}close(){this.onClose(),this.bgDiv.style.zIndex=-2,this.container.remove()}update(){const e=this.avatarList[this.avatarIndex];this.nameElement.innerText=e.name,this.descElement.innerText=e.desc,this.mainImg.src=`${o}/thumbnails/${e.name}.png`,this.leftArrow.style.opacity=this.avatarIndex===0?0:1,this.rightArrow.style.opacity=this.avatarIndex===this.avatarList.length-1?0:1}nextAvatar(e){this.avatarIndex+1<this.avatarList.length&&(this.avatarIndex++,this.update())}prevAvatar(){this.avatarIndex-1>=0&&(this.avatarIndex--,this.update())}}class ${constructor(e,t,n){y(this,"inputTypes",{"avatar-picker":"button",name:"text",username:"text",password:"password",email:"email",phone:"tel"});this.responseObj=e,this.dialog=t,this.errorExists=!1,this.data=n,this.makeDOMElements()}makeDOMElements(){this.responseContainer=document.createElement("div"),this.responseContainer.className="response-container";const e=document.createElement("div");e.className="response__input-container";const t=document.createElement("span");t.innerText="\u{1F449}",this.inputBox=document.createElement("input"),this.inputBox.focus(),this.inputBox.className="response__input-box",this.inputBox.type=this.inputTypes[this.responseObj.inputType],this.inputBox.placeholder=this.responseObj.placeholder,this.validator=I(this.responseObj.inputType),this.inputBox.addEventListener("keypress",i=>{const a=this.validator(i.target.value);if(a){this.indicateErrors(a);return}this.dialog.toggleButtons("enabled"),this.errorIcon.style.display="none",this.errorExists=!1,this.nextButton.disabled=!1,this.nextButton.removeAttribute("title"),this.errorIcon.removeAttribute("title")}),this.errorIcon=document.createElement("img"),this.errorIcon.className="error-icon",this.errorIcon.src=V,this.errorIcon.style.display="none",this.errorExists=!0,e.append(t,this.inputBox,this.errorIcon),this.nextButton=document.createElement("button"),this.nextButton.className="response__next-btn",this.nextButton.disabled=!0,this.nextButton.innerText=this.responseObj.submitAfterInput?"Submit":"Next",this.nextButton.addEventListener("click",()=>{this.responseObj.submitAfterInput&&(this.data[this.responseObj.keyName]=this.inputBox.value,this.dialog.onSubmit(this.dialog)),this.dialog.nextDialog()});const n=document.createElement("img");n.src=l.avatar?`${o}/thumbnails/${l.avatar}.png`:`${o}/thumbnails/cap_blue_boy.png`,this.responseContainer.append(e,this.nextButton,n)}update(e){this.inputBox.focus(),console.log(this.responseObj.keyName),this.inputBox.value!=="Choose Avatar"&&(this.data[this.responseObj.keyName]=this.inputBox.value),this.data[e.keyName]||(this.dialog.toggleButtons("disabled"),this.nextButton.disabled=!0),this.responseObj=e,this.inputBox.type=this.inputTypes[this.responseObj.inputType],this.inputBox.placeholder=e.placeholder,this.inputBox.value=this.data[e.keyName]||"",this.responseObj.inputType=="avatar-picker"?(this.inputBox.value=e.placeholder,this.inputBox.onclick=()=>{new G(this.data,()=>{this.dialog.toggleButtons("enabled"),this.nextButton.disabled=!1})}):this.inputBox.onclick=()=>{},this.nextButton.innerText=e.submitAfterInput?"Submit":"Next",this.validator=I(this.responseObj.inputType),this.errorIcon.removeAttribute("title")}indicateErrors(e){this.errorIcon.style.display="inline-block",this.errorIcon.title=e,this.errorExists=!0,this.nextButton.disabled=!0,this.nextButton.title="There seems to be problem with your input, please check!",this.dialog.toggleButtons("disabled")}}class D extends w{constructor(e,t,n,i=!1,a=!1,r){super(null,null,i,a);this.sliderPosition=0,this.dialogObj=t,this.spriteImage=n,this.onSubmit=r,this.data=e}generateConversation(){const e=document.createElement("div");e.className="conv-container";const t=document.createElement("div");t.className="question-container";const n=document.createElement("img");return n.src=this.spriteImage,this.questionText=document.createElement("p"),this.questionText.innerHTML=this.dialogObj[this.sliderPosition].text,t.append(n,this.questionText),e.append(t),this.inputControl=new $(this.dialogObj[this.sliderPosition],this,this.data),this.toggleButtons("disabled"),e.append(this.inputControl.responseContainer),e}makeDOMElements(){const e=document.getElementById("overlays");this.alertDiv=document.createElement("div"),this.alertDiv.id="dialog";const t=document.createElement("div");t.className="control-container",this.prevButton=x("Prev",u,"left"),this.prevButton.addEventListener("click",()=>this.prevDialog()),this.progressSpan=document.createElement("span"),this.progressSpan.className="progress-indicator",this.progress=`${this.sliderPosition+1}/${this.dialogObj.length}`,this.progressSpan.innerText=this.progress,this.nextButton=x("Next",u,"right"),this.nextButton.addEventListener("click",()=>this.nextDialog()),this.closeBtn=document.createElement("button"),this.closeBtn.id="close-button",this.closeBtn.addEventListener("click",()=>this.closeAlert());const n=this.generateConversation();t.append(this.prevButton,this.progressSpan,this.nextButton,this.closeBtn),this.alertDiv.append(t,n),e.appendChild(this.alertDiv)}render(){this.progress=`${this.sliderPosition+1}/${this.dialogObj.length}`,this.progressSpan.innerText=this.progress,this.questionText.innerHTML=this.dialogObj[this.sliderPosition].text,this.inputControl.update(this.dialogObj[this.sliderPosition])}nextDialog(){this.sliderPosition+1<this.dialogObj.length&&(this.sliderPosition++,this.render())}prevDialog(){this.sliderPosition>0&&(this.sliderPosition--,this.render())}toggleButtons(e){let t="There seems to be problem with your input, please check!",n=!0;e==="enabled"&&(t="",n=!1),this.nextButton.disabled=n,this.prevButton.disabled=n,this.nextButton.title=t,this.prevButton.title=t}}const K=[{text:"What is your name?",inputType:"name",placeholder:"Enter your name",keyName:"name",submitAfterInput:!1},{text:"What should we call you?",inputType:"username",placeholder:"Enter your username",keyName:"username",submitAfterInput:!1},{text:"Your email id is ...?",inputType:"email",placeholder:"Enter your email ID",keyName:"email",submitAfterInput:!1},{text:"What do you look like?",inputType:"avatar-picker",placeholder:"Choose Avatar",keyName:"avatar"},{text:"What is your password?",inputType:"password",placeholder:"Enter password",keyName:"password",submitAfterInput:!0}],z=[{text:"Your email id is ...?",inputType:"email",placeholder:"Enter your email ID",keyName:"email",submitAfterInput:!1},{text:"Tell me your secret code?",inputType:"password",placeholder:"Enter password",keyName:"password",submitAfterInput:!0}],N={},W=(s,e)=>{E.post("https://milo-back-end.herokuapp.com/login",N).then(t=>{const n=t.data.jwt,i=b(v({},t.data),{jwt:void 0,bag:["LoginKey"]});A(i),localStorage.setItem("user",JSON.stringify(i)),localStorage.setItem("JWT",n),p.configure("Logged in successfully as "+i.name,"success"),p.show(),s.closeAlert(),e.dialog.closeAlert()}).catch(t=>{console.log(t),p.configure("There was some error please try again."),p.show()})},X=s=>{new D(N,z,`${o}/thumbnails/bald_blue_boy.png`,!1,!1,t=>W(t,s)).show()},C={},Z=(s,e)=>{E.post("https://milo-back-end.herokuapp.com/signup",C).then(t=>{const n=t.data.jwt,i=b(v({},t.data),{jwt:void 0,bag:["LoginKey"]});A(i),localStorage.setItem("user",JSON.stringify(i)),localStorage.setItem("JWT",n),s.closeAlert(),e.dialog.closeAlert()}).catch(t=>{console.log(t)})},ee=s=>{new D(C,K,`${o}/thumbnails/bald_blue_boy.png`,!1,!1,t=>Z(t,s)).show()},te=(s,e,t)=>{const n=s.x-t.x,i=s.y-t.y;Math.abs(n)>Math.abs(i)?n>0?s.setTexture(e,"left-walk.000"):s.setTexture(e,"right-walk.000"):i>0?s.setTexture(e,"back-walk.000"):s.setTexture(e,"front-walk.000")};var se="data:image/png;base64,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";class ie{constructor({avatar:e,username:t,exp:n,money:i}){this.avatar=e,this.username=t,this.max=100,this.level=parseInt(n/this.max,10),this.exp=n%this.max,this.level===0&&this.level++,this.money=i,this.makeDOMElements()}makeDOMElements(){const e=document.getElementById("overlays");this.container=document.createElement("div"),this.container.className="stats-container";const t=document.createElement("div");t.className="misc-details";const n=this.createImgSpanDiv("avatar-img-div",`${o}/thumbnails/${this.avatar}.png`,this.username),i=this.createImgSpanDiv("money-div",se,`$ ${this.money}`);t.append(n,i);const a=document.createElement("div");this.expSpan=document.createElement("span"),this.expSpan.innerHTML=`Level ${this.level}<br>${this.exp} xp / ${this.max} xp`,this.createExpMeter(),a.append(this.expSpan,this.meterContainer),a.className="exp-details",this.container.append(t,a),e.append(this.container)}createImgSpanDiv(e,t,n){const i=document.createElement("div");i.className=e;const a=document.createElement("img");a.src=t;const r=document.createElement("span");return r.innerText=n,i.append(a,r),i}createExpMeter(){this.meterContainer=document.createElement("div"),this.meterContainer.className="exp-meter-container",this.meterFiller=document.createElement("div"),this.meterFiller.className="exp-meter-fill",this.meterFiller.style.width=`${this.exp}%`,this.meterContainer.append(this.meterFiller)}incrementMoney(e){this.money+=e;const t=document.querySelector(".money-div").lastChild;t.innerText=`$ ${this.money}`}decrementMoney(e){this.money-=e;const t=document.querySelector(".money-div").lastChild;t.innerText=`$ ${this.money}`}incrementExp(e){this.exp+=e,this.expSpan.innerText=`${this.exp} xp`,this.meterFiller.style.width=`${this.exp}%`}}class ne extends U.exports.Scene{constructor(){super({key:"Home1"})}preload(){const e=localStorage.getItem("user");e&&A(JSON.parse(e)),this.avatarName=l.avatar||"cap_blue_boy",this.load.image("login_tiles",`${o}/maps/tilesets/tuxmon-sample-32px-extruded.png`),this.load.tilemapTiledJSON("login_map",`${o}/maps/json/login.json`),B.forEach(t=>this.load.atlas(t.name,`${o}/characters/sprites/${t.name}.png`,`${o}/characters/json/spritesheet.json`)),this.dialog=new Q({text:'Hey, do you want to <span class="hy">Login</span> or <span class="hy">Sign Up</span>?',inputType:"buttons",buttons:[{text:"Login",onClickFn:()=>X(this)},{text:"Sign Up",onClickFn:()=>ee(this)}]},`${o}/thumbnails/bald_blue_boy.png`,!1,!0,()=>{this.resume(),this.updatePlayer()}),this.stats=new ie(l)}create(){const e=this.make.tilemap({key:"login_map"}),t=e.addTilesetImage("tuxmon-sample-32px-extruded","login_tiles");e.createLayer("Below Player",t,0,0);const n=e.createLayer("World",t,0,0),i=e.createLayer("Above Player",t,0,0),a=e.createLayer("interactive",t,0,0);n.setCollisionByProperty({collides:!0}),a.setCollisionByProperty({collides:!0}),i.setDepth(10);const r=e.findObject("Objects",h=>h.name==="Spawn Point"),m=e.findObject("Objects",h=>h.name==="Login Spawn Point");this.player=this.physics.add.sprite(r.x,r.y,this.avatarName,"front-walk.000").setBodySize(32,20,!0).setSize(20,32).setOffset(7,0),this.player.scale=1.3,this.physics.add.collider(this.player,n),this.loginSprite=this.physics.add.sprite(m.x,m.y,"bald_blue_boy","right-walk.000").setSize(20,32).setOffset(7,0),this.loginSprite.scale=1.3,this.loginSprite.body.immovable=!0,this.physics.add.collider(this.player,this.loginSprite,h=>{te(this.loginSprite,"bald_blue_boy",{x:h.x,y:h.y}),this.pause(),this.dialog.show()}),this.physics.add.collider(this.player,a,()=>{l&&localStorage.getItem("JWT")?this.scene.start("Home"):console.log("Need to login or signup")}),k(this.player.anims,this.avatarName);const c=this.cameras.main;c.startFollow(this.player),c.setBounds(0,0,e.widthInPixels,e.heightInPixels),this.cursors=this.input.keyboard.createCursorKeys()}update(e,t){const n=175,i=this.player.body.velocity.clone();this.player.body.setVelocity(0),this.cursors.left.isDown?this.player.body.setVelocityX(-n):this.cursors.right.isDown&&this.player.body.setVelocityX(n),this.cursors.up.isDown?this.player.body.setVelocityY(-n):this.cursors.down.isDown&&this.player.body.setVelocityY(n),this.player.body.velocity.normalize().scale(n),this.cursors.left.isDown?this.player.anims.play("left-walk",!0):this.cursors.right.isDown?this.player.anims.play("right-walk",!0):this.cursors.up.isDown?this.player.anims.play("back-walk",!0):this.cursors.down.isDown?this.player.anims.play("front-walk",!0):(this.player.anims.stop(),i.x<0?this.player.setTexture(this.avatarName,"left-walk.000"):i.x>0?this.player.setTexture(this.avatarName,"right-walk.000"):i.y<0?this.player.setTexture(this.avatarName,"back-walk.000"):i.y>0&&this.player.setTexture(this.avatarName,"front-walk.000"))}pause(){this.input.keyboard.disableGlobalCapture()}resume(){this.input.keyboard.enableGlobalCapture()}updatePlayer(){localStorage.getItem("JWT")&&(this.avatarName=l.avatar,this.player.anims.remove("front-walk"),this.player.anims.remove("back-walk"),this.player.anims.remove("left-walk"),this.player.anims.remove("right-walk"),k(this.player.anims,this.avatarName),this.player.setTexture(this.avatarName,"back-walk.000"))}}class ae{constructor(){this.makeDOMElements()}makeDOMElements(){this.container=document.getElementById("snackbars"),this.snackbarDiv=document.createElement("div"),this.snackbarDiv.id="snackbar",this.textSpan=document.createElement("span"),this.textSpan.innerHTML="",this.closeButton=document.createElement("button"),this.closeButton.id="close-button",this.closeButton.addEventListener("click",()=>this.close()),this.snackbarDiv.append(this.textSpan,this.closeButton),this.container.append(this.snackbarDiv),this.close()}setText(e){this.textSpan.innerHTML=e}show(){this.container.style.zIndex=10,this.snackbarDiv.className=""}configure(e,t){this.text=e,this.accent=t,this.textSpan.innerHTML=this.text}close(){this.container.style.zIndex=-1,this.snackbarDiv.className="closeState"}}const re=()=>{d.on("play-audio",s=>{new Audio(s).play()})};var T="/assets/mute.39370264.svg",oe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAnUlEQVRYw+2Xuw2AMAxE2YM1+EyGRAOeJqNBhQQbHIGCjkCcHBKSX597Uiw7TlEYRmZQwmFGgNT4BQ+kCRzAFUxsQY4QE5hAIYBAiAIffyAkAfqrA4UjqLBGKFRXVEcolEVusL1U3AkQg7AFIcU/BJK/yG1ykTPFqxotJl4l6Mijwp8ZqMPuPDVSx7U9mSb4evmlr+/sDwj9C2UYKnaLViNIIVNySwAAAABJRU5ErkJggg==";class S{constructor(e,t){this.username=e,this.avatar=`${o}/thumbnails/${t}.png`,this.isMute=!0,this.makeParticipantDiv()}makeParticipantDiv(){this.container=document.createElement("div"),this.container.className="participant";const e=document.createElement("img");e.alt=this.username,e.src=this.avatar;const t=document.createElement("span");t.innerText=this.username;const n=document.createElement("div");n.className="mute-icon-div",this.muteIndicator=document.createElement("span"),this.muteIndicator.className="mute-icon",this.muteIndicator.style.backgroundSize="contain",this.mute(),n.appendChild(this.muteIndicator),this.container.append(e,n,t)}renderMuteIndicator(){this.muteIndicator.style.background=this.isMute?`url(${T})`:"none"}mute(){this.isMute=!0,this.renderMuteIndicator()}unmute(){this.isMute=!1,this.renderMuteIndicator()}renderSpeaking(e){e?this.container.style.outline="solid 1px #ffc700":this.container.style.outline="none"}}class le extends _{constructor(e,t){super(!1,()=>{Y()});this.roomName=e,this.sender=t,this.latency=500,this.loggedInUser=new S("adithya","curly_blue_girl"),this.participant=new S(t.username,t.avatar)}show(){if(this.isOpen)return;this.makeDOMElements(),this.chatContainer=document.createElement("div"),this.chatContainer.className="chat-container",this.participantContainer=this.createParticipantsDiv();const e=this.createAudioControlDiv();this.chatContainer.append(this.participantContainer,e),this.populatePopup(this.chatContainer),re(),this.initialiseRecorder()}createParticipantsDiv(){const e=document.createElement("div");return e.className="participant-container",e.append(this.loggedInUser.container,this.participant.container),e}createAudioControlDiv(){const e=document.createElement("div");return e.className="audio-controls",this.muteButton=document.createElement("button"),this.muteButtonIcon=document.createElement("span"),this.muteButtonIcon.className="mute-icon",this.muteButtonIcon.style.background=`url(${T})`,this.muteButton.append(this.muteButtonIcon),this.muteButton.addEventListener("click",()=>{this.loggedInUser.isMute?this.unmuteRecorder():this.muteRecorder()}),this.exitButton=x("Exit",oe,"left"),this.exitButton.addEventListener("click",()=>{console.log("exit")}),e.append(this.muteButton,this.exitButton),e}muteRecorder(){console.log("person is mute"),this.loggedInUser.mute(),this.mediaRecorder.stop()}unmuteRecorder(){console.log("person is unmute"),this.loggedInUser.unmute(),this.mediaRecorder.start(),setTimeout(()=>{this.mediaRecorder.stop()},this.latency)}initialiseRecorder(){navigator.mediaDevices.getUserMedia({audio:!0}).then(e=>{this.mediaRecorder=new MediaRecorder(e);let t=[];this.mediaRecorder.addEventListener("dataavailable",function(n){console.log("Data collected"),t.push(n.data)}),this.mediaRecorder.addEventListener("stop",()=>{const n=new Blob(t);t=[];const i=new FileReader;i.readAsDataURL(n),i.onloadend=()=>{var a=i.result;d.emit("voice",{voice:a,roomName:this.roomName})},this.loggedInUser.isMute||(this.mediaRecorder.start(),setTimeout(()=>{this.mediaRecorder.stop()},this.latency))}),this.loggedInUser.isMute||(this.mediaRecorder.start(),setTimeout(()=>{this.mediaRecorder.stop()},this.latency))})}}let l={};const A=s=>{l=s},d=j("http://192.168.31.132:5000/"),p=new ae;d.on("connect",()=>{console.log("Connected to the server...")});Phaser.AUTO;const ce=new le("abc",{username:"sandeep",avatar:"cap_blue_boy"});ce.show();
