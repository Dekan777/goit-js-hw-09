import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  input: document.querySelector('#datetime-picker'),
  button: document.querySelector('button[data-start]'),

  dataDays: document.querySelector('.value[data-days]'),
  dataHours: document.querySelector('.value[data-hours]'),
  dataMinutes: document.querySelector('.value[data-minutes]'),
  dataSeconds: document.querySelector('.value[data-seconds]'),

  timer: document.querySelector('.timer'),
  field: document.querySelector('.field'),
  label: document.querySelector('.label'),
};

let timerInterval;
let selectedDate;
const date = Date.now();
refs.button.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    handleSelectedDate(selectedDate);
  },
};

flatpickr(refs.input, options);

function handleSelectedDate(dates) {
  if (dates.getTime() > date) {
    refs.button.disabled = false;
  } else {
    Notify.failure('Please choose a date in the future.');
  }
}

refs.button.addEventListener('click', function () {
  if (!refs.button.disabled) {
    startTimer();
    Notify.success('Date entered correctly');
    refs.button.disabled = true;
  }
});

function startTimer() {
  timerInterval = setInterval(function () {
    const currentTime = Date.now();
    const timeDifference = selectedDate.getTime() - currentTime;
    const nonNegativeTimeDifference = timeDifference < 0 ? 0 : timeDifference; // проверка
    updateTimer(nonNegativeTimeDifference);
  }, 1000);
}

function updateTimer(ms) {
  const { days, hours, minutes, seconds } = convertMs(ms);
  console.log(days, hours, minutes, seconds);

  // Обновляем интерфейс таймера
  refs.dataDays.textContent = formatTimeValue(days);
  refs.dataHours.textContent = formatTimeValue(hours);
  refs.dataMinutes.textContent = formatTimeValue(minutes);
  refs.dataSeconds.textContent = formatTimeValue(seconds);

  // Если достигнута конечная дата, останавливаем таймер
  if (ms <= 0) {
    clearInterval(timerInterval);
    refs.button.disabled = true;
  }
}

function formatTimeValue(value) {
  return value < 10 ? `0${value}` : value;
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


