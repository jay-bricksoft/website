/// <reference path="./typings.d.ts" />

import * as Masonry from 'masonry-layout';
import debounce from './debounce';
import * as jQuery from 'jquery';
window.jQuery = jQuery;
window.$ = jQuery
import 'simplelightbox';

jQuery(() => {
    let gallery = jQuery('.gallery a').simpleLightbox();
    console.log (gallery);

    gallery.on('show.simplelightbox', function(){
        console.log('Requested for showing');
    })
    .on('shown.simplelightbox', function(){
        console.log('Shown');
    })
    .on('close.simplelightbox', function(){
        console.log('Requested for closing');
    })
    .on('closed.simplelightbox', function(){
        console.log('Closed');
    })
    .on('change.simplelightbox', function(){
        console.log('Requested for change');
    })
    .on('next.simplelightbox', function(){
        console.log('Requested for next');
    })
    .on('prev.simplelightbox', function(){
        console.log('Requested for prev');
    })
    .on('nextImageLoaded.simplelightbox', function(){
        console.log('Next image loaded');
    })
    .on('prevImageLoaded.simplelightbox', function(){
        console.log('Prev image loaded');
    })
    .on('changed.simplelightbox', function(){
        console.log('Image changed');
    })
    .on('nextDone.simplelightbox', function(){
        console.log('Image changed to next');
    })
    .on('prevDone.simplelightbox', function(){
        console.log('Image changed to prev');
    })
    .on('error.simplelightbox', function(e){
        console.log('No image found, go to the next/prev');
        console.log(e);
    });



    /*const gallery = new Masonry('.gallery-grid', {
        itemSelector: '.gallery',
        columnWidth: '.grid-sizer',
        percentPosition: true,
        gutter: 25,
    });

    gallery.layout();

    const refreshLayout = debounce(function() {
        gallery.layout();
    }, 100);
    refreshLayout();

    jQuery('.gallery img').on('load', refreshLayout);

*/
})