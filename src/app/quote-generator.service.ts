import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteGeneratorService {
  quotes = { MichaelScott : [
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
  ],
  RonSwanson: ["When I eat, it is the food that is scared.","Keep your tears in your eyes where they belong.",
  "I am not a sore loser. It's just that I prefer to win, and when I don't, I get furious.", "If there were more food and fewer people, this would be a perfect party.","Next thing you want to do is ditch the terrier, and get yourself a proper dog. Any dog under fifty pounds is a cat, and cats are pointless. ","Just give me all the bacon and eggs you have. Wait...wait. I worry what you just heard was: 'Give me a lot of bacon and eggs.' What I said was: 'Give me all the bacon and eggs you have.' Do you understand?",
  "Never half-ass two things. Whole-ass one thing.","Birthdays were invented by Hallmark to sell cards.","When people get too chummy with me, I like to call them by the wrong name to let them know I don't really care about them.",
  "There's only one thing I hate more than lying: skim milk. Which is water that is lying about being milk.","I'd wish you the best of luck but I believe luck is a concept created by the weak to explain their failures.","Dear frozen yogurt, you are the celery of desserts. Be ice cream or be nothing. Zero stars.",
  "I'm not interested in caring about people.","Crying: Acceptable at funerals and the Grand Canyon.","Clear alcohols are for rich women on diets.","There are only three ways to motivate people: money, fear, and hunger.",
  "Fishing relaxes me. It's like yoga except I still get to kill something.","Great job, everyone. The reception will be held in each of our individual houses, alone.","It's always a good idea to demonstrate to your coworkers that you are capable of withstanding a tremendous amount of pain.",
  "Normally, if given the choice between doing something and nothing, I’d choose to do nothing. But I will do something if it helps someone else do nothing. I’d work all night, if it meant nothing got done.",
  "I’m a simple man. I like pretty, dark-haired women, and breakfast food.","My first ex-wife's name is Tammy. My second ex-wife's name is Tammy. My Mom's name is Tamara...she goes by Tammy.",
  "One rage every three months is permitted. Try not to hurt anyone who doesn’t deserve it.","Strippers do nothing for me…but I will take a free breakfast buffet anytime, anyplace.",
  "The government is a greedy piglet that suckles on a taxpayer’s teat until they have sore, chapped nipples.",
  "There has never been a sadness that can’t been cured by breakfast food.","If any of you need anything at all, too bad. Deal with your problems yourselves, like adults.",
  "I once worked with a guy for three years and never learned his name. Best friend I ever had. We still never talk sometimes.",
  "I don’t want to paint with a broad brush here, but every single contractor in the world is a miserable, incompetent thief.",
  "Give a man a fish and feed him for a day. Don’t teach a man to fish…and feed yourself. He’s a grown man. And fishing’s not that hard.",
  "Sting like a bee. Do not float like a butterfly. That's ridiculous.","Give 100%. 110% is impossible. Only idiots recommend that.",
  "Turkey can never beat cow.","Capitalism: God's way of determining who is smart and who is poor.",
  "There is only one bad word: taxes.","Friends: one to three is sufficient."
  ],
  TinaBelcher: ["I am a smart, strong, sensual woman.","I'm no hero. I put my bra on one boob at a time, just like everyone else.",
  "Your ass is grass, and I'm gonna mow it.","Dad, if you believe you're beautiful, you will be. I did.",
  "I don't need a boy to pay attention to me. I'll pay attention to myself.", "Time for the charm bomb to explode.",
  "Is it possible to be in love with twenty-five people at once?","I've logged 3,000 fantasy hours into this relationship. You don't just throw that away.",
  "Butts.","Dear Lord Santa, this year please bless me with a calendar of Australian firefighters holding puppies in a casual setting.",
  "Oh, it’s okay. I guess I wasn’t meant to have a good life.","My heart just pooped its pants.","If you need me, I’ll be here on the floor dying.",
  "Our toaster is also confused. It doesn’t know where bagels go."
  ],
  PrincessCarolyn: ["That woman can knock a drink back like a Kennedy at a wake for another Kennedy, but I'll be damned if she doesn't get shit done!",
  "My life is a mess right now and I compulsively take care of other people when I don't know how to take care of myself.",
  "Aw, fish!","Wake up Captain Dumbshit","Serves you right for having feelings","You need to get your shit together.",
  "You know what might help? If you think of this thing like a professional, instead of a big titty baby.",
  "Who's gonna water the plants?...It was my job when I was an intern, but nobody told me to stop.",
  "You know, it's funny, when you look at someone through rose colored glasses, all the red flags just look like flags",
  "Laura! Clear our my schedule! I have to push a boulder up a hill and then have it roll over me time and time again with no regard for my well-being!",
  "Why would you serve dates and not have a place to put the pits? You know, some people just have no class.",
  "Stop pissing off the orphans. A lot of them grow up to be serial killers.","This funeral's a real who's-who. Henry Winkler, Jake and Maggot Gyllenhaal, that Pakistani girl who keeps winning Nobel Prizes—I'm gonna go rub me some elbows."
  ]
  };
  constructor() { }

  generateQuote(person: string): string {
    // remove spaces from person's name to properly access quotes
    person=person.replace(/\s/g, "");
    // return a random quote
    let randomIndex: number = Math.floor(Math.random()*this.quotes[person].length);
    return this.quotes[person][randomIndex];
  }
}
