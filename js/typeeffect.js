const words = [
    'a Multimedia Designer',
    'a Web Developer',
    'an IT-Supporter',
    'an Ethical Hacker',
    'an AI Developer'
];
  
let i = 0;
let offset = 0;
let len = words.length;
let forwards = true;
let skipCount = 0;
const skipDelay = 15;
const speed = 70;

const wordFlick = () => {
  setInterval(() => {
    if (forwards) {
        if (offset >= words[i].length) {
            skipCount++;
            if (skipCount === skipDelay) {
            forwards = false;
            skipCount = 0;
            }
        }
    } else {
        if (offset === 0) {
            forwards = true;
            i++;
            offset = 0;
            if (i >= len) {
            i = 0;
            }
        }
    }
    const part = words[i].slice(0, offset);
    if (skipCount === 0) {
        if (forwards) {
            offset++;
        } else {
            offset--;
        }
      }
      document.querySelector('#word').textContent = part;
    }, speed);
};
  
document.addEventListener('DOMContentLoaded', () => {
    wordFlick();
});