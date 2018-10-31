const _ = require('lodash')

module.exports = {
    id: 'queries',
    title: 'Queries',
    renderer: '#queries',

    jsonSchema: {
        title: 'Queries',
        description: 'general queries asked by the employees',
        type: 'object',
        required: ['query', 'types_of_queries'],
        properties: {
            query: {
                type: 'string',
                title: 'Question'
            },
            types_of_queries: {
                title: 'Types of Queries',
                type: 'array',
                items: {
                    type: 'string',
                    default: ''
                }
            }
        }
    },

    uiSchema: {
        types_of_queries: {
            'ui:options': {
                orderable: false
            }
        }
    },

    computeData: formData => {
        const types_of_queries = formData.types_of_queries.map(i => ({ payload: 'QUERY_TYPE', text: i }))
        const choices = [...types_of_queries]
        return {
            query: formData.query,
            choices: _.shuffle(choices)
        }
    },
    computePreviewText: formData => 'Queries: ' + formData.query,
    computeMetadata: null
}