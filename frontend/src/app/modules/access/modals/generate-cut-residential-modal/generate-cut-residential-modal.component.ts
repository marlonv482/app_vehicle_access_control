import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AccessService } from '@modules/access/services/access.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-generate-cut-residential-modal',
  templateUrl: './generate-cut-residential-modal.component.html',
  styleUrls: ['./generate-cut-residential-modal.component.css']
})
export class GenerateCutResidentialModalComponent {
  formReport:FormGroup=new FormGroup({});
  showInfoModal:boolean=false;
  showErrorModal:boolean=false;
  
  ngOnInit(){
    this.formReport=new FormGroup({
      name:new FormControl('', [
        Validators.required,
      
      ])
    })
  }
  constructor(private accessService:AccessService){

  }
  generateReport(){
    this.accessService.generateCutResident()
    .subscribe(response=>{
     
      const formatData=[]
      response.forEach(data => {
        formatData.push([{text: data.plate}, {text: data.minutes  }, {text: data.pay}])
      });
     
      this.generatePDF(formatData);
    })
  }

  generatePDF(formatData){
    const fecha = new Date();

const fechaFormateada = fecha.toLocaleString('es-ES');

    const pdfDefinition:any={
      content:[
        {text: 'Pago de Residentes', style: 'header'},
        {text: `Reporte de pagos de residentes dia ${fechaFormateada}`},
        {
          style: 'tableExample',
          color: '#444',
          table: {
            widths: [150, 170, 150],
            headerRows: 1,
          
            // keepWithHeaderRows: 1,
            body: [
              [{text: 'Num. Placa', style: 'tableHeader'}, {text: 'Tiempo estacionado (min)', style: 'tableHeader', }, {text: 'Cantidad a pagar', style: 'tableHeader', alignment: 'center'}],
              
            
            ]
          }
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10]
        },
        subheader: {
          fontSize: 16,
          bold: true,
          margin: [0, 10, 0, 5]
        },
        tableExample: {
          margin: [0, 5, 0, 15]
        },
        tableHeader: {
          bold: true,
          fontSize: 13,
          color: 'black'
        }
      }
    }
    formatData.forEach(data => {
      pdfDefinition.content[2].table.body.push(data)
    });
    
      
   
    const pdf=pdfMake.createPdf(pdfDefinition);
    pdf.download(`${this.formReport.value.name}.pdf`);
    this.showInfoModal=true
  }

  hideModal(){
      this.accessService.$showReportModal.emit(false);
  }
}
