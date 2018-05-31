const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom',function(){
    it('Si la palabra termina con "ar", se le quitan esas dos letras',function(){
        const translation =platzom("Programar")
        expect(translation).to.equal("Program")
    })
    it('si la palabra termina con Z, se le añade "pe" al final',function(){
        const translation1 =platzom("Zorro")
        const translation2 =platzom("Zarpar")
        expect(translation1).to.equal("Zorrope")
        expect(translation2).to.equal("Zarppe")
    })
    it('si la palabra traducida tine 10 o mas letras, se debe partir a la mitad y unir con un guin del medio',function(){
        const translation =platzom("abecedario")
        expect(translation).to.equal("abece-dario")
    })
    it('si la palabra original en un palindromo, nunguna regla anterior suenta y se devuelve la misma palabra intercalando mayuscula y minusculas ',function(){
        const translation =platzom("sometemos")
        expect(translation).to.equal("SoMeTeMoS")
    })
})