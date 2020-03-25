function classificacaoTriangulo(ladoA,ladoB,ladoC) {

    if(ladoA===ladoB & ladoB === ladoC){
        console.log('Triangulo Equilatero')
    } else if((ladoA === ladoB & ladoB !== ladoC)|| 
    (ladoA !==ladoB & ladoB === ladoC) || 
    (ladoA === ladoC & ladoB !== ladoC) ){
        console.log('Triangulo Isóceles')        
    }else{
        console.log('Trinagulo Escaleno')
    }
    
}

classificacaoTriangulo(2,2,2)
classificacaoTriangulo(2,2,1)
classificacaoTriangulo(1,2,2)
classificacaoTriangulo(2,1,2)
classificacaoTriangulo(1,2,3)

