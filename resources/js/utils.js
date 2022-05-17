/* eslint-disable no-nested-ternary */
//const Excel = require("exceljs");
import * as Excel from "exceljs"
import { saveAs } from "file-saver";
export const displayDate = (timestamp) => {
    const date = new Date(timestamp);
  
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'
    ];
  
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
  
    // return day + ' ' + monthNames[monthIndex] + ' ' + year;
    return `${monthNames[monthIndex]} ${day}, ${year}`;
  };
  
  export const displayMoney = (n) => {
    const format = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  
    // or use toLocaleString()
    return format.format(n);
  };
  
  function currentDate(){
    return new Date().toLocaleDateString("fr-CA")
  }
  
  export const calculateTotal = (arr) => {
    if (!arr || arr?.length === 0) return 0;
  
    const total = arr.reduce((acc, val) => acc + val, 0);
  
    return total.toFixed(2);
  };
  
  export const displayActionMessage = (msg, status = 'info') => {
    const div = document.createElement('div');
    const span = document.createElement('span');
  
    div.className = `toast ${status === 'info'
      ? 'toast-info'
      : status === 'success'
        ? 'toast-success'
        : 'toast-error'
      // eslint-disable-next-line indent
      }`;
    span.className = 'toast-msg';
    span.textContent = msg;
    div.appendChild(span);
  
  
    if (document.querySelector('.toast')) {
      document.body.removeChild(document.querySelector('.toast'));
      document.body.appendChild(div);
    } else {
      document.body.appendChild(div);
    }
  
    setTimeout(() => {
      try {
        document.body.removeChild(div);
      } catch (e) {
        console.log(e);
      }
    }, 3000);
  };
  
  export const parseNum = number => {
    if (!isNaN(parseFloat(number))) {
      number = Math.round(parseFloat(number));
      number = number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,').split('.', 1);
      number = number[0]
    }
    return number;
  }
  
  export const validEmail = str => {
    // eslint-disable-next-line max-len
    var pattern = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  
    return pattern.test(str.trim())
  }
  
  export const validPassword = str => {
    // eslint-disable-next-line max-len
    if ( str == null) return false;
    var pattern = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[=+\-^$*.\[\]{}()?"!@#%&/\\,><':;|_~`])\S{8,99}$/);
    return pattern.test(str.trim())
  }
  
  export const formatDate = (date, invert = 'normal', delimiter = '-') => {
    const actual = new Date(date)
    const day = actual.getDate()
    const month = actual.getMonth() + 1
    const year = actual.getFullYear()
  
    const formatDay = day < 10 ? `0${day}` : day
    const formatMonth = month < 10 ? `0${month}` : month
  
    return `${ invert === 'invert' ? `${formatMonth}-${formatDay}` : `${formatDay}-${formatMonth}`}-${year}`.replace(/-/g, delimiter)
  }
  
  export const dateNow = () => {
    var dt = new Date();
    var now = `${
      dt.getFullYear().toString().padStart(4, '0')}-${
      (dt.getMonth()+1).toString().padStart(2, '0')}-${
      dt.getDate().toString().padStart(2, '0')} ${
      dt.getHours().toString().padStart(2, '0')}:${
      dt.getMinutes().toString().padStart(2, '0')}:${
      dt.getSeconds().toString().padStart(2, '0')}`;
    return now;
  }

//#region Funcion exportar
export const ExpExcel = async (data = {}, nombrearchivo = "", nombrehojas = [], columnasomitir, columnasformato, columnasCalculo) => {
    if (Array.isArray(data) && data.length == 0) {
        console.log('Sin datos para exportar', 'error');
        return;
    }
    let mydata = {};
    if (Array.isArray(data)) { mydata = { data: data } } else { mydata = { ...data } }
    if (!columnasomitir) {
        columnasomitir = [];
        for (const item of Object.keys(data)) {
            columnasomitir.push([]);
        }
    }
    if (!columnasformato) {
        columnasformato = [];
        for (const item of Object.keys(data)) {
            columnasformato.push([]);
        }
    }
    if (!columnasCalculo) {
        columnasCalculo = [];
        for (const item of Object.keys(data)) {
            columnasCalculo.push([]);
        }
    }
    let detailExcel = { data: mydata, nombrearchivo: nombrearchivo, nombrehojas: nombrehojas, columnasomitir: columnasomitir, columnasformato: columnasformato, columnasCalculo: columnasCalculo}
    exportExcel2({ detail: detailExcel });
} 
const exportExcel2 = async (e) => {
    //ShowCargando(true, 'Generando Excel');
    let columnasformato = [];
    for (const nombrehoja of e.detail.nombrehojas) {
        columnasformato.push([]);
    }
    if (Reflect.has(e.detail, 'columnasformato')) { columnasformato = e.detail.columnasformato }
    let columnasCalculo = [];
    if (Reflect.has(e.detail, 'columnasCalculo')) { columnasCalculo = e.detail.columnasCalculo }
    ExportExcel(e.detail.data, e.detail.nombrearchivo, e.detail.nombrehojas, e.detail.columnasomitir, columnasformato, columnasCalculo);
}
const ExportExcel = async (data, nombrearchivo, nombrehojas, columnasomitir, columnasformato, columnasCalculo) => {
    let mydata = {};
    if (Array.isArray(data)) { mydata = { data: data } } else { mydata = { ...data } }
    try {
        let workbook = await ExportArrayExcel(mydata, nombrehojas, columnasomitir, columnasformato, columnasCalculo);
        let buffer = await workbook.xlsx.writeBuffer();
        if (!buffer) { throw Error('Error writing excel export') }
        saveAs(new Blob([buffer]), `${nombrearchivo}`);
    } catch (error) {
        console.log(error);
    } finally {
        //ShowCargando(false);
    }
}
const ExportArrayExcel = async (mydata, ArrayNombrehojas, ArrayColumnasomitir, columnasformato, columnasCalculo) => {
    var finalColLetter = "";
    if (Array.isArray(mydata)) { return; }
    if (Object.keys(mydata).length != ArrayNombrehojas.length) {
        console.log('Diferencias entre Nombres y Keys a Exportar');
        return;
    }
    let workbook = new Excel.Workbook()
    let tablas = Object.keys(mydata);
    for (var i = 0; i < tablas.length; i++) {
        let worksheet = workbook.addWorksheet(ArrayNombrehojas[i], { views: [{ state: 'frozen', xSplit: 1, ySplit: 1 }] })
        let nomDataTem = tablas[i];
        worksheet.columns = get_head(mydata[nomDataTem][0]);
        let finalrango = get_lastcolumn(worksheet.columns.length);
        worksheet.autoFilter = `A1:${finalrango}1`
        fill_workshet(mydata[nomDataTem], worksheet);
        if (columnasCalculo != undefined && columnasCalculo.length > 0) add_formules_end(worksheet, columnasCalculo[i]);
        format_head_rows(worksheet, columnasformato[i]);
    }
    return workbook;
}
function get_head(encabezado) {
    var ArrayTemp = [];
    for (var key in encabezado) {
        let modelo = { header: key, key: key, width: key.length * 1.2 }
        ArrayTemp.push(modelo);
    }
    return ArrayTemp;
}
function format_head_rows(sheet, columnasformato) {
    sheet.columns.forEach(function (column) {
        var dataMax = 0;
        column.eachCell({ includeEmpty: true }, function (cell) {
            var columnLength = 0;
            if (!!cell.value) { columnLength = cell.value.length }
            if (columnLength > 50) { columnLength = 50 }
            if (columnLength > dataMax) {
                dataMax = columnLength;
            }
        })
        column.width = dataMax < 10 ? 10 : dataMax;
    });
    sheet.eachRow({ includeEmpty: true }, function (row, rowNumber) {
        if (rowNumber == 1) {
            row.eachCell(function (cell, colNumber) {
                cell.font = {
                    name: 'Arial',
                    family: 2,
                    bold: true,
                    size: 8,
                    color: { argb: 'FFFFFF' },
                };
                cell.alignment = {
                    vertical: 'middle', horizontal: 'center'
                };
                cell.fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: { argb: '305496' }
                };
            });
        } else {
            row.eachCell(function (cell, colNumber) {
                cell.font = {
                    size: 8,
                };
                if (columnasformato.length) {
                    for (const item of columnasformato) {
                        if (cell._column._key == item.key && item.tipo == 'Date') {
                            var date = new Date(cell.value);
                            cell.value = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()))
                            cell.style.numFmt = item.formato //"dd/mm/yyyy";
                        }
                        if (cell._column._key == item.key && item.tipo == 'Price') {
                            cell.style.numFmt = item.structure;
                        }
                    }
                }
            });
        }
    });
}
function get_lastcolumn(columns) {
    let colCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let colCharsetLen = colCharset.length;
    let finalColLetter = "";
    if (columns > colCharsetLen) { finalColLetter = colCharset.substr((columns - 1) / colCharsetLen - 1, 1) }
    finalColLetter += colCharset.substr((columns - 1) % (colCharsetLen), 1)
    return finalColLetter;
}
function fill_workshet(myarray, worksheet) {
    myarray.forEach((e, index) => {
        worksheet.addRow({
            ...e
        })
    })
}
function add_formules_end(worksheet, columnFormules) {
    columnFormules.forEach(item => {
        worksheet.addRow(item);
    });
}
//#endregion

  
export const exportExcel = async (name, data) => {
	
	let workbook = new excel.Workbook();
	let worksheet = workbook.addWorksheet("Registros");

	if(Array.isArray(data)){
		const values = Object.keys(data[0]);
		let columns = [];
		values.forEach((value)=>{
			columns.push({ header: value, key: value});
		})
		worksheet.columns = columns;
		worksheet.addRows(data);	
	} 

	const buffer = await workbook.xlsx.writeBuffer();
	downloadFile(name, buffer);
}

export const downloadFile = async (name, blob) => {
	const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
	const url = window.URL.createObjectURL(new Blob([blob], {type: fileType}));
	const link = document.createElement('a');
	link.href = url;
	const fileName = `${name}.xlsx`// whatever your file name .
	link.setAttribute('download', fileName);
	document.body.appendChild(link);
	link.click();
	link.remove();
}