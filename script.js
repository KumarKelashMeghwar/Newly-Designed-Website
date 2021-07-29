const slide = document.querySelector(".slide-left");
const image = document.querySelector(".slider-image");
const name = document.querySelector(".slider-name");
const job  = document.querySelector(".slider-job");

let i = 1;

let names = {
	1 : "Peter Ronson",
	2 : "Emilia Jhonson",
	3 : "Ban Jason"
};

let jobs = {
	1 : "DOG OWNER",
	2 : "CAT OWNER",
	3 : "DOG OWNER"
};


setInterval(()=>{
	if( i==1 || i<=3 ){
		image.src = "images/face"+ i + ".jpg";
		name.innerHTML = names[2];
		name.textContent = names[i];
		job.textContent = jobs[i];
		i++;
	}
	else{
		i = 1;
	}
	
},2000);

