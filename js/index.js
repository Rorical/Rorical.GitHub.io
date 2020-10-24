function countdown() {
	var nowtime = new Date();
	var endtime = new Date("2020-12-1");
	var lefttime = parseInt((endtime.getTime() - nowtime.getTime()) / 1000);
	var d = parseInt(lefttime / (24 * 60 * 60));
	var h = parseInt(lefttime / (60 * 60) % 24);
	var m = parseInt(lefttime / 60 % 60);
	var s = parseInt(lefttime % 60);
	h = addZero(h);
	m = addZero(m);
	s = addZero(s);
	document.getElementById("countdown").innerHTML = d + "天 " + h + ":" + m + ":" + s;
	if (lefttime <= 0) {
		document.getElementById("countdown").innerHTML = "deleted";
		goodbye()
		return;
	}
	setTimeout(countdown, 1000);
}

function addZero(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}

function showPost() {
	var ele = document.querySelector("#post")
	var line = document.querySelector("#post-line")
	if (ele.classList.contains("post-onshow")) {
		ele.classList.remove("post-onshow")
		line.classList.remove("post-line-onshow")
	} else {
		ele.classList.add("post-onshow")
		line.classList.add("post-line-onshow")
	}
}

function goodbye() {
	var maincontant = document.querySelector("#main-content")
	maincontant.innerHTML = ""
	document.querySelector("#showClick").remove()
	var annoucement = document.createElement("div")
	annoucement.className = "annoucement"

	var title = document.createElement("h1")
	title.innerText = "再见"

	var subtitle = document.createElement("p")
	subtitle.className = "second"
	subtitle.innerText = "さよなら"

	annoucement.appendChild(title)
	annoucement.appendChild(subtitle)
	maincontant.appendChild(annoucement)
	caches.delete("shutdown-v1")

	setTimeout(()=>{
		window.opener = null;
		window.open('','_self');
		window.close();
		open(location, '_self').close();
	},2000)
}
