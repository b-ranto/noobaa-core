import { deepFreeze } from 'utils/core-utils';
import { strictify } from 'utils/schema-utils';
import * as common from './common';
import location from './location';
import session from './session';
import internalResources from './internal-resources';
import namespaceResources from './namespace-resources';
import buckets from './buckets';
import gatewayBuckets from './gateway-buckets';
import objectUploads from './object-uploads';
import cloudTargets from './cloud-targets';
import state from './state.js';

const schemas = {
    common,
    location,
    session,
    internalResources,
    namespaceResources,
    buckets,
    objectUploads,
    gatewayBuckets,
    cloudTargets,
    state
};

export default deepFreeze(
    strictify({
        def: schemas,

        // Define that root schema for the validator will be the state schema.
        $ref: '#/def/state'
    })
);
