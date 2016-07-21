'use strict';

/**
 *
 * POOLS API
 *
 *
 */
module.exports = {

    id: 'pool_api',

    methods: {
        create_nodes_pool: {
            doc: 'Create Pool',
            method: 'POST',
            params: {
                $ref: '#/definitions/pool_definition'
            },
            auth: {
                system: 'admin'
            }
        },

        create_cloud_pool: {
            doc: 'Create Cloud Pool',
            method: 'POST',
            params: {
                type: 'object',
                required: ['name', 'connection', 'target_bucket'],
                properties: {
                    name: {
                        type: 'string',
                    },
                    connection: {
                        type: 'string',
                    },
                    target_bucket: {
                        type: 'string',
                    }
                }
            },
            auth: {
                system: 'admin'
            }
        },

        update_pool: {
            doc: 'Update Pool',
            method: 'POST',
            params: {
                type: 'object',
                required: ['name'],
                properties: {
                    name: {
                        type: 'string',
                    },
                    new_name: {
                        type: 'string',
                    },
                }
            },
            auth: {
                system: 'admin'
            }
        },

        list_pool_nodes: {
            doc: 'List Pool Nodes',
            method: 'GET',
            params: {
                type: 'object',
                required: ['name'],
                properties: {
                    name: {
                        type: 'string',
                    },
                }
            },
            reply: {
                $ref: '#/definitions/pool_definition'
            },
            auth: {
                system: 'admin'
            }
        },

        read_pool: {
            doc: 'Read Pool Information',
            method: 'GET',
            params: {
                type: 'object',
                required: ['name'],
                properties: {
                    name: {
                        type: 'string',
                    },
                }
            },
            reply: {
                $ref: '#/definitions/pool_extended_info'
            },
            auth: {
                system: 'admin'
            }
        },

        delete_pool: {
            doc: 'Delete Pool',
            method: 'POST',
            params: {
                type: 'object',
                required: ['name'],
                properties: {
                    name: {
                        type: 'string',
                    },
                }
            },
            auth: {
                system: 'admin'
            }
        },

        assign_nodes_to_pool: {
            doc: 'Add nodes to Pool',
            method: 'POST',
            params: {
                type: 'object',
                required: ['name'],
                properties: {
                    name: {
                        type: 'string',
                    },
                    nodes: {
                        type: 'array',
                        items: {
                            $ref: 'node_api#/definitions/node_identity'
                        }
                    }
                }
            },
            auth: {
                system: 'admin'
            }
        },

        get_associated_buckets: {
            doc: 'Return list of buckets which are using this pool',
            method: 'GET',
            params: {
                type: 'object',
                required: ['name'],
                properties: {
                    name: {
                        type: 'string',
                    },
                }
            },
            reply: {
                type: 'array',
                items: {
                    type: 'string'
                }
            },
            auth: {
                system: 'admin'
            }
        }

    },

    definitions: {

        pool_definition: {
            type: 'object',
            required: ['name', 'nodes'],
            properties: {
                name: {
                    type: 'string',
                },
                nodes: {
                    type: 'array',
                    items: {
                        $ref: 'node_api#/definitions/node_identity'
                    }
                }
            }
        },


        pool_extended_info: {
            type: 'object',
            required: ['name', 'storage'],
            properties: {
                name: {
                    type: 'string'
                },
                nodes: {
                    $ref: 'node_api#/definitions/nodes_aggregate_info'
                },
                storage: {
                    $ref: 'common_api#/definitions/storage_info'
                },
                undeletable: {
                    $ref: 'common_api#/definitions/undeletable_enum'
                },
                demo_pool: {
                    type: 'boolean'
                },
                cloud_info: {
                    type: 'object',
                    properties: {
                        endpoint: {
                            type: 'string'
                        },
                        target_bucket: {
                            type: 'string'
                        }
                    }
                }
            },
        },

        pools_info: {
            type: 'object',
            required: ['pools'],
            properties: {
                pools: {
                    type: 'array',
                    items: {
                        type: 'object',
                        required: ['name', 'nodes_count'],
                        properties: {
                            name: {
                                type: 'string',
                            },
                            nodes_count: {
                                type: 'integer',
                            },
                        }
                    }
                }
            }
        },

    }
};
