// set var 
const buttons = document.querySelectorAll('.rate');
const submit = document.querySelector('.submit');
const rateText = document.querySelector('.rate-text');
const frontCard = document.querySelector('.flip-card-inner');
const backCard =document.querySelector('.back-card');

let rate = 0;

buttons.forEach((button) =>{
    button.addEventListener('click' , (event) =>{
        // target the text content of the button
       rate=event.target.textContent;
     //add the color of click buttons
      button.classList.add("rate-clicked");
    //    console.log(rate);
       rateText.textContent='You selected ' + rate + ' of 5!';
    })
   
})



function nextCard(){
    if(!rate){
        submit.classList.toggle('shake');
        return;
    }else{

    frontCard.style.display = 'none';
    backCard.style.display = 'block';
    backCard.classList.add('animate')
    }
}
// submit onclick
submit.addEventListener('click', nextCard);

