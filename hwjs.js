//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

/*function findWords(){
    //Your code goes here
    for(let i = 0; i<dog_names.length;i++){
        if(dog_string.toLowerCase().includes(dog_names[i]){
        console.log('Matched dog_name')
    }
    else{
        console.log('No Matches')
    }
}}
console.log(findWords())*/


function findWord(s,l){
    for(dog of l){
        s = s.toLowerCase()
        if(s.indexOf(dog.toLowerCase())!= -1){
            console.log('matched dog name')
        }
        else{
            console.log('no matches')
        }

    }
}
findWord(dog_string,dog_names)
//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arry = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr) {
    for (let i = 0; i<6;i++){
        if (i % 2 !== 0){
            arr.splice(i,1,"even index");
        }
    }
    console.log(arr)
}

replaceEvens(arry)
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]



