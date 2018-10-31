const _ = require('lodash')

module.exports = {
  startGame: state => {
    return {
      ...state, // we clone the existing state
    }
  },

  render: async (state, event, args) => {
    if (!args.renderer) {
      throw new Error('Missing "renderer"')
    }

    await event.reply(args.renderer, args)
  },

  /**
   * @param {string} args.name - Name of the tag.
   * @param {string} args.value - Value of the tag.
   */
  setUserTag: async (state, event, { name, value }) => {
    await event.bp.users.tag(event.user.id, name, value)
    return { ...state }
  },

  validateQuery: (state, event) => {
    if (event.text === "Trainings") {
      const trainings = event.text === "Trainings"
      return { ...state, trainings }
    }
    else if (event.text === "Certifications") {
      const certifications = event.text === "Certifications"
      return { ...state, certifications }
    }
    else if(event.text === "Yes it did")
    {
      const querySolved = event.text === "Yes it did"
      return {...state,querySolved}
    }
    else if(event.text === "No i want some more information")
    {
     const queryNotSolved = event.text === "No i want some more information"
     return {...state,queryNotSolved}
    }
    else if (event.text === "yes")
    {
    const yes = event.text === "yes"
    return {...state,yes }
    }
    else if (event.text === "no")
    {
    const no = event.text === "no"
    return {...state, no }
    }
    else {
      return { ...state }
    }
  },


  getUserTag: async (state, event, { name, into }) => {
    const value = await event.bp.users.getTag(event.user.id, name)
    return { ...state, [into]: value }
  }
}
