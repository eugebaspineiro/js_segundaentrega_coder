const productoLimpieza = [
    { producto: "Gel limpieza - Neutrogena",      
      precio: 6951    
    },
    { producto: "Agua micelar - Nivea",     
      precio: 6835
    },
    { producto: "Espuma de limpieza - Caviahue",     
      precio: 18500
    },
    { producto: "Espuma de limpieza - Cerave",
      precio: 186653
    },
    { producto: "Gel de Limpieza - Aveno",
      precio: 13940
      }
];

const productoCrema = [
    { producto: "Crema facial - Nivea",
      precio: 8123
    },
    { producto: "Gel revitalif - Loreal Paris",
      precio: 14340
    },
    { producto: "Crema facial - Bagovit",
      precio: 20849
    }
];

const productoSolar = [
    { producto: "Protector solar - La Roche Posay",
      precio: 29499
    },
    { producto: "Protector solar fps50 - Vichy",
      precio: 29880
    },
    { producto: "Gel protector solar - Eucerin",
      precio: 30271
    },
    { producto: "Protector Solar fps25 - Bagovit",
      precio: 30271
    }
];

const bienvenida = alert("Bienvenido hoy vamos a averiguar que rutina te conviene segun tu tipo de piel y cuanto presupuesto necesitas para la misma");
const tipoDePiel = ["piel seca","piel mixta","piel grasa"];
const preguntaUno = parseInt(prompt (` Ingresa el numero que corresponde de acuerdo a tu tipo de piel:` + `
    0. ` + tipoDePiel[0] + `
    1. ` + tipoDePiel[1] + `
    2. ` + tipoDePiel[2] + `

    (Tenes que escribir el numero sin el punto, por ejemplo si tu tipo de` + `
     piel es seca tenes que escribir 0 , Gracias por participar espero que` + `
     te guste tu rutina!!)`
));


function rutinaSkinCare (){
    
    if (preguntaUno === 0){       

        const pielSecaUno = parseInt (prompt (`El primer paso para tu rutina es Limpiza Facial, las opciones son:` +  `
            0. ` + productoLimpieza[0].producto + ` $ ` + productoLimpieza[0].precio + `
            1. ` + productoLimpieza[1].producto + ` $ ` + productoLimpieza[1].precio + `
            2. ` + productoLimpieza[2].producto + ` $ ` + productoLimpieza[2].precio + `
        (escribi el numero de la opcion que quieras)`
        ));

        const pielSecaDos = parseInt(prompt( `El segundo paso de tu rutina es Hidratacion, las opciones son:` +  `
            0. ` + productoCrema[0].producto + ` $ ` + productoCrema[0].precio + `
            2. ` + productoCrema[2].producto + ` $ ` + productoCrema[2].precio + `
        (escribi el numero de la opcion que quieras)`
        ));

        const pielSecaTres = parseInt(prompt( `El ultimo paso de tu rutina es Proteger tu piel, las opciones son:` +  `
            0. ` + productoSolar[0].producto + ` $ ` + productoSolar[0].precio + `
            2. ` + productoSolar[2].producto + ` $ ` + productoSolar[2].precio + `
        (escribi el numero de la opcion que quieras)`
        )); 

        alert (`Los productos que elegiste son: ` + `
            ` + productoLimpieza[pielSecaUno].producto + ` $ ` + productoLimpieza[pielSecaUno].precio + `
            ` + productoCrema[pielSecaDos].producto + ` $ ` + productoLimpieza[pielSecaDos].precio + `
            ` + productoSolar[pielSecaTres].producto + ` $ ` + productoLimpieza[pielSecaTres].precio
        );

        const totalPielSeca = productoLimpieza[pielSecaUno].precio + productoCrema[pielSecaDos].precio + productoSolar[pielSecaTres].precio;

        alert ( "El presupuesto que necesitas es de: " + " $" + totalPielSeca);

        return

    } else if ( preguntaUno === 1) { 

        const pielMixtaUno = parseInt (prompt (`El primer paso para tu rutina es Limpiza Facial, las opciones son:` +  `
            1. ` + productoLimpieza[1].producto + ` $ ` + productoLimpieza[1].precio + `
            3. ` + productoLimpieza[3].producto + ` $ ` + productoLimpieza[3].precio + `
            4. ` + productoLimpieza[4].producto + ` $ ` + productoLimpieza[4].precio + `
        (escribi el numero de la opcion que quieras)`
        ));

        const pielMixtaDos = parseInt(prompt( `El segundo paso de tu rutina es Hidratacion, las opciones son:` +  `
            1. ` + productoCrema[1].producto + ` $ ` + productoCrema[1].precio + `
            0. ` + productoCrema[0].producto + ` $ ` + productoCrema[0].precio + `
        (escribi el numero de la opcion que quieras)`
        ));

        const pielMixtaTres = parseInt(prompt( `El ultimo paso de tu rutina es Proteger tu piel, las opciones son:` +  `
            2. ` + productoSolar[2].producto + ` $ ` + productoSolar[0].precio + `
            1. ` + productoSolar[1].producto + ` $ ` + productoSolar[2].precio + `
        (escribi el numero de la opcion que quieras)`
        ));

        alert (`Los productos que elegiste son: ` + `
            ` + productoLimpieza[pielMixtaUno].producto + ` $ ` + productoLimpieza[pielMixtaUno].precio + `
            ` + productoCrema[pielMixtaDos].producto + ` $ ` + productoLimpieza[pielMixtaDos].precio + `
            ` + productoSolar[pielMixtaTres].producto + ` $ ` + productoLimpieza[pielMixtaTres].precio
        );

        const totalPielMixta = productoLimpieza[pielMixtaUno].precio + productoCrema[pielMixtaDos].precio + productoSolar[pielMixtaTres].precio;

        alert ( "El presupuesto que necesitas es de: " + " $" + totalPielMixta);

        return
    } else if (preguntaUno === 2){

        const pielGrasaUno = parseInt (prompt (`El primer paso para tu rutina es Limpiza Facial, las opciones son:` +  `
            4. ` + productoLimpieza[4].producto + ` $ ` + productoLimpieza[4].precio + `
            0. ` + productoLimpieza[0].producto + ` $ ` + productoLimpieza[0].precio + `
            2. ` + productoLimpieza[2].producto + ` $ ` + productoLimpieza[2].precio + `
        (escribi el numero de la opcion que quieras)`
        ));

        const pielGrasaDos = parseInt(prompt( `El segundo paso de tu rutina es Hidratacion, las opciones son:` +  `
            1. ` + productoCrema[1].producto + ` $ ` + productoCrema[1].precio + `
            2. ` + productoCrema[2].producto + ` $ ` + productoCrema[2].precio + `
        (escribi el numero de la opcion que quieras)`
        ));

        const pielGrasaTres = parseInt(prompt( `El ultimo paso de tu rutina es Proteger tu piel, las opciones son:` +  `
            2. ` + productoSolar[2].producto + ` $ ` + productoSolar[2].precio + `
            3. ` + productoSolar[3].producto + ` $ ` + productoSolar[3].precio + `
        (escribi el numero de la opcion que quieras)`
        ));

        alert (`Los productos que elegiste son: ` + `
            ` + productoLimpieza[pielGrasaUno].producto + ` $ ` + productoLimpieza[pielGrasaUno].precio + `
            ` + productoCrema[pielGrasaDos].producto + ` $ ` + productoLimpieza[pielGrasaDos].precio + `
            ` + productoSolar[pielGrasaTres].producto + ` $ ` + productoLimpieza[pielGrasaTres].precio
        );

        const totalPielGrasa = productoLimpieza[pielGrasaUno].precio + productoCrema[pielGrasaDos].precio + productoSolar[pielGrasaTres].precio;

        alert ( "El presupuesto que necesitas es de: " + " $" + totalPielGrasa);

        return
    } else {
        alert ("La opcion seleccionada es incorrecta, las opcion son 0, 1 o 2")
    }
}

rutinaSkinCare();

 

     


