/* eslint-disable no-nested-ternary */
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

export const validatePlan = (row) => {
  let status = false;
  const newToday = currentDate();
  var plan = JSON.parse(row.detail);
  if(plan.code){
    var newDate = plan.date_expire;
    var pay = (plan.paymentConfirmed) ? plan.paymentConfirmed:0;
    if(newDate >= newToday && pay == 1) {
      status = true;
    }
  }
  return {
    name : row.name,
    status
  }
};
