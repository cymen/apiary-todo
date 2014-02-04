# Running

## Start node server

    node server.js

## Access server from command line
### Add a note

    $ ./add.js "This is my note"
    Status 200
    Headers {"x-powered-by":"Express","content-type":"application/json","content-length":"43","date":"Tue, 04 Feb 2014 22:39:40 GMT","connection":"keep-alive"}
    Response received {
      "id": 5,
      "title": "This is my note"
    }


### List the notes

    $ ./list.js
    1: Jogging in park
    2: Pick-up posters from post-office
    3: This is my note

## dredd

### Install it with "npm install -g dredd"

### Run dredd

    $ dredd apiary.apib http://localhost:3000/
    info: Beginning Dredd testing...
    pass: GET /notes duration: 17ms
    pass: POST /notes duration: 4ms
    pass: GET /notes/2 duration: 2ms
    pass: DELETE /notes/3 duration: 8ms
    complete: 4 passing, 0 failing, 0 errors, 0 skipped
    complete: Tests took 53ms

## Use apiaryio gem to preview the documentation

### bundle install apiaryio

### apiary preview
This will open a preview of the documentation (without working comments).
