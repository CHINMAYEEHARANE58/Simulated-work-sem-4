const cardsArr = [
    {
        name: '1',
        img: 'images/1.jpeg'
    },
    {
        name: '2',
        img: 'images/2.jpeg'
    },
    {
        name: '3',
        img: 'images/3.jpeg'
    },
    {
        name: '4',
        img: 'images/4.jpeg'
    },
    {
        name: '5',
        img: 'images/5.jpeg'
    },
    {
        name: '6',
        img: 'images/6.jpeg'
    },
    {
        name: '1',
        img: 'images/1.jpeg'
    },
    {
        name: '2',
        img: 'images/2.jpeg'
    },
    {
        name: '3',
        img: 'images/3.jpeg'
    },
    {
        name: '4',
        img: 'images/4.jpeg'
    },
    {
        name: '5',
        img: 'images/5.jpeg'
    },
    {
        name: '6',
        img: 'images/6.jpeg'
    }
]

cardsArr.sort(() => 0.5 - Math.random())

const grid = document.querySelector('#grid')

function creatBoard () {
    for(let i=0; i<cardsArr.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/1.jpeg')
        card.setAttribute('data-id', i)
        grid.appendChild(card)
    }
}

creatBoard()