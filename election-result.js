function electionResult( votes ) {
  let countMango = 0;
  let countBanana = 0;
  if(!Array.isArray(votes)){
    return "Invalid";
  }
  else{
    for (const partyName of votes){
      if(partyName === "mango"){
        countMango +=1;
      }
      else if(partyName === "banana"){
        countBanana +=1;
      }
    }
    if(countMango > countBanana){
      return "Mango";
    }
    else if(countBanana > countMango){
      return "Banana";
    }
    else{
      return "Draw"
    }
  }
  }
  