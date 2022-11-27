

export default function estilos() {
  return {
    color: {
      //color de fondo principal
      primario: "rgba(30, 30, 30, 1)",
      //color de fondo principal variante oscura
      primarioOscuro: "rgba(20, 18, 18, 1)",

      //colores usados en programa como colores complementarios
      rosa: "rgba(140, 1, 90, 1)",
      amarillo: "rgba(253, 235, 149, 1)",
      azulFondo: "rgba(114, 209, 229, 1)",
      morado: "rgba(140, 1, 250, 1)",
      transparente: `rgba(0,0,0,0)`,
      
      // colores comunes en el programa
      azulLetra: "rgba(51, 144, 255,1)",
      naranja: "rgba(195, 117, 24,1)",
      blanco: "rgba(255,255,255,1)",
      gris: "rgba(240, 240, 240,1)",
      
      // colores extras con multi propósito
      negro: "rgba(0, 0, 0, 1)",
      test: `red`
    },
    efectos: {
      //efecto tipo espejo para fondos 
      espejo: `
      background: rgba(222, 142, 255, 0.13);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(9px);
      -webkit-backdrop-filter: blur(9px);
      border: 1px solid rgba(222, 142, 255, 1);`,

    }
  }
}