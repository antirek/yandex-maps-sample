var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {    
    myMap = new ymaps.Map('map', {
        
        center: [56.01, 92.85], // Красноярск
        zoom: 13,
        controls: ['smallMapDefaultSet']
    });    

};