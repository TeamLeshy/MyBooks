'use strict';

import * as books from 'books';

const router = new Navigo(null, false);
router.on({
    'home': () => {
        let $body = $('body').text(''),
            $divWrapper = $('<div/>').addClass('wrapper'),
            $header = $('<h1/>').html('<b>Welcome to our book store!</b>'),
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
                'class': 'checkbox'
            }),
            $input = $('<input/>').attr({
                'type': 'checkbox'
            }),
            $label = $('<label/>').text('Remember me'),
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
            }).text('View our books'),
            // $str = $("<script type='text/javascript'>(function () {var s = document.createElement('script');var t = document.getElementsByTagName('script')[0];s.type = 'text/javascript';s.async = true;s.src = 'https://panzi.github.io/SocialSharePrivacy/javascripts/jquery.socialshareprivacy.min.autoload.js';t.parentNode.insertBefore(s, t);})();</script>"),
           
           
           
            $divSocial = $('<div/>') .addClass("share");


        $body.append($divWrapper);
        $btnRegister.append($anchorRegistration);
        $divUser.append($username, $password);
        $form.append($divUser, $divChBox, $btnSignIn, $btnRegister);
        $divChBox.append($input, $label);
        $body.append($btnBooks);
        $divWrapper.append($header, $form);
        $btnBooks.append($btnAnchor);
        
        $divSocial.appendTo($body);
        

    },
    'registration': () => {
        let $body = $('body').text(''),
            $divHeader = $('<div/>').attr({
                'class': 'header'
            }),
            $header = $('<h1/>').html('<b>Register here:</b>'),
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
                'type': 'checkbox',
                'style': 'margin-left:1.5rem'
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




        $btnSignIn.click(function (e) {
            e.preventDefault();
            $.ajax({
                type: "POST",
                url: "api/users",
                data: {
                    id: $(this).val(), // < note use of 'this' here
                    access_token: $("#access_token").val()
                },
                success: function (result) {
                    alert('ok');
                },
                error: function (result) {
                    alert('error');
                }
            });
        });

    },
    'books': () => {
        let $body = $('body').text(''),
            $divWrapper = $('<div/>').attr({
                'class': 'wrapper'
            }),
            $header = $('<h1/>').html('<b>Books:</b>'),
            $btnYourBooks = $('<button/>').attr({
                'class': 'flRight button btn btn-primary hidden'
            }),
            $anchorYour = $('<a/>').attr({
                'href': '#user',
                'class': 'btn-lg active'
            }).text('View your books');

        $header.appendTo($divWrapper);
        $anchorYour.appendTo($btnYourBooks);
        $btnYourBooks.appendTo($divWrapper);
        $divWrapper.appendTo($body);

        for (let i = 0; i < books.books.length; i += 1) {
            let $bookWrapper = $('<div/>').attr({
                'class': 'bookWrapper'
            }),
                $img = $('<img/>').attr({
                    'src': books.books[i].img,
                }),
                $infoWrapper = $('<div class=small-font />'),
                $title = $('<p/>').html(`<label class=small-font >Title:</label> ${books.books[i].title}`),
                $author = $('<p/>').html(`<label class=small-font >Author:</label> ${books.books[i].author}`),
                $description = $('<p/>').html(`<label class=small-font >Description:</label> ${books.books[i].description}`),
                $btnAdd = $('<button/>').attr({
                    'class': 'flRight button btn btn-success small-font '
                }).text('Add this book'),
                $p = $('<p/>').html('&nbsp <br />'),
                $moreInfo = $('<a/>').attr({
                    'class': 'green',
                    'href': `${books.books[i].moreInfo}`
                }).text('Click here for more info');

            $img.appendTo($bookWrapper);
            $infoWrapper.append($title, $author, $description, $moreInfo);
            $infoWrapper.appendTo($bookWrapper);
            $btnAdd.appendTo($bookWrapper);
            $p.appendTo($body);
            $bookWrapper.appendTo($body);
        }
    },
    'user': () => {
        let $body = $('body').text(''),
            $div = $('<div/>').text('USER div');
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