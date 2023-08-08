let playCount=0;
let playerWin=0;
let autoWin=0;
let roundResHTML=document.querySelector('.round-result');
let counterResHTML=document.querySelector('.result-counter');

// let addResToHtml=(resRoundString,resPlayerCounter,resAutoCounter)=>{
//     // roundResHTML.appendChild(resRoundString);
    
// }



let showRes=(res)=>{
    // let resEle=document.createElement('div');
    roundResHTML.textContent=res;
    let resRunScorePlayer=document.createElement('div');
    let resRunScoreAuto=document.createElement('div');
    resRunScorePlayer.textContent=playerWin;
    resRunScoreAuto.textContent=autoWin;
    counterResHTML.appendChild(resRunScorePlayer).appendChild(resRunScoreAuto);
    // addResToHtml(resEle,resRunScorePlayer,resRunScorePlayer);
}

let removeHighlights=()=>{
    eleSelections.forEach((item)=>{
        // console.log("css added");
        item.classList.remove('img-hovered'); 
    })
}

let playStart=(e)=>{
    // console.log(e.target);
    removeHighlights();
    e.currentTarget.classList.add('img-hovered');    //item.addEventListener('mouseover',item.classList.add("img-hovered"));
    if((playCount)==5){
        roundResHTML.textContent='5 rounds up! Reload Page to Find Your Luck!';
    }
    else{
        let selectedVal=e.currentTarget.getAttribute('data-selected');
        let autoSelectedVal=getComputerChoice();
        console.log(selectedVal)
        let res=playThis(selectedVal,autoSelectedVal);
        showRes(res);
    }  
}
  


const eleSelections=document.querySelectorAll('.selections');
// console.log(eleSelections);

eleSelections.forEach((item)=>{
    // console.log("css added");
    item.addEventListener('click',playStart);

})



// eleSelections.addEventListener('click',addCss);

let getComputerChoice=()=>{
    let res=Math.random();
    switch(true)
    {
        case res < 0.33: return 'Rock'; break;
        case res <0.66: return 'Paper'; break;
        default: return 'Scissors'; break;
    }
}

let wins=0;

let playThis=(playerSelection,computerSelection)=>{
    let cleanPlayerSelected=playerSelection.trim()
    cleanPlayerSelected=cleanPlayerSelected.charAt(0).toUpperCase().concat(cleanPlayerSelected.slice(1).toLowerCase());
    switch(true){
        case cleanPlayerSelected==computerSelection: 
            playerWin++; autoWin++; playCount++;
            return 'It\'s a tie'; 
        case cleanPlayerSelected=='Rock' && computerSelection=='Scissors'
        || cleanPlayerSelected=='Scissors' && computerSelection=='Paper'
        || cleanPlayerSelected=='Paper' && computerSelection=='Rock': 
            playerWin++; playCount++;
            return `You win! ${cleanPlayerSelected} beats ${computerSelection}`; 
        default: 
            autoWin++; playCount++;
            return `You lose! ${computerSelection} beats ${cleanPlayerSelected}`; 

    }
}

// let gameRounds=()=>{
//     for (let i=0;i<5;i++){
//         alert(`Round ${i+1} begins`)
//         let playerSelection=prompt('Rock/Paper/Scissors?','');
//         alert(playThis(playerSelection,getComputerChoice()));
//     }
//     wins > 2 ?
//     alert(`You have won the tournament by a count of ${wins} rounds`):
//     alert(`You have lost the tournament by a count of ${5-wins} rounds`)
// };
// gameRounds();