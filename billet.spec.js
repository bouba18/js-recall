describe ('Billet', function() {

beforeEach(function(){
  billet = new Billet();
})
  it('should be able to receive name and lastname', function(){
    billet.passengers ("bouba", "drame");
    expect(billet.name).toEqual("bouba")
    expect(billet.lastname).toEqual("drame")
  })
  it('what\'s your company and numero the comany', function(){
    billet.vol ("vueling", "741")
    expect(billet.company).toEqual("vueling")
    expect(billet.numero).toEqual("741")
  })
  it('should be able to hours', function(){
    billet.départ ("10:00", "20:00")
    expect(billet.heuredépart).toEqual("10:00")
    expect(billet.heurearrivé).toEqual("20:00")
  })
});
