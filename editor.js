//for functions mouseDown, mouseMove, mouseUp,
//source: Appwrite, https://youtu.be/ymDjvycjgUM

let newX = 0, newY = 0, startX = 0, startY = 0;

//const card = document.getElementById('toolbar');
//card.addEventListener('mousedown', mouseDown);

numElements = 0;
const cards = new Map();

makeElementMovable("toolbar");

function insertElement() {

    //html element as a string
    el_str = '<div id="' + numElements + '"> test </div>';

    const el = document.getElementById("blank");
    el.insertAdjacentHTML("beforebegin", el_str);

    makeElementMovable(numElements.toString());
    numElements++;
}

function makeElementMovable(id) {

	//const someInput = document.querySelector('button');

	//console.log(id);

    const card = document.getElementById(id);
    card.addEventListener('mousedown', mouseDown, false);
    card.id = id;
    card.style.position = "fixed";
    card.style.color = "#000000";
    cards.set(id, card);
}

function mouseDown(e) {

	//console.log(e.currentTarget.id);

    //set startX, startY to the positions of the toolbar
    startX = e.clientX;
    startY = e.clientY;

    //listen for mousemove and mouseup events
    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
    
    document.curId = e.currentTarget.id;
}

function mouseMove(e) {

    //new positions; will only be a pixel difference since mouseMove is called upon any mouse movement
    newX = startX - e.clientX;
    newY = startY - e.clientY;

    //new start position
    startX = e.clientX;
    startY = e.clientY;

    console.log(cards.get(e.currentTarget.curId));
	//console.log(e.currentTarget.id);

    //set the positions
    //looks like a mess but "cards.get(e.currentTarget.curId)" is referring to the card that is being moved
    cards.get(e.currentTarget.curId).style.top = (cards.get(e.currentTarget.curId).offsetTop - newY) + 'px';
    cards.get(e.currentTarget.curId).style.left = (cards.get(e.currentTarget.curId).offsetLeft - newX) + 'px';

    /*
    console.log({newX, newY});
    console.log({startX, startY});
    */
}

function mouseUp(e) {

    document.removeEventListener('mousemove', mouseMove);
}







