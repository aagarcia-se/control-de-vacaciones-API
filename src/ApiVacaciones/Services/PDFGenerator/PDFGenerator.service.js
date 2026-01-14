import PDFDocument from "pdfkit";
import path from "path";
import { fileURLToPath } from "url";
import { formatDateToDisplay } from "../Utils/DateUtils.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const generateVacationRequestPDF = async (employeeData, diasPorPeriodo) => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ margin: 60 });
    const chunks = [];

    doc.on("data", chunk => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", err => reject(err));

    /* =====================================================
       ENCABEZADO
    ===================================================== */
    doc.font("Helvetica-Bold").fontSize(14)
      .text("CONSEJO NACIONAL DE ADOPCIONES", { align: "center" });
    doc.text("UNIDAD RECURSOS HUMANOS", { align: "center" });

    doc.moveDown(1);

    /* =====================================================
       TÍTULO
    ===================================================== */
    doc.fontSize(12).text(
      `BOLETA DE SOLICITUD DE VACACIONES No. ${employeeData.numeroBoleta}`,
      { align: "center" }
    );

    doc.moveDown(1);

    /* =====================================================
       FECHA
    ===================================================== */
    doc.font("Helvetica").fontSize(11)
      .text(`Guatemala, ${formatDateToDisplay(employeeData.fechaSolicitud)}`, {
        align: "right"
      });

    doc.moveDown(1.5);

    /* =====================================================
       DATOS DEL TRABAJADOR
    ===================================================== */
    doc.font("Helvetica-Bold").fontSize(11).text("Datos del trabajador:");
    doc.moveDown(0.5);

    const field = (label, value) => {
      doc.font("Helvetica").text(label, { continued: true });
      doc.font("Helvetica-Bold").text(value || "—");
      doc.moveDown(0.3);
    };

    field("Nombre completo: ", employeeData.nombreCompleto);
    field("Puesto: ", employeeData.puesto);
    field("Ubicación Funcional: ", employeeData.unidadSolicitud);
    field("Renglón Presupuestario: ", employeeData.renglon);
    field("Fecha de Ingreso: ", formatDateToDisplay(employeeData.fechaIngreso));
    field("Años de Antigüedad: ", employeeData.antiguedad);

    doc.moveDown(1);

    /* =====================================================
       TEXTO LEGAL
    ===================================================== */
    doc.font("Helvetica").fontSize(11).text(
      "De conformidad con el artículo 50 del Reglamento de Trabajo Interno y Gestión del Recurso Humano del Consejo Nacional de Adopciones, de manera atenta solicito el goce de mis vacaciones,"
    );

    doc.moveDown(0.5);
    doc.font("Helvetica-Bold").text(`${employeeData.cantidadDiasSolicitados} días:`);

    doc.moveDown(0.5);

    /* =====================================================
       DETALLE
    ===================================================== */
    doc.font("Helvetica-Bold").text("Detalle:");
    doc.moveDown(0.3);

    doc.font("Helvetica").text(`• Inicio de vacaciones: ${formatDateToDisplay(employeeData.fechaInicioVacaciones)}`);
    doc.text(`• Fin de vacaciones: ${formatDateToDisplay(employeeData.fechaFinVacaciones)}`);
    doc.text(`• Reintegro laboral: ${formatDateToDisplay(employeeData.fechaReintegro)}`);

    doc.moveDown(1);

    /* =====================================================
       PERÍODOS
    ===================================================== */
    doc.text("Los días solicitados corresponden a los siguientes períodos:");
    doc.moveDown(0.5);

    diasPorPeriodo.forEach(periodo => {
      doc.text(
        `• ${periodo.periodo}: se tomarán ${periodo.diasTomados} días, quedando ${periodo.diasDisponibles} días disponibles.`,
        { indent: 15 }
      );
    });

    doc.moveDown(1.5);

    /* =====================================================
       JUSTIFICACIÓN
    ===================================================== */
    doc.font("Helvetica-Bold").fontSize(11).text("JUSTIFICACIÓN");
    doc.font("Helvetica").fontSize(10).text(
      "(Llenar este campo si la fecha del formulario es menor a diez (10) días de la fecha de inicio, según circular CNA-URRHH)"
    );

    const justificationY = doc.y + 10;
    doc.rect(60, justificationY, doc.page.width - 120, 90).stroke();

    doc.moveDown(6);

    /* =====================================================
       CONDICIONES
    ===================================================== */
    doc.font("Helvetica-Bold").fontSize(11)
      .text("CONDICIONES DE ACEPTACIÓN EN LA UNIDAD DE RECURSOS HUMANOS");

    doc.font("Helvetica").fontSize(10).text(
      "Este formulario debe ser impreso, firmado y entregado en la Unidad de Recursos Humanos, antes del día que el trabajador inicie su periodo vacacional."
    );

    doc.moveDown(3);

    /* =====================================================
       FIRMAS
    ===================================================== */
    const yFirmas = doc.y;

    doc.text("______________________________", 80, yFirmas);
    doc.text("______________________________", 350, yFirmas);

    doc.moveDown(0.5);
    doc.font("Helvetica-Bold").text("Firma del trabajador", 105);
    doc.text("Vo.Bo. Recursos Humanos", 360);

    /* =====================================================
       FINALIZAR PDF
    ===================================================== */
    doc.end();
  });
};
