/* Copyright (C) 2016 NooBaa */

import { deepFreeze, mapValues } from 'utils/core-utils';
import { strictify } from 'utils/schema-utils';
import * as common from './common';
import location from './location';
import session from './session';
import namespaceResources from './namespace-resources';
import buckets from './buckets';
import namespaceBuckets from './namespace-buckets';
import objectUploads from './object-uploads';
import cloudTargets from './cloud-targets';
import storageHistory from './storage-history';
import topology from './topology';
import system from './system';
import notifications from './notifications';
import alerts from './alerts';
import auditLog from './audit-log';
import drawer from './drawer';
import modals from './modals';
import hostParts from './host-parts';
import hostPools from './host-pools';
import objects from './objects';
import objectParts from './object-parts';
import accounts from './accounts';
import env from './env';
import forms from './forms';
import cloudResources from './cloud-resources';
import hosts from './hosts';
import functions from './functions';
import bucketUsageHistory from './bucket-usage-history';
import accountUsageHistory from './account-usage-history';
import lambdaUsageHistory from './lambda-usage-history';
import objectsDistribution from './objects-distribution';
import cloudUsageStats from './cloud-usage-stats';
import bucketTriggers from './bucket-triggers';
import endpointGroups from './endpoint-groups';
import endpointsHistory from './endpoints-history';

const schemas = {
    location,
    session,
    namespaceResources,
    buckets,
    objectUploads,
    namespaceBuckets,
    cloudTargets,
    storageHistory,
    topology,
    system,
    notifications,
    alerts,
    auditLog,
    drawer,
    modals,
    hostParts,
    hostPools,
    objects,
    objectParts,
    accounts,
    env,
    forms,
    cloudResources,
    hosts,
    functions,
    bucketUsageHistory,
    accountUsageHistory,
    lambdaUsageHistory,
    objectsDistribution,
    cloudUsageStats,
    bucketTriggers,
    endpointGroups,
    endpointsHistory
};

export default deepFreeze(
    strictify({
        def: {
            common,
            ...schemas
        },
        ...mapValues(
            schemas,
            (_, name) => ({
                $ref: `#/def/${name}`
            })
        )
    })
);

