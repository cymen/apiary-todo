# Why

This is to see how the apiary.io tools work. What we can use for free and what requires the service to work. So far, it looks like these things are free:

* blueprints (and specification)
* validation of blueprint using dredd

These things are not free or are free via the service:

* mock server
* documentation

It is possible to see the generated documentation locally by installing the apiaryio gem and then running `apiary preview` with an apiary.apib blueprint file in the current directory. One sees a generation of the documentation from the blueprint without the ability to actually comment and so forth (the comment link is present). It looks like it fetches some templates from the service to do this and unfortunately doesn't have a way to hook in to generate your own documentation without the service. Of course, the blueprint is in markdown for the most part so if one has to have documentation without using the service...

The real value is having the bluerpint and then implementing the API using the blueprint. I got this blueprint as a sample. I was confused in a few places: the mock server is hard coded to return say the same Todo when asking for one (no matter the ID). All fine and good. But when actually implementing this and running dredd to test the implementation, it was unclear if one was expected to have to tweak the IDs being passed in with the requests so that it would be a valid use case. As in, let's create a document and then delete that document (and not try to get or delete a document that doesn't exist). There was no id parameter on the DELETE of a Todo and it seemed to inherit it from the prior example. So I added one and tweaked it as needed.

**Update**: This example now includes running [literate-jasmine](https://github.com/cymen/literate-jasmine) on `api.md` to test the parts of the API that are harder to test.

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
