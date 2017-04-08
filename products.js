// Poniżej znajdują się dwie tablice. w tablicy scores umieszczono liste odzwierciedlającą jakośc danego typu
// produktu w postaci punktów. W tablicy prizes umiessczono koszty produkcji danego produktu. Są to tablice równoległe.
// zadaniem jest:
// 1. Wyswietlić w konsoli listę produktów wraz z liczba uzyskanych punktów,
// 2. znaleźć i wyświetlić najwyższą wartość punktową okreslającą najlepszą jakośc produktu,
// 3. Znaleźć i wyświetlić w konsoli produkty najlepszej jakości,
// 4. Znaleźć i wyświetlić najbardziej efektywny produkt pod względem jakości i ceny produkcji
//    (znaleźć produkt spośród listy najlepszych jakościowo produktów które są najtańsze w produkcji)

var scores = [54, 67, 87, 56, 100, 34, 24, 64, 12, 87, 26, 54, 87, 63, 52, 100, 75, 53, 43, 19, 46, 42, 100];
var prizes = [23, 34, 23, 56, 21, 47, 65, 24, 64, 48, 86, 34, 15, 34, 13, 67, 34, 53, 73, 27, 63, 12, 23];
var output;

// Ta funkcja drukuje do konsoli rezultaty każdej z próbek płynu
function printScores(scores) {
	for (i = 0; i < scores.length; i++) {
		output = "Próbka płynu nr " + i + ": " + scores[i];
		console.log(output);	
	}
}


// Ta funkcja znajduje najlepszy rezultat w tablicy próbek
function getHighscore (scores) {
	var highscore = 0;
	for (i=0; i < scores.length; i++) {
		if (scores[i] > highscore) {
			highscore = scores[i];
		}
	}
	return highscore;
}


// Ta funkcja znajduje wszystkie próbki z najlepszymi rezultatami i
// zapisuje je do tablicy bestResults
function getBestResults(scores, highscore) {
	var bestResults = [];
	for (i = 0; i < scores.length; i++) {
		if (scores[i] == highscore) {
			bestResults.push(i);
		}
	}
	return bestResults;
}


// Ta funkcja znajduje najtanszy produkt pod względem produkcji
// spośrod tablicy najlepszych próbek płynów bestResults
function getLowestPrice(bestResults, prizes) {
	var message;
	var bestPrice = prizes[bestResults[0]];
	for (i = 0; i < bestResults.length; i++) {
		if (prizes[bestResults[i]] <= bestPrice) {
			bestPrice = prizes[bestResults[i]];
			message = "Najtańszą w produkcji próbką jest próbka nr " + bestResults[i] + "." + " Jej koszt produkcji wynosi " + bestPrice;
		} 
	}
	console.log(message);
}



printScores(scores)
console.log("Najlepszy wunik w ilości uzyskanych baniek to: " + getHighscore(scores));
console.log("Oto numery próbek płynów z najlepszymi wynikami: " + getBestResults(scores, getHighscore(scores)));

// wywołuje funkcje która wyświetla w konsoli nr próbki która jest najlepsza pod względem jakości 
// oraz najtańsza pod wzgledem produkcji
getLowestPrice(getBestResults(scores, getHighscore(scores)), prizes);





	