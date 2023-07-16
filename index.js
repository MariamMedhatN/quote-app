var quotes = [
    ' "The best revenge is massive success." ',
     ' "Be yourself; everyone else is already taken." ' ,
      ' "A room without books is like a body without a soul." ' ,
       ' "Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind." ' ,
    ' "You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams." ' , 
    ' "You only live once, but if you do it right, once is enough." ' ,
' "Be the change that you wish to see in the world." ' ,
'"If you tell the truth, you don\'t have to remember anything."',
'"I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."',
'"To live is the rarest thing in the world. Most people exist, that is all."'

]
var quotesname = [ "- frank senatra", "- Oscar Wilde ", "- Marcus Tullius Cicero", "- Bernard M. Baruch", "- Dr. Seuss ", "- Mae West", "- Mahatma Gandhi", "- Mark Twain", "- Maya Angelou","- Oscar Wilde " ]
function NewQuote(){
var randomnumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('showquote').innerHTML=quotes[randomnumber ] + quotesname[randomnumber];
}
