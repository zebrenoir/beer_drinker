function Biere(nom, prix, contenance, degre) {
	this.nom = nom;
	this.prix = prix;
	this.degre = degre;
	this.contenance = contenance;
	this.prix100 = (100 / this.contenance) * this.prix;

	this.dispInfo = function () {
		console.log("nom : " + this.nom + "\nprix : " + this.prix + "\ndegre : " + this.degre + "\ncontenance : " + this.contenance);
	};

	this.calculIndice = function() {
		this.indice = degre / this.prix100;
	};
}

var bieres = {
	"1664":  new Biere("1664", 0, 0, 5.5),
	affligem:  new Biere("Affligem", 0, 0, 6.7),
	barbar: new Biere("Barbãr", 0, 0, 8),
	namur: new Biere("Blanche de Namur", 0, 0, 4.5),
	bud: new Biere("Budweiser", 0, 0, 5),
	bush: new Biere("Bush ambrée", 0, 0, 12),
	campus: new Biere("Campus", 0, 0, 5),
	carlsberg: new Biere("Carlsberg", 0, 0, 5.5),
	carolus: new Biere("Carolus", 0, 0, 7.5),
	chimayTriple: new Biere("Chimay Triple", 0, 0, 8),
	chouffe: new Biere("Chouffe", 0, 0, 8),
	corona: new Biere("Corona", 0, 0, 4.4),
	cuvee: new Biere("Cuvée des Trolls", 0, 0, 7),
	duvel: new Biere("Duvel", 0, 0, 8.5),
	goudale: new Biere("Goudale", 0, 0, 7.2),
	grimBlonde: new Biere("Grimbergen blonde", 0, 0, 6.7),
	grimBlanche: new Biere("Grimbergen blanche", 0, 0, 6),
	grimAmbree: new Biere("Grimbergen ambrée", 0, 0, 6.5),
	grolsch: new Biere("Grolsch", 0, 0, 5),
	heineken: new Biere("Heineken", 0, 0, 5),
	hoegaarden: new Biere("Hoegaarden", 0, 0, 4.9),
	jupiler: new Biere("Jupiler", 0, 0, 5.2),
	karmeliet: new Biere("Tripel Karmeliet", 0, 0, 8.4),
	kro: new Biere("Kronenbourg", 0, 0, 4.2),
	kroTigre: new Biere("Kronenbourg Tigre Bock", 0, 0, 5.5),
	leffeBlonde: new Biere("Leffe blonde", 0, 0, 6.6),
	leffeBrune: new Biere("Leffe brune", 0, 0, 6.5),
	lupulus: new Biere("Lupulus", 0, 0, 8.5),
	pelforthBlonde: new Biere("Pelforth blonde", 0, 0, 5.8),
	pelforthAmbree: new Biere("Pelforth ambrée", 0, 0, 6),
	rinceCochon: new Biere("Rince Cochon", 0, 0, 8.5),
	rocherfort6: new Biere("Rochefort 6", 0, 0, 7.5),
	rocherfort8: new Biere("Rochefort 8", 0, 0, 9.2),
	rocherfort10: new Biere("Rochefort 10", 0, 0, 11.3),
	saisonDupont: new Biere("Saison Dupont", 0, 0, 6.5),
	stella: new Biere("Stella Artois", 0, 0, 5.2)
};

var compareIndices = function () {

	var choixBiere1 = document.getElementById("degre1");
	var choix1 = choixBiere1.options[choixBiere1.selectedIndex].value;
	var degre1 = bieres[choix1].degre;
	var prix1 = parseFloat(document.getElementById("prix1").value);
	var choixContenance1 = document.getElementById("contenance1");
	var contenance1 = parseFloat(choixContenance1.options[choixContenance1.selectedIndex].value);

	var choixBiere2 = document.getElementById("degre2");
	var choix2 = choixBiere2.options[choixBiere2.selectedIndex].value;
	var degre2 = bieres[choix2].degre;
	var prix2 = parseFloat(document.getElementById("prix2").value);
	var choixContenance2 = document.getElementById("contenance2");
	var contenance2 = parseFloat(choixContenance2.options[choixContenance2.selectedIndex].value);

 	if (!prix1 || !prix2) {
		alert("Remplissez tous les champs avant de décapsuler !");
	} else {

		var biere1 = new Biere("bière n°1", prix1, contenance1, degre1);
		var biere2 = new Biere("bière n°2", prix2, contenance2, degre2);
		

		/*var result = document.createElement("div");
		var textResult = document.createTextNode("La bière de pochtron est la " + winner + " !");
		result.appendChild(textResult);
	*/
		biere1.dispInfo();
		biere2.dispInfo();

		biere1.calculIndice();
		biere2.calculIndice();

		var winner = "";
		var bool = true;
		var winnerContenance = 0;
		
		if (biere1.indice > biere2.indice) {
			winner = bieres[choix1].nom;
			winnerContenance = contenance1;
		} else if (biere1.indice === biere2.indice) {
			bool = false;
		} else {
			winner = bieres[choix2].nom;
			winnerContenance = contenance2;
		}
		
		var result = document.createElement("div");
		result.setAttribute("id", "result");

		if (bool) {
		var textResult = document.createTextNode("La bière de pochtron est la " + winner + " (" + winnerContenance + " cl) !");
		
		} else {
		var textResult = document.createTextNode("C'est le même délire, faites-vous plaisir !")
		}

		result.appendChild(textResult);
		document.body.appendChild(result);

		var formulaire = document.getElementById("formulaire");
		formulaire.reset();

		console.log(formulaire);
		console.log(biere1.indice);
		console.log(biere2.indice);
		console.log(contenance2);
	}
};

var btn = document.getElementById("button");
btn.addEventListener("click", compareIndices, false);