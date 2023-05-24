/**
 * Permite convertir unidades entre metro, pie, pulgadas y yardas.
 * @method conversorUnidades
 * @param {string} id - Id del input del formulario
 * @param {number} valor - Valor ingresado por el usuario
 */
let  conversorUnidades = (id, valor) => {
    //Creacion de variables
    let met, pul, pie, yar;
    if(valor.includes(",")){
        valor = valor.replace(",",".");
    }
    if (isNaN(valor)){ //Comprueba si el valor ingresado no es numerico
        alert("Se ingreso un valor invalido")
        met = "";
        pul = "";
        pie = "";
        yar = "";

    } else if(id==="metro"){ //Hacer conversion de metro a otras unidades
        met = valor;
        yar = 1.09361*valor;
        pie = 3.28084*valor;
        pul = 39.3701*valor;

    } else if(id==="yarda"){ //Hacer conversion de yarda a otras unidades
        yar = valor;
        met = 0.9144*valor;
        pie = 3*valor;
        pul = 36*valor;

    } else if(id==="pie"){ //Hacer conversion de pie a otras unidades
        pie = valor;
        met = 0.3048*valor;
        pul = 12*valor;
        yar = 0.333333*valor;

    } else if(id==="pulgada"){ //Hacer conversion de pulgadas a otras unidades
        pul = valor;
        met = 0.0254*valor;
        pie = 0.0833333*valor;
        yar = 0.0277778*valor;
    }
    //Asignacion de los valores a los input de la UI
    document.lasUnidades.unid_metro.value = Math.round(met*100)/100;
    document.lasUnidades.unid_yarda.value = Math.round(yar*100)/100;
    document.lasUnidades.unid_pie.value = pie.toFixed(2);
    document.lasUnidades.unid_pulgada.value = pul.toFixed(2);
}

/**
 * Permite convertir Grados a Radianes y viceversa.
 * @method convertirGR
 * @param {string} id - Id del input del formulario
 */
let convertirGR = (id) => {
    let gr, rad;
    if(id==="grados"){
        gr = document.getElementById("grados").value;
        if(isNaN(gr)){
            alert("Se ingreso un valor invalido")
            gr = "";
            rad = "";
        }
        rad = (gr*Math.PI)/180;
    }
    else{
        rad = document.getElementById("radianes").value;
        if (isNaN(rad)) {
            alert("Se ingreso un valor invalido")
            gr = "";
            rad = "";
        }
        gr = (rad*180)/Math.PI;
    }
    //Asignacion final
    document.getElementById("radianes").value = rad;
    document.getElementById("grados").value = gr;
}

/**
 * Permite visualizar u ocultar un Div en la pagina.
 * @method mostrar_ocultar
 * @param {string} valor - Valor asociado a un radio button del HTML
 */
let mostrar_ocultar =(valor) => {
    if(valor==="val_mostrar"){
        document.getElementsByName("unDiv")[0].style.display = 'block';
    } else{
        document.getElementsByName("unDiv")[0].style.display = 'none';
    }
}

/**
 * Verifica si el dato ingresado no es un numero
 * @method verLetra
 * @param {string} id - Id del input del formulario
 * @param {int} value - Valor asociado al numero ingresado
 */
let verLetra = (id, value) => {
    if(isNaN(value)){
        document.getElementById(id).value = "";
    }
}

/**
 * Suma dos valores ingresados por el usuario
 * @method sumar
 */
let sumar = () => {
    let n1, n2, res;
    n1 = document.getElementById("nums1").value;
    n2 = document.getElementById("nums2").value;
    res = Number(n1) + Number(n2);
    document.getElementById("totalS").innerHTML = res;
}

/**
 * Resta dos valores ingresados por el usuario
 * @method resta
 */
let resta = () => {
    let n1, n2, res;
    n1 = document.getElementById("numr1").value;
    n2 = document.getElementById("numr2").value;
    res = Number(n1) - Number(n2);
    document.getElementById("totalR").value = res;
}

/**
 * Multiplica dos valores ingresados por el usuario
 * @method multip
 */
let multip = () => {
    let n1, n2, res;
    n1 = document.getElementById("numm1").value;
    n2 = document.getElementById("numm2").value;
    res = Number(n1) * Number(n2);
    document.getElementById("totalM").value = res;
}

/**
 * Divide dos valores ingresados por el usuario
 * @method divic
 */
let divic = () => {
    let n1, n2, res;
    n1 = document.getElementById("numd1").value;
    n2 = document.getElementById("numd2").value;
    res = Number(n1) / Number(n2);
    document.getElementById("totalD").value = res;
}


let generarUrl = () => {
    const dist = document.getElementById("distancia").value;
    const  unid = document.getElementsByName("unidades")[0].value;


    const  urlComp = `segundaWeb.HTML#${dist}#${unid}`;
    //const  urlComp = "segundaWeb.HTML#"+dist+"#"+unid; /*otra forma de concatenar */
    window.open(urlComp, "_self");
}

let cargarValores = () => {
    let urlCompleta = window.location.href;
    urlCompleta = urlCompleta.split("#");

    const distancia = urlCompleta[1];
    const unidad = urlCompleta[2];
    document.getElementById("dist").value = `${distancia} ${unidad}`;

}

let guardarDatosLs = () => {
    const dist = document.getElementById("distancia").value;
    const  unid = document.getElementsByName("unidades")[0].value;

    localStorage.setItem("distanciaLS", dist);
    localStorage.setItem("unidadLS", unid);
    window.open("web2.HTML");
}

let tomarDatosLS = () => {
    const cant = localStorage.getItem("distanciaLS");
    const unid = localStorage.getItem("unidadLS");

    document.getElementById("dist").value = `${cant} ${unid}`;
}