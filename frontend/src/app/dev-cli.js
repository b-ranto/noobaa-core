/* Copyright (C) 2016 NooBaa */

import * as model from 'model';
import { action$, state$ } from 'state';
import * as actionCreators from 'action-creators';
import schema from 'schema';
import { api } from 'services';
import { mapValues } from 'utils/core-utils';
import {
    toObjectUrl,
    openInNewTab,
    downloadFile,
    getWindowName
} from 'utils/browser-utils';

const logToConsole = console.log.bind(console);

const HELP = [
    {
        function: 'dumpAppLog()',
        description:  'Downloads Management Console dump file'
    },
    {
        function: 'toggleApiLogging([enable: boolean])',
        description:  'Toggle the logging of RPC traffic messages to the browser development tools console'
    },
    {
        function: 'openDebugConsole()',
        description:  'Opens a proprietary debug console tool that tracks the Management Console state'
    },
    {
        function: 'printAsJsonInNewTab(value: any)',
        description:  'Stringify the value to JSON format and dump the json to a new window/tab.'
    },
    {
        function: 'downloadAsJson(value: any)',
        description:  'Stringify the value to JSON format and download a file containing the json'
    }
];

const actions = mapValues(
    actionCreators,
    creator => function(...args) {
        action$.next(creator(...args));
    }
);

function printAsJsonInNewTab(data) {
    openInNewTab(toObjectUrl(data));
}

function downloadAsJson(data, name = 'data.json') {
    downloadFile(toObjectUrl(data), name);
}

function openDebugConsole() {
    const [,windowId] = getWindowName().split(':');
    openInNewTab('/fe/debug', `NobaaDebugConsole:${windowId}`);
    return windowId;
}

function toggleApiLogging(enable = !api.rpc.get_request_logger()) {
    const logger = enable ? logToConsole : null;
    api.rpc.set_request_logger(logger);
    return Boolean(logger);
}

function togglePreviewContent() {
    actions.togglePreviewContent();
}

function dumpAppLog() {
    actions.dumpAppLog();
}

function help() {
    for (const f of HELP) {
        console.log(`%cnb.utils.${f.function} - %c${f.description}`, 'font-weight: bold', 'color:blue');
    }
}

const cli = Object.seal({
    model: model,
    schema: schema.def,
    actions: actions,
    state: undefined,
    api: api,
    utils: {
        printAsJsonInNewTab,
        downloadAsJson,
        openDebugConsole,
        toggleApiLogging,
        dumpAppLog,
        togglePreviewContent,
        help
    }
});

state$.subscribe(state => {
    cli.state = state;
});

export default cli;
