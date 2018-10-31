module.exports = {
    id: 'message',
    title: 'Message',
    renderer: '#message',
  
    jsonSchema: {
      title: 'A regular Text message',
      description: 'A regular Text message',
      type: 'object',
      required: ['message'],
      properties: {
        message: {
          type: 'string',
          title: 'Message'
        },
        typing: {
          type: 'boolean',
          title: 'Show typing indicators',
          default: true
        }
      }
    },
  
    uiSchema: {
      variations: {
        'ui:options': {
          orderable: false
        }
      }
    },
  
    computePreviewMessage: formData => 'Messages: ' + formData.message,
    computeMetadata: null
}