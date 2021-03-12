
# template_build_markup

> Template of a markup projects build system

[TOC]

## REQUIRES

* _git_
* _nodejs_
* _yarn_ `sudo npm install --global yarn`

## INSTALL

* `git clone https://github.com/latushko-igor/template_build_markup.git`
* `yarn`
* `gulp`

## SUMMARY

***tools***

* _yarn_ - package manager
* _gulp_ - build system
* _pug_ - html-preprocessor & template engine
* _sass_ - css-preprocessor
* _smartgrid_ - flexbox grid system

***features***

* json file with pages data (`./src/_particles/_data.json`)
* css-styles reset (`./src/_particles/_reset.scss`)
* beml for pug
* sticky footer on flexbox (`./src/main.scss`)
* responsive youtube video (`./src/main.scss`)
* yandex map integrated (`./src/main.js`, `./src/page.pug`)
* mixin (`./src/_particles`)
    - pug (`_mixins.pug`)
        + index page - pages links hub (for multipage markup projects)
        + inline images - svg, png
        + sprites - svg, png / png retina
    - scss (`_mixins.scss`)
        + easing linear gradients
        + sprites
* necessary libraries & plugins (`./gulp/settings.js`, `./src/page.pug` - path to `*.min` files)
* deploying in github pages

## PROJECT FILES

***settings***

* `./package.json` - name
* `./gulp/settings.js` - projectName, libraries & plugins paths, smartgrid settings
* `./src/particles/_data.json` - data for index page & project pages

***pages*** `./src`

* `/index.pug` - index layout
* `/page.pug` - page layout
* `/main.scss` - main styles file
* `/main.js` - custom scripts

***media*** `./src/media`

* `/appearance/svg/*.svg` - svg sprite source
* `/appearance/*.png` - png sprite source
* `/appearance/retina/*.png` - png retina sprite source
* `/appearance/bg/*` - background images
* `/content/*` - content pictures
* `/favicons/*` - favicons
* `/fonts/*/*` - fonts

***particles*** `./src/_particles`

* `_head.pug` - head section
* `_fonts.scss` - fonts
* `_header.pug` - header
* `_footer.pug` - footer

## BUILD SYSTEM FILES

***templates*** `./src/_templates`

* `/_layout.pug` - page
* `/_iframe.pug` - iframe
* `/_form.pug` - form (?)

***styles*** `./src/_particles`

* `/_reset.sass` - resets
* `/_base.sass` - presets
* `/_sprite.sass` - sprites (создается gulp`ом)
* `/_sprite@2x.sass` - retina sprites (создается gulp`ом)

***mixins*** `./src/_particles`

* `/_mixins.pug`
* `/_mixins.sass`

***variables*** `./src/_particles`

* `/_vars.pug`
* `/_vars.sass`

## HOWTO

***project dependencies***

* install `sudo npm install --save <...>`
    - `svg4everybody` - external SVG spritemaps support (all browsers SVG support)
    - `jquery` - javascript library
    - `jquery-form` - forms
    - `jquery-nice-select` - customizable dropdowns
    - `jquery.maskedinput` - masked input
    - `jquery-validation` - form validation
    - `fancybox` - popup
    - slider / carousel
        + `slick-carousel`
        + `owl.carousel`
        + `bxslider` - responsive slider
    - `bootstrap` - grid

***inline png/svg image***

~~~pug
<!-- pug -->
+img('{fileName}', {width}, {height}, '{className}')
~~~

***beml***

~~~pug
<!-- pug -->
nav(block='navigation')
    ul
        li(elem='item', mod='active')
            a(href='#', title='Page') Page
~~~

***svg sprite***

~~~pug
<!-- pug -->
+icon('{filename}', 'mod')
~~~

***png sprite***

~~~pug
<!-- pug -->
+sprite('{filename}', 'mod')
~~~

~~~scss
// scss
.sprite-{filename} {
    @include sprite(${filename}) // for simple sprite
    @include retina-sprite(${filename}-group) // for simple & retina sprite
}
~~~

***easing linear gradients***

~~~scss
// scss
.container {
    @include scrimGradient($startColor, $direction); // rgba(0,0,0,1), 'to bottom'
}
~~~

***yandex map***

~~~pug
<!-- pug -->
div(id='map')
~~~

***responcive youtube video***

~~~pug
<!-- pug -->
div(block='embed-container')
    iframe(src='https://www.youtube.com/embed/HVrLvSeSNME', frameborder='0', allowfullscreen)
~~~

***smart-grid***

Default: `disabled` (in `styles.scss`)

~~~pug
<!-- pug -->
.wrapper
    .row
        .col
        .col
~~~

~~~scss
// scss
.wrapper {
    @include wrapper();

    .row {
        @include row-flex();
        @include md(justify-content, space-between);

        .col {
            @include col();
            @include size(n);
        }
    }
}
~~~

***deploy***

* `gulp deploy` - закачивает страницу на _gh-pages_

## TROUBLESHOOTING

* linux: `Error: ENOSPC: System limit for number of file watchers reached, watch`
~~~sh
# Debian
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
~~~
