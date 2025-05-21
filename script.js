
//Benadryl
    var button = document.getElementById("benadryl");
benadryl.addEventListener('click', function() {
    var dogWeight = prompt("For Benadryl dose, enter how much cat/dog weighs in lbs");
    var weight = dogWeight/50;
alert(weight + " mls");
});
//Bolus canine
    var button = document.getElementById("bolusDog");
bolusDog.addEventListener('click', function() {
    var dogWeight = prompt("For canine bolus dose, enter how much dog weighs in lbs");
    var weight = (dogWeight/2.2)*90;
alert(weight + " mls");
});
// Bolus feline
    var button = document.getElementById("bolusCat");
bolusCat.addEventListener('click', function() {
    var dogWeight = prompt("For feline bolus dose, enter how much cat weighs lbs");
    var weight = (dogWeight/2.2)*60;
alert(weight + " mls");
});
//Buprenorphine
    var button = document.getElementById("buprenorphine");
buprenorphine.addEventListener('click', function() {
    var dogWeight = prompt("For Buprenorphine dose, enter how much dog/cat weighs in lbs");
    var weight = ((dogWeight/2.2)*0.01/0.3) +" - " + (dogWeight/2.2)*0.02/0.3;
alert(weight + " mls");
});
//torb
    var button = document.getElementById("butorphanol");
butorphanol.addEventListener('click', function() {
    var dogWeight = prompt("For Butorphanol dose, enter how much dog weighs in lbs");
    var weight = (dogWeight/2.2)*.4/10;
alert(weight + " mls");
});
//Carprofen
    var button = document.getElementById("carprofen");
carprofen.addEventListener('click', function() {
    var dogWeight = prompt("For Carprofen dose, enter how much dog weighs in lbs");
    var weightSID = (dogWeight/2.2)*4.4;
    var weightBID = (dogWeight/2.2)*2.2;
alert(weightSID + " mg SID\n" + weightBID +" mg BID \nAvalible mgs: 100mg, 75mg, and 25mg");
});
//cefpodoxime
 var button = document.getElementById("cefopodoxime");
cefpodoxime.addEventListener('click', function() {
    var dogWeight = prompt("For Cefpodoxime dose, enter how much dog weighs in lbs");
    var weight = (dogWeight/2.2)*10;
alert(weight + " mg      \nAvalible mgs: 100mg and 200mg");
});
//Cerenia
    var button = document.getElementById("cerenia");
cerenia.addEventListener('click', function() {
    var dogWeight = prompt("For Cerenia dose, enter how much dog/cat weighs in lbs");
    var weight = dogWeight*0.045;
alert(weight + " mls");
});
//Convenia
    var button = document.getElementById("convenia");
convenia.addEventListener('click', function() {
    var dogWeight = prompt("For Convenia dose, enter how much dog/cat weighs in lbs");
    var weight = dogWeight*0.045;
alert(weight + " mls");
});
//Cosyntropin
    var button = document.getElementById("cosyntropin");
cosyntropin.addEventListener('click', function() {
    var dogWeight = prompt("For Cosyntropin dose to University of Tennessee, enter how much dog/cat weighs in lbs");
    var weight = (dogWeight/2.2)*0.005/0.25;
alert(weight + " mls");
});
//Diroban
 var button = document.getElementById("diroban");
diroban.addEventListener('click', function() {
    var dogWeight = prompt("For Diroban dose, enter how much dog weighs in lbs");
    var weight = (dogWeight/2.2)*0.1;
alert(weight + " mls");
});
//Dex SP
 var button = document.getElementById("dexSP");
dexSP.addEventListener('click', function() {
    var dogWeight = prompt("For Dex SP dose, enter how much does cat/dog weighs in lbs");
    var weight = (dogWeight/2.2)*0.5/4;
alert(weight + " mls");
});
//Doxycycline
 var button = document.getElementById("doxycycline");
doxycycline.addEventListener('click', function() {
    var dogWeight = prompt("For Doxycycline dose, enter how much does cat/dog weighs in lbs");
    var weight = (dogWeight/2.2)*10;
alert(weight + " mg \nAvalible mgs: 50mg, 100mg, and 500mg");
});
//Gabapentin
 var button = document.getElementById("gabapentin");
gabapentin.addEventListener('click', function() {
    var dogWeight = prompt("For Gabapentin dose, enter how much does cat/dog weighs in lbs");
    var weight = (dogWeight/2.2)*10;
alert(weight + " mg \nAvalible mgs: 100mg, 300mg, and 600mg");
});
//Gabapentin 50mg/ml
 var button = document.getElementById("gabapentinLiquid");
gabapentinLiquid.addEventListener('click', function() {
    var dogWeight = prompt("For liquid Gabapentin dose, enter how much cat/dog weighs in lbs");
    var weight = (dogWeight/2.2)*10/50;
alert(weight + " mls");
});
//Ketamine
 var button = document.getElementById("ketamine");
ketamine.addEventListener('click', function() {
    var dogWeight = prompt("For Ketamine dose, enter how much does cat weighs in lbs");
    var weight = (dogWeight/2.2)*0.01/0.3;
alert(weight + " mls");
});
//Metacam
 var button = document.getElementById("metacam");
metacam.addEventListener('click', function() {
    var dogWeight = prompt("For Metacam dose, enter how much does dog weigh");
    var weight = ((dogWeight/2.2)*0.1/5) +" to " + (dogWeight/2.2)*0.2/5;
alert(weight + " mls");
});
//Metronidzole
 var button = document.getElementById("metronidazole");
metronidazole.addEventListener('click', function() {
    var dogWeight = prompt("For Metronidazole dose, enter how does dog weighs in lbs");
    var weight = (dogWeight/2.2)*15;
alert(weight + " mg");
});




//Onsior
 var button = document.getElementById("onsior");
onsior.addEventListener('click', function() {
    var dogWeight = prompt("For Onsior dose, enter how much does cat weighs in lbs");
    var weight = dogWeight*0.045;
alert(weight + " mls");
});
//Prednisone
 var button = document.getElementById("prednisone");
prednisone.addEventListener('click', function() {
    var dogWeight = prompt("For Prednisone dose, enter how much cat/dog weighs in lbs");
    var weight = (dogWeight/2.2)*0.5;
alert(weight + " mg \n Avalible mg: 1mg, 5mg");
});
//propofol
 var button = document.getElementById("propofol");
propofol.addEventListener('click', function() {
    var dogWeight = prompt("For Propofol dose, enter how much cat/dog weighs in lbs");
    var weight = (dogWeight/2.2)*4/10;
alert(weight + " mls");
});

//rimadyl
 var button = document.getElementById("rimadyl");
rimadyl.addEventListener('click', function() {
    var dogWeight = prompt("For Rimadyl dose, enter how much cat/dog weighs in lbs");
    var weight = (dogWeight/2.2)*4.4/50;
alert(weight + " mls");
});





