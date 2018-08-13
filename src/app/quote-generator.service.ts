import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteGeneratorService {
  michaelScottQuotes = [
    "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.",
    "If I had a gun with two bullets and I was in a room with Hitler, Bin Laden, and Toby, I would shoot Toby twice.",
    "Webster's Dictionary defines wedding as: The fusing of two metals with a hot torch.",
    "Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way.",
    "I feel like all my kids grew up, and then they married each other. It's every parents' dream.",
    "You don't know me, you've just seen my penis.",
    "St. Patrick's Day is the closest thing the Irish have to Christmas.",
    "I am Beyoncé, always.",
    "And I knew exactly what to do. But in a much more real sense, I had no idea what to do.",
    "When the son of the deposed king of Nigeria emails you directly, asking for help, you help! His father ran the freaking country! Ok?",
    "I am running away from my responsibilities. And it feels good.",
    "Society teaches us that having feelings and crying is bad and wrong. Well, that's baloney, because grief isn't wrong. There's such a thing as good grief. Just ask Charlie Brown.",
    "I'm an early bird and I'm a night owl. So I'm wise and I have worms.",
    "You know what they say. 'Fool me once, strike one, but fool me twice...strike three.",
    "I love inside jokes. I'd love to be a part of one someday.",
    "It takes you thirty seconds to brush your teeth? Wow that's ten times as long as it takes me.",
    "Yes, it is true. I, Michael Scott, am signing up with an online dating service. Thousands of people have done it, and I am going to do it. I need a username. And I have a great one. Little Kid Lover. That way people will know exactly where my priorities are at.",
    "I don't understand. We have a day honoring Martin Luther King, but he didn't even work here.",
    "You may look around and see two groups here; white collar, blue collar. But I don't see it that way, and you know why not? Because I am collar-blind.",
    "Guess what? I have flaws. What are they? Oh I dunno, I sing in the shower? Sometimes I spend too much time volunteering. Occasionally I'll hit somebody with my car. So sue me - no, don't sue me. That is opposite the point I'm trying to make.",
    "Presents are the best way to show how much you care. It's a tangible thing you can point at and say 'Hey man, I love you. This many dollars worth.'",
    "I don't want people coming to work saying I might die today, that's what a hospital is for",
    "Wikipedia is the best thing ever. Anyone in the world can write anything they want about any subject, so you know you are getting the best possible information."
  ]
  constructor() { }

  generateQuote(): String {
    //randomIndex = Math.random();
    return this.michaelScottQuotes[ Math.floor(Math.random()*this.michaelScottQuotes.length) ];
  }
}
