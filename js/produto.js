async function exibirProdutos1(){
    const json = await fetch(`dados.json`);
    const prod = await json.json();
    console.log(prod);
  
    var desc = prod.Item1.descricao; var preco = prod.Item1.preco; var image = prod.Item1.img; var image1 = prod.Item1.img1; var image2 = prod.Item1.img2; var image3 = prod.Item1.img3; var image4 = prod.Item1.img4;
    localStorage.setItem("desc", desc); localStorage.setItem("preco", preco); localStorage.setItem("image", image); localStorage.setItem("image1", image1); localStorage.setItem("image2", image2); localStorage.setItem("image3", image3); localStorage.setItem("image4", image4);

  
    window.location.href = "produto.html";  
}

async function exibirProdutos2(){
    const json = await fetch(`dados.json`);
    const prod = await json.json();
    console.log(prod);
  
    var desc = prod.Item2.descricao; var preco = prod.Item2.preco; var image = prod.Item2.img; var image1 = prod.Item2.img1; var image2 = prod.Item2.img2; var image3 = prod.Item2.img3; var image4 = prod.Item2.img4;
    localStorage.setItem("desc", desc); localStorage.setItem("preco", preco); localStorage.setItem("image", image); localStorage.setItem("image1", image1); localStorage.setItem("image2", image2); localStorage.setItem("image3", image3); localStorage.setItem("image4", image4);

  
    window.location.href = "produto.html";  
}

async function exibirProdutos3(){
    const json = await fetch(`dados.json`);
    const prod = await json.json();
    console.log(prod);
  
    var desc = prod.Item3.descricao; var preco = prod.Item3.preco; var image = prod.Item3.img; var image1 = prod.Item3.img1; var image2 = prod.Item3.img2; var image3 = prod.Item3.img3; var image4 = prod.Item3.img4;
    localStorage.setItem("desc", desc); localStorage.setItem("preco", preco); localStorage.setItem("image", image); localStorage.setItem("image1", image1); localStorage.setItem("image2", image2); localStorage.setItem("image3", image3); localStorage.setItem("image4", image4);

  
    window.location.href = "produto.html";  
}

async function exibirProdutos4(){
    const json = await fetch(`dados.json`);
    const prod = await json.json();
    console.log(prod);
  
    var desc = prod.Item4.descricao; var preco = prod.Item4.preco; var image = prod.Item4.img; var image1 = prod.Item4.img1; var image2 = prod.Item4.img2; var image3 = prod.Item4.img3; var image4 = prod.Item4.img4;
    localStorage.setItem("desc", desc); localStorage.setItem("preco", preco); localStorage.setItem("image", image); localStorage.setItem("image1", image1); localStorage.setItem("image2", image2); localStorage.setItem("image3", image3); localStorage.setItem("image4", image4);

  
    window.location.href = "produto.html";  
}
async function exibirProdutos5(){
    const json = await fetch(`dados.json`);
    const prod = await json.json();
    console.log(prod);
  
    var desc = prod.Item5.descricao; var preco = prod.Item5.preco; var image = prod.Item5.img; var image1 = prod.Item5.img1; var image2 = prod.Item5.img2; var image3 = prod.Item5.img3; var image4 = prod.Item5.img4;
    localStorage.setItem("desc", desc); localStorage.setItem("preco", preco); localStorage.setItem("image", image); localStorage.setItem("image1", image1); localStorage.setItem("image2", image2); localStorage.setItem("image3", image3); localStorage.setItem("image4", image4);

  
    window.location.href = "produto.html";  
}

var desc = localStorage.getItem("desc");
var preco = localStorage.getItem("preco");
document.getElementById("nome-produto").textContent = desc;
document.getElementById("precodol").textContent = preco;

var image = localStorage.getItem("image");
document.getElementById("imgpdt").src = image;
document.getElementById("imagem1").src = image;
var image1 = localStorage.getItem("image1");
document.getElementById("imagem2").src = image1
var image2 = localStorage.getItem("image2");
document.getElementById("imagem3").src = image2
var image3 = localStorage.getItem("image3");
document.getElementById("imagem4").src = image3
var image4 = localStorage.getItem("image4");
document.getElementById("imagem5").src = image4