//! CALCULADORA DE IMPUESTOS EN PESOS ARGENTINOS Y EN DOLARES A PESOS ARGENTINOS

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

const formatearDecimal = numero => { return numero.toLocaleString('es-AR', { minimunFractionDigits: 2, maximumFractionDigits: 2 }); }

function calcularMontoTotal(){
    let opciones = prompt("Calcular impuestos en: 1) AR$  2) USD")
    if ( opciones === "1"){
        let monto = parseFloat(prompt("Ingrese el monto en pesos que desea calcular: "))
        if (isNaN (monto) || monto <= 0){
            alert("Por favor, ingrese un monto válido.")} else {
                let iva = 0.21
                let calculoiva = calcularIva(monto, iva)
                let impPais = 0.170
                let calculoImpPais = calcularImpPais(monto, impPais)
                let impGanancias = 0.35
                let calculoImpGanancias = calcularImpGanancias(monto, impGanancias)
                let montoTotal = monto + calculoiva + calculoImpPais + calculoImpGanancias
                alert (`El monto sin impuestos es: AR$ ${formatearDecimal (monto)} \n IVA (21%): AR$ ${formatearDecimal(calculoiva)} \n Impuesto País (17,5%): AR$ ${formatearDecimal (calculoImpPais)} \n Impuesto a las ganancias (35%): AR$ ${formatearDecimal (calculoImpGanancias)} \n\n Monto total: AR$ ${formatearDecimal(montoTotal)} \n\n\n(Tenga en cuenta que el porcentaje de impuestos puede ir variando en base a las nuevas leyes aprobadas.)`)
            }
        } else if (opciones === "2"){
            let monto = parseFloat(prompt("Ingrese el monto en dólares que desea calcular: "))
            if (isNaN (monto) || monto <= 0){
                alert("Por favor, ingrese un monto válido.")} else {
                    let precioUsd = 929.50
                    let calcDolaraPeso = DolaraPesoArg(monto, precioUsd)
                    let iva = 0.21
                    let calculoiva = calcularIva(calcDolaraPeso, iva)
                    let impPais = 0.170
                    let calculoImpPais = calcularImpPais(calcDolaraPeso, impPais)
                    let impGanancias = 0.35
                    let calculoImpGanancias = calcularImpGanancias(calcDolaraPeso, impGanancias)
                    let montoTotal = calcDolaraPeso + calculoiva + calculoImpPais + calculoImpGanancias
                    alert (`El monto sin impuestos es: AR$ ${formatearDecimal (calcDolaraPeso)} \n IVA (21%): AR$ ${formatearDecimal (calculoiva)} \n Impuesto País (17,5%): AR$ ${formatearDecimal (calculoImpPais)} \n Impuesto a las ganancias (35%): AR$ ${formatearDecimal (calculoImpGanancias)} \n\n Monto total: AR$ ${formatearDecimal (montoTotal)} \n\n\n (Cotización a dólar oficial)`)
                }
    } else {
        alert("Por favor, ingrese una opción válida.")
    }
}


calcularMontoTotal()