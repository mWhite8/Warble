function goop() {

    console.log("sliming");


    const input = document.getElementById("goo").value;
    document.getElementById("goo").value = "HEY";


    const fileInput = document.getElementById("myImage");
    const yourImage = document.getElementById("yourImage");


    fileInput.dest = yourImage;
    fileInput.addEventListener("change", changeImage);



    //console.log(input);
    console.log(fileInput);
}

function changeImage(e) {


        const file = e.target.files[0];
        if (file) {

            const objectUrl = URL.createObjectURL(file);
            fileInput.dest = objectUrl;
        }

        
        console.log(objectUrl);
}









