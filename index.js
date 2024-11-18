const photos =  {
  "success": true,
  "total_photos": 132,
  "message": "Successfully fetched 10 of 132 photos",
  "offset": 0,
  "limit": 10,
  "photos": [
    {
      "url": "https://api.slingacademy.com/public/sample-photos/1.jpeg",
      "title": "Defense the travel audience hand",
      "user": 28,
      "description": "Leader structure safe or black late wife newspaper her pick central forget single likely.",
      "id": 1
    },
    {
      "url": "https://api.slingacademy.com/public/sample-photos/2.jpeg",
      "title": "Space build policy people model treatment town hard use",
      "user": 25,
      "description": "Much technology how within rather him lay why part actually system increase feel.",
      "id": 2
    },
    {
      "url": "https://api.slingacademy.com/public/sample-photos/3.jpeg",
      "title": "Party about different guess bill too owner",
      "user": 7,
      "description": "Street anything piece south yard since well point summer school economy respond people mother.",
      "id": 3
    },
    {
      "url": "https://api.slingacademy.com/public/sample-photos/4.jpeg",
      "title": "Table husband",
      "user": 22,
      "description": "Skill drug college contain herself future seat human yes approach how then maybe public summer play commercial anything woman include million body measure government clearly question quickly parent.",
      "id": 4
    },
    {
      "url": "https://api.slingacademy.com/public/sample-photos/5.jpeg",
      "title": "Support audience model program three music",
      "user": 25,
      "description": "World early north TV around meet goal across reason responsibility have must build up some language soon.",
      "id": 5
    },
    {
      "url": "https://api.slingacademy.com/public/sample-photos/6.jpeg",
      "title": "Apply future response she reduce decide",
      "user": 30,
      "description": "Training beautiful age four skin cultural hundred environmental ability blood go physical relate produce tough open police.",
      "id": 6
    },
    {
      "url": "https://api.slingacademy.com/public/sample-photos/7.jpeg",
      "title": "Fire year candidate too like",
      "user": 20,
      "description": "Few address take for special development white career.",
      "id": 7
    },
    {
      "url": "https://api.slingacademy.com/public/sample-photos/8.jpeg",
      "title": "Reflect design camera land girl wind behind side",
      "user": 13,
      "description": "Drug if approach out according set home job company wall source trouble act huge easy style physical so month.",
      "id": 8
    },
    {
      "url": "https://api.slingacademy.com/public/sample-photos/9.jpeg",
      "title": "Per nature research",
      "user": 2,
      "description": "Nature focus wonder behind magazine pattern degree far without tree consider.",
      "id": 9
    },
    {
      "url": "https://api.slingacademy.com/public/sample-photos/10.jpeg",
      "title": "Yard",
      "user": 30,
      "description": "Parent talk collection fill between management purpose fish fight real teacher successful me arrive little.",
      "id": 10
    }
  ]
}

let main = document.querySelector('.main');

function showId(id) {
  alert('Photos ID: ' + id);
}

function htmlga() {
  let html = '';
  photos.photos.map((el) => {
    html += `
        <div class="card">
            <img src=${el.url}>
            <h3>${el.title}</h3>
            <p>${el.description}  </p>
            <button onclick="showId(${el.id})">Show ID</button>
        </div>
        `;
    main.innerHTML = html;
  });
}

htmlga();




