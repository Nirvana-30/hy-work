var add =function(num){

}
function save(){
	var result =0;
	return (num)=>{
		if(!num) return result
		result = result + num
	}
}
add =save(add);
add(100);
add(200);
console.log(add());