var wms_layers = [];

var format_tamilanadu_0 = new ol.format.GeoJSON();
var features_tamilanadu_0 = format_tamilanadu_0.readFeatures(json_tamilanadu_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tamilanadu_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tamilanadu_0.addFeatures(features_tamilanadu_0);
var lyr_tamilanadu_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tamilanadu_0, 
                style: style_tamilanadu_0,
                popuplayertitle: "tamilanadu",
                interactive: true,
    title: 'tamilanadu<br />\
    <img src="styles/legend/tamilanadu_0_0.png" /> 110647 - 147156<br />\
    <img src="styles/legend/tamilanadu_0_1.png" /> 147156 - 232230<br />\
    <img src="styles/legend/tamilanadu_0_2.png" /> 232230 - 356721<br />\
    <img src="styles/legend/tamilanadu_0_3.png" /> 356721 - 425687<br />\
    <img src="styles/legend/tamilanadu_0_4.png" /> 425687 - 460889<br />'
        });

lyr_tamilanadu_0.setVisible(true);
var layersList = [lyr_tamilanadu_0];
lyr_tamilanadu_0.set('fieldAliases', {'DST_ID': 'DST_ID', 'DISTRICT': 'DISTRICT', 'STATE': 'STATE', 'population': 'population', 'populati_1': 'populati_1', 'populati_2': 'populati_2', });
lyr_tamilanadu_0.set('fieldImages', {'DST_ID': 'TextEdit', 'DISTRICT': 'TextEdit', 'STATE': 'TextEdit', 'population': 'TextEdit', 'populati_1': 'TextEdit', 'populati_2': 'TextEdit', });
lyr_tamilanadu_0.set('fieldLabels', {'DST_ID': 'no label', 'DISTRICT': 'no label', 'STATE': 'no label', 'population': 'no label', 'populati_1': 'no label', 'populati_2': 'no label', });
lyr_tamilanadu_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});