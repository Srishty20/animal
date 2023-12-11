//https://teachablemachine.withgoogle.com/models/mnn8EUjug/
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundclassifier("https://teachablemachine.withgoogle.com/models/mnn8EUjug/model.json",modelready);
}
function modelready(){
    classifier.classify(gotresults);
}

function gotresults(error,results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        random_number_red=Math.floor(Math.random()*255)+1
        random_number_green=Math.floor(Math.random()*255)+1
        random_number_blue=Math.floor(Math.random()*255)+1
        document.getElementById("result_label").innerHTML="I can hear"+results[0].label
        document.getElementById("result_accuracy").innerHTML="I can hear"+(results[0].confidence*100).toFixed(2)
        document.getElementById("result_label").style.color="rgb("+random_number_red+","+random_number_green+","+random_number_blue+")"
        document.getElementById("result_accuracy").style.color="rgb("+random_number_red+","+random_number_green+","+random_number_blue+")"
        img1=document.getElementById("animal1")
        img2=document.getElementById("animal2")
        img3=document.getElementById("animal3")
        img4=document.getElementById("animal4")
        if(results[0].label=="roar"){
            img1.src="animal-01.gif"
            img2.src="animal-02.png"
            img3.src="animal-03.png"
            img4.src="animal-04.png"
        }
        else if(results[0].label=="barking"){
            img1.src="animal-01.png"
            img2.src="animal-02.gif"
            img3.src="animal-03.png"
            img4.src="animal-04.png" 
        }
        else if(results[0].label=="meowing"){
            img1.src="animal-01.png"
            img2.src="animal-02.png"
            img3.src="animal-03.gif"
            img4.src="animal-04.png" 
        }
        else{
            img1.src="animal-01.png"
            img2.src="animal-02.png"
            img3.src="animal-03.png"
            img4.src="animal-04.gif" 
        }
    }
}











 

