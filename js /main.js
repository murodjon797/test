var elName = prompt('Ismingizni kiriting!').trim();
var elAge = prompt('Yoshingizni kiriting').trim();

if (elAge >= 16) {
	alert(`Hurmatli ${elName} kirishingiz mumkin`);
} else {
	alert(`Hurmatli ${elName} 16 ga to'lganingizda kelasiz`);
}