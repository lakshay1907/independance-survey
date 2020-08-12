class Form{
    constructor(){

    }
    display(){
        var title = createElement("h1");
        title.html("Independance Survey by Lakshay");
    title.position(480,0);
    var greeting = createElement("h3");
  
    var input= createInput("");
   input.position(550,640);
   var button= createButton("Vote");
   button.position(700,640);
   button.mousePressed(function(){
       input.hide();
       button.hide();
       var mail = input.value();
       playerCount = playerCount+1;
       player.update(mail);
       player.updateCount(playerCount);
       greeting.html("Thanks your response have been recorded");
       greeting.position(490,640);
   })
    var button1 = createButton("Zakir Hussain")
    button1.position(476,136);
    button1.mousePressed(function(){
        button3.hide();
        button1.hide();
        button4.hide();
    })
    var button2 = createButton("S. Radhakrishnan")
    button2.position(620,136);
    button2.mousePressed(function(){
        button3.hide();
        button1.hide();
        button4.hide();
    })
    var button3 = createButton("V.V Giri")
    button3.position(886,136);
    button3.mousePressed(function(){
        button3.hide();
        button1.hide();
        button4.hide();
    })
    var button4 = createButton("Bhairon Singh")
    button4.position(756,136);
    button4.mousePressed(function(){
        button4.hide();
        button1.hide();
        button3.hide();
    })
    var button5 = createButton("Mahatma Gandhi")
    button5.position(476,190);
    button5.mousePressed(function(){
        button6.hide();
        button5.hide();
        button8.hide();
    })
    var button6 = createButton("Nathuram Godse")
    button6.position(706,190);
    button6.mousePressed(function(){
        button5.hide();
        button6.hide();
        button8.hide();
    })
    var button7 = createButton("Netaji Subhash Chandra Bose")
    button7.position(476,220);
    button7.mousePressed(function(){
        button5.hide();
        button6.hide();
        button8.hide();
    })
    var button8 = createButton("Pandit Jawaharlal Nehru")
    button8.position(706,220);
    button8.mousePressed(function(){
        button5.hide();
        button6.hide();
        button8.hide();
    })
    var button9 = createButton("200 Years")
    button9.position(496,270);
    button9.mousePressed(function(){
        button10.hide();
        button11.hide();
        button12.hide();
    })
    var button10 = createButton("250 Years")
    button10.position(646,270);
    button10.mousePressed(function(){
        button10.hide();
        button11.hide();
        button12.hide();
    })
    var button11 = createButton("100 years")
    button11.position(496,300);
    button11.mousePressed(function(){
        button11.hide();
        button10.hide();
        button12.hide();
    })
    var button12 = createButton("50 Years")
    button12.position(646,300);
    button12.mousePressed(function(){
        button12.hide();
        button10.hide();
        button11.hide();
    })
    var button13 = createButton("Bhagat Singh")
    button13.position(464,356);
    button13.mousePressed(function(){
        button14.hide();
        button13.hide();
        
    })
    var button14 = createButton("Mangal Pandey")
    button14.position(630,356);
    button14.mousePressed(function(){
        button13.hide();
        button14.hide();
       
    })
    var button15 = createButton("Mahatma Gandhi")
    button15.position(795,356);
    button15.mousePressed(function(){
        button13.hide();
        button14.hide();
       
    })
    var button16 = createButton("Pakistan")
    button16.position(464,430);
    button16.mousePressed(function(){
        button17.hide();
        button18.hide();
        button19.hide();
       
    })
    
    var button17 = createButton("Bangladesh")
    button17.position(684,430);
    button17.mousePressed(function(){
        button17.hide();
        button18.hide();
        button19.hide();
      
    })
    var button18 = createButton("United States of America")
    button18.position(464,455);
    button18.mousePressed(function(){
        button18.hide();
        button17.hide();
        button19.hide();
      
    })
    var button19 = createButton("Myanmaar")
    button19.position(684,455);
    button19.mousePressed(function(){
        button19.hide();
        button17.hide();
        button18.hide();
      
    })
    var button20 = createButton("Jan Gan Man")
    button20.position(464,510);
    button20.mousePressed(function(){
        button20.hide();
        button22.hide();
       })
       var button21 = createButton("Vande Maatram")
       button21.position(464,535);
       button21.mousePressed(function(){
           button20.hide();
           button22.hide();
          })
          var button22 = createButton("Bharat hum ko jaan se pyaara hai")
          button22.position(464,560);
          button22.mousePressed(function(){
              button20.hide();
              button22.hide();
             })
}


}