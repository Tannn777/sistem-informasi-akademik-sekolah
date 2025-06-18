 function downloadPDF() {
      const element = document.getElementById('pdfArea');
      html2pdf().from(element).save('Laporan_Nilai.pdf');
    }