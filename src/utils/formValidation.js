const formValidation = {
  validateForm(inputs, models) {
    let numErrors = 0;
    inputs.forEach((input, i) => {
      let validatorResponse = formValidation.validateInput(
        input.validator,
        input.label,
        models[input.model],
        input.required
      );

      inputs[i].error = validatorResponse.errorMessage; //will be "" on validated input

      if (!validatorResponse.validated) {
        numErrors = numErrors + 1;
      }
    });

    return { validated: numErrors === 0, inputs: inputs };
  },
  validateInput(validator, label, value, required) {
    let thisEmptyError =
      "Please enter " +
      (["a", "e", "i", "o", "u"].includes(label.charAt(0).toLowerCase())
        ? "an "
        : "a ") +
      label +
      ".";
    let thisInvalidError = "Please enter a valid " + label + ".";

    let response = {
      validated: false,
      errorMessage: thisEmptyError
    };

    let regexMappings = {
      /*String: RegExp(/^[A-Za-z ]+$/),*/
      Name: RegExp(/^[A-Za-z ]+$/),
      Number: RegExp(/^\d+$/),
      Email: RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/),
      Phone: RegExp(/^\d{10,11}$/),
      Website: RegExp(
        /^((https?|ftp|smtp):\/\/)?(www.)?[A-Za-z0-9]+(\.[A-Za-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/
      )
    };

    //check if empty required value
    if (required && !value) return response;

    //check value against the default invalid case
    if (typeof regexMappings[validator] !== "undefined") {
      response = formValidation.updateValidateInputResponse(
        regexMappings[validator].test(value),
        thisInvalidError
      );
    } else {
      response = formValidation.updateValidateInputResponse(true, "");
    }

    //check value against custom invalid cases
    if (validator === "Name") {
      response = formValidation.updateValidateInputResponse(
        value.length > 1,
        label + " must be at least 2 characters."
      );
    }
    if (validator === "Password") {
      response = formValidation.updateValidateInputResponse(
        value.length > 5,
        label + " must be at least 6 characters."
      );
    }

    return response;
  },
  updateValidateInputResponse(match, error) {
    return { validated: match, errorMessage: match ? "" : error };
  }
};

export default formValidation;
