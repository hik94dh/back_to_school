
function pushStateToDataLayerLogo(event) {
    return function(label, location) {
            dataLayer.push({
                    'event':'OWOX',
                    'eventCategory': 'Interactions',
                    'eventAction': 'click',
                    'eventLabel': label,
                    'eventContent': event.target.innerHTML.trim(),
                    'eventLocation': location
            });
            console.log('click logo');
    }
};

function pushStateToDataLayerGoToUlmart(event) {
    return function(label, location) {
            dataLayer.push({
                    'event':'OWOX',
                    'eventCategory': 'Interactions',
                    'eventAction': 'click',
                    'eventLabel': label,
                    'eventContent': event.target.innerHTML.trim(),
                    'eventLocation': location
            });
            console.log('click GoToUlmart');
    }
};

function pushStateToDataLayerProduct(event) {
    return function(label, location, product) {
            dataLayer.push({
                    'event':'OWOX',
                    'eventCategory': 'Interactions',
                    'eventAction': 'click',
                    'eventLabel': label,
                    'eventContent': event.target.innerHTML.trim(),
                    'eventLocation': location,
                    'eventContext': product
            });
            console.log('click Product');
    }
};

function pushStateToDataLayerCategory(event) {
    return function(label, location, category) {
            dataLayer.push({
                    'event':'OWOX',
                    'eventCategory': 'Interactions',
                    'eventAction': 'click',
                    'eventLabel': label,
                    'eventContent': event.target.innerHTML.trim(),
                    'eventLocation': location,
                    'eventContext': category
            });
            console.log('click Category');
    }
};

function pushStateToDataLayerGoToUlmartFooter(event) {
    return function(label, location) {
            dataLayer.push({
                    'event':'OWOX',
                    'eventCategory': 'Interactions',
                    'eventAction': 'click',
                    'eventLabel': label,
                    'eventContent': event.target.innerHTML.trim(),
                    'eventLocation': location
            });
            console.log('click GoToUlmartFooter');
    }
};

function pushStateToDataLayerSocial(event) {
    return function(label, location, social) {
            dataLayer.push({
                    'event':'OWOX',
                    'eventCategory': 'Interactions',
                    'eventAction': 'click',
                    'eventLabel': label,
                    'eventContent': event.target.innerHTML.trim(),
                    'eventLocation': location,
                    'eventContext': social
            });
            console.log('click Social');
    }
};