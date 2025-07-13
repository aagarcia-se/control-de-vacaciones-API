import PDFDocument from "pdfkit";
import path from "path";
import { fileURLToPath } from "url";
import { formatDateToDisplay } from "../Utils/DateUtils.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const generateVacationRequestPDF = async (employeeData, diasPorPeriodo) => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ margin: 60 });
    let chunks = [];

    // Escuchar los datos generados
    doc.on("data", (chunk) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", (err) => reject(err));

    // Agregar logo centrado en la parte superior
    const logoPath = path.join(__dirname, "..", "..", "..", "assets", "image.png");
    const logoWidth = 150;
    const logoYPosition = 30;
    doc.image(logoPath, (doc.page.width - logoWidth) / 2, logoYPosition, { width: logoWidth });

    // Mover hacia abajo para dar espacio después del logo
    doc.moveDown(6);

    // Establecer fuente y tamaño por defecto
    doc.font("Helvetica");
    const titleFontSize = 18;
    const bodyFontSize = 12;

    // Títulos
    doc.font("Helvetica-Bold").fontSize(titleFontSize).text("Consejo Nacional de Adopciones -CNA-", { align: "center" });
    doc.text("Solicitud de Vacaciones", { align: "center" });

    doc.moveDown(1.5);
    doc.fontSize(bodyFontSize).text(`Licenciado ${employeeData.nombreCoordinador}.`);
    doc.text(`Coordinador de ${employeeData.coordinadorUnidad}`);
    doc.text("Presente");
    doc.moveDown(1.5);

    // Texto con valores dinámicos en negrita
    doc.text("YO,", { continued: true }).font("Helvetica-Bold").text(` ${employeeData.nombreCompleto}`);
    doc.moveDown(0.5);
    
    doc.font("Helvetica").text("Que desempeño el cargo de:", { continued: true })
      .font("Helvetica-Bold").text(` ${employeeData.puesto}`);
    doc.moveDown(0.5);
    
    doc.font("Helvetica").text("De la Dirección y/o Coordinación de:", { continued: true })
      .font("Helvetica-Bold").text(` ${employeeData.unidadSolicitud}`);
    doc.moveDown(1.5);
    
    doc.font("Helvetica").text("Por este medio solicito", { continued: true })
      .font("Helvetica-Bold").text(` ${employeeData.cantidadDiasSolicitados}`, { continued: true })
      .font("Helvetica").text(" días de vacaciones a partir del", { continued: true })
      .font("Helvetica-Bold").text(` ${formatDateToDisplay(employeeData.fechaInicioVacaciones)}`, { continued: true })
      .font("Helvetica").text(" al", { continued: true })
      .font("Helvetica-Bold").text(` ${formatDateToDisplay(employeeData.fechaFinVacaciones)}`, { continued: true })
      .font("Helvetica").text(", distribuidos de la siguiente manera:");
    doc.moveDown(1);

    // Detalle de períodos de vacaciones en formato de párrafo
    doc.font("Helvetica");
    
    // Si solo hay un período
    if (diasPorPeriodo.length === 1) {
      const periodo = diasPorPeriodo[0];
      doc.text(`Los días solicitados corresponden al período ${periodo.periodo}, del cual se tomarán ${periodo.diasTomados} días, ` +
               `quedando ${periodo.diasDisponibles} días disponibles para este período.`);
    } 
    // Si hay múltiples períodos
    else {
      doc.text("Los días solicitados corresponden a los siguientes períodos:");
      doc.moveDown(0.5);
      
      diasPorPeriodo.forEach((periodo, index) => {
        const bullet = index === diasPorPeriodo.length - 1 ? "• " : "• ";
        doc.text(`${bullet}Período ${periodo.periodo}: se tomarán ${periodo.diasTomados} días, ` +
                 `quedando ${periodo.diasDisponibles} días disponibles.`, {
          indent: 15,
          align: 'justify'
        });
      });
    }

    doc.moveDown(2);

    // Texto adicional para completar el formato formal
    doc.text("Según lo establecido en el reglamento interno de la institución y la legislación laboral aplicable.");
    doc.moveDown(3);

    // Ajuste de posición de firma
    const leftX = 100;
    const rightX = 350;

    // Línea de firma
    const lineY = doc.y;
    doc.text("__________________________", leftX, lineY);
    doc.text("__________________________", rightX, lineY);
    doc.moveDown(0.5);

    // Texto de firma
    const signatureTextY = lineY + 18;
    doc.font("Helvetica-Bold").text("Firma del solicitante", leftX + 35, signatureTextY);
    doc.text("Vo.Bo.", rightX + 80, signatureTextY);

    // Finalizar el documento
    doc.end();
  });
};
