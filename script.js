const model0 = [
  {time: "00:00:00"},
  {bpm: 0},
  {time: "00:03:46"},
];
const model1 = [
  {time: "00:00:00"},
  {bpm: 94},
  {time: "00:01:10"},
  {bpm: 96},
  {time: "00:03:10"},
  {bpm: 91},
  {time: "00:06:30"},
  {bpm: 92},
  {time: "00:10:40"},
  {bpm: 95},
  {time: "00:11:05"},
  {bpm: 96},
  {time: "00:14:02"},
  {bpm: 92},
  {time: "00:17:20"},
  {bpm: 91},
  {time: "00:20:09"},
  {bpm: 94},
  {time: "00:22:28"},
  {bpm: 93},
  {time: "00:25:20"},
  {bpm: 92},
  {time: "00:29:55"},
  {bpm: 94},
  {time: "00:32:35"},
  {bpm: 91},
  {time: "00:36:22"},
  {bpm: 95},
  {time: "00:41:45"},
  {bpm: 96},
  {time: "00:48:13"},
  {bpm: 97},
  {time: "00:52:10"},
  {bpm: 99},
  {time: "00:55:59"},
];
const rest01 = [
  {time: "00:00:00"},
  {bpm: 0},
  {time: "00:05:23"},
];
const model2 = [
  {time: "00:00:00"},
  {bpm: 94},

  {time: "00:00:22"},
  {bpm: 96},

  {time: "00:01:20"},
  {bpm: 95},

  {time: "00:01:50"},
  {bpm: 97},

  {time: "00:02:15"},
  {bpm: 99},

  {time: "00:03:15"},
  {bpm: 91},

  {time: "00:07:09"},
  {bpm: 89},

  {time: "00:09:50"},
  {bpm: 94},

  {time: "00:13:54"},
  {bpm: 90},

  {time: "00:17:01"},
  {bpm: 90},

  {time: "00:20:59"},
  {bpm: 99},

  {time: "00:24:07"},
  {bpm: 95},

  {time: "00:31:32"},
  {bpm: 94}, // Gali

  {time: "00:31:32"},
  {bpm: 96}, // George

  {time: "00:37:18"},
  {bpm: 89}, // This is the life

  {time: "00:42:01"},
  {bpm: 99}, // Hipnotize

  {time: "00:47:13"},
  {bpm: 91}, // Eminem-Rihana

  {time: "00:51:23"},
  {bpm: 94}, // U2

  {time: "00:57:10"}
];
const rest23 = [
  {time: "00:00:00"},
  {bpm: 0},
  {time: "00:03:29"},
];
const model3 = [
  {time: "00:00:00"},
  {bpm: 88},
  {time: "00:02:55"},
  {bpm: 93},
  {time: "00:06:10"},
  {bpm: 89},
  {time: "00:14:17"},
  {bpm: 90},
  {time: "00:18:22"},
  {bpm: 88},
  {time: "00:21:54"},
  {bpm: 87},
  {time: "00:25:54"},
  {bpm: 91},
  {time: "00:29:26"},
  {bpm: 94},
  {time: "00:33:54"},
  {bpm: 92},
  {time: "00:37:09"},
  {bpm: 93},
  {time: "00:40:43"},
  {bpm: 94},
  {time: "00:44:24"},
  {bpm: 95},
  {time: "00:48:06"},
  {bpm: 96},
  {time: "00:50:53"},
  {bpm: 91},
  {time: "00:50:53"},
  {bpm: 92},
  {time: "00:55:29"},
  {bpm: 96},
  {time: "00:59:25"}
];
const model4 = [
  {time: "00:00:00"},
  {bpm: 89},
  {time: "00:00:012"},
  {bpm: 90},
  {time: "00:03:08"},
  {bpm: 89},
  {time: "00:07:08"},
  {bpm: 91},
  {time: "00:12:45"},
  {bpm: 89},
  {time: "00:15:42"},
  {bpm: 90},
  {time: "00:22:05"},
  {bpm: 89},
  {time: "00:25:09"},
  {bpm: 96},
  {time: "00:27:20"},
  {bpm: 92},
  {time: "00:31:01"},
  {bpm: 94},
  {time: "00:36:42"},
  {bpm: 96},
  {time: "00:41:10"},
  {bpm: 92},
  {time: "00:41:10"},
  {bpm: 89},
  {time: "00:44:28"},
  {bpm: 94},
  {time: "00:50:27"},
  {bpm: 94},
  {time: "00:50:27"},
  {bpm: 96},
  {time: "00:54:00"},
  {bpm: 91},
  {time: "00:57:23"}
];
const end = [
  {time: "00:00:00"},
  {bpm: 0},
  {time: "00:03:04"}
];
const modelList = [
  model0,
  model1, // Prima tappa
  rest01,
  model2, // Seconda tappa
  rest23,
  model3,// Seconda tappa
  model0,
  model4,
  model0,
];
const audioTracks = [
    'tracks/che_idea.mp3',
  'tracks/traccia1.mp3',
  'tracks/rest.mp3',
  'tracks/traccia2.mp3',
  'tracks/laGrandeOnda.mp3',
  'tracks/traccia3.mp3',
  'tracks/rest.mp3',
  'tracks/traccia4.mp3',
  'tracks/end.mp3'
];
const images = [
  'images/rest.jpg',
  'images/image1.png',
  'images/rest.jpg',
  'images/image2.png',
  'images/rest.jpg',
  'images/image3.png',
  'images/rest.jpg',
  'images/image4.png',
  'images/end.png',
];
Chart.register(window['chartjs-plugin-annotation']);
Chart.register({
  id: 'backgroundImage',
  beforeDraw: (chart) => {
    const { ctx, chartArea, options } = chart;
    const backgroundImage = options.plugins.backgroundImage?.image;

    if (backgroundImage && backgroundImage.complete) {
      ctx.drawImage(
          backgroundImage,
          chartArea.left,
          chartArea.top,
          chartArea.right - chartArea.left,
          chartArea.bottom - chartArea.top
      );
    }
  },
});

const ctxTotal = document.getElementById('totalbpmChart').getContext('2d');
const ctx = document.getElementById('bpmChart').getContext('2d');
const audioPlayerContainer = document.getElementById('audioPlayerContainer');
const audioPlayer = document.getElementById('audioPlayer');
const prevTrackButton = document.getElementById('prevTrackButton');
const nextTrackButton = document.getElementById('nextTrackButton');
const countdownElement = document.getElementById('countdown'); // Riferimento al div del countdown
const currentTimeLineColor = 'rgba(15, 9, 200, 1)'
let endTime = 0;

function addTime(time1, timeToAdd) {
  // Funzione per separare ore, minuti e secondi
  const parseTime = (time) => {
    if(time!== undefined){
      const [hours, minutes, seconds] = time.split(":").map(Number);
      return {hours, minutes, seconds};
    }else{

      return  {hours: number = 0,minutes : number = 0 , seconds : number  = 0  };
    }
  };

  // Analizza entrambi i tempi

  const t1 = parseTime(time1);
  const t2 = parseTime(timeToAdd);

  // Somma i secondi, i minuti e le ore separatamente
  let seconds = t1.seconds + t2.seconds;
  let minutes = t1.minutes + t2.minutes;
  let hours = t1.hours + t2.hours;

  // Gestisci i carryover
  if (seconds >= 60) {
    minutes += Math.floor(seconds / 60);  // Aggiungi i minuti in eccesso
    seconds = seconds % 60;  // Rimanente secondi
  }

  if (minutes >= 60) {
    hours += Math.floor(minutes / 60);  // Aggiungi le ore in eccesso
    minutes = minutes % 60;  // Rimanenti minuti
  }

  // Restituisci il risultato nel formato "hh:mm:ss"
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2,
      '0')}:${String(seconds).padStart(2, '0')}`;
}

function convertToBpmData(eastModel, timeToAdd) {
  const bpmDataRaw = [];
  let lastTime = null;
  let lastBpm = null;
  console.log('easymodel:' + eastModel)
  for (const item of eastModel) {
    console.log('item: ' + item)
    if (item.time !== undefined) {
      // Se è un elemento "time", aggiornalo come ultimo tempo
      lastTime = item.time;
    } else if (item.bpm !== undefined && lastTime !== null) {
      // Se è un elemento "bpm", abbinalo all'ultimo tempo
      bpmDataRaw.push({time: addTime(lastTime, timeToAdd), bpm: item.bpm});
      lastBpm = item.bpm;
    }
  }
  bpmDataRaw.push({time: addTime(lastTime, timeToAdd), bpm: lastBpm});
  console.log('bpmDataRaw: ' + bpmDataRaw)
  return bpmDataRaw;
}

function hhmmssToSeconds(hhmmss) {
  const [hours, minutes, seconds] = hhmmss.split(':').map(Number);
  return hours * 3600 + minutes * 60 + seconds;
}

function getBpmColor(bpm) {
  if (bpm >= 5 && bpm <= 10) {
    return 'rgba(180, 255, 255, 1)';
  } else if (bpm > 10 && bpm <= 30) {
    return overrideColor('rgba(0, 255, 0, 1)', bpm); // Verde
  } else if (bpm > 30 && bpm <= 60) {
    return overrideColor('rgba(255, 255, 0, 1)', bpm);
  } else if (bpm > 60 && bpm <= 100) {
    return overrideColor('rgba(255, 50, 60, 1)', bpm);
  }
  return 'rgba(0, 255, 255, 1)'; // Colore di default
}

function overrideColor(baseColor, bpm) {
  // Controlla se bpm non finisce per 0
  if (bpm % 3 === 0) {
    return 'rgba(255, 50, 60, 1)'; // Colore specifico per i numeri pari
  }
  if (bpm % 3 === 1) {
    return 'rgba(255, 255, 0, 1)';
  }
  if (bpm % 3 === 2) {
    return 'rgba(0, 255, 0, 1)'; // Colore per i numeri dispari
  }
  return baseColor;
}

// Funzione per calcolare la somma dei tempi fino a un dato indice
const calculateTimeSum = (index) => {
  let totalSeconds = 0;

  const timeToSeconds = (time) => {
    const [hours, minutes, seconds] = time.split(":").map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  };

  for (let i = 0; i < index; i++) {
    const model = modelList[i];
    const lastElement = model[model.length - 1];
    if (lastElement.time) {
      totalSeconds += timeToSeconds(lastElement.time);
    }
  }

  return totalSeconds;
};

function loadTotalChart() {
  const bpmDataRaw = convertMultipleModels(modelList);
  // Aggiorna i dati del grafico
  const bpmData = bpmDataRaw.map(data => ({
    time: hhmmssToSeconds(data.time),
    bpm: data.bpm
  }));

  endTime = Math.max(...bpmData.map(data => data.time));
  // Interpola i dati
  interpolatedDataTotal = [];
  for (let i = 0; i <= endTime; i++) {
    const currentSegment = bpmData.find((data, idx) =>
        i >= data.time &&
        (idx === bpmData.length - 1 || i < bpmData[idx + 1].time)
    );
    interpolatedDataTotal.push({time: i, bpm: currentSegment.bpm});
  }

  // // Aggiorna il grafico
  bpmChartTotal.data.labels = interpolatedDataTotal.map(d => d.time);
  bpmChartTotal.data.datasets[0].data = interpolatedDataTotal.map(d => d.bpm);
  bpmChartTotal.data.datasets[0].pointRadius =  1;
  bpmChartTotal.data.datasets[0].borderColor= interpolatedDataTotal.map(d => getBpmColor(d.bpm));
  bpmChartTotal.update();

  interpolatedDataTotal = [];
}
function loadTrack(trackIndex) {
  if (trackIndex < 0 || trackIndex >= audioTracks.length) {
    return;
  } // Evita errori per indici fuori limite

  currentTrackIndex = trackIndex;

  // Cambia sorgente audio
  audioPlayer.src = audioTracks[trackIndex];
  audioPlayer.load();

  // Aggiorna i dati del grafico
  const bpmDataRaw = convertToBpmData(modelList[trackIndex]);
  const bpmData = bpmDataRaw.map(data => ({
    time: hhmmssToSeconds(data.time),
    bpm: data.bpm
  }));

  endTime = Math.max(...bpmData.map(data => data.time));
  endTimeTotal = Math.max(...bpmData.map(data => data.time));
  // Interpola i dati
  interpolatedData = [];
  for (let i = 0; i <= endTime; i++) {
    const currentSegment = bpmData.find((data, idx) =>
        i >= data.time &&
        (idx === bpmData.length - 1 || i < bpmData[idx + 1].time)
    );
    interpolatedData.push({time: i, bpm: currentSegment.bpm});
  }

  // // Aggiorna il grafico
  bpmChart.data.labels = interpolatedData.map(d => d.time);
  bpmChart.data.datasets[0].data = interpolatedData.map(d => d.bpm);
  bpmChart.data.datasets[0].borderColor= interpolatedData.map(d => getBpmColor(d.bpm));

// Controlla se esiste un'immagine per questo indice e se il file immagine è realmente presente
  if (trackIndex >= 0 && trackIndex < images.length) {
    const backgroundImage = new Image();
    backgroundImage.onload = () => {
      // L'immagine è caricata correttamente, impostala come sfondo
      bpmChart.options.plugins.backgroundImage = {
        image: backgroundImage,
      };
      bpmChart.update(); // Aggiorna il grafico con lo sfondo
    };
    backgroundImage.onerror = () => {
      // L'immagine non è stata trovata, rimuovi lo sfondo
      bpmChart.options.plugins.backgroundImage = null;
      bpmChart.update();
    };
    backgroundImage.src = images[trackIndex];
  } else {
    // Se l'immagine non esiste nell'array, rimuovi lo sfondo
    bpmChart.options.plugins.backgroundImage = null;
    bpmChart.update();
  }


  bpmChart.update();

  interpolatedData = [];

}

function convertMultipleModels(bpmModels) {
  const aggregatedData = [];
  bpmModels.forEach((model, index) => {
    console.log(`Converting model ${index + 1}`);
    let lastValue = undefined;
    if (index > 0) {
      lastValue = aggregatedData[aggregatedData.length - 1];
    }
    const convertedData = convertToBpmData(model,
        lastValue !== undefined ? lastValue.time : undefined);
    aggregatedData.push(...convertedData); // Aggiungi i dati convertiti all'array aggregato
  });
  return aggregatedData;
}

let interpolatedData = [];
let interpolatedDataTotal = [];
// interpolatedData = smoothArray(interpolatedData)
const bpmDataRaw = convertToBpmData(model1);
const bpmDataRawTotal = convertMultipleModels(modelList);

const bpmData = bpmDataRaw.map(data => {
  const timeInSeconds = hhmmssToSeconds(data.time);
  if (timeInSeconds > endTime) {
    endTime = timeInSeconds; // Aggiorna endTime se trovi un tempo maggiore
  }
  return {
    time: timeInSeconds,
    bpm: data.bpm
  };
});
const bpmDataTotal = bpmDataRawTotal.map(data => {
  const timeInSeconds = hhmmssToSeconds(data.time);
  if (timeInSeconds > endTime) {
    endTime = timeInSeconds; // Aggiorna endTime se trovi un tempo maggiore
  }
  return {
    time: timeInSeconds,
    bpm: data.bpm
  };
});
interpolatedData = bpmData;
interpolatedDataTotal = bpmDataTotal

const bpmChartTotal = new Chart(ctxTotal, {
  type: 'line',
  data: {
    labels: interpolatedDataTotal.map(d => d.time), // Ascisse: tempo in secondi (da 0 a endTime)
    datasets: [
      {
        pointRadius: 1,
        data: interpolatedDataTotal.map(d => d.bpm),
        borderColor: interpolatedDataTotal.map(d => getBpmColor(d.bpm)), // Applica il colore in base al BPM
        borderWidth: 1,
        fill: false,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
    animation: false, // Disattiva animazioni per aggiornamenti fluidi
    plugins: {
      legend: {
        display: false, // Nasconde la legenda
      },
      annotation: {
        annotations: [
          {
            type: 'line',
            id: 'currentTimeLine',
            mode: 'vertical',
            scaleID: 'x',
            value: 0,
            borderColor: currentTimeLineColor,
            borderWidth: 2,
            label: {
              enabled: true,
              content: 'Tempo Attuale',
              position: 'start',
            },
          },
        ],
      },
      zoom: {
        zoom: {
          wheel: {
            enabled: true, // Abilita lo zoom con la rotellina del mouse
          },
          pinch: {
            enabled: true, // Abilita lo zoom con il pinch su touch screen
          },
          mode: 'x', // Zoom sull'asse X
        },
        pan: {
          enabled: true, // Abilita il panning
          mode: 'x', // Pan sull'asse X
        },
      },
    },
    scales: {
      x: {
        title: {
          display: false,
          color: 'black', // Colore del titolo dell'asse X
        },
        min: 0,
        max: 50000000,
        grid: {
          color: 'rgba(255, 255, 255, 0.2)', // Colore delle linee della griglia
        },
        ticks: {
          color: 'black', // Colore dei tick sull'asse X
        },
      },
      y: {
        min: 0, // Valore minimo per l'asse Y
        max: 100, // Valore massimo per l'asse Y
        title: {
          display: false,
          color: 'white', // Colore del titolo dell'asse Y
        },
        suggestedMin: 0,
        grid: {
          color: 'rgba(255, 255, 255, 0.2)', // Colore delle linee della griglia
        },
        ticks: {
          display: false, // Nascondi i valori sull'asse Y
        },
      },
    },
  },
});
const bpmChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: interpolatedData.map(d => d.time), // Ascisse: tempo in secondi (da 0 a endTime)
    datasets: [
      {
        pointRadius: 1,
        data: interpolatedData.map(d => d.bpm),
        borderColor: interpolatedData.map(d => getBpmColor(d.bpm)), // Applica il colore in base al BPM
        borderWidth: 2,
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    animation: false, // Disattiva animazioni per aggiornamenti fluidi
    plugins: {
      legend: {
        display: false, // Nasconde la legenda
      },
      annotation: {
        annotations: [
          {
            type: 'line',
            id: 'currentTimeLine',
            mode: 'vertical',
            scaleID: 'x',
            value: 0,
            borderColor: currentTimeLineColor,
            borderWidth: 5,
            label: {
              enabled: true,
              content: 'Tempo Attuale',
              position: 'start',
            },
          },
        ],
      },
      zoom: {
        zoom: {
          wheel: {
            enabled: true, // Abilita lo zoom con la rotellina del mouse
          },
          pinch: {
            enabled: true, // Abilita lo zoom con il pinch su touch screen
          },
          mode: 'x', // Zoom sull'asse X
        },
        pan: {
          enabled: true, // Abilita il panning
          mode: 'x', // Pan sull'asse X
        },
      },
    },
    scales: {
      x: {
        title: {
          display: false,
          color: 'black', // Colore del titolo dell'asse X
        },
        min: 0,
        max: endTime, // Usa la costante totalDuration
        grid: {
          color: 'rgba(255, 255, 255, 0.2)', // Colore delle linee della griglia
        },
        ticks: {
          color: 'black', // Colore dei tick sull'asse X
        },
      },
      y: {
        min: 0, // Valore minimo per l'asse Y
        max: 100, // Valore massimo per l'asse Y
        title: {
          display: false,
          color: 'white', // Colore del titolo dell'asse Y
        },
        suggestedMin: 0,
        grid: {
          color: 'black', // Colore delle linee della griglia
        },
        ticks: {
          display: false, // Nascondi i valori sull'asse Y
        },
      },
    },
  },
});
loadTotalChart();
const a = loadTrack(0);

let isMouseAtBottom = false;
audioPlayer.addEventListener('timeupdate', () => {
  const currentTime = audioPlayer.currentTime; // Tempo attuale in secondi
  const lastElement = modelList[modelList.length - 1];

  // Aggiorna la posizione della linea verticale
  bpmChart.options.plugins.annotation.annotations[0].value = currentTime;
  bpmChart.update(); // Aggiorna il grafico

  totalCurrentTime = calculateTimeSum(currentTrackIndex) +currentTime;

  bpmChartTotal.options.plugins.annotation.annotations[0].value = totalCurrentTime
  bpmChartTotal.update()

  // Calcolare il tempo rimanente
  const remainingTime = Math.max(endTime - currentTime, 0); // endTime è la durata totale in secondi (5 minuti)
  // Calcola ore, minuti e secondi
  const hours = Math.floor(remainingTime / 3600); // Ore
  const minutes = Math.floor((remainingTime % 3600) / 60); // Minuti
  const seconds = Math.floor(remainingTime % 60); // Secondi

  // Mostra il countdown nel div con formato hh:mm:ss
  countdownElement.textContent = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

});
document.addEventListener('mousemove', (event) => {
  const mouseY = event.clientY; // Posizione Y del mouse

  // Se il mouse è vicino al fondo della finestra (es. 50px dal fondo)
  if (window.innerHeight - mouseY < 100) {
    if (!isMouseAtBottom) {
      isMouseAtBottom = true;
      audioPlayerContainer.classList.add('show'); // Mostra il player
    }
  } else {
    if (isMouseAtBottom) {
      isMouseAtBottom = false;
      audioPlayerContainer.classList.remove('show'); // Nascondi il player
    }
  }

});
audioPlayer.addEventListener('ended', () => {
  const nextTrackIndex = currentTrackIndex + 1;

  if (nextTrackIndex < audioTracks.length) {
    loadTrack(nextTrackIndex);
  } else {
    console.log('Fine della playlist');
    // Opzionale: ricomincia da capo
    // loadTrack(0);
  }
});
prevTrackButton.addEventListener('click', () => {
  if (currentTrackIndex > 0) {
    currentTrackIndex--;
    loadTrack(currentTrackIndex);
    audioPlayer.play().catch((error) => {
      console.error('Errore di riproduzione:', error);
    });
  } else {
    alert('Questa è la prima traccia!');
  }
});
nextTrackButton.addEventListener('click', () => {
  if (currentTrackIndex < audioTracks.length - 1) {
    currentTrackIndex++;
    loadTrack(currentTrackIndex);
    audioPlayer.play().catch((error) => {
      console.error('Errore di riproduzione:', error);
    });
  } else {
    alert('Hai raggiunto l\'ultima traccia!');
  }
});
