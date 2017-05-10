if ( $('.test-sentence__clear-btn').length > 0 ) {

    var sentencesWords = $('.test-sentence__text-area span'),
        sentencesButtonsBox = $('.test-sentence__buttons-line'),
        sentencesButtons = sentencesButtonsBox.find('input');

    sentencesWords.on('click', function () {
       var t = $(this),
           chekedButtonClass = sentencesButtons.filter(':checked').attr('class');

       t.removeAttr('class');

        switch ( chekedButtonClass ) {
            case 'gramm-subject-input test-sentense-input':
                t.addClass('gramm-subject');
                break;
            case 'predicate-input test-sentense-input':
                t.addClass('predicate');
                break;
            case 'gramm-object-input test-sentense-input':
                t.addClass('gramm-object');
                break;
            case 'gramm-modifier-input test-sentense-input':
                t.addClass('gramm-modifier');
                break;
            case 'adverbial-input test-sentense-input':
                t.addClass('adverbial-common');
                break;
            case 'blue-input test-sentense-input':
                t.addClass('text-blue');
                break;
            case 'orange-input test-sentense-input':
                t.addClass('text-orange');
                break;
            case 'purple-input test-sentense-input':
                t.addClass('text-purple');
                break;            
        }
    });


    $('.test-sentence__clear-btn').on('click', function () {
        
        sentencesButtons.prop('checked', false);
        sentencesWords.removeAttr('class');

    });

}