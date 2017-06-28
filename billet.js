function Billet (){
  this.passengers = function (name, lastname,){
    this.name = name;
    this.lastname = lastname;
  }
  this.vol = function (company, numero){
    this.company = company;
    this.numero = numero;
  }
  this.départ = function (heuredépart, heurearrivé){
    this.heuredépart = heuredépart;
    this.heurearrivé = heurearrivé;
  }
}
