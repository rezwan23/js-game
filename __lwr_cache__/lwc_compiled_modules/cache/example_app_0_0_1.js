import { registerDecorators as _registerDecorators, LightningElement, registerComponent as _registerComponent } from "lwc";
import _tmpl from "./app.html";
class HelloWorldApp extends LightningElement {
  constructor(...args) {
    super(...args);
    this.myWidth = 100;
    this.monsterWidth = 100;
    this.myDamage = 0;
    this.monsterDamage = 0;
    this.show = false;
    this.attackLogs = [];
    this.Player1Name = '';
    this.Player2Name = '';
    this.pns = false;
    this.makeid = function () {
      let length = 10;
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      let counter = 0;
      while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
      }
      return result;
    };
    this.setName = function () {
      if (this.Player1Name != '' && this.Player2Name != '') {
        this.pns = true;
      }
    };
    this.start = function () {
      if (this.show == false) this.show = true;else {
        this.myWidth = 100;
        this.monsterWidth = 100;
        //   this.emptyArray(this.attackLogs);
        this.attackLogs = [];
      }
    };
    this.attack = function () {
      this.myDamage = Math.floor(this.getRandomAttribute(15, 0));
      this.myWidth -= this.myDamage;
      this.attackLogs.push(this.Player1Name + ' hurted ' + this.myDamage + 'points');
      this.monsterDamage = Math.floor(this.getRandomAttribute(15, 0));
      this.monsterWidth -= this.monsterDamage;
      this.attackLogs.push(this.Player2Name + ' is hurted ' + this.monsterDamage + 'points');
      if (this.myWidth <= 0) {
        alert('You Loose!');
        this.start();
      }
      if (this.monsterWidth <= 0) {
        alert('You won! Congrats!');
        this.start();
      }
    };
    this.giveUp = function () {
      alert('You loose!');
      this.myWidth = 100;
      this.monsterWidth = 100;
      this.show = false;
      // this.emptyArray(this.attackLogs);
      this.attackLogs = [];
    };
    this.getRandomAttribute = function (max, min) {
      return Math.floor(Math.random() * (max - min) + min);
    };
    this.spcAttack = function () {
      this.myDamage = Math.floor(this.getRandomAttribute(24, 0));
      this.myWidth -= this.myDamage;
      this.attackLogs.push(this.Player1Name + ' hurted ' + this.myDamage + 'points');
      this.monsterDamage = Math.floor(this.getRandomAttribute(30, 0));
      this.monsterWidth -= this.monsterDamage;
      this.attackLogs.push(this.Player2Name + ' is hurted ' + this.monsterDamage + 'points');
      if (this.myWidth <= 0) {
        alert('You Loose!');
        this.start();
      }
      if (this.monsterWidth <= 0) {
        alert('You won! Congrats!');
        this.start();
      }
    };
    this.emptyArray = function (arr) {
      var length = arr.length;
      for (var i = 0; i < length; i++) {
        Vue.set(arr, i, '');
      }
    };
    this.heal = function () {
      this.myWidth += Math.floor(this.getRandomAttribute(24, 0));
      if (this.myWidth >= 100) {
        this.myWidth = 100;
      }
      this.attackLogs.push('Your health healed to ' + this.myWidth + ' points');
      this.monsterWidth += Math.floor(this.getRandomAttribute(24, 0));
      if (this.monsterWidth >= 100) {
        this.monsterWidth = 100;
      }
      this.attackLogs.push(this.Player2Name + ' health healed to ' + this.myWidth + ' points');
    };
  }
  get myStyle() {
    return `background-color: green; margin: 0; color: white;width : ${this.myWidth}%`;
  }
  get monsterStyle() {
    return `background-color: green; margin: 0; color: white;width : ${this.monsterWidth}%`;
  }
  get showAndPns() {
    return this.show && this.pns;
  }
  get nShowAndPns() {
    return this.pns == true;
  }
  handleChange(event) {
    const field = event.target.name;
    if (field === 'Player1Name') {
      this.Player1Name = event.target.value;
    } else if (field === 'Player2Name') {
      this.Player2Name = event.target.value;
    }
  }
  /*LWC compiler v7.2.2*/
}
_registerDecorators(HelloWorldApp, {
  publicProps: {
    myWidth: {
      config: 0
    },
    monsterWidth: {
      config: 0
    },
    myDamage: {
      config: 0
    },
    monsterDamage: {
      config: 0
    },
    show: {
      config: 0
    },
    attackLogs: {
      config: 0
    },
    Player1Name: {
      config: 0
    },
    Player2Name: {
      config: 0
    },
    pns: {
      config: 0
    }
  },
  fields: ["makeid", "setName", "start", "attack", "giveUp", "getRandomAttribute", "spcAttack", "emptyArray", "heal"]
});
const __lwc_component_class_internal = _registerComponent(HelloWorldApp, {
  tmpl: _tmpl,
  sel: "example-app",
  apiVersion: 62
});
export default __lwc_component_class_internal;