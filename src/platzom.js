export default function platzom(str){
    let translation=str
    if (str.toLowerCase().endsWith('ar')) {
        translation=str.slice(0,-2)
    }

    //si la palabra termina con Z, se le añade "pe" al final
    if (str.toLowerCase().startsWith('z')) {
        //translation= translation + 'pe'
        translation += 'pe'
    }    

    //si la palabra traducida tine 10 o mas letras,
    // se debe partir a la mitad y unir con un guin del medio
    const length =translation.length;
    if(length >=10){
       const firstHalf = translation.slice(0,Math.round(length/2));
       const secondHalf = translation.slice(Math.round(length/2)); // si no le colocamos el primer parametro el va a tomar de la mitad hacia atras 
        translation = `${firstHalf}-${secondHalf}`
    }

    //si la palabra original en un palindromo,
    // nunguna regla anterior suenta y se devuelve la misma palabra intercalando mayuscula y minusculas
    //Nota el reverse para un String no existe 
    // Pero para un array si existe
    // si coloco esto en la consola "fernando".split("")  me devuelve (8) ["f", "e", "r", "n", "a", "n", "d", "o"]
    const reverse_str =(str) => str.split('').reverse().join('') 
    
    function minMay(str){
        const length =str.length
        let translation = ''
        let capitalize = true
        for (let i = 0; i < length; i++) {
            const char =str.charAt(i)
            translation += capitalize ? char.toUpperCase() : char.toLowerCase()                   
            capitalize = !capitalize
        }
        return translation
    }
    if(str == reverse_str(str)){
        return minMay(str)   
    }

    return translation
}
