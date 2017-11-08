export default {
    type: 'object',
    additionalProperties: true,
    properties: {
        location: {
            $ref: '#/def/location'
        },
        session: {
            $ref: '#/def/session'
        },
        buckets: {
            $ref: '#/def/buckets'
        },
        gatewayBuckets: {
            $ref: '#/def/gatewayBuckets'
        },
        internalResources: {
            $ref: '#/def/internalResources'
        },
        namespaceResources: {
            $ref: '#/def/namespaceResources'
        },
        objectUploads: {
            $ref: '#/def/objectUploads'
        },
        cloudTargets: {
            $ref: '#/def/cloudTargets'
        }
    },
};