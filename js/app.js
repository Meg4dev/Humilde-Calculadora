//! CALCULADORA DE IMPUESTOS EN COMPRAS DE JUEGOS, MEMBRESÍAS O TRANSACCIONES DIGITALES EN GENERAL. LA MISMA PERMITE EL CALCULO DE IMPUESTOS EN
//! PESOS ARGENTINOS COMO EN DÓLARES, HACIENDO LA CONVERSIÓN Y MOSTRANDO EL RESULTADO EN PESOS ARGENTINOS.
function calcularIva(monto, iva) {
    return monto * 0.21
}
function calcularImpPais(monto, impPais) {
    return monto * 0.170
}
function calcularImpGanancias (monto, impGanancias) {
    return monto * 0.35
}
function DolaraPesoArg (monto, precioUsd){
    return monto * precioUsd
}
function calcularIIBB (monto, valorIIBB){
    return monto * valorIIBB
}

const formatearDecimal = numero => { return numero.toLocaleString('es-AR', { minimunFractionDigits: 2, maximumFractionDigits: 2 }); }

function calcularMontoTotal(){
    let opciones = prompt("Calcular impuestos en: 1) AR$  2) U$D")
    if ( opciones === "1"){
        let opcionProvincia
        let valorIIBB
        let provincia
        do {
            alert(`IMPORTANTE: Hay provincias que aplican el Impuesto a Ingresos Brutos, a continuación se mostrará una lista de las mismas. Si su provincia no se encuentra, por favor, presione "Salir".`)
            opcionProvincia = parseInt(prompt (`1. CABA (2.0%) \n 2. Buenos Aires (2.0%) \n 3. Chaco (5.5%) \n 4. Córdoba (3.0%) \n 5. La Pampa (1.0%) \n 6. Neuquén (4.0%) \n 7. Río Negro (5.0%) \n 8. Salta (3.6%) \n 9. Tierra del Fuego (3.0%) \n 10. Salir \n \n Selecciona una opción: `));
            switch (opcionProvincia) {
                case 1:
                    valorIIBB = 0.02
                    provincia = "CABA 2.0%"
                    alert("Has seleccionado Ciudad Autónoma de Buenos aires.");
                    break;
                case 2:
                    valorIIBB = 0.02
                    provincia = "Buenos Aires 2.0%"
                    alert("Has seleccionado Buenos Aires.");
                    break;
                case 3:
                    valorIIBB = 0.055
                    provincia = "Chaco 5.5%"
                    alert("Has seleccionado Chaco.");
                    break;
                case 4:
                    valorIIBB = 0.03
                    provincia = "Córdoba 3.0%"
                    alert("Has seleccionado Córdoba.");
                    break;
                case 5:
                    valorIIBB = 0.01
                    provincia = "La Pampa 1.0%"
                    alert("Has seleccionado La Pampa.");
                    break;
                case 6:
                    valorIIBB = 0.04
                    provincia = "Neuquén 4.0%"
                    alert("Has seleccionado Neuquén.");
                    break;
                case 7:
                    valorIIBB = 0.05
                    provincia = "Río Negro 5.0%"
                    alert("Has seleccionado Río Negro.");
                    break;
                case 8:
                    alert("Has seleccionado Salta.");
                    valorIIBB = 0.036
                    provincia = "Salta 3.6%"
                    break;
                case 9:
                    valorIIBB = 0.03
                    provincia = "Tierra del Fuego 3.0%"
                    alert("Has seleccionado Tierra del Fuego.");
                    break;
                case 10:
                    valorIIBB = 0
                    provincia = "No aplica"
                    break;
                default:
                    alert("Por favor, ingrese una opción valida.");
            }
        } while (opcionProvincia !== 1 && opcionProvincia !== 2 && opcionProvincia !== 3 && opcionProvincia !== 4 && opcionProvincia !== 5 && opcionProvincia !== 6 && opcionProvincia !== 7 && opcionProvincia !== 8 && opcionProvincia !== 9 && opcionProvincia !== 10);
        let monto = parseFloat(prompt("Ingrese el monto en pesos que desea calcular: "))
        if (isNaN (monto) || monto <= 0){
            alert("Por favor, ingrese un monto válido.")} else {
                let iva = 0.21
                let calculoiva = calcularIva(monto, iva)
                let impPais = 0.170
                let calculoImpPais = calcularImpPais(monto, impPais)
                let impGanancias = 0.35
                let calculoImpGanancias = calcularImpGanancias(monto, impGanancias)
                let calculoIIBB = calcularIIBB(monto, valorIIBB)
                let montoTotal = monto + calculoiva + calculoImpPais + calculoImpGanancias + calculoIIBB
                alert (`El monto sin impuestos es: AR$${formatearDecimal (monto)} \n IVA (21%): AR$${formatearDecimal(calculoiva)} \n Impuesto País (17,5%): AR$${formatearDecimal (calculoImpPais)} \n Impuesto a las ganancias (35%): AR$${formatearDecimal (calculoImpGanancias)} \n IIBB ${provincia}: AR$${formatearDecimal(calculoIIBB)} \n\n Monto total: AR$${formatearDecimal(montoTotal)} \n\n\n (Tenga en cuenta que el porcentaje de impuestos puede ir variando en base a las nuevas leyes aprobadas.)`)
            }
        } else if (opciones === "2"){
            let opcionProvincia
            let valorIIBB
            let provincia
            do {
                alert(`IMPORTANTE: Hay provincias que aplican el Impuesto a Ingresos Brutos, a continuación se mostrará una lista de las mismas. Si su provincia no se encuentra, por favor, presione "Salir".`)
                opcionProvincia = parseInt(prompt (`1. CABA (2.0%) \n 2. Buenos Aires (2.0%) \n 3. Chaco (5.5%) \n 4. Córdoba (3.0%) \n 5. La Pampa (1.0%) \n 6. Neuquén (4.0%) \n 7. Río Negro (5.0%) \n 8. Salta (3.6%) \n 9. Tierra del Fuego (3.0%) \n 10. Salir \n \n Selecciona una opción: `));
                switch (opcionProvincia) {
                    case 1:
                        valorIIBB = 0.02
                        provincia = "CABA 2.0%"
                        alert("Has seleccionado Ciudad Autónoma de Buenos aires.");
                        break;
                    case 2:
                        valorIIBB = 0.02
                        provincia = "Buenos Aires 2.0%"
                        alert("Has seleccionado Buenos Aires.");
                        break;
                    case 3:
                        valorIIBB = 0.055
                        provincia = "Chaco 5.5%"
                        alert("Has seleccionado Chaco.");
                        break;
                    case 4:
                        valorIIBB = 0.03
                        provincia = "Córdoba 3.0%"
                        alert("Has seleccionado Córdoba.");
                        break;
                    case 5:
                        valorIIBB = 0.01
                        provincia = "La Pampa 1.0%"
                        alert("Has seleccionado La Pampa.");
                        break;
                    case 6:
                        valorIIBB = 0.04
                        provincia = "Neuquén 4.0%"
                        alert("Has seleccionado Neuquén.");
                        break;
                    case 7:
                        valorIIBB = 0.05
                        provincia = "Río Negro 5.0%"
                        alert("Has seleccionado Río Negro.");
                        break;
                    case 8:
                        alert("Has seleccionado Salta.");
                        valorIIBB = 0.036
                        provincia = "Salta 3.6%"
                        break;
                    case 9:
                        valorIIBB = 0.03
                        provincia = "Tierra del Fuego 3.0%"
                        alert("Has seleccionado Tierra del Fuego.");
                        break;
                    case 10:
                        valorIIBB = 0
                        provincia = "No aplica"
                        break;
                    default:
                        alert("Por favor, ingrese una opción valida.");
                }
            } while (opcionProvincia !== 1 && opcionProvincia !== 2 && opcionProvincia !== 3 && opcionProvincia !== 4 && opcionProvincia !== 5 && opcionProvincia !== 6 && opcionProvincia !== 7 && opcionProvincia !== 8 && opcionProvincia !== 9 && opcionProvincia !== 10);
            let monto = parseFloat(prompt("Ingrese el monto en dólares que desea calcular: "))
            if (isNaN (monto) || monto <= 0){
                alert("Por favor, ingrese un monto válido.")} else {
                    let precioUsd = 930.50
                    let calcDolaraPeso = DolaraPesoArg(monto, precioUsd)
                    let iva = 0.21
                    let calculoiva = calcularIva(calcDolaraPeso, iva)
                    let impPais = 0.170
                    let calculoImpPais = calcularImpPais(calcDolaraPeso, impPais)
                    let impGanancias = 0.35
                    let calculoImpGanancias = calcularImpGanancias(calcDolaraPeso, impGanancias)
                    let calculoIIBB = calcularIIBB(calcDolaraPeso, valorIIBB)
                    let montoTotal = calcDolaraPeso + calculoiva + calculoImpPais + calculoImpGanancias + calculoIIBB
                    alert (`El monto sin impuestos es: AR$${formatearDecimal (calcDolaraPeso)} \n IVA (21%): AR$${formatearDecimal (calculoiva)} \n Impuesto País (17,5%): AR$${formatearDecimal (calculoImpPais)} \n Impuesto a las ganancias (35%): AR$${formatearDecimal (calculoImpGanancias)} \n IIBB ${provincia}: AR$${formatearDecimal(calculoIIBB)} \n\n Monto total: AR$${formatearDecimal (montoTotal)} \n\n\n (Cotización Dólar BNA: AR$${precioUsd})`)
                }
    } else {
        alert("Por favor, ingrese una opción válida.")
    }
}


calcularMontoTotal()