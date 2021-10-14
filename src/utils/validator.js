export function validator(data, config) {
  const errors = {};

  function validate(validateMethod, data, config) {
    let statusValidate;
    switch (validateMethod) {
      case "isRequired":
        statusValidate = data.trim() === "";
        break;
      case "isCorrectYear": {
        const yearRegExp = /^\d+$/g;
        statusValidate = !(
          yearRegExp.test(data) &&
          data < config.dateNow &&
          data > 1900
        );
        break;
      }

      case "isUrl": {
        const urlRegExp =
          /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/g;
        statusValidate = !urlRegExp.test(data);
        break;
      }

      default:
        break;
    }

    return statusValidate && config.message;
  }

  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      );
      if (error && !errors[fieldName]) {
        errors[fieldName] = error;
      }
    }
  }

  return errors;
}
