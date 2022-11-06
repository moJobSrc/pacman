window.onload = function () {
var iframe = document.createElement("iframe");
iframe.src="https://mojobsrc.github.io/pacman/index.html";
iframe.width=342;
iframe.height=435;
iframe.scrolling="no";
document.getElementById("sideContent").remove();
document.getElementById("subContent").remove();
var doc = document.getElementsByClassName("sub_content")[0];
console.log(doc);
doc.appendChild(iframe);
doc.style="text-align: center;";
}
