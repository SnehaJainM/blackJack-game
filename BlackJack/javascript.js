
let hasBlackJack= false

let messageEl=document.getElementById("message-el")

let cardsEl=document.getElementById("cards-el")

let cards=[]

let sum = 0

let sumEl=document.getElementById("sum-el")

let isAlive = false

let message=""

//cardsEl.textContent+=firstCard + " - " + secondCard
    
//let playerName="Player"
//let playerChips = 145
//let playerEl=document.getElementById("player-el")
//playerEl.textContent=playerName+" :"+ playerChips
//let player={ //object
//    name :"Player",
//    chips : 145
//}

//playerEl.textContent=player.name+" :"+ player.chips

function startGame()
{
    
    isAlive = true
    
    let firstCard =getRandomCard() //abt=y bymver btw 2-11 

    let secondCard=getRandomCard()

    cards=[firstCard,secondCard]

    sum= firstCard + secondCard


    renderGame()
}
function renderGame()
{
    sumEl.textContent= "Sum: "+ sum 
    
    cardsEl.textContent="Cards: "//+ cards//firstCard + " - " + secondCard

    for( let count=0; count<cards.length; count++)
    {
        cardsEl.textContent+=cards[count]+" "
    }
    
  if(sum<=20)
      
      {
        message="Do you want to draw another card?" 
      }
    else if(sum === 21)
      
      {
        message="You have a BlackJack"
        hasBlackJack= true
      }
    else
    {
        message="You are out of the game"
        isAlive = false
    }
   messageEl.textContent = message   
}

function newCard()
{   //only allow aplayer to draw a card if he isAlive or and DOES NOT have a blackjack
    if(isAlive===true && hasBlackJack===false)
        {
    let newCardd=getRandomCard() 
    sum+=newCardd
    cards.push(newCardd)
    renderGame()
        }
    else{
     message="You cannot draw a new card"  
    messageEl.textContent = message 
    }
      
}

function getRandomCard() 
{
    //return 3

    let randomNumber=  Math.floor(Math.random()*6)+1
    
    if (randomNumber === 1)
        {
            return 11
        }
      else if (randomNumber >= 11)
            {
                return 10
            }
      else{
        return randomNumber   
      }
    
}

function restartGame()
{
    sum = 0
    startGame()
}