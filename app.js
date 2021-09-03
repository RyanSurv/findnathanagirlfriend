console.log(`                                                                                     
_____     _   _              _                     _ _ _              ___ ___ _     
|   | |___| |_| |_ ___ ___   |_|___    _____ _ _   | |_| |   _____ _ _|  _|  _|_|___ 
| | | | .'|  _|   | .'|   |  | |_ -|  |     | | |  | | | |  |     | | |  _|  _| |   |
|_|___|__,|_| |_|_|__,|_|_|  |_|___|  |_|_|_|_  |  |_|_|_|  |_|_|_|___|_| |_| |_|_|_|
                                            |___|                                    
                                                                                                                                  
`);

const heart = document.getElementById('heart');

const ryan = document.getElementById('ryan');
const ryanH4 = document.getElementById('ryanH4');

const originalH1 = document.getElementById('originalH1');
const newH1 = document.getElementById('newH1');

let heartClicked = 0;

heart.addEventListener('click', () => {
  if (heartClicked > 5) return;

  heartClicked++;

  if (heartClicked > 4) {
    originalH1.style.display = 'none';
    newH1.style.display = 'block';
  }
});

ryan.addEventListener('click', () => {
  ryanH4.style.display = 'block';
});
