'use strict';

const router = new Navigo(null, false);
router.on({
    'home': () => {
        let $body = $('body').text(''),
            $divWrapper = $('<div/>').addClass('wrapper'),
            $header = $('<h1/>').text('Welcome to our book store!'),
            $btnStoreBooks = $('<button/>').attr({
                'class': 'btn btn-primary',
            }).text('Books we offer'),
            $btnYourBooks = $('<button/>').attr('class', 'btn btn-primary').text('Books you have'),
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
                'class': 'btn btn-primary btn-lg btn-block',
            }).text('View our books');
        $body.append($divWrapper);
        $form.append($divUser, $divChBox, $btnSignIn);
        $divUser.append($username, $password);
        $divChBox.append($input, $label);
        ($body).append($btnBooks);
        $divWrapper.append($header, $form);
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
    },
    'books': () => {
        let $body = $('body').text(''),
            $div = $('<div/>').text('BOOKS div');
        $div.appendTo($body);
    }
}).resolve();


export {
    router
};