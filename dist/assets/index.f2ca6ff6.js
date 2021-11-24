var D=Object.defineProperty,S=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var m=(s,e,t)=>e in s?D(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,p=(s,e)=>{for(var t in e||(e={}))O.call(e,t)&&m(s,t,e[t]);if(f)for(var t of f(e))P.call(e,t)&&m(s,t,e[t]);return s},g=(s,e)=>S(s,L(e));var y=(s,e,t)=>(m(s,typeof e!="symbol"?e+"":e,t),t);import{p as x,a as w,i as C}from"./vendor.810adfef.js";const _=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(a){if(a.ep)return;a.ep=!0;const n=t(a);fetch(a.href,n)}};_();const o="http://localhost:5000",b=(s,e)=>{s.create({key:"left-walk",frames:s.generateFrameNames(e,{prefix:"left-walk.",start:0,end:2,zeroPad:3}),frameRate:10,repeat:-1}),s.create({key:"right-walk",frames:s.generateFrameNames(e,{prefix:"right-walk.",start:0,end:2,zeroPad:3}),frameRate:10,repeat:-1}),s.create({key:"front-walk",frames:s.generateFrameNames(e,{prefix:"front-walk.",start:0,end:2,zeroPad:3}),frameRate:10,repeat:-1}),s.create({key:"back-walk",frames:s.generateFrameNames(e,{prefix:"back-walk.",start:0,end:2,zeroPad:3}),frameRate:10,repeat:-1})};class j extends x.exports.Scene{constructor(){super({key:"Init1"})}preload(){this.avatarName=c.avatar,this.loadedAtlases=[this.avatarName],this.load.image("tiles",`${o}/maps/tilesets/BeachTileset.png`),this.load.tilemapTiledJSON("beach",`${o}/maps/json/beach.json`)}create(){const e=this.make.tilemap({key:"beach",tileWidth:32,tileHeight:32}),t=e.addTilesetImage("beach","tiles");e.createLayer("ground",t,0,0);const i=e.createLayer("interactiveLayer",t,0,0),a=e.createLayer("water",t,0,0);i.setCollisionByProperty({collides:!0}),a.setCollisionByProperty({collides:!0});const n=e.findObject("Objects",r=>r.name==="Spawn Point");this.player=this.physics.add.sprite(n.x,n.y,this.avatarName,"front-walk.000").setBodySize(32,20,!0).setSize(20,30).setOffset(0,0),this.physics.add.collider(this.player,a),console.log("MY SOCKET ID: ",h.id),h.emit("init",{socId:h.id,name:c.name,avatar:c.avatar,x:this.player.x,y:this.player.y},r=>{this.currentPlayers=r,this.addPlayersToScene()}),h.on("new-player",r=>{this.currentPlayers[r.socId]=r,this.otherSprites[r.socId]=this.addPlayer(r)}),h.on("move-player",r=>{this.otherSprites[r.socId].setPosition(r.x,r.y)}),h.on("remove-player",r=>{delete this.currentPlayers[r]}),b(this.player.anims,this.avatarName);const l=this.cameras.main;l.startFollow(this.player),l.setBounds(0,0,e.widthInPixels,e.heightInPixels),this.cursors=this.input.keyboard.createCursorKeys()}update(e,t){const i=175,a=this.player.body.velocity.clone();this.player.body.setVelocity(0),this.cursors.left.isDown?this.player.body.setVelocityX(-i):this.cursors.right.isDown&&this.player.body.setVelocityX(i),this.cursors.up.isDown?this.player.body.setVelocityY(-i):this.cursors.down.isDown&&this.player.body.setVelocityY(i),this.player.body.velocity.normalize().scale(i),this.cursors.left.isDown?this.player.anims.play("left-walk",!0):this.cursors.right.isDown?this.player.anims.play("right-walk",!0):this.cursors.up.isDown?this.player.anims.play("back-walk",!0):this.cursors.down.isDown?this.player.anims.play("front-walk",!0):(this.player.anims.stop(),a.x<0?this.player.setTexture(this.avatarName,"left-walk.000"):a.x>0?this.player.setTexture(this.avatarName,"right-walk.000"):a.y<0?this.player.setTexture(this.avatarName,"back-walk.000"):a.y>0&&this.player.setTexture(this.avatarName,"front-walk.000"))}addPlayersToScene(){this.otherSprites=[],Object.keys(this.currentPlayers).forEach(e=>{e!==h.id&&(this.otherSprites[e]=this.addPlayer(this.currentPlayers[e]))})}addPlayer(e){const t=this.physics.add.sprite(e.x,e.y,e.avatar,"left-walk.000");return t.socId=e.socId,console.log(t),t}}class k{constructor(e,t,i=!1,a=!1){y(this,"setAlertText",e=>{this.alertText&&(this.alertText=e)});this.text=e,this.isOpen=!!i,this.onClose=t,this.forceRemove=a,i&&this.makeDOMElements()}show(){this.isOpen||(this.isOpen=!0,this.makeDOMElements())}closeAlert(){this.alertDiv.className="closeState",this.isOpen=!1,this.setAlertText(""),this.onClose&&this.onClose(),this.forceRemove&&setTimeout(()=>this.remove(),300)}remove(){this.alertDiv.remove()}DOMExists(){return document.getElementById("alert")!==null}makeDOMElements(){if(!this.DOMExists){const e=document.getElementById("overlays");this.alertDiv=document.createElement("div"),this.alertDiv.id="alert",this.closeBtn=document.createElement("button"),this.closeBtn.id="close-button",this.closeBtn.addEventListener("click",()=>this.closeAlert()),this.alertDiv.appendChild(this.closeBtn),this.alertText=document.createElement("span"),this.alertText.id="alertText",this.alertText.innerText=this.text,this.alertDiv.appendChild(this.alertText),e.appendChild(this.alertDiv)}}}const M=({text:s,onClickFn:e})=>{const t=document.createElement("button");return t.innerText=s,t.addEventListener("click",()=>e()),t},$=s=>{const e=document.createElement("div");return e.className="button-group",s.forEach(t=>{e.append(M(t))}),e};class z extends k{constructor(e,t,i=!1,a=!1,n=()=>{}){super(null,n,i,a);this.dialogObj=e,this.spriteImg=t}makeDOMElements(){const e=document.getElementById("overlays");this.alertDiv=document.createElement("div"),this.alertDiv.id="dialog",this.closeBtn=document.createElement("button"),this.closeBtn.id="close-button",this.closeBtn.addEventListener("click",()=>this.closeAlert());const t=this.generateConversation();this.alertDiv.append(this.closeBtn,t),e.appendChild(this.alertDiv)}generateConversation(){const e=document.createElement("div");e.className="conv-container";const t=document.createElement("div");t.className="question-container";const i=document.createElement("img");i.src=this.spriteImg,this.questionText=document.createElement("p"),this.questionText.innerHTML=this.dialogObj.text,t.append(i,this.questionText),e.append(t),this.inputControl=$(this.dialogObj.buttons);const a=document.createElement("img");return a.src=c.avatar?`${o}/thumbnails/${c.avatar}.png`:`${o}/thumbnails/cap_blue_boy.png`,this.inputControl.append(a),e.append(this.inputControl),e}}const E=(s,e,t="left")=>{const i=document.createElement("button");i.className="icon-button";const a=document.createElement("img");a.src=e,a.className="icon-button__icon";const n=document.createElement("span");return n.className="icon-button__text",n.innerText=s,t=="right"?(a.style.transform="rotate(180deg)",i.append(n,a)):i.append(a,n),i};var d="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACTSURBVHgB7ZbRCYAwDESvTuAIjuAIOplu4Eiu4AaOoBvEiAVRVATlRLgHoR+l3KMpJYAQBMwsxVd4eO7V20IDNlFgsC35nbMJXiCGtV77NnDacnIDMzUYSEACEvCgzNafkC8QJYoDgRZMPDA9aUUFJhdvQiISkchvRXjjXQih86X0Gndb/KnbttM291s/kMkgxAMmgqkZMBLV0IQAAAAASUVORK5CYII=";const q={isEmpty:s=>{if(s==="")return"Password cannot be empty"},validateEmail:s=>{const e=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;return s===""?"Email cannot be empty!":e.test(s)?void 0:"Invalid email"},validateName:s=>{const e=/^[A-Za-z\s]+$/;return s===""?"Name cannot be empty!":e.test(s)?s.length<=2?"Name must be greater than 2 letters":s.length>=19?"Name must be lesser than 20 letters":void 0:"Name can only contain alphabets"},validateUsername:s=>{const e=/^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;return s===""?"Username cannot be empty!":s.length<=2?"Username must be greater than 2 letters":s.length>14?"Username must be lesser than 14 letters":e.test(s)?void 0:"Username cannot have special characters"},validatePassword:s=>{const e=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d$@$!^%*#?()&{}_]{6,}$/;return s===""?"Password cannot be empty!":s.length<6?"Password must be greater than 6 letters":s.length>14?"Password must be lesser than 14 letters":e.test(s)?void 0:"Password must be a mixture of alphabets and numbers"},validatePhone:s=>{const e=/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;return s===""?"Phone number cannot be empty!":e.test(s)?void 0:"Invalid phone number!"}},A=s=>q[{isEmpty:"isEmpty",name:"validateName",username:"validateUsername",password:"validatePassword",email:"validateEmail",phone:"validatePhone"}[s]];var R="/assets/error.bdcda763.svg";const I=[{name:"bald_blue_boy",gender:"male",desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam cum at soluta veritatis, minus libero!"},{name:"bald_lightblue_boy",gender:"male",desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam cum at soluta veritatis, minus libero!"},{name:"braided_purple_girl",gender:"female",desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam cum at soluta veritatis, minus libero!"},{name:"curly_blue_girl",gender:"female",desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam cum at soluta veritatis, minus libero!"},{name:"curly_white_girl",gender:"female",desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam cum at soluta veritatis, minus libero!"},{name:"graduation_purple_boy",gender:"male",desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam cum at soluta veritatis, minus libero!"},{name:"cap_blue_boy",gender:"male",desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam cum at soluta veritatis, minus libero!"},{name:"beard_purple_boy",gender:"male",desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam cum at soluta veritatis, minus libero!"},{name:"beard_red_boy",gender:"male",desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam cum at soluta veritatis, minus libero!"},{name:"hijab_blue_girl",gender:"female",desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam cum at soluta veritatis, minus libero!"}];class V{constructor(e,t){this.avatarList=I,this.avatarIndex=0,this.makeDOMElements(),this.data=e,this.onClose=t}makeDOMElements(){const e=document.getElementById("overlays");this.bgDiv=document.createElement("div"),this.bgDiv.className="bg-disabled",this.container=document.createElement("div"),this.container.className="avatar-picker__container";const t=document.createElement("div");t.className="avatar-picker__preview";const i=document.createElement("div");i.className="flex-center",this.leftArrow=document.createElement("img"),this.leftArrow.addEventListener("click",()=>this.prevAvatar()),this.leftArrow.className="left-arrow",this.leftArrow.style.opacity=0,this.leftArrow.src=d,this.mainImg=document.createElement("img"),this.mainImg.className="img-preview",this.mainImg.src=`${o}/thumbnails/${this.avatarList[this.avatarIndex].name}.png`,this.rightArrow=document.createElement("img"),this.rightArrow.addEventListener("click",()=>this.nextAvatar()),this.rightArrow.className="right-arrow",this.rightArrow.src=d,i.append(this.leftArrow,this.mainImg,this.rightArrow),t.append(i);const a=document.createElement("div");a.className="avatar-picker__details";const n=document.createElement("h1");n.innerText="Character Selection";const l=document.createElement("h2");l.innerText="Name",this.nameElement=document.createElement("h3"),this.nameElement.innerText=this.avatarList[this.avatarIndex].name;const r=document.createElement("h2");r.innerText="About",this.descElement=document.createElement("h3"),this.descElement.innerText=this.avatarList[this.avatarIndex].desc;const u=document.createElement("button");u.innerText="Select this character",u.addEventListener("click",()=>{this.data.avatar=this.avatarList[this.avatarIndex].name,this.close()}),a.append(n,l,this.nameElement,r,this.descElement,u),this.container.append(t,a),e.append(this.bgDiv,this.container)}close(){this.onClose(),this.bgDiv.style.zIndex=-2,this.container.remove()}update(){const e=this.avatarList[this.avatarIndex];this.nameElement.innerText=e.name,this.descElement.innerText=e.desc,this.mainImg.src=`${o}/thumbnails/${e.name}.png`,this.leftArrow.style.opacity=this.avatarIndex===0?0:1,this.rightArrow.style.opacity=this.avatarIndex===this.avatarList.length-1?0:1}nextAvatar(e){this.avatarIndex+1<this.avatarList.length&&(this.avatarIndex++,this.update())}prevAvatar(){this.avatarIndex-1>=0&&(this.avatarIndex--,this.update())}}class U{constructor(e,t,i){y(this,"inputTypes",{"avatar-picker":"button",name:"text",username:"text",password:"password",email:"email",phone:"tel"});this.responseObj=e,this.dialog=t,this.errorExists=!1,this.data=i,this.makeDOMElements()}makeDOMElements(){this.responseContainer=document.createElement("div"),this.responseContainer.className="response-container";const e=document.createElement("div");e.className="response__input-container";const t=document.createElement("span");t.innerText="\u{1F449}",this.inputBox=document.createElement("input"),this.inputBox.focus(),this.inputBox.className="response__input-box",this.inputBox.type=this.inputTypes[this.responseObj.inputType],this.inputBox.placeholder=this.responseObj.placeholder,this.validator=A(this.responseObj.inputType),this.inputBox.addEventListener("keypress",a=>{const n=this.validator(a.target.value);if(n){this.indicateErrors(n);return}this.dialog.toggleButtons("enabled"),this.errorIcon.style.display="none",this.errorExists=!1,this.nextButton.disabled=!1,this.nextButton.removeAttribute("title"),this.errorIcon.removeAttribute("title")}),this.errorIcon=document.createElement("img"),this.errorIcon.className="error-icon",this.errorIcon.src=R,this.errorIcon.style.display="none",this.errorExists=!0,e.append(t,this.inputBox,this.errorIcon),this.nextButton=document.createElement("button"),this.nextButton.className="response__next-btn",this.nextButton.disabled=!0,this.nextButton.innerText=this.responseObj.submitAfterInput?"Submit":"Next",this.nextButton.addEventListener("click",()=>{this.responseObj.submitAfterInput&&(this.data[this.responseObj.keyName]=this.inputBox.value,this.dialog.onSubmit(this.dialog)),this.dialog.nextDialog()});const i=document.createElement("img");i.src=c.avatar?`${o}/thumbnails/${c.avatar}.png`:`${o}/thumbnails/cap_blue_boy.png`,this.responseContainer.append(e,this.nextButton,i)}update(e){this.inputBox.focus(),console.log(this.responseObj.keyName),this.inputBox.value!=="Choose Avatar"&&(this.data[this.responseObj.keyName]=this.inputBox.value),this.data[e.keyName]||(this.dialog.toggleButtons("disabled"),this.nextButton.disabled=!0),this.responseObj=e,this.inputBox.type=this.inputTypes[this.responseObj.inputType],this.inputBox.placeholder=e.placeholder,this.inputBox.value=this.data[e.keyName]||"",this.responseObj.inputType=="avatar-picker"?(this.inputBox.value=e.placeholder,this.inputBox.onclick=()=>{new V(this.data,()=>{this.dialog.toggleButtons("enabled"),this.nextButton.disabled=!1})}):this.inputBox.onclick=()=>{},this.nextButton.innerText=e.submitAfterInput?"Submit":"Next",this.validator=A(this.responseObj.inputType),this.errorIcon.removeAttribute("title")}indicateErrors(e){this.errorIcon.style.display="inline-block",this.errorIcon.title=e,this.errorExists=!0,this.nextButton.disabled=!0,this.nextButton.title="There seems to be problem with your input, please check!",this.dialog.toggleButtons("disabled")}}class B extends k{constructor(e,t,i,a=!1,n=!1,l){super(null,null,a,n);this.sliderPosition=0,this.dialogObj=t,this.spriteImage=i,this.onSubmit=l,this.data=e}generateConversation(){const e=document.createElement("div");e.className="conv-container";const t=document.createElement("div");t.className="question-container";const i=document.createElement("img");return i.src=this.spriteImage,this.questionText=document.createElement("p"),this.questionText.innerHTML=this.dialogObj[this.sliderPosition].text,t.append(i,this.questionText),e.append(t),this.inputControl=new U(this.dialogObj[this.sliderPosition],this,this.data),this.toggleButtons("disabled"),e.append(this.inputControl.responseContainer),e}makeDOMElements(){const e=document.getElementById("overlays");this.alertDiv=document.createElement("div"),this.alertDiv.id="dialog";const t=document.createElement("div");t.className="control-container",this.prevButton=E("Prev",d,"left"),this.prevButton.addEventListener("click",()=>this.prevDialog()),this.progressSpan=document.createElement("span"),this.progressSpan.className="progress-indicator",this.progress=`${this.sliderPosition+1}/${this.dialogObj.length}`,this.progressSpan.innerText=this.progress,this.nextButton=E("Next",d,"right"),this.nextButton.addEventListener("click",()=>this.nextDialog()),this.closeBtn=document.createElement("button"),this.closeBtn.id="close-button",this.closeBtn.addEventListener("click",()=>this.closeAlert());const i=this.generateConversation();t.append(this.prevButton,this.progressSpan,this.nextButton,this.closeBtn),this.alertDiv.append(t,i),e.appendChild(this.alertDiv)}render(){this.progress=`${this.sliderPosition+1}/${this.dialogObj.length}`,this.progressSpan.innerText=this.progress,this.questionText.innerHTML=this.dialogObj[this.sliderPosition].text,this.inputControl.update(this.dialogObj[this.sliderPosition])}nextDialog(){this.sliderPosition+1<this.dialogObj.length&&(this.sliderPosition++,this.render())}prevDialog(){this.sliderPosition>0&&(this.sliderPosition--,this.render())}toggleButtons(e){let t="There seems to be problem with your input, please check!",i=!0;e==="enabled"&&(t="",i=!1),this.nextButton.disabled=i,this.prevButton.disabled=i,this.nextButton.title=t,this.prevButton.title=t}}class F{constructor(){this.makeDOMElements()}makeDOMElements(){this.container=document.getElementById("snackbars"),this.snackbarDiv=document.createElement("div"),this.snackbarDiv.id="snackbar",this.textSpan=document.createElement("span"),this.textSpan.innerHTML="",this.closeButton=document.createElement("button"),this.closeButton.id="close-button",this.closeButton.addEventListener("click",()=>this.close()),this.snackbarDiv.append(this.textSpan,this.closeButton),this.container.append(this.snackbarDiv),this.close()}setText(e){this.textSpan.innerHTML=e}show(){this.container.style.zIndex=10,this.snackbarDiv.className=""}configure(e,t){this.text=e,this.accent=t,this.textSpan.innerHTML=this.text}close(){this.container.style.zIndex=-1,this.snackbarDiv.className="closeState"}}const Y=[{text:"What is your name?",inputType:"name",placeholder:"Enter your name",keyName:"name",submitAfterInput:!1},{text:"What should we call you?",inputType:"username",placeholder:"Enter your username",keyName:"username",submitAfterInput:!1},{text:"Your email id is ...?",inputType:"email",placeholder:"Enter your email ID",keyName:"email",submitAfterInput:!1},{text:"What do you look like?",inputType:"avatar-picker",placeholder:"Choose Avatar",keyName:"avatar"},{text:"What is your password?",inputType:"password",placeholder:"Enter password",keyName:"password",submitAfterInput:!0}],J=[{text:"Your email id is ...?",inputType:"email",placeholder:"Enter your email ID",keyName:"email",submitAfterInput:!1},{text:"Tell me your secret code?",inputType:"password",placeholder:"Enter password",keyName:"password",submitAfterInput:!0}],T={},H=(s,e)=>{const t=new F;w.post("https://milo-back-end.herokuapp.com/login",T).then(i=>{const a=i.data.jwt,n=g(p({},i.data),{jwt:void 0,bag:["LoginKey"]});v(n),localStorage.setItem("user",JSON.stringify(n)),localStorage.setItem("JWT",a),t.configure("Logged in successfully as "+n.name,"success"),t.show(),s.closeAlert(),e.dialog.closeAlert()}).catch(i=>{console.log(i),t.configure("There was some error please try again."),t.show()})},X=s=>{new B(T,J,`${o}/thumbnails/bald_blue_boy.png`,!1,!1,t=>H(t,s)).show()},N={},W=(s,e)=>{w.post("https://milo-back-end.herokuapp.com/signup",N).then(t=>{const i=t.data.jwt,a=g(p({},t.data),{jwt:void 0,bag:["LoginKey"]});v(a),localStorage.setItem("user",JSON.stringify(a)),localStorage.setItem("JWT",i),s.closeAlert(),e.dialog.closeAlert()}).catch(t=>{console.log(t)})},Z=s=>{new B(N,Y,`${o}/thumbnails/bald_blue_boy.png`,!1,!1,t=>W(t,s)).show()},G=(s,e,t)=>{const i=s.x-t.x,a=s.y-t.y;Math.abs(i)>Math.abs(a)?i>0?s.setTexture(e,"left-walk.000"):s.setTexture(e,"right-walk.000"):a>0?s.setTexture(e,"back-walk.000"):s.setTexture(e,"front-walk.000")};class Q extends x.exports.Scene{constructor(){super({key:"Initial"})}preload(){const e=localStorage.getItem("user");e&&v(JSON.parse(e)),this.avatarName=c.avatar||"cap_blue_boy",this.load.image("tiles",`${o}/maps/tilesets/BeachTileset.png`),this.load.tilemapTiledJSON("beach",`${o}/maps/json/beach.json`),I.forEach(t=>this.load.atlas(t.name,`${o}/characters/sprites/${t.name}.png`,`${o}/characters/json/spritesheet.json`)),this.dialog=new z({text:'Hey, do you want to <span class="hy">Login</span> or <span class="hy">Sign Up</span>?',inputType:"buttons",buttons:[{text:"Login",onClickFn:()=>X(this)},{text:"Sign Up",onClickFn:()=>Z(this)}]},`${o}/thumbnails/bald_blue_boy.png`,!1,!0,()=>{this.resume(),this.updatePlayer()})}create(){const e=this.make.tilemap({key:"beach",tileWidth:32,tileHeight:32}),t=e.addTilesetImage("beach","tiles");e.createLayer("ground",t,0,0);const i=e.createLayer("interactiveLayer",t,0,0),a=e.createLayer("water",t,0,0);i.setCollisionByProperty({collides:!0}),a.setCollisionByProperty({collides:!0});const n=e.findObject("Objects",r=>r.name==="Spawn Point");this.player=this.physics.add.sprite(n.x,n.y,this.avatarName,"front-walk.000").setBodySize(32,20,!0).setSize(20,30).setOffset(0,0),this.loginSprite=this.physics.add.sprite(300,50,"bald_blue_boy","front-walk.000").setSize(20,30).setOffset(0,0),this.loginSprite.body.immovable=!0,this.physics.add.collider(this.player,a),this.physics.add.collider(this.player,i,()=>{c&&localStorage.getItem("JWT")?this.scene.start("Init1"):console.log("Need to login or signup")}),this.physics.add.collider(this.player,this.loginSprite,r=>{G(this.loginSprite,"bald_blue_boy",{x:r.x,y:r.y}),this.pause(),this.dialog.show()}),b(this.player.anims,this.avatarName);const l=this.cameras.main;l.startFollow(this.player),l.setBounds(0,0,e.widthInPixels,e.heightInPixels),this.cursors=this.input.keyboard.createCursorKeys()}update(e,t){const i=175,a=this.player.body.velocity.clone();this.player.body.setVelocity(0),this.cursors.left.isDown?this.player.body.setVelocityX(-i):this.cursors.right.isDown&&this.player.body.setVelocityX(i),this.cursors.up.isDown?this.player.body.setVelocityY(-i):this.cursors.down.isDown&&this.player.body.setVelocityY(i),this.player.body.velocity.normalize().scale(i),this.cursors.left.isDown?this.player.anims.play("left-walk",!0):this.cursors.right.isDown?this.player.anims.play("right-walk",!0):this.cursors.up.isDown?this.player.anims.play("back-walk",!0):this.cursors.down.isDown?this.player.anims.play("front-walk",!0):(this.player.anims.stop(),a.x<0?this.player.setTexture(this.avatarName,"left-walk.000"):a.x>0?this.player.setTexture(this.avatarName,"right-walk.000"):a.y<0?this.player.setTexture(this.avatarName,"back-walk.000"):a.y>0&&this.player.setTexture(this.avatarName,"front-walk.000"))}addPlayersToScene(e){this.otherPlayers=[],e.forEach(t=>{this.loadedAtlases.includes(t.avatar)||this.load.atlas(t.name,`${o}/characters/sprites/${t.avatar}.png`,`${o}/characters/json/spritesheet.json`),this.physics.add.sprite(t.x,t.y,t.avatar,"front-walk.000").setSize(20,30).setOffset(0,0)})}pause(){this.physics.pause(),this.input.keyboard.disableGlobalCapture(),this.anims.pauseAll()}resume(){this.physics.resume(),this.input.keyboard.enableGlobalCapture(),this.anims.resumeAll()}updatePlayer(){localStorage.getItem("JWT")&&(this.avatarName=c.avatar,this.player.anims.remove("front-walk"),this.player.anims.remove("back-walk"),this.player.anims.remove("left-walk"),this.player.anims.remove("right-walk"),b(this.player.anims,this.avatarName),this.player.setTexture(this.avatarName,"back-walk.000"))}}let c={};const v=s=>{c=s},h=C("http://localhost:5000/"),K={type:Phaser.AUTO,width:700,height:700,parent:"canvas",pixelArt:!0,physics:{default:"arcade",arcade:{gravity:{y:0}}},scene:Q},ee=new Phaser.Game(K);ee.scene.add("Init1",j);
