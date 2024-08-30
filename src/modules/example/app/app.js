import { LightningElement, api } from 'lwc';

export default class HelloWorldApp extends LightningElement {


    @api myWidth = 100;
    @api monsterWidth = 100;
    @api myDamage = 0;
    @api monsterDamage = 0
    @api show = false;
    @api attackLogs = [];
    @api Player1Name = '';
    @api Player2Name = '';
    @api pns = false;
    

    get myStyle(){
        return `background-color: green; margin: 0; color: white;width : ${this.myWidth}%` 
    }

    get monsterStyle(){
        return `background-color: green; margin: 0; color: white;width : ${this.monsterWidth}%` 
    }

    get showAndPns(){
        return this.show && this.pns
    }

    get nShowAndPns(){
        return (this.pns == true)
    }

    

    makeid = function() {
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
    }

    handleChange(event) {
        const field = event.target.name;
        if (field === 'Player1Name') {
            this.Player1Name = event.target.value;
        } else if (field === 'Player2Name') {
            this.Player2Name = event.target.value;
        }
    }


    setName = function() {
        if(this.Player1Name != '' && this.Player2Name != ''){
          this.pns = true
        }
    }
    start = function(){
        if(this.show == false)
          this.show = true;
        else{
          this.myWidth = 100;
          this.monsterWidth = 100;
        //   this.emptyArray(this.attackLogs);
        this.attackLogs = []
        }
    }
    attack = function(){
        this.myDamage = Math.floor(this.getRandomAttribute(15, 0));
        this.myWidth-=this.myDamage;
        this.attackLogs.push(this.Player1Name + ' hurted '+this.myDamage+'points');
        this.monsterDamage = Math.floor(this.getRandomAttribute(15, 0));
        this.monsterWidth-=this.monsterDamage;
        this.attackLogs.push(this.Player2Name + ' is hurted '+this.monsterDamage+'points');
        if(this.myWidth<=0){
          alert('You Loose!');
          this.start();
        }if(this.monsterWidth<=0){
          alert('You won! Congrats!');
          this.start();
        }
      }
    giveUp = function(){
        alert('You loose!');
        this.myWidth = 100;
        this.monsterWidth = 100;
        this.show = false;
        // this.emptyArray(this.attackLogs);
        this.attackLogs = []
    }
    getRandomAttribute = function(max, min){
        return Math.floor(Math.random()*(max-min)+min);
    }
    spcAttack = function(){
        this.myDamage = Math.floor(this.getRandomAttribute(24, 0));
        this.myWidth-=this.myDamage;
        this.attackLogs.push(this.Player1Name + ' hurted '+this.myDamage+'points');
        this.monsterDamage = Math.floor(this.getRandomAttribute(30, 0));
        this.monsterWidth-=this.monsterDamage;
        this.attackLogs.push(this.Player2Name + ' is hurted '+this.monsterDamage+'points');
        if(this.myWidth<=0){
          alert('You Loose!');
          this.start();
        }if(this.monsterWidth<=0){
          alert('You won! Congrats!');
          this.start();
        }
    }
    emptyArray = function(arr){
        var length = arr.length;
        for(var i = 0; i<length ;i++){
          Vue.set(arr, i, '');
        }
    }
    heal = function(){
        this.myWidth+=Math.floor(this.getRandomAttribute(24, 0));
        if(this.myWidth >= 100){
          this.myWidth = 100;
        }
        this.attackLogs.push('Your health healed to '+this.myWidth+' points');
        this.monsterWidth+=Math.floor(this.getRandomAttribute(24, 0));
        if(this.monsterWidth >= 100){
          this.monsterWidth = 100;
        }
        this.attackLogs.push(this.Player2Name + ' health healed to '+this.myWidth+' points');
    }
}
