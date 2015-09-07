'use strict';

var api = require('../api');
var bg_workers_rpc = api.rpc;
var server_rpc = api.new_rpc();

module.exports = {
    server_rpc: server_rpc,
    bg_workers_rpc: bg_workers_rpc,
};

bg_workers_rpc.register_service(api.schema.cloud_sync_api, require('./cloud_sync_rpc'));
bg_workers_rpc.register_service(api.schema.signaller_api, require('./signaller'));
bg_workers_rpc.register_service(api.schema.debug_api, require('../server/debug_server'));
