//Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

function humanReadable(seconds){
    let hours = 0
    let minutes = 0
   
  if(seconds <= 0){
    return '00:00:00'
  }
    while(seconds >= 3600){
        hours++
       seconds = seconds - 3600
    }

    while(seconds >= 60){
        minutes++
        seconds = seconds - 60
    }

    if(String(hours).length !== 2){
        hours = '0' + hours
    }

    if(String(minutes).length !== 2){
        minutes = '0' + minutes;
    }

    if(String(seconds).length !== 2){
        seconds = '0' + seconds
    }
  
    return `${hours}:${minutes}:${seconds}`
}

//make seperate values for hours and minutes and reduce total number by the biggest divisor until you can no longer;