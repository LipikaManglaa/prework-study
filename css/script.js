var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
 for (var x = 0; x < topics.length; x++) {
   console.log(topics[x]);
 }
}

  
function topicData(){
    if(topics==="topics"){
        console.log("Here are the topics we learned through Prework")
    }else if(topics==="HTMl"){
        console.log("HTMl")
    }else if(topics ==="Css"){
        console.log("Css")
    }else if(topics==="JavaScript"){
        console.log("JavaScript")
    }else if(topics ==="Git"){
        console.log("Git")
    }else if(topics==="which topic we study first"){
        console.log("which topic we study first")
    }else if(topics==="Let's study JavaScript"){
        console.log("Let's study JavaScript")
    }else{
        console.log("Please try again")
    }

}
console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');

topicData();

// var topics="HTML,Css,JavaScript";
// console.log(topics);

// var a=prompt("Please enter topic name!");
// if(a=='HTML'){
//     console.log("you can get information from here")
// }else if(a=='Css'){
//     console.log("You can get informaton from here")
// }else if(a=='javaScript'){
//     console.log("You can get informaton from here")
// }else{
//     console.log("No more information , just only infomation 'HTML', 'Css','JavaScript'")
// }


// var shapes = ["triangle", "square", "pentagon", "circle"];
// console.log(shapes[0])

// for( var x=0; x<shapes.length;x++){
//     console.log(shapes[x])
// }