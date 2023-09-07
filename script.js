let index = 0; 


function changeColors() {
    let colors = ["red", "aquamarine", "brown", "lavender", "lime", "beige", "orange", "black", "yellow", "green", "purple", "indigo", "white", "azure"];

    document.getElementsByTagName("body")[0].
    style.background = colors[index++]

    if (index > colors.length -1)
        index = 0;

    }

