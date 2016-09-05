var colorDepth = window.screen.colorDepth;

switch(colorDepth) {
	case 1:
	case 4:
	  document.bgColor = "white";
	  break;
	case 8:
	case 15:
	case 16:
	  document.bgColor = "blue";
	  break;
	case 24:
	case 32:
	  document.bgColor = "skyblue";
	  break;
	default:
	  document.bgColor = "white";
}
document.write("Your browser supports " + colorDepth + 
	" bit color.");