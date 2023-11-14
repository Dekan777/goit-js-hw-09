import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import "flatpickr/dist/flatpickr.min.css";


const refs = {
    input: document.querySelector('#datetime-picker'),//
    button: document.querySelector('button[data-start]'),
    timer: document.querySelector('.timer'),
    field: document.querySelector('.field'),
    label: document.querySelector('.label'),

    dataDays: document.querySelector('.value[data-days]'),
    dataHours: document.querySelector('.value[data-hours]'),
    dataMinutes: document.querySelector('.value[data-minutes]'),
    dataSeconds: document.querySelector('.value[data-seconds]'),
  };

const options = {
    enableTime: true, //Включает выбор времени
    time_24hr: true, //Отображает выбор времени в 24-часовом режиме
    defaultDate: new Date(), //Устанавливает начальную выбранную дату
    minuteIncrement: 1, //Регулирует шаг ввода минут (включая прокрутку)
    onClose(selectedDates) {
      console.log(selectedDates[0]); //закрытии календаря активируется функция.
    },
  };

  flatpickr(refs.input, options);

  
