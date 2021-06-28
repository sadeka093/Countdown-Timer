const daysEl=document.getElementById('days');
const hoursEl=document.getElementById('hours');
const minsEl=document.getElementById('mins');
const secondsEl=document.getElementById('seconds');
const newYears="1 Jan 2022";

function countdown()
{
	const newYearsDate=new Date(newYears);
	const currentDate=new Date();
    var remaining_seconds;
	const seconds=(newYearsDate-currentDate)/1000;
	
	const days=Math.floor(seconds/(3600*24));
	remaining_seconds=seconds%(3600*24);

	const hours= Math.floor(remaining_seconds/3600);
	remaining_seconds=remaining_seconds%3600;

	const minutes= Math.floor(remaining_seconds/60);
	remaining_seconds=Math.floor(remaining_seconds%60);

	console.log(days,hours,minutes,remaining_seconds);

	daysEl.innerHTML=days;
	hoursEl.innerHTML=hours;
	minsEl.innerHTML=minutes;
	secondsEl.innerHTML=remaining_seconds;
}
countdown();
