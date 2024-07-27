const hoy = new Date();
// Formatea la fecha al formato YYYY-MM-DD requerido por el input type="date"
const fechaFormateada = hoy.toISOString().split("T")[0];
document.getElementById("fecha_reporte").value = fechaFormateada;

document
  .getElementById("boton_previsualizar")
  .addEventListener("click", Previsualizar);

function calcularTiempoDetenido() {
  // Obtener valores de fecha y hora de ocurrencia
  const fechaOcurrencia = document.getElementById("fecha_ocurrencia").value;
  const horaOcurrencia = document.getElementById("hora_ocurrencia").value;

  // Obtener valores de fecha y hora de reinicio
  const fechaReinicio = document.getElementById("fecha_reinicio").value;
  const horaReinicio = document.getElementById("hora_reinicio").value;

  // Comprobar que todas las entradas tienen valor
  if (fechaOcurrencia && horaOcurrencia && fechaReinicio && horaReinicio) {
    // Crear objetos Date
    const fechaHoraOcurrencia = new Date(
      fechaOcurrencia + "T" + horaOcurrencia
    );
    const fechaHoraReinicio = new Date(fechaReinicio + "T" + horaReinicio);

    // Calcular la diferencia en milisegundos
    const diferencia = fechaHoraReinicio - fechaHoraOcurrencia;

    // Convertir la diferencia a días, horas, minutos y segundos
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor(
      (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Formatear el resultado
    const tiempoDetenido = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

    // Mostrar el resultado en el campo de texto
    document.getElementById("tiempo_detenido").value = tiempoDetenido;
  } else {
    document.getElementById("tiempo_detenido").value = "";
  }
}

// Agregar event listeners a los inputs

function changeTitulo() {
  const codigo_unidad = document.getElementById("codigo_unidad").value;
  const codigo_acople = document.getElementById("codigo_acople").value;
  const tipo_unidad = document.getElementById("tipo_unidad").value;
  const tipo_falla = document.getElementById("tipo_falla").value;
  const lugar_ocurrencia = document.getElementById("lugar_ocurrencia").value;

  const titulo_Insert = `INCIDENTE:${codigo_unidad}//${codigo_acople}//${tipo_unidad}//${tipo_falla}//${lugar_ocurrencia}`;

  if (
    codigo_unidad &&
    codigo_acople &&
    tipo_unidad &&
    tipo_falla &&
    lugar_ocurrencia
  ) {
    document.getElementById("titulo_incidente").value = titulo_Insert;
  } else {
    document.getElementById("titulo_incidente").value = "";
  }
}

document
  .getElementById("codigo_unidad")
  .addEventListener("change", changeTitulo);
document
  .getElementById("codigo_acople")
  .addEventListener("change", changeTitulo);
document.getElementById("tipo_unidad").addEventListener("change", changeTitulo);
document.getElementById("tipo_falla").addEventListener("change", changeTitulo);
document
  .getElementById("lugar_ocurrencia")
  .addEventListener("change", changeTitulo);

document
  .getElementById("fecha_ocurrencia")
  .addEventListener("change", calcularTiempoDetenido);
document
  .getElementById("hora_ocurrencia")
  .addEventListener("change", calcularTiempoDetenido);
document
  .getElementById("fecha_reinicio")
  .addEventListener("change", calcularTiempoDetenido);
document
  .getElementById("hora_reinicio")
  .addEventListener("change", calcularTiempoDetenido);

document
  .getElementById("boton_registrar")
  .addEventListener("click", ValidarForm);

function ValidarForm() {
  var inputs = document.querySelectorAll("#Principal_Form input");
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value.trim() === "") {
      alert("Por favor, completa todos los campos.");
      return false; // Detiene el envío del formulario
    } else {
      Registrar();
    }
  }

  async function Registrar() {
    var codigo_unidad = document.getElementById("codigo_unidad").value;
    var placa_remolque = document.getElementById("placa_remolque").value;
    var codigo_acople = document.getElementById("codigo_acople").value;
    var placa_semirremolque = document.getElementById(
      "placa_semirremolque"
    ).value;
    var nombre_operador = document.getElementById("nombre_operador").value;
    var celular_operador = document.getElementById("celular_operador").value;
    var tipo_unidad = document.getElementById("tipo_unidad").value;
    var tipo_unidadparticular = document.getElementById(
      "tipo_unidadparticular"
    ).value;
    var estado_carga = document.getElementById("estado_carga").value;
    var tipo_carga = document.getElementById("tipo_carga").value;
    var origen = document.getElementById("origen").value;
    var destino = document.getElementById("destino").value;
    var fecha_ocurrencia = document.getElementById("fecha_ocurrencia").value;
    var hora_ocurrencia = document.getElementById("hora_ocurrencia").value;
    var fecha_reinicio = document.getElementById("fecha_reinicio").value;
    var hora_reinicio = document.getElementById("hora_reinicio").value;
    var tiempo_detenido = document.getElementById("tiempo_detenido").value;
    var tipo_falla = document.getElementById("tipo_falla").value;
    var lugar_ocurrencia = document.getElementById("lugar_ocurrencia").value;
    var zona = document.getElementById("zona").value;
    var sede = document.getElementById("sede").value;
    var region = document.getElementById("region").value;
    var provincia = document.getElementById("provincia").value;
    var distrito = document.getElementById("distrito").value;
    var latitud = document.getElementById("latitud").value;
    var longitud = document.getElementById("longitud").value;
    var inicio_tramo = document.getElementById("inicio_tramo").value;
    var fin_tramo = document.getElementById("fin_tramo").value;
    var personal_informante = document.getElementById(
      "personal_informante"
    ).value;
    var gestor = document.getElementById("gestor").value;
    var fecha_recepcion_informacion = document.getElementById(
      "fecha_recepcion_informacion"
    ).value;
    var hora_recepcion_informacion = document.getElementById(
      "hora_recepcion_informacion"
    ).value;
    var ubicacion_actual = document.getElementById("ubicacion_actual").value;
    var detalle_clima = document.getElementById("detalle_clima").value;

    var zona_peligrosa = document.getElementById("Zona_Peligrosa_Si").checked
      ? "SI"
      : document.getElementById("Zona_Peligrosa_No").checked
      ? "NO"
      : "";

    var supervisores_informados = document.getElementById(
      "supervisores_informados"
    ).value;
    var seguimiento_falla = document.getElementById("seguimiento_falla").value;
    var controlador_gps = document.getElementById("controlador_gps").value;
    var cargo_area = document.getElementById("cargo_area").value;
    var fecha_reporte = document.getElementById("fecha_reporte").value;
    var turno = document.getElementById("turno").value;

    const respuesta = await fetch(
      "https://sheet.best/api/sheets/0503114c-fd14-429d-8a17-960266cfedac",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          codigo_unidad: codigo_unidad,
          placa_remolque: placa_remolque,
          codigo_acople: codigo_acople,
          placa_semirremolque: placa_semirremolque,
          nombre_operador: nombre_operador,
          celular_operador: celular_operador,
          tipo_unidad: tipo_unidad,
          tipo_unidadparticular: tipo_unidadparticular,
          estado_carga: estado_carga,
          tipo_carga: tipo_carga,
          origen: origen,
          destino: destino,
          fecha_ocurrencia: fecha_ocurrencia,
          hora_ocurrencia: hora_ocurrencia,
          fecha_reinicio: fecha_reinicio,
          hora_reinicio: hora_reinicio,
          tiempo_detenido: tiempo_detenido,
          tipo_falla: tipo_falla,
          lugar_ocurrencia: lugar_ocurrencia,
          zona: zona,
          sede: sede,
          region: region,
          provincia: provincia,
          distrito: distrito,
          latitud: latitud,
          longitud: longitud,
          inicio_tramo: inicio_tramo,
          fin_tramo: fin_tramo,
          personal_informante: personal_informante,
          gestor: gestor,
          fecha_recepcion_informacion: fecha_recepcion_informacion,
          hora_recepcion_informacion: hora_recepcion_informacion,
          ubicacion_actual: ubicacion_actual,
          detalle_clima: detalle_clima,
          zona_peligrosa: zona_peligrosa,
          supervisores_informados: supervisores_informados,
          seguimiento_falla: seguimiento_falla,
          controlador_gps: controlador_gps,
          cargo_area: cargo_area,
          fecha_reporte: fecha_reporte,
          turno: turno,
        }),
      }
    );
    console.log(respuesta);

    document.getElementById("Principal_Form").style.display = "none";

    const successMessage = document.getElementById("Registro_Exitoso");
    successMessage.style.display = "flex"; // Cambiamos de 'block' a 'flex' para mantener el diseño
    successMessage.style.opacity = "0"; // Inicializamos la opacidad para la animación
    setTimeout(function () {
      successMessage.style.opacity = "1";
      successMessage.style.transform = "translateY(0)";
    }, 5);
  }
}

function Previsualizar() {
  var codigo_unidad = document.getElementById("codigo_unidad").value;
  var placa_remolque = document.getElementById("placa_remolque").value;
  var codigo_acople = document.getElementById("codigo_acople").value;
  var placa_semirremolque = document.getElementById(
    "placa_semirremolque"
  ).value;
  var nombre_operador = document.getElementById("nombre_operador").value;
  var celular_operador = document.getElementById("celular_operador").value;
  var tipo_unidad = document.getElementById("tipo_unidad").value;
  var tipo_unidadparticular = document.getElementById(
    "tipo_unidadparticular"
  ).value;
  var estado_carga = document.getElementById("estado_carga").value;
  var tipo_carga = document.getElementById("tipo_carga").value;
  var origen = document.getElementById("origen").value;
  var destino = document.getElementById("destino").value;
  var fecha_ocurrencia = document.getElementById("fecha_ocurrencia").value;
  var hora_ocurrencia = document.getElementById("hora_ocurrencia").value;
  var fecha_reinicio = document.getElementById("fecha_reinicio").value;
  var hora_reinicio = document.getElementById("hora_reinicio").value;
  var tiempo_detenido = document.getElementById("tiempo_detenido").value;
  var tipo_falla = document.getElementById("tipo_falla").value;
  var lugar_ocurrencia = document.getElementById("lugar_ocurrencia").value;
  var zona = document.getElementById("zona").value;
  var sede = document.getElementById("sede").value;
  var region = document.getElementById("region").value;
  var provincia = document.getElementById("provincia").value;
  var distrito = document.getElementById("distrito").value;
  var latitud = document.getElementById("latitud").value;
  var longitud = document.getElementById("longitud").value;
  var inicio_tramo = document.getElementById("inicio_tramo").value;
  var fin_tramo = document.getElementById("fin_tramo").value;
  var personal_informante = document.getElementById(
    "personal_informante"
  ).value;
  var gestor = document.getElementById("gestor").value;
  var fecha_recepcion_informacion = document.getElementById(
    "fecha_recepcion_informacion"
  ).value;
  var hora_recepcion_informacion = document.getElementById(
    "hora_recepcion_informacion"
  ).value;
  var ubicacion_actual = document.getElementById("ubicacion_actual").value;
  var detalle_clima = document.getElementById("detalle_clima").value;

  var zona_peligrosa = document.getElementById("Zona_Peligrosa_Si").checked
    ? "SI"
    : document.getElementById("Zona_Peligrosa_No").checked
    ? "NO"
    : "";

  var supervisores_informados = document.getElementById(
    "supervisores_informados"
  ).value;
  var seguimiento_falla = document.getElementById("seguimiento_falla").value;
  var controlador_gps = document.getElementById("controlador_gps").value;
  var cargo_area = document.getElementById("cargo_area").value;
  var fecha_reporte = document.getElementById("fecha_reporte").value;
  var turno = document.getElementById("turno").value;

  const contenedor = document.getElementById("Contenedor_Prev");
  contenedor.innerHTML = `
  <center>
  <table id="table2">
    <tr>
      <td colspan="1">
        <img src="logorac.png" alt="" width="70%" height="70%">
      </td>
      <td colspan="4">
        <h2 style="text-align: center">
          REPORTE DIARIO DE INCIDENCIA DE SEGURIDAD VIAL
        </h2>
      </td>
      <td colspan="1">
        <div>Código:</div>
        <div>Versión:</div>
        <div>Fecha:</div>
        <div>Página:</div>
      </td>
      <td colspan="1">
        <div>RSEG-FOR-05</div>
        <div>1.0</div>
        <div>21.09.2022</div>
        <div>2 de 2</div>
      </td>
    </tr>
    <tr>
      <th colspan="3">"TÍTULO DEL INCIDENTE"</th>
      <td colspan="4">
      INCIDENTE:${codigo_unidad}//${codigo_acople}//${tipo_unidad}//${tipo_falla}//${lugar_ocurrencia}
      </td>
    </tr>
    <tr class="section-title">
      <td colspan="7"><br></td>
    </tr>
    <tr>
      <th>CÓDIGO INTERNO DE LA UNIDAD</th>
      <th>PLACA REMOLQUE / UNIDAD</th>
      <th>CÓDIGO INTERNO ACOPLE</th>
      <th>PLACA SEMIRREMOLQUE</th>
      <th colspan="2">NOMBRE DEL OPERADOR</th>
      <th>N° DE CELULAR DEL OPERADOR</th>
    </tr>
    <tr>
      <td>${codigo_unidad}</td>
      <td>${placa_remolque}</td>
      <td>${codigo_acople}</td>
      <td>${placa_semirremolque}</td>
      <td colspan="2">${nombre_operador}</td>
      <td>${celular_operador}</td>
    </tr>
    <tr>
      <th>TIPO DE CARROCERÍA PROPIA</th>
      <th colspan="2">TIPO DE CARROCERÍA PARTICULAR</th>
      <th>ESTADO DE CARGA</th>
      <th>TIPO DE CARGA</th>
      <th>ORIGEN</th>
      <th>DESTINO</th>
    </tr>
    <tr>
      <td>${tipo_unidad}</td>
      <td colspan="2">${tipo_unidadparticular}</td>
      <td>${estado_carga}</td>
      <td>${tipo_carga}</td>
      <td>${origen}</td>
      <td>${destino}</td>
    </tr>

    <tr class="section-title">
      <td colspan="7"><br></td>
    </tr>
    <tr>
      <th>FECHA DE OCURRENCIA</th>
      <th>HORA DE OCURRENCIA</th>
      <th>FECHA DE REINICIO</th>
      <th>HORA DE REINICIO</th>
      <th>TIEMPO DETENIDO (HORAS)</th>
      <th>TIPO DE OCURRENCIA / INCIDENCIA</th>
      <th>LUGAR APROXIMADO DE LA OCURRENCIA / INCIDENCIA</th>
    </tr>
    <tr>
      <td>${fecha_ocurrencia}</td>
      <td>${hora_ocurrencia}</td>
      <td>${fecha_reinicio}</td>
      <td>${hora_reinicio}</td>
      <td>${tiempo_detenido}</td>
      <td>${tipo_falla}</td>
      <td>${lugar_ocurrencia}</td>
    </tr>
    <tr>
      <th>ZONA</th>
      <th>SEDE</th>
      <th>REGIÓN</th>
      <th>PROVINCIA</th>
      <th>DISTRITO</th>
      <th>COORDENADAS</th>
      <th>TRAMO DE VÍA / CARRETERA</th>
    </tr>
    <tr>
      <td>${zona}</td>
      <td>${sede}</td>
      <td>${region}</td>
      <td>${provincia}</td>
      <td>${distrito}</td>
      <td>
        <label for="">Latitud:</label>
        ${latitud}
        <br>
        <label for="">Longitud:</label>
        ${longitud}
      </td>
      <td>
        <label for="">Inicio Tramo</label>
        ${inicio_tramo}
        <br>
        <label for="">Fin de Tramo</label>
        ${fin_tramo}
      </td>
    </tr>
    <tr class="section-title">
      <td colspan="7"><br></td>
    </tr>
    <tr>
      <th>PERSONAL QUE INFORMÓ</th>
      <th>RESPONSABLE DEL SERVICIO</th>
      <th>FECHA DE RECEPCIÓN DE INFORMACIÓN</th>
      <th>HORA DE RECEPCIÓN DE INFORMACIÓN</th>
      <th>UBICACIÓN ACTUAL</th>
      <th>DETALLE DEL CLIMA</th>
      <th>ZONA PELIGROSA</th>
    </tr>
    <tr>
      <td>${personal_informante}</td>
      <td>${gestor}</td>
      <td>${fecha_recepcion_informacion}</td>
      <td>${hora_recepcion_informacion}</td>
      <td>${ubicacion_actual}</td>
      <td>${detalle_clima}</td>
      <td>
        <center>
          ${zona_peligrosa}
        </center>
      </td>
    </tr>

    <tr class="section-title">
      <td colspan="3">PERSONAS A LAS QUE SE INFORMÓ</td>
      <td colspan="5">DETALLES</td>
    </tr>

    <tr>
      <th colspan="3">
        ${supervisores_informados}
      <td colspan="5">
        ${seguimiento_falla}
      </td>
      </th>
    </tr>
    <tr>
      <td colspan="8"><label for="">Fotos:</label></textarea></td>
    </tr>
    <tr>
      <th colspan="8">REPORTADO POR:</th>
    </tr>
    <tr>
      <th colspan="2">NOMBRE</th>
      <th colspan="1">CARGO</th>
      <th>FECHA (año / mes / día)</th>
      <th>TURNO</th>
      <th colspan="2">FIRMA</th>
    </tr>
    <tr>
      <td colspan="2">
      ${controlador_gps}
      </td>
      <td colspan="1">
      ${cargo_area}
      </td>
      <td colspan="1">
      ${fecha_reporte}
      </td>
      <td colspan="1">
      ${turno}
        <td colspan="2">
        </td>
      </td>
    </tr>
  </table>
</center>
  `;

  var Principal_Form = document.getElementById("Principal_Form");
  Principal_Form.style.display = "none";
}
