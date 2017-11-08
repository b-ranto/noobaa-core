export const size = {
    oneOf: [
        {
            type: 'integer'
        },
        {
            type: 'object',
            properties: {
                n: {
                    type: 'integer',
                },
                peta: {
                    type: 'integer',
                }
            }
        }
    ]
};

export const storage = {
    type: 'object',
    properties: {
        lastUpdate: {
            type: 'integer'
        },
        total: {
            $ref: '#/def/common/size'
        },
        free: {
            $ref: '#/def/common/size'
        },
        spilloverFree: {
            $ref: '#/def/common/size'
        },
        unavailableFree: {
            $ref: '#/def/common/size'
        },
        used: {
            $ref: '#/def/common/size'
        },
        usedOther: {
            $ref: '#/def/common/size'
        },
        reserved: {
            $ref: '#/def/common/size'
        }
    }
};