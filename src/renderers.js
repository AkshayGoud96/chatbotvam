module.exports = {
  message: data => {
    return { text: data.message, typing: !!data.typing }
  },

  'queries': data => ({
    text: data.query,
    quick_replies: data.choices.map(choice => `<${choice.payload}> ${choice.text}`),
    typing: data.typing || '2s'
  })
}
