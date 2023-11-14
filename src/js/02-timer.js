import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


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

  let selectedDate;
  const date = new Date();
  refs.button.disabled = true;


const options = {
    enableTime: true, //Включает выбор времени
    time_24hr: true, //Отображает выбор времени в 24-часовом режиме
    defaultDate: new Date(), //Устанавливает начальную выбранную дату
    minuteIncrement: 1, //Регулирует шаг ввода минут (включая прокрутку)
    onClose(selectedDates) {
    //   console.log(selectedDates[0]); //закрытии календаря активируется функция.
    selectedDate = selectedDates[0];
    handleSelectedDate(selectedDate);
    },
    
  };
  
  flatpickr(refs.input, options);


function handleSelectedDate(dates) {
    if (dates.getTime() > date.getTime()) {
        refs.button.disabled = false;
        const timeDifference = convertMs(dates.getTime());
        console.log(dates);
        refs.button.addEventListener('click', function () {
            if (!refs.button.disabled) {
                const timeDifference = dates.getTime() - date.getTime();
                console.log(timeDifference);
                console.log(convertMs(timeDifference));
                
            }
        });
        Notify.success('Вate entered correctly');
      } else {
        // window.alert("Please choose a date in the future.");
        Notify.failure('Please choose a date in the future.');
      }
  }
  
  

  




  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
//   console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
//   console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
//   console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}


  