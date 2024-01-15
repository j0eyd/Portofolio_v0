function toggleMenu() {
	const menu = document.querySelector(".menu-links");
	const icon = document.querySelector(".hamburger-icon");
	menu.classList.toggle("open");
	icon.classList.toggle("open");
}

function sendEmail() 
{
    window.location = "mailto:joeydavid99@gmail.com";}

function copyToClipboard(textToCopy, Name) {
    navigator.clipboard.writeText(textToCopy)
    .then(() => {	
    	alert(Name + " copied to clipboard!");
    })
    .catch(err => {
		console.error("Unable to copy text to clipboard", err);
	});
}