let btc = document.getElementById("bitcoin");
let eth = document.getElementById("ethereum");
let doge = document.getElementById("dogecoin");



let settings={
   "async":true,
   "sucrossDomain":true,
   "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
   headers:{}
} 
$.ajax(settings).done(function(response){
  console.log(response);
  btc.innerText=response.bitcoin.usd;
  eth.innerText=response.ethereum.usd;
  doge.innerText=response.dogecoin.usd;
})