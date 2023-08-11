var socialNetwork = function (socialNetworkName) {
    dataLayer.push({
        'event': 'rrss_click',
        'event_label': socialNetworkName
    })
}
