export default function ContactForm () {
  return {
    fullname: '',
    email: '',
    messageSend: '',
    validation: {
      fullname: {
        rule: {
          required: function (field) {
            if (field) {
              return { error: false, message: ''}
            } else {
              return { error: true, message: 'This field is required.'}
            }
          },
          minLength: function (field, value = 2) {
            if (field && field.length >= value) {
              return { error: false, message: ''}
            } else {
              return { error: true, message: `This field must have minimum ${value} characters length.`}
            }
          }
        },
        error: true,
        message: ''
      },
      email: {
        rule: {
          required: function (field) {
            if (field) {
              return { error: false, message: ''}
            } else {
              return { error: true, message: 'Le champ est vide.'}
            }
          },
          email: function (field) {
            // merci internet pour le regex
            const rgx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            if (rgx.test(field)) {
              return { error: false, message: ''}
            } else {
              return { error: true, message: 'Ce champ doit être un email valide.'}
            }
          }
        },
        error: true,
        message: ''
      },
      messageSend: {
        rule: {
          required: function (field) {
            if (field) {
              return { error: false, message: ''}
            } else {
              return { error: true, message: 'Ce champ est requis'}
            }
          },
          minLength: function (field, value = 20) {
            if (field && field.length >= value) {
              return { error: false, message: ''}
            } else {
              return { error: true, message: `Ce champ doit avoir une longueur minimale de ${value} caractères.`}
            }
          }
        },
        error: true,
        message: ''
      }
    },
    validate (field) {
      for (const key in this.validation[field].rule) {
        const validationResult = this.validation[field].rule[key](this[field])
        if (validationResult.error) {
          this.validation[field].error = true
          this.validation[field].message = validationResult.message
          break
        }
        this.validation[field].error = false
        this.validation[field].message = ''
        continue
      }
    }
  }
}