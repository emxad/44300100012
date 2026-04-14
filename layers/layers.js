var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_loc44300100012_1 = new ol.format.GeoJSON();
var features_loc44300100012_1 = format_loc44300100012_1.readFeatures(json_loc44300100012_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_loc44300100012_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_loc44300100012_1.addFeatures(features_loc44300100012_1);
var lyr_loc44300100012_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_loc44300100012_1, 
                style: style_loc44300100012_1,
                popuplayertitle: 'loc44300100012',
                interactive: true,
                title: '<img src="styles/legend/loc44300100012_1.png" /> loc44300100012'
            });
var format_to44300100012_2 = new ol.format.GeoJSON();
var features_to44300100012_2 = format_to44300100012_2.readFeatures(json_to44300100012_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_to44300100012_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_to44300100012_2.addFeatures(features_to44300100012_2);
var lyr_to44300100012_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_to44300100012_2, 
                style: style_to44300100012_2,
                popuplayertitle: 'to44300100012',
                interactive: true,
                title: '<img src="styles/legend/to44300100012_2.png" /> to44300100012'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_loc44300100012_1.setVisible(true);lyr_to44300100012_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_loc44300100012_1,lyr_to44300100012_2];
lyr_loc44300100012_1.set('fieldAliases', {'id': 'id', });
lyr_to44300100012_2.set('fieldAliases', {'id': 'id', });
lyr_loc44300100012_1.set('fieldImages', {'id': 'TextEdit', });
lyr_to44300100012_2.set('fieldImages', {'id': 'TextEdit', });
lyr_loc44300100012_1.set('fieldLabels', {'id': 'no label', });
lyr_to44300100012_2.set('fieldLabels', {'id': 'no label', });
lyr_to44300100012_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});