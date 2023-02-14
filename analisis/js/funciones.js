let matriz =
[[1,3,4,6],
[2,-1,3,0],
[5,1,0,2],
[0,4,-1,8]];
function gaus(){
    for(let i =0;i<matriz.length;i++){
        for(let j=0;j<matriz[i].length;j++){
            if(i==j){
                operarD(i,j);
            }
        }
    }    
    console.log(matriz);

}
function operarD(index,jindex){
    for(let i =0;i<matriz[index].length;i++){
        if(matriz[index][jindex]!=0)
        matriz[index][i]=matriz[index][i]/matriz[index][jindex];
    }

}
function verificar(){
    let l = [];
    for(let i =0;i<matriz.length;i++){
        for(let j=0;j<matriz[i].length;j++){
            if(i==j&&matriz[i][j]){
                l.push(i);
            }
        }
    } 
    
}
function seidel(){
    let matrx =
[[3,-2,1],
[2,6,-4],
[-1,-2,5]];


    let err = [100,100,100];
    let x1=0;
    let x2=0;
    let x3 = 0;
    while(err[0]<0.5 && err[1]<0.5 && err[2]<0.5){
        x1=matrx[1]*x2+ matrx[2]*x3; 
        err = 
    }
}