var a19_0x2f78=['./playerDevices/player-devices-controller','./companies/companies-controller','./users/users-controller','./userTypes/user-types-controller','usersController','userTypesController','default','userTypesModel','authenticationController','usersModel','companiesController','companiesModel','routesController','routesModel','routesSchedulesModel','devicesModel','deviceTypesController','deviceTypesModel','playersController','playersModel','playerDevicesController','devicesController','vehiclesController','vehiclesCountController','vehiclesCountModel','alarmsController','alarmsModel','__esModule','defineProperty','./authentication/authentication-controller','./vehicles/vehicles-controller','./vehiclesCount/vehicles-count-controller'];(function(_0x15ac83,_0x14068e){var _0x3a26d7=function(_0x2be26c){while(--_0x2be26c){_0x15ac83['push'](_0x15ac83['shift']());}};_0x3a26d7(++_0x14068e);}(a19_0x2f78,0x13b));var a19_0x1420=function(_0x112b4f,_0x2472e3){_0x112b4f=_0x112b4f-0x0;var _0x220f8f=a19_0x2f78[_0x112b4f];return _0x220f8f;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x388ad8){return _0x388ad8&&_0x388ad8[a19_0x1420('0x0')]?_0x388ad8:{'default':_0x388ad8};};Object[a19_0x1420('0x1')](exports,'__esModule',{'value':!![]});const authentication_controller_1=__importDefault(require(a19_0x1420('0x2')));const devices_controller_1=__importDefault(require('./devices/devices-controller'));const players_controller_1=__importDefault(require('./players/players-controller'));const vehicles_controller_1=__importDefault(require(a19_0x1420('0x3')));const vehicles_count_controller_1=__importDefault(require(a19_0x1420('0x4')));const alarms_controller_1=__importDefault(require('./alarms/alarms-controller'));const player_devices_controller_1=__importDefault(require(a19_0x1420('0x5')));const companies_controller_1=__importDefault(require(a19_0x1420('0x6')));const users_controller_1=__importDefault(require(a19_0x1420('0x7')));const user_types_controller_1=__importDefault(require(a19_0x1420('0x8')));const device_types_controller_1=__importDefault(require('./deviceTypes/device-types-controller'));const routes_controller_1=__importDefault(require('./routes/routes-controller'));const route_schedules_controller_1=__importDefault(require('./route_schedules/route-schedules-controller'));class Controllers{constructor(_0x47bb59){this[a19_0x1420('0x9')]=new users_controller_1['default'](_0x47bb59['usersModel']);this[a19_0x1420('0xa')]=new user_types_controller_1[(a19_0x1420('0xb'))](_0x47bb59[a19_0x1420('0xc')]);this[a19_0x1420('0xd')]=new authentication_controller_1[(a19_0x1420('0xb'))](_0x47bb59[a19_0x1420('0xe')]);this[a19_0x1420('0xf')]=new companies_controller_1['default'](_0x47bb59[a19_0x1420('0x10')]);this[a19_0x1420('0x11')]=new routes_controller_1[(a19_0x1420('0xb'))](_0x47bb59[a19_0x1420('0x12')]);this['routeSchedulesController']=new route_schedules_controller_1['default'](_0x47bb59[a19_0x1420('0x13')]);this['devicesController']=new devices_controller_1[(a19_0x1420('0xb'))](_0x47bb59[a19_0x1420('0x14')]);this[a19_0x1420('0x15')]=new device_types_controller_1['default'](_0x47bb59[a19_0x1420('0x16')]);this[a19_0x1420('0x17')]=new players_controller_1['default'](_0x47bb59[a19_0x1420('0x18')]);this[a19_0x1420('0x19')]=new player_devices_controller_1['default'](_0x47bb59['playersModel'],this[a19_0x1420('0x1a')],this[a19_0x1420('0x17')]);this[a19_0x1420('0x1b')]=new vehicles_controller_1[(a19_0x1420('0xb'))](_0x47bb59['vehiclesModel']);this[a19_0x1420('0x1c')]=new vehicles_count_controller_1['default'](_0x47bb59[a19_0x1420('0x1d')],this[a19_0x1420('0x1b')]);this[a19_0x1420('0x1e')]=new alarms_controller_1['default'](_0x47bb59[a19_0x1420('0x1f')]);}}exports['default']=Controllers;