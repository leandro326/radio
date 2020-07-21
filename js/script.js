let inputCurrentFrequency = document.querySelector('#inputCurrentFrequency');
let rangeFrenquencies = document.querySelector('#rangeFrenquencies');
let divPodcast = document.querySelector('#divPodcast');

function start() {
  rangeFrenquencies.addEventListener('input', handleRangeValueChange);
}
function handleRangeValueChange(event) {
  let CurrentFrequency = event.target.value;
  inputCurrentFrequency.value = CurrentFrequency;

  findPodcastFrom(CurrentFrequency);
}

function findPodcastFrom(frequency) {
  let foundPodcast = null;

  for (var i = 0; i < realPodcasts.length; i++) {
    let currentPodcast = realPodcasts[i];

    if (currentPodcast.id === frequency) {
      foundPodcast = currentPodcast;
      break;
    }
  }
  if (!!foundPodcast) {
    renderPodcast(foundPodcast);
  } else {
    divPodcast.innerHTML = '<p>Nenhum podcast encontrado</p>';
  }
  function renderPodcast(Podcast) {
    divPodcast.innerHTML = '';

    let img = document.createElement('img');
    img.src = './img/' + Podcast.img;

    let title = document.createElement('h2');
    title.textContent = Podcast.title;

    let description = document.createElement('p');
    description.textContent = Podcast.description;

    divPodcast.appendChild(img);
    divPodcast.appendChild(title);
    divPodcast.appendChild(description);
  }
}
start();
