'use strict';

import * as books from 'books';
import * as userBooks from 'userBooks';
import * as myBooks from 'myBooks';

const router = new Navigo(null, false);
router.on({
    'home': () => {
        let $body = $('body').text(''),
            $divWrapper = $('<div/>').addClass('wrapper'),
            $header = $('<h1/>').html('Welcome to our book store!'),
            $form = $('<form/>').attr({
                'class': 'form-inline'
            }),
            $divUser = $('<div/>').attr({
                'class': 'form-group'
            }),
            $username = $('<input/>').attr({
                'class': 'form-control',
                'placeholder': 'Username'
            }),
            $password = $('<input/>').attr({
                'class': 'form-control',
                'placeholder': 'Password',
                'type': 'password'
            }),
            $divChBox = $('<div/>').attr({
                'class': 'checkbox remember'
            }),
            $input = $('<input/>').attr({
                'type': 'checkbox',
            }),
            $label = $('<label/>').attr({
                'class': 'remember'
            }).text('Remember me'),
            $btnSignIn = $('<button/>').attr({
                'class': 'btn btn-default'
            }).text('Sign in'),
            $btnRegister = $('<button/>').attr({
                'class': 'reg btn btn-success'
            }),
            $anchorRegistration = $('<a/>').attr({
                'href': '#registration',
                'class': 'resetCSS'
            }).text('Register'),
            $divBooks = $('<div/>'),
            $btnBooks = $('<button/>').attr({
                'class': 'btn btn-primary btn-block'
            }),
            $btnAnchor = $('<a/>').attr({
                'href': '#books',
                'class': ' btn-lg active btn-block'
            }).text('View our books');

        $body.append($divWrapper);
        $btnRegister.append($anchorRegistration);
        $divUser.append($username, $password);
        $form.append($divUser, $divChBox, $btnSignIn, $btnRegister);
        $divChBox.append($input, $label);
        $body.append($btnBooks);
        $divWrapper.append($header, $form);
        $btnBooks.append($btnAnchor);
    },
    'registration': () => {
        let $body = $('body').text(''),
            $divHeader = $('<div/>').attr({
                'class': 'header'
            }),
            $header = $('<h1/>').html('Register here:'),
            $form = $('<form/>').attr({
                'class': 'form-horizontal'
            }),
            $divFG11 = $('<div/>').attr({
                'class': 'form-group'
            }),
            $divName = $('<div/>').attr({
                'class': 'col-sm-3'
            }),
            $name = $('<input/>').attr({
                'class': 'form-control',
                'placeholder': 'First Name'
            }),
            $divFG12 = $('<div/>').attr({
                'class': 'form-group'
            }),
            $divLName = $('<div/>').attr({
                'class': 'col-sm-3'
            }),
            $lastname = $('<input/>').attr({
                'class': 'form-control',
                'placeholder': 'Last Name'
            }),
            $divFG1 = $('<div/>').attr({
                'class': 'form-group'
            }),
            $divUser = $('<div/>').attr({
                'class': 'col-sm-3'
            }),
            $username = $('<input/>').attr({
                'class': 'form-control',
                'placeholder': 'Username'
            }),
            $divFG2 = $('<div/>').attr({
                'class': 'form-group'
            }),
            $divPass = $('<div/>').attr({
                'class': 'col-sm-3'
            }),
            $password = $('<input/>').attr({
                'class': 'form-control',
                'placeholder': 'Password',
                'type': 'password'
            }),
            $divFG3 = $('<div/>').attr({
                'class': 'form-group'
            }),
            $divChBox = $('<div/>').attr({
                'class': 'checkbox'
            }),
            $label = $('<label/>').text('Remember me').attr({
                'class': 'rememberMe'
            }),
            $input = $('<input/>').attr({
                'type': 'checkbox'
            }),
            $btnSignIn = $('<button/>').attr({
                'class': 'btn btn-success'
            }).text('Sign up');

        $divHeader.append($header);
        $body.append($divHeader);

        $divFG11.appendTo($form);
        $divName.appendTo($divFG11);
        $name.appendTo($divName);
        $divFG12.appendTo($form);
        $divLName.appendTo($divFG12);
        $lastname.appendTo($divLName);


        $divFG1.appendTo($form);
        $divUser.appendTo($divFG1);
        $username.appendTo($divUser);
        $divFG2.appendTo($form);
        $divPass.appendTo($divFG2);
        $password.appendTo($divPass);

        $input.appendTo($divChBox);
        $label.appendTo($divChBox);

        $divChBox.appendTo($divFG3);
        $form.append($divFG11, $divFG12, $divFG1, $divFG2, $divFG3);
        $form.appendTo($body);

        $btnSignIn.appendTo($body);
    },
    'books': () => {
        console.log(myBooks.myBooks);


        let myPromise = new Promise((resolve, reject) => {
            let $body = $('body').text(''),
                $divWrapper = $('<div/>').attr({
                    'class': 'wrapper'
                }),
                $header = $('<h1/>').html('Books:'),
                $btnYourBooks = $('<button/>').attr({
                    'class': 'flRight button btn btn-primary '
                }),
                $anchorYourBooks = $('<a/>').attr({
                    'href': '#user/:id', // id trqbva da se vzeme sled registraciqta ${id}
                    'class': 'btn-lg active'
                }).text('View your books');

            $header.appendTo($divWrapper);
            $anchorYourBooks.appendTo($btnYourBooks);
            $btnYourBooks.appendTo($divWrapper);
            $divWrapper.appendTo($body);

            if (myBooks.myBooks.length === 0) {
                books.books.forEach((element) => {
                    let $bookWrapper = $('<div/>').attr({
                            'class': 'bookWrapper'
                        }),
                        $img = $('<img/>').attr({
                            'src': element.img,
                        }),
                        $infoWrapper = $('<div class=small-font />'),
                        $title = $('<p/>').html(`<label class=small-font >Title:&nbsp</label>${element.title}`),
                        $author = $('<p/>').html(`<label class=small-font >Author:&nbsp</label>${element.author}`),
                        $description = $('<p/>').html(`<label class=small-font >Description:&nbsp</label>${element.description}`),
                        $p = $('<p/>').html('&nbsp <br />'),
                        $moreInfo = $('<a/>').attr({
                            'class': 'yellow',
                            'href': `${element.moreInfo}`
                        }).text('Click here for more info'),
                        $btnAdd = $('<button/>').attr({
                            'class': 'add flRight button btn btn-success small-font'
                        }).text('Add this book');

                    $img.appendTo($bookWrapper);
                    $infoWrapper.append($title, $author, $description, $moreInfo);
                    $infoWrapper.appendTo($bookWrapper);
                    $btnAdd.appendTo($bookWrapper);

                    myBooks.myBooks.push($bookWrapper);
                });
            }

            myBooks.myBooks.forEach((element) => {
                let $p = $('<p/>').html('&nbsp <br />');
                $body.append($p, element[0] || element);
            });

            resolve();
        });
        myPromise.then(() => {
            let $allBtnsAdd = $('div').find('.button.small-font').toArray();

            $allBtnsAdd.forEach((element) => {
                element.onclick = (event) => {
                    let $clickedAddBtn = $(`.${event.target.className}`).prevObject[0].activeElement,
                        indexOfclickedAddBtn = $allBtnsAdd.indexOf($clickedAddBtn),
                        divToAdd = myBooks.myBooks[indexOfclickedAddBtn][0];

                    userBooks.userBooks.push(divToAdd);
                    myBooks.myBooks.splice(indexOfclickedAddBtn, 1);
                    $allBtnsAdd.splice(indexOfclickedAddBtn, 1);
                    divToAdd.previousElementSibling.remove();
                    divToAdd.remove();
                }
            });
        });
    },
    'user/:id': () => {
        let myPromise = new Promise((resolve, reject) => {
            let $body = $('body').text(''),
                $header = $('<h1/>').addClass('marginBottom').html('Your books:'),
                $btnOurBooks = $('<button/>').attr({
                    'class': 'flRight button btn btn-primary '
                }),
                $anchorYourBooks = $('<a/>').attr({
                    'href': '#books', // id trqbva da se vzeme sled registraciqta ${id}
                    'class': 'btn-lg active'
                }).text('View our books');

            $btnOurBooks.append($anchorYourBooks);
            $body.append($header, $btnOurBooks);

            userBooks.userBooks.forEach((element) => {
                element.lastElementChild.className = 'remove flRight button btn btn-danger small-font';
                element.lastElementChild.innerText = 'Remove this book';
                let $p = $('<p/>').html('&nbsp <br />');
                $body.append($p, element);
            });

            resolve();
        });
        myPromise.then(() => {
            var $allBtnsRemove = $('div').find('.button.small-font').toArray();

            $allBtnsRemove.forEach((element) => {
                element.onclick = (event) => {
                    let $clickedRemoveBtn = $(`.${event.target.className}`).prevObject[0].activeElement,
                        indexOfclickedRemoveBtn = $allBtnsRemove.indexOf($clickedRemoveBtn),
                        divToRemove = userBooks.userBooks[indexOfclickedRemoveBtn];

                    element.className = 'add flRight button btn btn-success small-font';
                    element.innerText = 'Add this book';
                    myBooks.myBooks.push(divToRemove);
                    userBooks.userBooks.splice(indexOfclickedRemoveBtn, 1);
                    $allBtnsRemove.splice(indexOfclickedRemoveBtn, 1);
                    divToRemove.previousElementSibling.remove();
                    divToRemove.remove();
                }
            });
        });
    }
}).resolve();

export {
    router
};