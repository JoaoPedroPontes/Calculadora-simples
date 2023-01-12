
    //pescando os elementos
    var v1=document.getElementById("v1");
    var v2=document.getElementById("v2");
    //-----------------------------------

    //pescando o elemento e atribuindo a ele um evento, nessa caso de clique e oque acontecera quando o clique acontecer.

    //ADICAO
    document.getElementsByTagName("button")[0].addEventListener("click", () =>{
        document.getElementsByTagName("span")[0].innerHTML="O resultado é: "+(Number(v1.value)+Number(v2.value));
    });

    //SUBTRACAO
    document.getElementsByTagName("button")[1].addEventListener("click", () => {
        document.getElementsByTagName("span")[0].innerHTML="O resultado é: "+(Number(v1.value)-Number(v2.value));
    });

    //MULTIPLICACAO
    document.getElementsByTagName("button")[2].addEventListener("click", () => {
        document.getElementsByTagName("span")[0].innerHTML="O resultado é: "+(Number(v1.value)*Number(v2.value));
    });

    //DIVISAO
    document.getElementsByTagName("button")[3].addEventListener("click", () => {
        document.getElementsByTagName("span")[0].innerHTML="O resultado é "+(Number(v1.value)/(Number(v2.value)))
    });

    //-----------------------------------------------------------------------------------------------------------
