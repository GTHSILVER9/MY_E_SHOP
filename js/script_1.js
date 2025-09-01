let panier=[]
let compteur=document.getElementById("compteur");

function changerQuantite(btn,valeur){
    let span=btn.parentElement.querySelector(".qte");
    let qte=parseInt(span.textContent)+valeur;
    if(qte<1) qte=1;
    span.textContent=qte;
}

function ajouterAuPanier(nom,prix,btn){
    let
    qte=parseInt(btn.parentElement.querySelector(".qte").textContent);
    let produitExistant=panier.find(p=>p.nom===nom);
    if(produitExistant) produitExistant.qte+=qte;
    else panier.push({nom,prix,qte});
    majCompteur();
    afficherPanier();
}

function majCompteur(){
    let total=panier.reduce((s,p)=>s+p.qte,0);
    compteur.textContent=total;
}

function ouvrirModel(titre,img,desc){
    document.getElementById("modal-titre").textContent=titre;
    document.getElementById("modal-img").src=img;
    document.getElementById("modal-desc").textContent=desc;
    document.getElementById("modal").style.display="flex";
}

function fermerModal()
{document.getElementById("modal").style.display="none";}

function togglePanier(){
    let panierDiv=document.getElementById("panier-float");
    panierDiv.classList.toggle("open");
    afficherPanier();
}

function afficherPanier(){
    let contenu=document.getElementById("contenu-panier");
    contenu.innerHTML="";
    panier.forEach((p,index)=>{
        let div=document.getElementById("div");
        div.className="panier-item";
        div.innerHTML=`
        <div>
        <button onclick="modifierQte(${index}, -1)>-</button>
        <span>$ {p.qte}</span>
        <button onclick="modifierQte(${index},1)">+</button>
        </div> 
        <div>${p.prix} FCFA </div>
       <div>${p.prix*p.qte} FCFA </div> 
       <div><button class="supprimer" onclick="supprimerProduit(${index})">Supprimer</button></div>`;
       contenu.appendChild(div);
    });
    let total=panier.reduce((s,p)=>s+p.prix*p.qte,0);
    document.getElementById("total").textContent="Total : "+total+" FCFA";
}
function modifierQte(index,valeur){
    panier[index].qte+=valeur;
    if(panier[index].qte<1) panier[index].qte=1;
    majCompteur();
    afficherPanier();
}

function supprimerProduit(index){
    panier.splice(index,1);
    majCompteur();
    afficherPanier();
}
