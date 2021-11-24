var N=Object.defineProperty,S=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var p=(i,e,t)=>e in i?N(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,y=(i,e)=>{for(var t in e||(e={}))L.call(e,t)&&p(i,t,e[t]);if(v)for(var t of v(e))O.call(e,t)&&p(i,t,e[t]);return i},g=(i,e)=>S(i,P(e));var b=(i,e,t)=>(p(i,typeof e!="symbol"?e+"":e,t),t);import{p as x,a as w,i as C}from"./vendor.810adfef.js";const _=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(a){if(a.ep)return;a.ep=!0;const n=t(a);fetch(a.href,n)}};_();const l="http://localhost:5000",d=(i,e)=>{i.create({key:"left-walk",frames:i.generateFrameNames(e,{prefix:"left-walk.",start:0,end:2,zeroPad:3}),frameRate:10,repeat:-1}),i.create({key:"right-walk",frames:i.generateFrameNames(e,{prefix:"right-walk.",start:0,end:2,zeroPad:3}),frameRate:10,repeat:-1}),i.create({key:"front-walk",frames:i.generateFrameNames(e,{prefix:"front-walk.",start:0,end:2,zeroPad:3}),frameRate:10,repeat:-1}),i.create({key:"back-walk",frames:i.generateFrameNames(e,{prefix:"back-walk.",start:0,end:2,zeroPad:3}),frameRate:10,repeat:-1})};class j extends x.exports.Scene{constructor(){super({key:"Home"})}preload(){this.avatarName=h.avatar,this.needsToUpdate=[],this.load.image("tiles",`${l}/maps/tilesets/tuxmon-sample-32px-extruded.png`),this.load.tilemapTiledJSON("map",`${l}/maps/json/tuxemon-town.json`)}create(){const e=this.make.tilemap({key:"map"}),t=e.addTilesetImage("tuxmon-sample-32px-extruded","tiles");e.createLayer("Below Player",t,0,0);const s=e.createLayer("World",t,0,0),a=e.createLayer("Above Player",t,0,0);s.setCollisionByProperty({collides:!0}),a.setDepth(10);const n=e.findObject("Objects",r=>r.name==="Spawn Point");this.player=this.physics.add.sprite(n.x,n.y,this.avatarName,"front-walk.000").setBodySize(32,20,!0).setSize(20,30).setOffset(0,0),this.physics.add.collider(this.player,s),d(this.player.anims,this.avatarName),c.emit("init",{socId:c.id,name:h.name,avatar:h.avatar,x:this.player.x,y:this.player.y},r=>{this.currentPlayers=r,this.addPlayersToScene()}),c.on("new-player",r=>{this.currentPlayers[r.socId]=r,this.otherSprites[r.socId]=this.addPlayer(r),console.log(this.otherSprites)}),c.on("move-player",r=>{this.needsToUpdate[r.socId]=r.key}),c.on("stop-player",r=>{this.needsToUpdate[r.socId]=null,this.otherSprites[r.socId].setPosition(r.x,r.y)}),c.on("remove-player",r=>{delete this.currentPlayers[r]});const o=this.cameras.main;o.startFollow(this.player),o.setBounds(0,0,e.widthInPixels,e.heightInPixels),this.cursors=this.input.keyboard.createCursorKeys(),this.keyDownSent="ready"}update(e,t){const s=175,a=this.player.body.velocity.clone();this.keyDownSent==="ready"&&(this.cursors.down.isDown||this.cursors.up.isDown||this.cursors.left.isDown||this.cursors.right.isDown)&&(c.emit("player-key-down",{socId:c.id,key:this.getKeyPress(this.cursors)}),this.keyDownSent="sent"),this.keyDownSent==="sent"&&this.cursors.down.isUp&&this.cursors.up.isUp&&this.cursors.left.isUp&&this.cursors.right.isUp&&(c.emit("player-key-up",{socId:c.id,x:this.player.x,y:this.player.y}),this.keyDownSent="ready"),this.player.body.setVelocity(0),this.cursors.left.isDown?this.player.body.setVelocityX(-s):this.cursors.right.isDown&&this.player.body.setVelocityX(s),this.cursors.up.isDown?this.player.body.setVelocityY(-s):this.cursors.down.isDown&&this.player.body.setVelocityY(s),this.player.body.velocity.normalize().scale(s),this.cursors.left.isDown?this.player.anims.play("left-walk",!0):this.cursors.right.isDown?this.player.anims.play("right-walk",!0):this.cursors.up.isDown?this.player.anims.play("back-walk",!0):this.cursors.down.isDown?this.player.anims.play("front-walk",!0):(this.player.anims.stop(),a.x<0?this.player.setTexture(this.avatarName,"left-walk.000"):a.x>0?this.player.setTexture(this.avatarName,"right-walk.000"):a.y<0?this.player.setTexture(this.avatarName,"back-walk.000"):a.y>0&&this.player.setTexture(this.avatarName,"front-walk.000")),this.moveOtherPlayers(s)}addPlayersToScene(){this.otherSprites=[],Object.keys(this.currentPlayers).forEach(e=>{e!==c.id&&(this.otherSprites[e]=this.addPlayer(this.currentPlayers[e]))})}addPlayer(e){const t=this.physics.add.sprite(e.x,e.y,e.avatar,"left-walk.000");return t.socId=e.socId,d(t.anims,e.avatar),t}getKeyPress(e){if(e.up.isDown)return 1;if(e.right.isDown)return 2;if(e.down.isDown)return 3;if(e.left.isDown)return 4}moveOtherPlayers(e){Object.keys(this.needsToUpdate).forEach(t=>{const s=this.otherSprites[t],a=this.currentPlayers[t].avatar,n=s.body.velocity.clone(),o=this.needsToUpdate[t];s.body.setVelocity(0),o?(o===4?(s.body.setVelocityX(-e),s.anims.play("left-walk",!0)):o===2?(s.body.setVelocityX(e),s.anims.play("right-walk",!0)):o===1?(s.body.setVelocityY(-e),s.anims.play("back-walk",!0)):o===3&&(s.body.setVelocityY(e),s.anims.play("front-walk",!0)),s.body.velocity.normalize().scale(e)):(s.anims.stop(),n.x<0?s.setTexture(a,"left-walk.000"):n.x>0?s.setTexture(a,"right-walk.000"):n.y<0?s.setTexture(a,"back-walk.000"):n.y>0&&s.setTexture(a,"front-walk.000"),delete this.needsToUpdate[t])})}}class k{constructor(e,t,s=!1,a=!1){b(this,"setAlertText",e=>{this.alertText&&(this.alertText=e)});this.text=e,this.isOpen=!!s,this.onClose=t,this.forceRemove=a,s&&this.makeDOMElements()}show(){this.isOpen||(this.isOpen=!0,this.makeDOMElements())}closeAlert(){this.alertDiv.className="closeState",this.isOpen=!1,this.setAlertText(""),this.onClose&&this.onClose(),this.forceRemove&&setTimeout(()=>this.remove(),300)}remove(){this.alertDiv.remove()}DOMExists(){return document.getElementById("alert")!==null}makeDOMElements(){if(!this.DOMExists){const e=document.getElementById("overlays");this.alertDiv=document.createElement("div"),this.alertDiv.id="alert",this.closeBtn=document.createElement("button"),this.closeBtn.className="close-button",this.closeBtn.addEventListener("click",()=>this.closeAlert()),this.alertDiv.appendChild(this.closeBtn),this.alertText=document.createElement("span"),this.alertText.id="alertText",this.alertText.innerText=this.text,this.alertDiv.appendChild(this.alertText),e.appendChild(this.alertDiv)}}}const M=({text:i,onClickFn:e})=>{const t=document.createElement("button");return t.innerText=i,t.addEventListener("click",()=>e()),t},$=i=>{const e=document.createElement("div");return e.className="button-group",i.forEach(t=>{e.append(M(t))}),e};class U extends k{constructor(e,t,s=!1,a=!1,n=()=>{}){super(null,n,s,a);this.dialogObj=e,this.spriteImg=t}makeDOMElements(){const e=document.getElementById("overlays");this.alertDiv=document.createElement("div"),this.alertDiv.id="dialog",this.closeBtn=document.createElement("button"),this.closeBtn.id="close-button",this.closeBtn.addEventListener("click",()=>this.closeAlert());const t=this.generateConversation();this.alertDiv.append(this.closeBtn,t),e.appendChild(this.alertDiv)}generateConversation(){const e=document.createElement("div");e.className="conv-container";const t=document.createElement("div");t.className="question-container";const s=document.createElement("img");s.src=this.spriteImg,this.questionText=document.createElement("p"),this.questionText.innerHTML=this.dialogObj.text,t.append(s,this.questionText),e.append(t),this.inputControl=$(this.dialogObj.buttons);const a=document.createElement("img");return a.src=h.avatar?`${l}/thumbnails/${h.avatar}.png`:`${l}/thumbnails/cap_blue_boy.png`,this.inputControl.append(a),e.append(this.inputControl),e}}const E=(i,e,t="left")=>{const s=document.createElement("button");s.className="icon-button";const a=document.createElement("img");a.src=e,a.className="icon-button__icon";const n=document.createElement("span");return n.className="icon-button__text",n.innerText=i,t=="right"?(a.style.transform="rotate(180deg)",s.append(n,a)):s.append(a,n),s};var m="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACTSURBVHgB7ZbRCYAwDESvTuAIjuAIOplu4Eiu4AaOoBvEiAVRVATlRLgHoR+l3KMpJYAQBMwsxVd4eO7V20IDNlFgsC35nbMJXiCGtV77NnDacnIDMzUYSEACEvCgzNafkC8QJYoDgRZMPDA9aUUFJhdvQiISkchvRXjjXQih86X0Gndb/KnbttM291s/kMkgxAMmgqkZMBLV0IQAAAAASUVORK5CYII=";const V={isEmpty:i=>{if(i==="")return"Password cannot be empty"},validateEmail:i=>{const e=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;return i===""?"Email cannot be empty!":e.test(i)?void 0:"Invalid email"},validateName:i=>{const e=/^[A-Za-z\s]+$/;return i===""?"Name cannot be empty!":e.test(i)?i.length<=2?"Name must be greater than 2 letters":i.length>=19?"Name must be lesser than 20 letters":void 0:"Name can only contain alphabets"},validateUsername:i=>{const e=/^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;return i===""?"Username cannot be empty!":i.length<=2?"Username must be greater than 2 letters":i.length>14?"Username must be lesser than 14 letters":e.test(i)?void 0:"Username cannot have special characters"},validatePassword:i=>{const e=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d$@$!^%*#?()&{}_]{6,}$/;return i===""?"Password cannot be empty!":i.length<6?"Password must be greater than 6 letters":i.length>14?"Password must be lesser than 14 letters":e.test(i)?void 0:"Password must be a mixture of alphabets and numbers"},validatePhone:i=>{const e=/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;return i===""?"Phone number cannot be empty!":e.test(i)?void 0:"Invalid phone number!"}},A=i=>V[{isEmpty:"isEmpty",name:"validateName",username:"validateUsername",password:"validatePassword",email:"validateEmail",phone:"validatePhone"}[i]];var z="/assets/error.bdcda763.svg";const D=[{name:"bald_blue_boy",gender:"male",desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam cum at soluta veritatis, minus libero!"},{name:"bald_lightblue_boy",gender:"male",desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam cum at soluta veritatis, minus libero!"},{name:"braided_purple_girl",gender:"female",desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam cum at soluta veritatis, minus libero!"},{name:"curly_blue_girl",gender:"female",desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam cum at soluta veritatis, minus libero!"},{name:"curly_white_girl",gender:"female",desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam cum at soluta veritatis, minus libero!"},{name:"graduation_purple_boy",gender:"male",desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam cum at soluta veritatis, minus libero!"},{name:"cap_blue_boy",gender:"male",desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam cum at soluta veritatis, minus libero!"},{name:"beard_purple_boy",gender:"male",desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam cum at soluta veritatis, minus libero!"},{name:"beard_red_boy",gender:"male",desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam cum at soluta veritatis, minus libero!"},{name:"hijab_blue_girl",gender:"female",desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam cum at soluta veritatis, minus libero!"}];class q{constructor(e,t){this.avatarList=D,this.avatarIndex=0,this.makeDOMElements(),this.data=e,this.onClose=t}makeDOMElements(){const e=document.getElementById("overlays");this.bgDiv=document.createElement("div"),this.bgDiv.className="bg-disabled",this.container=document.createElement("div"),this.container.className="avatar-picker__container";const t=document.createElement("div");t.className="avatar-picker__preview";const s=document.createElement("div");s.className="flex-center",this.leftArrow=document.createElement("img"),this.leftArrow.addEventListener("click",()=>this.prevAvatar()),this.leftArrow.className="left-arrow",this.leftArrow.style.opacity=0,this.leftArrow.src=m,this.mainImg=document.createElement("img"),this.mainImg.className="img-preview",this.mainImg.src=`${l}/thumbnails/${this.avatarList[this.avatarIndex].name}.png`,this.rightArrow=document.createElement("img"),this.rightArrow.addEventListener("click",()=>this.nextAvatar()),this.rightArrow.className="right-arrow",this.rightArrow.src=m,s.append(this.leftArrow,this.mainImg,this.rightArrow),t.append(s);const a=document.createElement("div");a.className="avatar-picker__details";const n=document.createElement("h1");n.innerText="Character Selection";const o=document.createElement("h2");o.innerText="Name",this.nameElement=document.createElement("h3"),this.nameElement.innerText=this.avatarList[this.avatarIndex].name;const r=document.createElement("h2");r.innerText="About",this.descElement=document.createElement("h3"),this.descElement.innerText=this.avatarList[this.avatarIndex].desc;const u=document.createElement("button");u.innerText="Select this character",u.addEventListener("click",()=>{this.data.avatar=this.avatarList[this.avatarIndex].name,this.close()}),a.append(n,o,this.nameElement,r,this.descElement,u),this.container.append(t,a),e.append(this.bgDiv,this.container)}close(){this.onClose(),this.bgDiv.style.zIndex=-2,this.container.remove()}update(){const e=this.avatarList[this.avatarIndex];this.nameElement.innerText=e.name,this.descElement.innerText=e.desc,this.mainImg.src=`${l}/thumbnails/${e.name}.png`,this.leftArrow.style.opacity=this.avatarIndex===0?0:1,this.rightArrow.style.opacity=this.avatarIndex===this.avatarList.length-1?0:1}nextAvatar(e){this.avatarIndex+1<this.avatarList.length&&(this.avatarIndex++,this.update())}prevAvatar(){this.avatarIndex-1>=0&&(this.avatarIndex--,this.update())}}class R{constructor(e,t,s){b(this,"inputTypes",{"avatar-picker":"button",name:"text",username:"text",password:"password",email:"email",phone:"tel"});this.responseObj=e,this.dialog=t,this.errorExists=!1,this.data=s,this.makeDOMElements()}makeDOMElements(){this.responseContainer=document.createElement("div"),this.responseContainer.className="response-container";const e=document.createElement("div");e.className="response__input-container";const t=document.createElement("span");t.innerText="\u{1F449}",this.inputBox=document.createElement("input"),this.inputBox.focus(),this.inputBox.className="response__input-box",this.inputBox.type=this.inputTypes[this.responseObj.inputType],this.inputBox.placeholder=this.responseObj.placeholder,this.validator=A(this.responseObj.inputType),this.inputBox.addEventListener("keypress",a=>{const n=this.validator(a.target.value);if(n){this.indicateErrors(n);return}this.dialog.toggleButtons("enabled"),this.errorIcon.style.display="none",this.errorExists=!1,this.nextButton.disabled=!1,this.nextButton.removeAttribute("title"),this.errorIcon.removeAttribute("title")}),this.errorIcon=document.createElement("img"),this.errorIcon.className="error-icon",this.errorIcon.src=z,this.errorIcon.style.display="none",this.errorExists=!0,e.append(t,this.inputBox,this.errorIcon),this.nextButton=document.createElement("button"),this.nextButton.className="response__next-btn",this.nextButton.disabled=!0,this.nextButton.innerText=this.responseObj.submitAfterInput?"Submit":"Next",this.nextButton.addEventListener("click",()=>{this.responseObj.submitAfterInput&&(this.data[this.responseObj.keyName]=this.inputBox.value,this.dialog.onSubmit(this.dialog)),this.dialog.nextDialog()});const s=document.createElement("img");s.src=h.avatar?`${l}/thumbnails/${h.avatar}.png`:`${l}/thumbnails/cap_blue_boy.png`,this.responseContainer.append(e,this.nextButton,s)}update(e){this.inputBox.focus(),console.log(this.responseObj.keyName),this.inputBox.value!=="Choose Avatar"&&(this.data[this.responseObj.keyName]=this.inputBox.value),this.data[e.keyName]||(this.dialog.toggleButtons("disabled"),this.nextButton.disabled=!0),this.responseObj=e,this.inputBox.type=this.inputTypes[this.responseObj.inputType],this.inputBox.placeholder=e.placeholder,this.inputBox.value=this.data[e.keyName]||"",this.responseObj.inputType=="avatar-picker"?(this.inputBox.value=e.placeholder,this.inputBox.onclick=()=>{new q(this.data,()=>{this.dialog.toggleButtons("enabled"),this.nextButton.disabled=!1})}):this.inputBox.onclick=()=>{},this.nextButton.innerText=e.submitAfterInput?"Submit":"Next",this.validator=A(this.responseObj.inputType),this.errorIcon.removeAttribute("title")}indicateErrors(e){this.errorIcon.style.display="inline-block",this.errorIcon.title=e,this.errorExists=!0,this.nextButton.disabled=!0,this.nextButton.title="There seems to be problem with your input, please check!",this.dialog.toggleButtons("disabled")}}class T extends k{constructor(e,t,s,a=!1,n=!1,o){super(null,null,a,n);this.sliderPosition=0,this.dialogObj=t,this.spriteImage=s,this.onSubmit=o,this.data=e}generateConversation(){const e=document.createElement("div");e.className="conv-container";const t=document.createElement("div");t.className="question-container";const s=document.createElement("img");return s.src=this.spriteImage,this.questionText=document.createElement("p"),this.questionText.innerHTML=this.dialogObj[this.sliderPosition].text,t.append(s,this.questionText),e.append(t),this.inputControl=new R(this.dialogObj[this.sliderPosition],this,this.data),this.toggleButtons("disabled"),e.append(this.inputControl.responseContainer),e}makeDOMElements(){const e=document.getElementById("overlays");this.alertDiv=document.createElement("div"),this.alertDiv.id="dialog";const t=document.createElement("div");t.className="control-container",this.prevButton=E("Prev",m,"left"),this.prevButton.addEventListener("click",()=>this.prevDialog()),this.progressSpan=document.createElement("span"),this.progressSpan.className="progress-indicator",this.progress=`${this.sliderPosition+1}/${this.dialogObj.length}`,this.progressSpan.innerText=this.progress,this.nextButton=E("Next",m,"right"),this.nextButton.addEventListener("click",()=>this.nextDialog()),this.closeBtn=document.createElement("button"),this.closeBtn.id="close-button",this.closeBtn.addEventListener("click",()=>this.closeAlert());const s=this.generateConversation();t.append(this.prevButton,this.progressSpan,this.nextButton,this.closeBtn),this.alertDiv.append(t,s),e.appendChild(this.alertDiv)}render(){this.progress=`${this.sliderPosition+1}/${this.dialogObj.length}`,this.progressSpan.innerText=this.progress,this.questionText.innerHTML=this.dialogObj[this.sliderPosition].text,this.inputControl.update(this.dialogObj[this.sliderPosition])}nextDialog(){this.sliderPosition+1<this.dialogObj.length&&(this.sliderPosition++,this.render())}prevDialog(){this.sliderPosition>0&&(this.sliderPosition--,this.render())}toggleButtons(e){let t="There seems to be problem with your input, please check!",s=!0;e==="enabled"&&(t="",s=!1),this.nextButton.disabled=s,this.prevButton.disabled=s,this.nextButton.title=t,this.prevButton.title=t}}class H{constructor(){this.makeDOMElements()}makeDOMElements(){this.container=document.getElementById("snackbars"),this.snackbarDiv=document.createElement("div"),this.snackbarDiv.id="snackbar",this.textSpan=document.createElement("span"),this.textSpan.innerHTML="",this.closeButton=document.createElement("button"),this.closeButton.id="close-button",this.closeButton.addEventListener("click",()=>this.close()),this.snackbarDiv.append(this.textSpan,this.closeButton),this.container.append(this.snackbarDiv),this.close()}setText(e){this.textSpan.innerHTML=e}show(){this.container.style.zIndex=10,this.snackbarDiv.className=""}configure(e,t){this.text=e,this.accent=t,this.textSpan.innerHTML=this.text}close(){this.container.style.zIndex=-1,this.snackbarDiv.className="closeState"}}const Y=[{text:"What is your name?",inputType:"name",placeholder:"Enter your name",keyName:"name",submitAfterInput:!1},{text:"What should we call you?",inputType:"username",placeholder:"Enter your username",keyName:"username",submitAfterInput:!1},{text:"Your email id is ...?",inputType:"email",placeholder:"Enter your email ID",keyName:"email",submitAfterInput:!1},{text:"What do you look like?",inputType:"avatar-picker",placeholder:"Choose Avatar",keyName:"avatar"},{text:"What is your password?",inputType:"password",placeholder:"Enter password",keyName:"password",submitAfterInput:!0}],F=[{text:"Your email id is ...?",inputType:"email",placeholder:"Enter your email ID",keyName:"email",submitAfterInput:!1},{text:"Tell me your secret code?",inputType:"password",placeholder:"Enter password",keyName:"password",submitAfterInput:!0}],B={},X=(i,e)=>{const t=new H;w.post("https://milo-back-end.herokuapp.com/login",B).then(s=>{const a=s.data.jwt,n=g(y({},s.data),{jwt:void 0,bag:["LoginKey"]});f(n),localStorage.setItem("user",JSON.stringify(n)),localStorage.setItem("JWT",a),t.configure("Logged in successfully as "+n.name,"success"),t.show(),i.closeAlert(),e.dialog.closeAlert()}).catch(s=>{console.log(s),t.configure("There was some error please try again."),t.show()})},J=i=>{new T(B,F,`${l}/thumbnails/bald_blue_boy.png`,!1,!1,t=>X(t,i)).show()},I={},W=(i,e)=>{w.post("https://milo-back-end.herokuapp.com/signup",I).then(t=>{const s=t.data.jwt,a=g(y({},t.data),{jwt:void 0,bag:["LoginKey"]});f(a),localStorage.setItem("user",JSON.stringify(a)),localStorage.setItem("JWT",s),i.closeAlert(),e.dialog.closeAlert()}).catch(t=>{console.log(t)})},Z=i=>{new T(I,Y,`${l}/thumbnails/bald_blue_boy.png`,!1,!1,t=>W(t,i)).show()},G=(i,e,t)=>{const s=i.x-t.x,a=i.y-t.y;Math.abs(s)>Math.abs(a)?s>0?i.setTexture(e,"left-walk.000"):i.setTexture(e,"right-walk.000"):a>0?i.setTexture(e,"back-walk.000"):i.setTexture(e,"front-walk.000")};class K extends x.exports.Scene{constructor(){super({key:"Home1"})}preload(){const e=localStorage.getItem("user");e&&f(JSON.parse(e)),this.avatarName=h.avatar||"cap_blue_boy",this.load.image("tiles",`${l}/maps/tilesets/BeachTileset.png`),this.load.tilemapTiledJSON("beach",`${l}/maps/json/beach.json`),D.forEach(t=>this.load.atlas(t.name,`${l}/characters/sprites/${t.name}.png`,`${l}/characters/json/spritesheet.json`)),this.dialog=new U({text:'Hey, do you want to <span class="hy">Login</span> or <span class="hy">Sign Up</span>?',inputType:"buttons",buttons:[{text:"Login",onClickFn:()=>J(this)},{text:"Sign Up",onClickFn:()=>Z(this)}]},`${l}/thumbnails/bald_blue_boy.png`,!1,!0,()=>{this.resume(),this.updatePlayer()})}create(){const e=this.make.tilemap({key:"map"}),t=e.addTilesetImage("tuxmon-sample-32px-extruded","tiles");e.createLayer("Below Player",t,0,0);const s=e.createLayer("World",t,0,0),a=e.createLayer("Above Player",t,0,0);s.setCollisionByProperty({collides:!0}),a.setDepth(10);const n=e.findObject("Objects",r=>r.name==="Spawn Point");this.player=this.physics.add.sprite(n.x,n.y,this.avatarName,"front-walk.000").setBodySize(32,20,!0).setSize(20,30).setOffset(0,0),this.physics.add.collider(this.player,s),this.loginSprite=this.physics.add.sprite(n.x+20,n.y,"bald_blue_boy","front-walk.000").setSize(20,30).setOffset(0,0),this.loginSprite.body.immovable=!0,this.physics.add.collider(this.player,this.loginSprite,r=>{G(this.loginSprite,"bald_blue_boy",{x:r.x,y:r.y}),this.pause(),this.dialog.show()}),d(this.player.anims,this.avatarName);const o=this.cameras.main;o.startFollow(this.player),o.setBounds(0,0,e.widthInPixels,e.heightInPixels),this.cursors=this.input.keyboard.createCursorKeys()}update(e,t){const s=175,a=this.player.body.velocity.clone();this.player.body.setVelocity(0),this.cursors.left.isDown?this.player.body.setVelocityX(-s):this.cursors.right.isDown&&this.player.body.setVelocityX(s),this.cursors.up.isDown?this.player.body.setVelocityY(-s):this.cursors.down.isDown&&this.player.body.setVelocityY(s),this.player.body.velocity.normalize().scale(s),this.cursors.left.isDown?this.player.anims.play("left-walk",!0):this.cursors.right.isDown?this.player.anims.play("right-walk",!0):this.cursors.up.isDown?this.player.anims.play("back-walk",!0):this.cursors.down.isDown?this.player.anims.play("front-walk",!0):(this.player.anims.stop(),a.x<0?this.player.setTexture("self","left-walk.000"):a.x>0?this.player.setTexture("self","right-walk.000"):a.y<0?this.player.setTexture("self","back-walk.000"):a.y>0&&this.player.setTexture("self","front-walk.000"))}pause(){this.physics.pause(),this.input.keyboard.disableGlobalCapture(),this.anims.pauseAll()}resume(){this.physics.resume(),this.input.keyboard.enableGlobalCapture(),this.anims.resumeAll()}updatePlayer(){localStorage.getItem("JWT")&&(this.avatarName=h.avatar,this.player.anims.remove("front-walk"),this.player.anims.remove("back-walk"),this.player.anims.remove("left-walk"),this.player.anims.remove("right-walk"),d(this.player.anims,this.avatarName),this.player.setTexture(this.avatarName,"back-walk.000"))}}let h={};const f=i=>{h=i},c=C("http://localhost:5000/");c.on("connect",()=>{console.log("Connected to the server...")});const Q={type:Phaser.AUTO,width:700,height:700,parent:"canvas",pixelArt:!0,physics:{default:"arcade",arcade:{gravity:{y:0}}},scene:K},ee=new Phaser.Game(Q);ee.scene.add("Home",j);
