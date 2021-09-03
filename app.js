console.log(`

                                                                                     
_____     _   _              _                     _ _ _              ___ ___ _     
|   | |___| |_| |_ ___ ___   |_|___    _____ _ _   | |_| |   _____ _ _|  _|  _|_|___ 
| | | | .'|  _|   | .'|   |  | |_ -|  |     | | |  | | | |  |     | | |  _|  _| |   |
|_|___|__,|_| |_|_|__,|_|_|  |_|___|  |_|_|_|_  |  |_|_|_|  |_|_|_|___|_| |_| |_|_|_|
                                            |___|                                    
                                                                                                                                  
`);

const heart = document.getElementById('heart');
const interested = document.getElementById('interested');
let heartClicked = 0;

heart.addEventListener('click', () => {
  heartClicked++;

  if (heartClicked > 9) {
    console.log('here');
    interested.style.display = 'block';
  }
});
