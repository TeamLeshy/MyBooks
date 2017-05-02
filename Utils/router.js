'use strict';

import * as books from 'books';

const router = new Navigo(null, false);
router.on({
    'home': () => {
        let $body = $('body').text(''),
            $divWrapper = $('<div/>').addClass('wrapper'),
            $header = $('<h1/>').html('<b>Welcome to our book store!</b>'),
            $form = $('<form/>').attr({
                'class': 'form-inline',
            }),
            $divUser = $('<div/>').attr({
                'class': 'form-group'
            }),
            $username = $('<input/>').attr({
                'class': 'form-control',
                'placeholder': 'Username',
            }),
            $password = $('<input/>').attr({
                'class': 'form-control',
                'placeholder': 'Password',
                'type': 'password'
            }),
            $divChBox = $('<div/>').attr({
                'class': 'checkbox',
            }),
            $input = $('<input/>').attr({
                'type': 'checkbox'
            }).text('Remember me'),
            $label = $('<label/>').text('Remember me'),
            $btnSignIn = $('<button/>').attr({
                'class': 'btn btn-default',
            }).text('Sign in / Register'),
            $divBooks = $('<div/>'),
            $btnBooks = $('<button/>').attr({
                'class': 'btn btn-primary btn-block',
            }),
            $btnAnchor = $('<a/>').attr({
                'href': '#books',
                'class': ' btn-lg active btn-block',
            }).text('View our books');

        $body.append($divWrapper);
        $form.append($divUser, $divChBox, $btnSignIn);
        $divUser.append($username, $password);
        $divChBox.append($input, $label);
        $body.append($btnBooks);
        $divWrapper.append($header, $form);
        $btnBooks.append($btnAnchor);
    },
    'books': () => {
        let $body = $('body').text(''),
            $divWrapper = $('<div/>').attr({
                'class': 'wrapper',
            }),
            $header = $('<h1/>').text('Books:'),
            $btnYourBooks = $('<button/>').attr({
                'class': 'flRight button btn btn-primary',
            }),
            $anchorYour = $('<a/>').attr({
                'href': '#user',
                'class': 'btn-lg active',
            }).text('View your books');

        $header.appendTo($divWrapper);
        $anchorYour.appendTo($btnYourBooks);
        $btnYourBooks.appendTo($divWrapper);
        $divWrapper.appendTo($body);

        for (let i = 0; i < books.books.length; i += 1) {
            let $bookWrapper = $('<div/>').attr({
                    'class': 'bookWrapper',
                }),
                $img = $('<img/>').attr({
                    'src': books.books[i].img,
                }),
                $infoWrapper = $('<div/>'),
                $title = $('<p/>').html(`<label>Title:</label> ${books.books[i].title}`),
                $author = $('<p/>').html(`<label>Author:</label> ${books.books[i].author}`),
                $description = $('<p/>').html(`<label>Description:</label> ${books.books[i].description}`);

            $img.appendTo($bookWrapper);
            $title.appendTo($infoWrapper);
            $author.appendTo($infoWrapper);
            $description.appendTo($infoWrapper);
            $infoWrapper.appendTo($bookWrapper);
            $bookWrapper.appendTo($body);
        }




    },











    'user': () => {
        let $body = $('body').text(''),
            $div = $('<div/>').text('USER div');
        $div.appendTo($body);
    },
    'login': () => {
        let $body = $('body').text(''),
            $div = $('<div/>').text('LOGIN div');
        $div.appendTo($body);
    },
    'user/:id': () => {
        let $body = $('body').text(''),
            $div = $('<div/>').text('USER 42 div');
        $div.appendTo($body);
    }
}).resolve();


export {
    router
};