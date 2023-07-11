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
        case cleanPlayerSelected==computerSelection: return 'It\'s a tie'; 
        case cleanPlayerSelected=='Rock' && computerSelection=='Scissors'
        || cleanPlayerSelected=='Scissors' && computerSelection=='Paper'
        || cleanPlayerSelected=='Paper' && computerSelection=='Rock': wins++; return `You win! ${cleanPlayerSelected} beats ${computerSelection}`; 
        default: return `You lose! ${computerSelection} beats ${cleanPlayerSelected}`; 

    }
}

let gameRounds=()=>{
    for (let i=0;i<5;i++){
        alert(`Round ${i+1} begins`)
        let playerSelection=prompt('Rock/Paper/Scissors?','');
        alert(playThis(playerSelection,getComputerChoice()));
    }
    wins > 2 ?
    alert(`You have won the tournament by a count of ${wins} rounds`):
    alert(`You have lost the tournament by a count of ${5-wins} rounds`)
};
gameRounds();