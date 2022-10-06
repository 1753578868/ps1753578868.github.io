/* 

Inspired by this pen:
https://codepen.io/Nyloxz/pen/Bqpdh

And these guys
https://lincolnloop.com/

*/

$( document ).ready(function() {
  

    // configure some action keys and selectors for elements to apply them to
     var keysToApply = {
       /* 'key/value to share': ['jquery-selector-to-action-el', 'jquery-selector-to-target-el'] */
       'hospitality': ['.color-list .color.hospitality', '.greybg.tuckinfo .hospitality-expanded'],
       'taverns': ['.color-list .color.taverns', '#wrapper .information'],
           'philanthropy': ['.color-list .color.philanthropy', '.greybg.tuckinfo'],
       'consulting': ['.color-list .color.consulting', '.greybg.tuckinfo'],
       'private': ['.color-list .color.private', '.greybg.tuckinfo']  
     };
     
     // loop through our config and apply the data attributes
     $.each(keysToApply, function(key, params)
     {
       $(params[0]).attr('data-trigger-action', key);
       $(params[1]).attr('data-trigger-key', key);
     })
     
     // cache our jQuery objects for our actions/keys
     var $triggerActions = $('[data-trigger-action]'),
         $triggerKeys = $('[data-trigger-key]');
   
     // handle the sliding up/down of items on click
     $("[data-trigger-action]").on("click", function(e)
     {
       e.preventDefault();
   
       var _key = $(this).attr("data-trigger-action");
   
       $triggerKeys
         .filter('[data-trigger-key!="' + _key + '"]').slideUp()
         .end().filter('[data-trigger-key="' + _key + '"]').slideDown();
     });
     
     
   
   /*$('ul.sub-nav a li').click(function(){
     var className = '.' + $(this).attr('class').replace('','').split(/\s+/).join('.');
       $('.active').slideUp('slow').css('opacity','0');
       $(this).toggleClass('active').css('opacity','1');
         console.log(className);
       return false;
     });*/
     
     
   }); // Ready