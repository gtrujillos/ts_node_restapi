var a93_0x5e29=['documentTypesModel','default','documentTypesModelName','userStatusModel','usersModelName','userRelationshipStatusesModelName','userRelationshipsModel','userRelationshipsModelName','countriesModel','countriesModelName','provincesModel','provincesModelName','citiesModel','citiesModelName','filesModel','filesModelName','timeLogsModel','locationPointsModel','locationPointsModelName','companiesModel','companiesModelName','projectsModel','projectsModelName','productsModel','productUsersModelName','productFilesModelName','productTimeLogsModelName','brandsModel','brandsModelName','devicesModel','routesModel','routesModelName','vehiclesModel','vehiclesModelName','eventStatusModel','eventStatusModelName','eventTypesModel','eventTypesModelName','eventsModel','eventsModelName','activityTypesModel','activityTypesModelName','activitiesModel','activitiesModelName','activityUsersModel','activityUsersModelName','activityFilesModel','activityFilesModelName','activityTimeLogsModel','activityTimeLogsModelName','activityProductsModel','userRelationshipStatusesModel','associate','productFilesModel','sync','instance','./users/users-model','./locationPoints/location-points-model','./devices/devices-model','./deviceTypes/device-types-model','./companies/companies-model','./vehicles/vehicles-model','./routes/routes-model','./cities/cities-model','./countries/countries-model','./eventTypes/event-types-model','./events/events-model','./eventStatuses/event-statuses-model','./projects/projects-model','./userStatuses/user-statuses-model','./userRelationships/user-relationships-model','./userRelationshipStatuses/user-relationship-statuses-model','./activities/activities-model','./activityUsers/activity-users-model','./products/products-model','./files/files-model','./activityFiles/activity-files-model','./timeLogs/time-logs-model','./productFiles/product-files-model','./activityTimeLogs/activity-time-logs-model','./activityProducts/activity-products-model','./productUsers/product-users-model','./activityTypes/activity-types-model','modelNames','users','user_statuses','document_types','user_relationships','user_relationship_statuses','countries','provinces','files','time_logs','location_points','routes','brands','vehicles','route_schedules','event_statuses','products','product_files','product_time_logs','activities','activity_types','activity_users','activity_products','devices'];(function(_0x1421f9,_0xa7900b){var _0x371c54=function(_0x5f2f93){while(--_0x5f2f93){_0x1421f9['push'](_0x1421f9['shift']());}};_0x371c54(++_0xa7900b);}(a93_0x5e29,0x1e4));var a93_0x5803=function(_0x2ec364,_0x47ac87){_0x2ec364=_0x2ec364-0x0;var _0x11a379=a93_0x5e29[_0x2ec364];return _0x11a379;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x10887d){return _0x10887d&&_0x10887d['__esModule']?_0x10887d:{'default':_0x10887d};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const users_model_1=__importDefault(require(a93_0x5803('0x0')));const location_points_model_1=__importDefault(require(a93_0x5803('0x1')));const devices_model_1=__importDefault(require(a93_0x5803('0x2')));const device_types_model_1=__importDefault(require(a93_0x5803('0x3')));const companies_model_1=__importDefault(require(a93_0x5803('0x4')));const vehicles_model_1=__importDefault(require(a93_0x5803('0x5')));const brands_model_1=__importDefault(require('./brands/brands-model'));const routes_model_1=__importDefault(require(a93_0x5803('0x6')));const provinces_model_1=__importDefault(require('./provinces/provinces-model'));const cities_model_1=__importDefault(require(a93_0x5803('0x7')));const countries_model_1=__importDefault(require(a93_0x5803('0x8')));const event_types_model_1=__importDefault(require(a93_0x5803('0x9')));const events_model_1=__importDefault(require(a93_0x5803('0xa')));const event_statuses_model_1=__importDefault(require(a93_0x5803('0xb')));const projects_model_1=__importDefault(require(a93_0x5803('0xc')));const user_statuses_model_1=__importDefault(require(a93_0x5803('0xd')));const user_relationships_model_1=__importDefault(require(a93_0x5803('0xe')));const user_relationship_statuses_model_1=__importDefault(require(a93_0x5803('0xf')));const activities_model_1=__importDefault(require(a93_0x5803('0x10')));const activity_users_model_1=__importDefault(require(a93_0x5803('0x11')));const products_model_1=__importDefault(require(a93_0x5803('0x12')));const document_types_model_1=__importDefault(require('./documentTypes/document-types-model'));const files_model_1=__importDefault(require(a93_0x5803('0x13')));const activity_files_model_1=__importDefault(require(a93_0x5803('0x14')));const time_logs_model_1=__importDefault(require(a93_0x5803('0x15')));const product_files_model_1=__importDefault(require(a93_0x5803('0x16')));const activity_time_logs_model_1=__importDefault(require(a93_0x5803('0x17')));const activity_products_model_1=__importDefault(require(a93_0x5803('0x18')));const product_time_logs_model_1=__importDefault(require('./productTimeLogs/product-time-logs-model'));const product_users_model_1=__importDefault(require(a93_0x5803('0x19')));const activity_types_model_1=__importDefault(require(a93_0x5803('0x1a')));class Models{constructor(_0x7435c2){this[a93_0x5803('0x1b')]={'usersModelName':a93_0x5803('0x1c'),'userStatusModelName':a93_0x5803('0x1d'),'documentTypesModelName':a93_0x5803('0x1e'),'userRelationshipsModelName':a93_0x5803('0x1f'),'userRelationshipStatusesModelName':a93_0x5803('0x20'),'countriesModelName':a93_0x5803('0x21'),'provincesModelName':a93_0x5803('0x22'),'citiesModelName':'cities','filesModelName':a93_0x5803('0x23'),'timeLogsModelName':a93_0x5803('0x24'),'locationPointsModelName':a93_0x5803('0x25'),'companiesModelName':'companies','routesModelName':a93_0x5803('0x26'),'brandsModelName':a93_0x5803('0x27'),'vehiclesModelName':a93_0x5803('0x28'),'routeSchedulesModelName':a93_0x5803('0x29'),'eventsModelName':'events','eventTypesModelName':'event_types','eventStatusModelName':a93_0x5803('0x2a'),'projectsModelName':'projects','productsModelName':a93_0x5803('0x2b'),'productUsersModelName':'product_users','productFilesModelName':a93_0x5803('0x2c'),'productTimeLogsModelName':a93_0x5803('0x2d'),'activitiesModelName':a93_0x5803('0x2e'),'activityTypesModelName':a93_0x5803('0x2f'),'activityUsersModelName':a93_0x5803('0x30'),'activityFilesModelName':'activity_files','activityTimeLogsModelName':'activity_time_logs','activityProductsModelName':a93_0x5803('0x31'),'deviceTypesModelName':'device_types','devices':a93_0x5803('0x32')};Models['instance']=this;this[a93_0x5803('0x33')]=new document_types_model_1[(a93_0x5803('0x34'))](_0x7435c2,this['modelNames'][a93_0x5803('0x35')],this);this[a93_0x5803('0x36')]=new user_statuses_model_1[(a93_0x5803('0x34'))](_0x7435c2,this[a93_0x5803('0x1b')]['userStatusModelName'],this);this['usersModel']=new users_model_1['default'](_0x7435c2,this[a93_0x5803('0x1b')][a93_0x5803('0x37')],this);this['userRelationshipStatusesModel']=new user_relationship_statuses_model_1[(a93_0x5803('0x34'))](_0x7435c2,this[a93_0x5803('0x1b')][a93_0x5803('0x38')],this);this[a93_0x5803('0x39')]=new user_relationships_model_1['default'](_0x7435c2,this[a93_0x5803('0x1b')][a93_0x5803('0x3a')],this);this[a93_0x5803('0x3b')]=new countries_model_1[(a93_0x5803('0x34'))](_0x7435c2,this['modelNames'][a93_0x5803('0x3c')],this);this[a93_0x5803('0x3d')]=new provinces_model_1[(a93_0x5803('0x34'))](_0x7435c2,this[a93_0x5803('0x1b')][a93_0x5803('0x3e')],this);this[a93_0x5803('0x3f')]=new cities_model_1[(a93_0x5803('0x34'))](_0x7435c2,this[a93_0x5803('0x1b')][a93_0x5803('0x40')],this);this[a93_0x5803('0x41')]=new files_model_1[(a93_0x5803('0x34'))](_0x7435c2,this['modelNames'][a93_0x5803('0x42')],this);this[a93_0x5803('0x43')]=new time_logs_model_1['default'](_0x7435c2,this[a93_0x5803('0x1b')]['timeLogsModelName'],this);this[a93_0x5803('0x44')]=new location_points_model_1[(a93_0x5803('0x34'))](_0x7435c2,this[a93_0x5803('0x1b')][a93_0x5803('0x45')],this);this[a93_0x5803('0x46')]=new companies_model_1['default'](_0x7435c2,this[a93_0x5803('0x1b')][a93_0x5803('0x47')],this);this[a93_0x5803('0x48')]=new projects_model_1[(a93_0x5803('0x34'))](_0x7435c2,this[a93_0x5803('0x1b')][a93_0x5803('0x49')],this);this[a93_0x5803('0x4a')]=new products_model_1[(a93_0x5803('0x34'))](_0x7435c2,this[a93_0x5803('0x1b')]['productsModelName'],this);this['productUsersModel']=new product_users_model_1['default'](_0x7435c2,this[a93_0x5803('0x1b')][a93_0x5803('0x4b')],this);this['productFilesModel']=new product_files_model_1['default'](_0x7435c2,this[a93_0x5803('0x1b')][a93_0x5803('0x4c')],this);this['productTimeLogsModel']=new product_time_logs_model_1[(a93_0x5803('0x34'))](_0x7435c2,this[a93_0x5803('0x1b')][a93_0x5803('0x4d')],this);this[a93_0x5803('0x4e')]=new brands_model_1['default'](_0x7435c2,this[a93_0x5803('0x1b')][a93_0x5803('0x4f')],this);this['deviceTypesModel']=new device_types_model_1[(a93_0x5803('0x34'))](_0x7435c2,this['modelNames']['deviceTypesModelName'],this);this[a93_0x5803('0x50')]=new devices_model_1[(a93_0x5803('0x34'))](_0x7435c2,this['modelNames'][a93_0x5803('0x32')],this);this[a93_0x5803('0x51')]=new routes_model_1[(a93_0x5803('0x34'))](_0x7435c2,this[a93_0x5803('0x1b')][a93_0x5803('0x52')],this);this[a93_0x5803('0x53')]=new vehicles_model_1[(a93_0x5803('0x34'))](_0x7435c2,this[a93_0x5803('0x1b')][a93_0x5803('0x54')],this);this[a93_0x5803('0x55')]=new event_statuses_model_1['default'](_0x7435c2,this[a93_0x5803('0x1b')][a93_0x5803('0x56')],this);this[a93_0x5803('0x57')]=new event_types_model_1['default'](_0x7435c2,this[a93_0x5803('0x1b')][a93_0x5803('0x58')],this);this[a93_0x5803('0x59')]=new events_model_1[(a93_0x5803('0x34'))](_0x7435c2,this['modelNames'][a93_0x5803('0x5a')],this);this[a93_0x5803('0x5b')]=new activity_types_model_1[(a93_0x5803('0x34'))](_0x7435c2,this[a93_0x5803('0x1b')][a93_0x5803('0x5c')],this);this[a93_0x5803('0x5d')]=new activities_model_1[(a93_0x5803('0x34'))](_0x7435c2,this[a93_0x5803('0x1b')][a93_0x5803('0x5e')],this);this[a93_0x5803('0x5f')]=new activity_users_model_1[(a93_0x5803('0x34'))](_0x7435c2,this['modelNames'][a93_0x5803('0x60')],this);this[a93_0x5803('0x61')]=new activity_files_model_1[(a93_0x5803('0x34'))](_0x7435c2,this[a93_0x5803('0x1b')][a93_0x5803('0x62')],this);this[a93_0x5803('0x63')]=new activity_time_logs_model_1[(a93_0x5803('0x34'))](_0x7435c2,this[a93_0x5803('0x1b')][a93_0x5803('0x64')],this);this[a93_0x5803('0x65')]=new activity_products_model_1[(a93_0x5803('0x34'))](_0x7435c2,this[a93_0x5803('0x1b')]['activityProductsModelName'],this);this['userStatusModel']['associate'](this);this['usersModel']['associate'](this);this[a93_0x5803('0x66')]['associate'](this);this[a93_0x5803('0x39')]['associate'](this);this[a93_0x5803('0x41')][a93_0x5803('0x67')](this);this[a93_0x5803('0x68')][a93_0x5803('0x67')](this);this[a93_0x5803('0x4a')][a93_0x5803('0x67')](this);this[a93_0x5803('0x61')][a93_0x5803('0x67')](this);this[a93_0x5803('0x63')][a93_0x5803('0x67')](this);this[a93_0x5803('0x5d')][a93_0x5803('0x67')](this);this[a93_0x5803('0x65')]['associate'](this);_0x7435c2[a93_0x5803('0x69')]({'force':![]})['then'](()=>{});}static['getInstance'](){return Models[a93_0x5803('0x6a')];}}exports['default']=Models;