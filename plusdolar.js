var baris = 9;
var polaBintang ="*";
var polaSamaDgn ="=";
var spasi = "";
var dollar = "$";

for(let index1 = baris; index1 > 0; index1--){
var hasil = "";
var jmlhCell = (index1*2)-1;
console.log(jmlhCell);

for (let index2 = jmlhCell; index2 > 0; index2--) {
	if ((index2 %2)==0) {
    hasil = hasil.concat(polaSamaDgn); 

    } else if ((index2 /1)==jmlhCell) {
    hasil = hasil.concat(dollar);

    } else if ((index2 /1)==1) {
    hasil = hasil.concat(dollar);

	} else { 
	hasil = hasil.concat(polaBintang);
	}
}

console.log(spasi+hasil);
spasi += " ";




}