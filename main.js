const cells = document.querySelectorAll('.cell');
let nextStep = 'X';
let isTrue = false;


const btn = document.querySelector('.btn');
btn.addEventListener('click',()=>{
    btn.setAttribute('disabled','true');
    if(isTrue) {
    nextStep = 'X';
    isTrue = false;
    document.querySelector('.status').innerText = 'Next move: '+ nextStep;
    cells.forEach(value=>{
        value.innerText=''
    })
   }
});
const data = [
    //gorizantal
    [0,1,2],
    [3,4,5],
    [6,7,8],
    //vertikal
    [0,3,6],
    [1,4,7],
    [2,5,8],
    //dioaganal
    [2,4,6],
    [0,4,8]
]




const handleClick = (cell) => {
    
    if(cell.innerText==='' && !isTrue && btn.getAttribute('disabled')) {
        cell.innerText = nextStep === 'X'? 'X' : 'O';
        nextStep = nextStep === 'X' ? 'O':'X';
        document.querySelector('.status').innerText = 'Next move: '+ nextStep;
        winner();
    } else {
        alert(btn.getAttribute('disabled')?  isTrue? 'O`yin tugadi!' : 'Bu yacheyka  belgilangan!' : 'Hali o`yin boshlanmadi' );
    }
  
}

const winner = () => {
    const win = data.find((value)=>{
        const first = cells[value[0]].innerText;
        const second = cells[value[1]].innerText;
        const third = cells[value[2]].innerText;

        if(first===second && second === third && third !== '') {
            return true;
        }

        
    })
    if(win) {
        isTrue = true;
        let winner = nextStep === 'X'? 'O':'X';
        document.querySelector('.status').innerText = 'Game Over Winner is '+ winner;
        btn.removeAttribute('disabled');
    }
}

cells.forEach((value) => {
    value.addEventListener('click',() => {
       handleClick(value);
       
    })
})

