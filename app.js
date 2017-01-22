'use strict';

function findEmail(string) {
  let endEmail;
  let startEmail;
  let Email;
  let atSymbol = string.indexOf('@');

  for (var i = atSymbol; i < string.length; i++) {

    if (string[i] == '>') {
      endEmail = string.indexOf(string[i]);
    }

    if (string[i] == ',' || string[i] == ';') {
      endEmail = string.indexOf(string[i]);
    }
  } //end of for loop to find end of email

  //the following for loop is causing bugs... I didn't know without researching how to find and stop at the first instance of a character while looping backwards through a string. So if there's a space in the name, it returns the incorrect email
  for (var j = atSymbol; j > 0; j--) {
    if (string[j] == '<') {
      startEmail = string.indexOf(string[j + 1]);
    }
    else if (string[j] == ' ') {
      startEmail = string.indexOf(string[j + 1]);
    }
  } //end of for loop to find start of email

  Email = string.slice(startEmail + 1, endEmail);
  return Email;
}

function findName(string) {
  let startName;
  let endName;
  let Name;
  for (var i = 0; i < string.length; i++) {

    if (string[0] == '"') {
      startName = string.indexOf(string[1]);
      for (var j = 1; j < string.length; j++) {
        if (string[j] == '"') {
          endName = string.indexOf(string[j + 1]);
        }
      }
    }

    else {
      startName = string[0];
      endName = string.indexOf(' ');
    }
  }

  Name = string.slice(startName, endName);
  return Name;
}

function Person (name, email) {
  this.name = name;
  this.email = email;
}


//TEST INPUTS
var theName = findName('sarah <sarah.debey@gmail.com>');
var theEmail = findEmail('sarah <sarah.debey@gmail.com>');

//with the following inputs, email is returned incorrectly, see note above in findEmail method
// var theName = findName('"sarah debey" sarah.debey@gmail.com');
// var theEmail = findEmail('"sarah debey" sarah.debey@gmail.com');
// var theName = findName('"sarah debey" <sarah.debey@gmail.com>');
// var theEmail = findEmail('"sarah debey" <sarah.debey@gmail.com');

var thePerson = new Person(theName, theEmail);
console.log(thePerson);
