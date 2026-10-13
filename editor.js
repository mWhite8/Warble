//source: Appwrite, https://youtu.be/ymDjvycjgUM

let newX = 0, newY = 0, startX = 0, startY = 0;

const card = document.getElementById('toolbar');
card.addEventListener('mousedown', mouseDown);

function mouseDown(e) {

    //set startX, startY to the positions of the toolbar
    startX = e.clientX;
    startY = e.clientY;

    //listen for mousemove and mouseup events
    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
}

function mouseMove(e) {

    //new positions; will only be a pixel difference since mouseMove is called upon any mouse movement
    newX = startX - e.clientX;
    newY = startY - e.clientY;

    //new start position
    startX = e.clientX;
    startY = e.clientY;

    //set the positions
    card.style.top = (card.offsetTop - newY) + 'px';
    card.style.left = (card.offsetLeft - newX) + 'px';

    /*
    console.log({newX, newY});
    console.log({startX, startY});
    */
}

function mouseUp(e) {

    document.removeEventListener('mousemove', mouseMove);
}







